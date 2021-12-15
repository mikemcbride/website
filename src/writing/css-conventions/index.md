---
layout: post
tags: post
title: CSS Conventions
date: 2015-09-12T12:00:00Z
published: true
excerpt: As I've worked on more web sites and applications, I've come across and developed a number of standards for writing and using cleaner, more useful CSS.
---

As I've worked on more web sites and applications, I've come across and developed a number of standards for writing and using cleaner, more useful CSS. Most of these revolve around how to name classes to make it easier to tell what's going on, but there will be a bit of code style conventions in here as well. Let's get started!

## Terms

If you're unfamiliar with the anatomy of CSS, I'll be using these terms:

- selector
- declaration
- declaration block
- property
- value
- class
- ID

Here they are in action:

```css
.class,
#id,
input {
  margin: 0 auto;
  font-size: 16px;
}
```

In the above block, `.class`, `#id`, and `input` are selectors. The content inside of the curly braces combines to make up the declaration block. `margin` and `font-size` are properties, and `0 auto` and `16px` are their respective values. Each `property: value` pair is called a declaration. Classes in CSS are denoted with a `.` before the name and IDs are denoted with a `#`. IDs should be unique - you should only ever have one instance of an ID in the DOM. Classes are reusable.

On to the fun stuff.

## Syntax

I'm pretty particular about the way my CSS looks to make it more readable as I'm working with it. For that reason, I try to stick to the following conventions as consistently as possible. Most of the conventions in this section are purely for making your CSS easier to read as you write it.

- Use soft tabs with 2 spaces. For one, 4 space tabs is way too big (my opinion), but it is also the only way to ensure your code renders the same in any environment
- One selector per line. If you have multiple selectors that share a declaration block, each selector gets its own line. The declaration block starts on the same line as the last selector
- Opening brace for a declaration block is on the same line as the last selector. Closing braces for a declaration block are on their own line
- One empty row between a declaration and the next selector
- One space after each `:` on a property
- If your block has one selector and one declaration, you can keep the whole thing on one line
- Comma-separated property values should include a space after each comma (e.g., `transition`)
- Use lowercase for all hex values (e.g., `#fff` over `#FFF`)
- Additionally, prefer shorthand hex values where applicable (`#fff` over `#ffffff`)

#### Examples

*Bad CSS*:

```css
.btn, .btn-dismiss
{
  background-color: #FFFFFF;
  transition: color 0.3s ease-in-out,background-color 0.3s ease-in-out;}
.btn-primary {
  background-color: blue;
}
```

*Good CSS*:

```css
.btn,
.btn-dismiss {
  background-color: #fff;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.btn-primary { background-color: blue; }
```

## Media Query Placement

Media queries should be as close as possible to the selectors that get modified within them. If possible, prefer to nest the media query inside of the declaration block (if you are using LESS/Sass).

#### Examples

*Plain CSS*

```css
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Courier Next", monospace;
}

@media screen and (min-width: 600px) {
  .container {
    width: 560px;
  }
}
```

*LESS or Sass with nesting*

```scss
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    width: 560px;
  }
}
```

## Nesting

If you are using LESS or Sass (or PostCSS with a nesting plugin), you should strive to limit nesting as much as possible. Just because you can doesn't mean you should. You can end up with some pretty nasty selectors if you aren't careful and it can be a huge pain. There are a handful of instances where I think it's okay (and almost encouraged) to nest:

- Pseudo-selectors are always safe to nest since they have to be attached to an element anyway (e.g., `:active`, `:hover`, `:first-child`, `:before`)
- Media queries, as seen above, are safe to nest inside the selector that they modify

#### Examples

*Not recommended*

```scss
.header {
  margin: 0 auto;

  .header-title {
    .header-title-image {
      margin: auto;
    }

    .header-title-brand {
      margin: auto;
    }

    .header-subtitle {
      margin: auto;
    }
  }
}
```

*Okay*

```scss
.brand-link {
  color: #d8d8d8;

  &:hover,
  &:active {
    color: #ccc;
  }
}

.icon {
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
}
```

## Naming Conventions

- IDs should only be used as handles for JS. Always prefer IDs over classes for targeting elements via JS
- If you need to use classes for JS, your classes should start with `.js-`. These classes should have no styles associated to them. This helps your HTML be more legible
- Similarly, if you are using automated testing frameworks (you should be) and have classes that are used for that, you should prefix them with `.qa-`. They should also have no styles associated to them
- Class names should be descriptive of what they do. A class of `button-success` is better than `button-green` in case your "success" color changes. However, something like `bg-green` is a good class name because it tells you what it does - make the background color green. Use good judgment.
- Classes that represent a state or modifier that an element can be in should use a verb. For example, let's say we have the following block of code for a tabbed navigation list:

```html
<ul class="tabs">
  <li class="tab">Tab title</li>
  <li class="tab">Tab title</li>
  <li class="tab">Tab title</li>
</ul>
```

In this example, we'd want to be able to differentiate the active or selected tab from the others. Most likely using JavaScript, we would apply a class to the proper `li`. Rather than calling the class `active` or `selected`, try to use `is-active` or `is-selected`. Think of your classes as descriptors for the element. `tab` is a great class because it tells you what the thing IS. `is-active` is better than `active`, because it is a temporary characteristic of the tab. Likewise, classes like `is-open` on a dropdown, `is-mobile-enabled`, and `has-children` are easier to understand when reading the HTML. They give you a better picture of what the class does and when it might do something.

## Liberal Use of Classes

The last thing I want to touch on is kind of controversial, but I don't think there's any reason it should be (and in fact the people who tend to be against it never have good reasons for being against it). The idea is called OOCSS - Object Oriented CSS, and the basic premise is that you should try and break your classes into as small of pieces as you can so they are more reusable. The end result is that your HTML elements tend to have a LOT of classes on them, but there is zero evidence that more classes on an element in HTML negatively impacts performance (which should be our number one concern anyway right?). The benefit is that you get vastly more reuse out of your CSS, and your CSS files tend to be significantly smaller in size. Rather than sit here and re-write something that's already been done, I would highly recommend reading [this fantastic article](http://mrmrs.io/writing/2016/03/24/scalable-css/) by [Adam Morse](http://mrmrs.cc/). He is a very talented designer and developer, and is much more knowledgeable and articulate than I am.


Obviously these are preferences, but I've found that following these conventions can greatly aid your ability to troubleshoot CSS issues and keep your code more organized and readable. I took plenty of cues from [Mark Otto's Code Guide](http://codeguide.co/), so be sure to check out that resource as well.

Cheers!
