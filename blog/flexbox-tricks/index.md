---
layout: post
title: "Useful Flexbox Tricks and Tips"
date: 2018-05-25
status: publish
type: post
published: true
excerpt: Flexbox is a CSS spec that has been around for a few years now, but it continues to be one that people seem to struggle with. There are a few things that I think trip people up, and hopefully I can provide some resources and examples that will make it easier to understand.
---

Flexbox is a CSS spec that has been around for a few years now, but it continues to be one that people seem to struggle with. There are a few things that I think trip people up, and hopefully I can provide some resources and examples that will make it easier to understand. Let's dive in!

## Resources

First things first, there are a couple of resources that are worth their weight in gold for learning flexbox. The first is [CSS Tricks' Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). I can't tell you how many times I have gone back to this post. It does an excellent job visualizing the way the different flex properties affect the layout. I honestly think that I understand flexbox so well because I basically memorized this article due to the sheer number of times I visited it.

The second resource is an interactive game called [Flexbox Froggy](https://flexboxfroggy.com/). It's a fun way to solve increasingly more challenging puzzles using flexbox to place frogs onto their lily pads.

Lastly, if you don't mind a shameless plug, I wrote a little web app that allows you to play around with flexbox layouts. You can also view the HTML and CSS required to generate the layout you build, so it can be pretty handy if you need to troubleshoot a flex layout issue. [Check it out here](https://flexbox.mcbride.tech/). *Note:* the app is not mobile-friendly. PR's welcome!

## Use Cases

Another thing that seems to be a stumbling block is when to actually use flex for layouts. Especially now that the browser support for CSS Grid is pretty solid, many use cases for flex are much better suited for using Grid. The rest of this post will cover some use cases for flex.

### Inline Forms and Input Addons

The first handy use case for flex is inline forms and input addons. For inline forms, you can use flexbox with the `align-items: stretch` property and all items in the row will be the same height. This means you can set the height on the container and not worry about setting the height on any of the items. This can be very helpful to prevent having to deal with making sure `line-height`, `padding`, `font-size`, `margin`, explicit `heights`, etc. all play nicely to ensure all items in your inline forms are the same height. Here's an example:

```html
<div class="inline-form">
  <input type="text" class="inline-form--input" />
  <button class="inline-form--button">Cancel</button>
  <button class="inline-form--button">Submit</button>
</div>
```

```css
.inline-form {
  display: flex;
  align-items: stretch;
  height: 2rem;
}
```

Everything in that `.inline-form` container will be `2rem` tall, no matter what. Pretty handy!

The second use case here is for input addon items. Consider an input field for currency, where you want the currency prepended to the input field. It's also typical to use a `span` with a search icon appended to an input that searches the site. You want the addon to occupy as much space as it needs, and have the input fill the remaining space fluidly. That's possible with a hack using `display: table-cell` and a `width` property on the input, but that also has limitations. Because you might not know the exact width of what will be in your input addon, you don't want to set a fixed width (imagine some dynamic text being put in there, like someone's first name, or a month of the year). Flexbox makes this trivial. We also get the same benefit from the inline-form where the input field and the addon item will automagically be the same height.

```html
<div class="input-addon">
  <span class="input-addon--item">$</span>
  <input type="text" class="input-addon--input" />
</div>
```

```css
.input-addon {
  display: flex;
}

.input-addon--input {
  flex: 1;
}
```

Now, no matter what content is in our addon item, the input will fill the remaining space in the container! Super helpful.

Check out [this Codepen example](https://codepen.io/mmcbride1007/pen/zjVqjN) of these solutions.

---

### Sticky Footer

Did you ever try to build a sticky footer before flexbox? My goodness, what a nightmare. If you didn't know the exact height of the footer it was nearly impossible to do, and even if you did it was hard to pull off and you had to do some ugly hacks. You could use JavaScript if you needed to, but that also feels dirty for this use case. Thankfully, flexbox makes this super easy. I will say as a caveat that now that CSS Grid is available in all the modern browsers, that's a better solution for this problem. If you're supporting IE 10 or 11, though, you can't use Grid, but this will work for you. Check it out:

```html
<body>
  <header></header>
  <main>
    <!-- this content is what should fill all available space -->
  </main>
  <footer></footer>
</body>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
```

In this situation, we use a `vh` unit to make the body fill at *minimum* 100% of the height of the viewport. This way if the content doesn't cause the footer to be at the bottom, the `flex: 1` on the `main` tag will force it to grow until the body fills 100%. Again, if you can use CSS Grid, that's probably a better solution, but this works really well too.

[Example on Codepen](https://codepen.io/mmcbride1007/pen/bMPjje)

---

### Vertically Centering Items

This one is probably the best use for flexbox. Previously, centering something vertically within its container was impossible unless you knew the height of the container and the element. Flexbox makes it dead simple. It also makes it easy to center vertically AND horizontally, if you need that too.

```css
.container {
  display: flex;
  align-items: center; /* vertically centers item */
  justify-content: center; /* horizontally centers item */
}
```

That's it! No matter what you put in the `container`, it will be vertically and horizontally centered. How easy!

[Example on Codepen](https://codepen.io/mmcbride1007/pen/OZewrM)

---

### Independent justify-content behavior

Imagine this scenario: you have a line item where you want everything to be flexed with `justify-content: flex-start` so it aligns at the beginning of the container (left side). But you just have one item (the last one) that you want pushed all the way to the right. You could create an extra layer of `div`s and use `justify-content: space-between`, but that's not ideal. There is a much better way: `margin: auto`. It's a lesser known feature of the spec, but [it is definitely intentional](https://www.w3.org/TR/css-flexbox-1/#auto-margins). What happens is that flex allocates any positive free space to the auto margins, and so if you wanted to push the last item all the way to the right, you would add `margin-left: auto` to it.

  ```css
  .container {
    display: flex;
  }
  
  .right {
    margin-left: auto;
  }
  ```
  
  ```html
  <div class="container">
    <h2>Title</h2>
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
    <a class="right">Log Out</a>
  </div>
  ```

This can be handy for things like a logout link in a nav menu, a close icon on a card header, etc. - I keep finding excellent use cases for this trick when I build apps!

[Example on Codepen](https://codepen.io/mmcbride1007/pen/VxJBqJ)

---

### Full-width tabs

Flexbox makes it pretty simple to space any number of items equally across an axis. If you have a list of tabs for navigation, and you want to implement this pattern, flexbox is a great solution. Here's the code:

```css
.tabs {
  display: flex;
}

.tab {
  flex: 1 1 0px;
}
```

The difference here between what we have been doing in other examples is that instead of using the shorthand for `flex: 1`, we are explicitly defining the `flex-grow`, `flex-shrink`, and `flex-basis` properties. The important ones here are `flex-grow` and `flex-basis`. In the shorthand `flex: 1`, the `flex-basis` is set to `auto`, which makes the item have an initial width of whatever the size of the content within it is. More than likely, your tab titles will not all be the same length, so you'd end up with unequal tab widths. By setting the initial width (`flex-basis`) to `0px`, and telling them all to grow equally, we ensure that each tab ends up taking up the same amount of space across the tabs container. Easy peasy!

[Example on Codepen](https://codepen.io/mmcbride1007/pen/QrXVvQ)
