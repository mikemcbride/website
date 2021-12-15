---
layout: post
tags: post
title: Pagination in Fauna
date: 2020-12-20T12:00:00Z
published: false
excerpt: I recently refactored some data for an API that uses Fauna as the database and needed to add pagination to a query. Here are some things I learned that weren't immediately obvious or well-documented.
---

## What is FaunaDB?

Fauna is a NoSQL database, like MongoDB or Firebase. It excels at a few things, but I think probably the most appealing feature to developers today is that is has extremely good GraphQL support and integration. You can learn more at [https://fauna.com](https://fauna.com).

## The problem

I have a database in Fauna for analytics for my websites. I am generally not a fan of analytics and all the solutions out there were a bit too much for my use case. I really only care about the number of pageviews and some basic device information - which browser and OS they're using, if it's desktop or mobile, and their timezone and locale. I'm not interested in tracking any user information to determine repeat visitors, IP addresses, geolocation, etc. My goal is to use this data to give me better information about how people are viewing my sites so I can make sure they work well on the devices being used.

So I have this database with a bunch of analytics data. I had a collection (think tables in SQL land) for pageviews and then I had a couple of indexes set up against that pageview data to give me an aggregation of other information that I used on the dashboard UI that I built. At first it was working great, the UI worked well and the API was super snappy. But one of my sites, [flexbox.tech](https://flexbox.tech) started getting a lot of pageviews. Nothing crazy, but on average 10-15 hits per day. As the pageview count grew across all my sites, with that one in particular growing more rapidly, the calls got slower and slower and eventually my call to load the dashboard UI timed out (I'm using a serverless function which has a 10 second timeout). I realized there were a few inefficiencies and so I set out to fix them:

- The list of sites used to render the navigation was using an index for `all_sites`. That index simply did an index of the `pageviews` collection and only returned the site name. The API would fetch the data from the index and do a `distinct` on it to remove duplicates. As you can imagine, that got inefficient pretty quickly when I have over 6000 pageview records but only need to list out 7 sites.
- The dashboard call was iterating through every pageview and doing some rollup calculations on counts for breakdowns of stuff by site, browser, locale, timezone, device type, etc. Once again, the inefficiencies there are pretty obvious - as the collection grew in size, that call took increasingly longer to complete.
- Likewise, going to a page for an individual site was also becoming slow. Most sites still finished loading because they don't have a ton of pageviews, but the flexbox site would routinely time out.

## Fixing the slow calls

The first step was to refactor the database structure. I still needed to keep the `pageviews` collection, but I realized that to make the dashboard snappy I needed to make a new collection that aggregated the pageview data and stored it in a structure that better supported the way the dashboard was using the data. I set up a new collection for `site_pageviews` which had one record per site, with an aggregation of all the information with counts and I update that record when a new pageview is added for a site. This way I can fetch a collection that has 7 records in it instead of iterating through all 6000+ records and grouping it every time, where each record looked something like this:

```json
{
    "site": "flexbox.tech",
    "browsers": {
        "Chrome": 3924,
        "Firefox": 385,
        "Safari": 299,
        ...
    },
    "os": {
        "Windows": 2902,
        "macOS": 917,
        "iOS": 451,
        "Linux": 322,
        ...
    },
    "platform": {
        "desktop": 4072,
        "mobile": 568
    },
    ...
}
```

That allowed me to immediately use the results from the database without doing extra aggregation in the API or manipulation on the UI - I just iterate over the properties and display the values. And the API always stays super fast.

Then I did the same thing for the site navigation - I created a collection for `sites` that only includes the site name. When a pageview is added in the API, if the site doesn't exist in that collection then I add it. Then when I render the dashboard navigation, I just fetch the collection of sites - which right now is also only 7 records that look like this:

```json
[
    { "name": "flexbox.tech" },
    { "name": "box-shadow.dev" },
    { "name": "mikemcbride.dev" },
    ...
]
```

So now the dashboard data and site navigation is loading pretty quick, but I still had the problem of loading every record into the page when I would navigate to a specific site. Some sites with fewer pageviews would load fine, but the sites with more pageviews took longer and sometimes would time out. Turns out fetching 6000 records from the database all at once isn't ideal. Time for some pagination!

## Pagination to the rescue!

...well, sorta. I knew I needed to add pagination to the calls to Fauna. I'm using their official JS client in my API.

Mistakes I made:

- the JS client `client.paginate` helper is not your friend if you actually want to paginate - it's really an "aggregate" - it pages through everything and you use `.each` to get all the results from a query. You can't actually get individual pages - you have to use `client.query` for that and pass a pagination query.
- when querying an index, the cursors for next/previous page aren't always single values. it depends on what values you expose in your index
- look at the code in my API for other things that took me a long time to figure out
