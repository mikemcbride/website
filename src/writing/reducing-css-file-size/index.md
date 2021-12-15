---
layout: post
tags: post
title: "Reducing CSS File Size"
date: 2017-02-12T12:00:00Z
published: true
excerpt: Here are some tips on reducing your CSS file size.
---

> 2020 update: I would recommend checking out PurgeCSS. Purify is still around as far as I know, but Purge is quite popular and very excellent. It's easily integrated into a PostCSS workflow as well.

I've been working on a few static websites over the past year and have gotten my build process to a fairly decent place. One of the biggest problems I was running into, and I'm sure you've run into it as well if you've ever used a CSS framework, is that there's probably a lot of stuff the framework offers that you aren't using. No big deal, except that you are also probably shipping the whole thing to your production site. Not so cool. Take Bootstrap for example. The *minified* CSS file for the latest stable version at the time of writing this post is 121KB, and more than likely you've got custom CSS on top of it so your site doesn't look like a vanilla Bootstrap website. So if you're only using 25% of Bootstrap, wouldn't it be way better to ship 30KB instead of 120?

This was bugging me. Tachyons is great, and they publish each part of the framework as modules so you could pick and choose which ones you bring in if you want, but I found that harder to manage. So in my build process, I'm using Gulp to generate my `assets` folder before Jekyll builds the site (if you're unfamiliar with Jekyll, it will automatically compile your assets folder into your `_site` when it builds). Using Gulp to pre-build my assets folder allows me to run my own pre-processing including using PostCSS instead of Sass (which Jekyll supports out of the box), image minification, etc. I also get the ability to use BrowserSync when developing locally so I don't have to manually reload (first world problem).

So I figured there had to be something I could do to make my CSS file smaller, more than just minifying and stripping out comments. Sure enough, there was. [PurifyCSS](https://github.com/purifycss/purifycss) is a great little Node module that takes a list of HTML and JS files (can take globbing patterns) as well as a list of CSS files you want it to run against and removes any CSS that isn't used. I haven't tested this against apps using something like Angular, where you could encounter something like `ng-class="{ $scope.someDynamicValue: $scope.useDynamicClassValue }"`, where the `$scope.someDynamicValue` could be passed in via an API or another config in your app. I'm assuming it wouldn't work super well in those situations, but for a static site it's great! Especially since if you add a new page and end up using a class you haven't used before, the next time you compile your site it will recompile the CSS and say "oh, you're using this class now, leave it in".

I tried using the Gulp plugin for Purify CSS and had a TON of issues, so I just ended up using the plain Node module and running it inside a Gulp task by itself (would have been super nice to be able to just `pipe` through it all in one `styles` task but oh well). It's been working really well so far. Here's the setup:

_**NOTE:** For a Jekyll site, you will have to run the PurifyCSS task after the site has been compiled so that all of the HTML is generated._

```js
// remove unused CSS
gulp.task('purify-css', () => {
  const content = ['_site/assets/**/*.js', '_site/**/*.html']
  const css = ['_site/assets/styles/main.min.css']
  const opts = {
    output: '_site/assets/styles/main.min.css',
    minify: true
  }

  purify(content, css, opts)
})
```

I use a Gulp plugin called `run-sequence` to force certain Gulp tasks to finish before running another one, so I just ensure that my `styles` task finishes before I build my Jekyll site, then the Jekyll build has to finish before I run `purify-css`. It was a bit finicky to get working perfectly, but now that it works consistently it's great. On the site you're reading right now I decreased the minified CSS file size from 365KB to 57KB, which is pretty substantial (85% reduction), especially if you're trying to download assets on a poor connection.

If you're interested in seeing the guts of the static site setup, I've got [a repo](https://github.com/mikemcbride/new-jekyll-site) you can check out that I use as a template to start all of my static websites. There's plenty of info in the README and you can check out [the Gulpfile](https://github.com/mikemcbride/new-jekyll-site/blob/master/gulpfile.js) to see how it all gets built. Compiling a Jekyll site inside a Gulp task took quite a while to get right, but it works for me every time now.
