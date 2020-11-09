---
title: Method Overloading
date: 2020-09-17T12:00:00Z
published: true
excerpt: Method overloading is a concept used in many programming languages, but it doesn't really exist in JavaScript. Let's explore what it is, why we might use it, and what it looks like in JavaScript.
---

Method overloading is a concept used in many programming languages, but it doesn't really exist in JavaScript. Let's explore what it is, why we might use it, and what it looks like in JavaScript.

## What is method overloading?

Let's start at the beginning. Method overloading is when you declare multiple methods (or functions) with the same name but give them different method signatures. Based on which parameters the method is called with, the different methods are invoked despite having the same name. There are a number of reasons why this feature exists in other languages. Especially with strongly typed languages, the type of arguments in the method signature matter a lot. Method overloading is useful for a situation like this:

```java
add(int, float)
add(float, int)
add(int, int)
add(float, float)
```

If you want to add two numbers together and you don't care whether the numbers are integers or floats, you might implement four different methods to be able to handle the situation above.

## Why would I use this?

There are plenty of reasons you might want to use method overloading, but the two most common ones I've come across are when you're adding some functionality to existing code and you don't want to break the old stuff (but also don't want to change it) and when you want to handle two different situations that share most of the same logic.

Honestly, the second use case is pretty thin. Unless you have a pretty good reason not to, I would normally refactor the methods to break the shared logic into its own method and call it from each individual use case. But there are situations where this is probably not possible, so it's valid.

The first use case has been the most common for me personally. If I'm working in a large codebase and a database model gets a new feature or new field, and we need to start handling that in some existing places. We want the current instances where this method is being called to keep functioning as-is, but maybe we need to do some extra logic if the new field has a value. Let's take a look at how this might work.

## What does it look like in JavaScript?

JavaScript doesn't *technically* have method overloading, because it will just use whichever function is declared last. The way you'd implement this is by adding extra parameters to a function's method signature. Continuing from our example above, let's say our method had 2 parameters and we need to handle a new use case:

```js
function isUserAllowed(user, roles) {
    // if the user.roles array has any values that match in roles, they have permission
    return user.roles.some(role => roles.includes(role))
}
```

Let's say we now have a concept where a trusted account can call this method and it will allow it to pass:

```js
function isUserAllowed(user, roles, isAdmin) {
    if (isAdmin === true) {
        return true
    } else {
        return user.roles.some(role => roles.includes(role))
    }
}
```

We just overloaded our `isUserAllowed` method. Previous instances that pass in only two parameters will always fail the first check (`isAdmin === true`), so they won't notice any change in the behavior of calling this method, but we now have a mechanism to handle the new and old cases.

Another tactic we might employ here is default values for parameters. In the situation above it wouldn't really matter either way, but it could be helpful. We'll explicitly set `isAdmin` to `false` if a third parameter is not passed.

```js
function isUserAllowed(user, roles, isAdmin = false) {
    if (isAdmin === true) {
        return true
    } else {
        return user.roles.some(role => roles.includes(role))
    }
}
```

## Conclusion

That's pretty much all there is to it! Method overloading is one of those things that sounds more intimidating than it really is if you aren't familiar with the concept. Hope you found this helpful!
