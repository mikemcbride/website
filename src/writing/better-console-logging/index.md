---
layout: post
tags: post
title: "Better Console Logs"
date: 2016-11-23T12:00:00Z
published: true
excerpt: This is just a quick tip to improve your experience with console logging with some alternative methods.
---

This is just a quick tip to improve your experience with console logging. I frequently find myself going through a function, especially during debugging, and logging out a ton of stuff to see the attributes on an object at certain points in time, or even to check if it exists at all. So you've probably done something like this:

```javascript
function doSomething (x, y) {
  console.log(x) // { name: "Mike", age: 28 }
  console.log(y) // { name: "Joe", age: 30 }
}
```

How unsatisfying is it when you see this in the console:

```
Object { name: "Mike", age: 28 }
Object { name: "Joe", age: 30 }
```

With objects that small it's not a big deal, but when you start logging out huge objects or looping through arrays of objects, you don't have any context to what you're looking at. So you might have done something like this:

```javascript
console.log('x', x)
console.log('y', y)
```

Which results in:

```
x Object { name: "Mike", age: 28 }
y Object { name: "Joe", age: 30 }
```

A little better. At least we know what we're looking at here. But there's a better way still:

```javascript
console.log({x, y})
```

Using ES6 Object literal shorthand, that will log an object with named properties and the value will be the value of your variable. So you get something like this:

```
Object { x: Object, y: Object }
```

Then you can expand that and pick each property that you want to expand to see the values, and the names of the properties correspond to your variables. Pretty nifty!
