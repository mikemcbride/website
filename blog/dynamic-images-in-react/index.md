---
layout: post
title: "Dynamic Images in React Components"
date: 2017-03-11
status: publish
type: post
published: true
---

I've (finally) been using React for a lot of side projects lately. We use Angular at work and although it's a fine framework, I'm glad to be able to see first-hand what the hype about React is all about. I've also been using [create-react-app](http://github.com/facebookincubator/create-react-app) which makes it super simple to get up and running for basic projects like the ones I've built.

In my most recent project, I was working on a component for profile cards that have a user photo and wanted that to be dynamic. My typical approach for this is to set a `background-image` in CSS on a span instead of using an `img` tag, if possible. Everything was working fine until I pulled the site up on my phone and noticed none of the images were loading.

I couldn't think of what would be causing an image to load on a laptop but not on a phone, so I searched all kinds of things related to images not loading in React on mobile devices. The first thing that kept coming up was how you referenced the image. Create React App gives you suggestions for pulling in images to a component. A logo, for instance, might look like this:

```js
import Logo from './logo.png'
...
<img src={Logo} alt="logo" />
```

Considering these profile cards need a dynamic image, I couldn't think of a good way to dynamically require the correct file at first, so I resorted to shoving all the user pics in the `/public` folder and hard-coding the URL based on the `image` property that came back from the profile object. Rudimentary, but it worked, but still not on mobile. So I switched my component to `require` the image instead of using the `import`. Now my markup looked like this:

```js
const bgImage = require(`../img/${user.image}`)
const bgImageStyle = { backgroundImage: `url(${bgImage}` }
...
<span className="w-100 h-100 br-100 dib cover bg-center" style={bgImageStyle}></span>
```

That gave me the benefits of non-cached images when re-deploying since the image was now processed by Webpack during the build phase. Sweet. But it still didn't work on mobile.

As I kept searching, there were no consistent questions or conclusive answers, despite a few hours of tinkering. Ultimately I plugged my phone into my laptop and used the Safari debug tool (which I should have done first, probably) and found that the `style` tag I was putting on the `span` was straight up not being displayed on mobile. Super weird.

So I switched it all over to be an `img` tag and tweaked some of the classes so that it accounted for the photo being an image and not a background image, and lo and behold, it started working on mobile. Here's the final markup:

```js
const bgImage = require(`../img/${user.image}`)
...
<img className="w-100 h-100 dib br-100 object-cover" src={bgImage} alt={user.name} />
```

I'm still not sure why the CSS approach using inline styles wasn't working. My guess is that if I were to use something like the [styled-jsx](https://github.com/zeit/styled-jsx) package it might work a little better, but who knows.

Hopefully this was helpful if you stumbled upon this post by searching for a similar issue. If you haven't run into this before, I hope you at least found it a little enlightening.

Cheers!
