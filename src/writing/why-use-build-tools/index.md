---
layout: post
tags: post
title: "Why Use Build Tools?"
date: 2017-10-02T12:00:00Z
published: true
excerpt: One question I get a lot from people who are just starting out with web development is along the lines of "why is there all this extra overhead for a build process?", and I remember when I was starting out and wondered the exact same thing.
---

One question I get a lot from people who are just starting out with web development is along the lines of "why is there all this extra overhead for a build process?", and I remember when I was starting out and wondered the exact same thing. My first website loaded Bootstrap's CSS and JS onto every page, and had page-specific styles in a `style` tag at the top. Any scripts I had were inside a `script` tag at the bottom of the page. I looked at things like Grunt, Bower, and npm and wondered why people were making it so darn complicated. After all, why is it so difficult to load a CSS file and a maybe a couple scripts into a page?

If this resonates with you right now, then hopefully this post will shed some light on why we use build tools and the benefits they can provide.

## The Problem

When learning web development - especially in a school environment, I've found - the setup of your web pages is generally quite simple. You probably have an `index.html` in the root of your project. You might even have multiple pages that you can link to. You've likely got a `css` or `styles` directory, and a `js` or `scripts` directory where you put your CSS and JS files, accordingly. So maybe you've got something that looks like this, for a basic site:

```
.
├── about.html
├── contact.html
├── index.html
├── scripts
│   └── index.js
└── styles
     └── main.css
```

Then, in your HTML files, you might have something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Awesome Web Page</title>
    <link rel="stylesheet" href="/styles/main.css">
  </head>

  <body>
    <aside>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </aside>

    <main>
      <h1>Hello World!</h1>
    </main>


    <script src="/scripts/index.js"></script>
  </body>
</html>
```

No big deal. This is pretty easy to manage manually, so if this is as big as your site ever gets, congrats! You honestly probably don't need a build process.

However, anyone who has done this for long enough can tell you that very rarely, in an active project, are you ever "done". There are always more features, more requests, more content (and that's not always a bad thing).

So, say you add in some more content. You get a few more HTML pages, and decide you need a CSS framework to help manage consistency throughout your site. Your main CSS file is getting a bit large, so you also split up some of the content into separate files based on their function. Maybe you bring in some JavaScript libraries to add some sweet interactivity to your page, or performance boosting features like image lazy loading. Now, your site might look something like this:

```
.
├── index.html
├── pages
│   ├── about.html
│   ├── contact.html
│   ├── docs.html
│   └── faq.html
├── scripts
│   ├── analytics.js
│   ├── carousel.js
│   ├── dropdown-menu.js
│   ├── index.js
│   └── lazy-load.js
├── styles
│   ├── footer.css
│   ├── bootstrap.css
│   ├── landing.css
│   ├── main.css
│   └── normalize.css
└── images
    ├── kitten1.jpg
    ├── kitten2.jpg
    ├── kitten3.jpg
    ├── kitten4.jpg
    └── kitten5.jpg
```

And your `index.html` might look like this now:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Awesome Web Page</title>
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/bootstrap.css">
    <link rel="stylesheet" href="/styles/landing.css">
    <link rel="stylesheet" href="/styles/footer.css">
    <link rel="stylesheet" href="/styles/main.css">
  </head>

  <body>
    <aside>
      <nav>
        <ul id="dropdown-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
          <li><a href="/pages/docs.html">Docs</a></li>
          <li><a href="/pages/faq.html">FAQ</a></li>
        </ul>
      </nav>
    </aside>

    <main>
      <h1>Hello World!</h1>

      <section class="image-carousel">
        <img src="/images/kitten1.jpg">
        <img src="/images/kitten2.jpg">
        <img src="/images/kitten3.jpg">
        <img src="/images/kitten4.jpg">
        <img src="/images/kitten5.jpg">
      </section>
    </main>

    <script src="/scripts/index.js"></script>
    <script src="/scripts/analytics.js"></script>
    <script src="/scripts/carousel.js"></script>
    <script src="/scripts/dropdown-menu.js"></script>
    <script src="/scripts/lazy-load.js"></script>
  </body>
</html>
```

Okay, that's starting to get to be quite a few files to manage. It's still nothing crazy, but you are going to have to keep these in sync across every page in your site.

In addition to the overhead involved there, each separate file requested (CSS, JS, image) is one network call to get the data, and that slows down your page load. On a poor connection, each extra HTTP call is going to cost even more in terms of performance and load times.

When you start getting into building web applications, you're going to be looking at dozens to hundreds of JavaScript libraries that your app depends upon, and putting all of those in your HTML is unrealistic. This is where build tools come into the picture.

## The Solution

Build tools - things like Grunt, Gulp, and Webpack - can automate a lot of processes that make your site better and are super repetitive. Let's take a look at a few of the things you can accomplish, and hopefully you'll start to understand why we use these tools so frequently.

### Concatenate Files

One of the quickest wins you can get from build tooling is that you can compile all of your scripts and styles into one file, so you only have to have a single `script` and `link` tag. The file size will be larger, but typically the extra size is well worth making only one or two HTTP calls.

### Minification

In addition to concatenating all your files, there are tools that will run them through a minification process to remove all extra white space, and in the case of JavaScript files, can shorten variable names and function calls to save space. In many cases, minification can save well over 50% of the file size.

### Image Optimization

Images are almost always the largest files on your site, so any way you can optimize them to reduce the size without sacrificing too much of the quality is a big win. There are plenty of tools out there to do this. If you know the max-width of the element the image will be in, you can also have the images be resized. For instance, if you have a high res image that's 6000x6000 pixels, but your content is inside a container that has a max-width of 1000px, the browser is still downloading a 6000px wide image (massive file size) and shrinking it down to fit inside of 1000px. Instead, consider resizing it to 1000px and dropping the quality down from 100% to something in the 70-80% range, and you'll notice a HUGE reduction in file size, making the images load significantly faster.

### Compile Code

These days, there are so many tools out there for abstracting our adding features to our languages that then compile down to the language which can run in browsers. JavaScript tools like Babel will allow you to write next-generation standards of JS that compiles down to a file that the browser will be able to run. Similarly, Sass, LESS, and PostCSS give you a multitude of features that are not available to you in the CSS language itself, but compile down to CSS. Your build tool does this for you.

### Run Tests

Automated tests can save you hours of hassle trying to troubleshoot a production issue. Having a good suite of automated tests is important, so you should run them. Build tools can ensure that your tests get run before your code gets too far down the line with bugs in it.

### Linting

Similarly to tests, linters like ESLint and JSHint can find issues in your code and alert you that something isn't right before you ship it. Running your code through a linter is a common task that build tools can do.

### Live Reloading

It's a first-world problem for sure, but it's frustrating to save your code, wait for it to compile, and then switch over to the browser and reload it. Wouldn't it be nice if there was a way something could watch your filesystem for changes, recompile your code when there is, and then refresh your browser window when it's ready, so you don't have to sit there mashing `cmd-R`? Yeah... build tools can do that for you.

## Wrap Up

While this isn't an extensive dive into how to set up your build process, I hope you gained a bit of an understanding on why everyone actually uses these tools. At first, it can seem like it adds a lot of complexity to a project, but when you realize all of the things that it does for you, the time it saves you is exponential. Can you imagine having to do all of those tasks manually, many times per day? As the complexity of our sites and applications grows, we rely on build tools to help us maintain a consistent pipeline for getting our code out to the world so people can use it.
