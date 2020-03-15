---
layout: post
title: Modern Javascript
date: 2020-02-14
status: publish
type: post
published: false
excerpt: In this post I'll cover some of the features of modern Javascript that I didn't really understand at first but now that I do, I find them super useful. Hopefully you'll take something away from this as well.
---

In 2015, the [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) version 6 standard was released and for the first time in years the language got a boat load of new features. They have been much better about releasing new features on a yearly basis since then, but the 2015 version brought on a massive amount of stuff to learn. I'm going to cover some of the features that have been released since 2015 that I find to be the most useful and specifically highlight things that I either didn't fully understand at first or didn't realize why they were so useful until later.

### Table of Contents

1. [Destructuring Assignment](#destructuring-assignment)
1. [Spread Syntax](#spread-syntax)
1. [Arrow Functions](#arrow-functions)
1. [Default Parameters](#default-parameters)
1. [`for...of` loops](#forof-loops)
1. [Optional Chaining](#optional-chaining)
1. [Bonus Methods](#bonus-methods)

I'll include a link to the MDN entry for each of these topics if you'd like to do some additional reading.

---

## Destructuring Assignment

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

I'm starting out with this one because it's the one I understood least when it first came out, yet the one I now use probably more frequently than anything else on this list. The basic idea behind this is that you are extracting the values out of something on the right hand side of the operation and immediately setting them to variables on the left hand side. This only works when the right hand side of the operation is an Array or Object.

#### Example scenario #1:

You are building an online store and when your page loads, you need to fetch data from multiple API calls. You don't want those calls to run in series because they'll take longer, so you do something like this to fetch the items for the page as well as the user's cart:

```js
const arrayOfPromises = [
	http.get('/api/items'),
	http.get('/api/cart')
]

const result = await Promise.all(arrayOfPromises)
const items = result[0]
const cart = result[1]
```

In this case, the `result` will be an array of resolved Promises, so then we assign `items` and `cart` variables to the first and second items in the result, respectively. However, because we already know the result will be an array with 2 items, we can do this instead:

```js
const arrayOfPromises = [
	http.get('/api/items'),
	http.get('/api/cart')
]

const [items, cart] = await Promise.all(arrayOfPromises)
```

We were able to cut out the intermediate variable and directly grab the two items off our array and assign them to two variables.

But what if our array has, say, 5 values in it, and we only care about the first two, but we want to keep the rest of them together in an array without the first two items? We can do this:

```js
const animals = ['bear', 'fox', 'owl', 'rabbit', 'deer']
const [bear, fox, ...others] = animals

console.log(bear) // 'bear'
console.log(fox) // 'fox'
console.log(others) // ['owl', 'rabbit', 'deer']
```

#### Example scenario #2:

We get some JSON back from an API representing a user and we want to grab a few properties off of that object:

```js
const user = await http.get('/api/user/123')
const firstName = user.firstName
const lastName = user.lastName
```

Once again, we can use destructuring to simplify this. With Objects, however, we have to use the property name as our variable:

```js
const { firstName, lastName } = await http.get('/api/user/123')
```

We know that the `await http.get()` call returns a user object with a `firstName` and a `lastName` property, so we grab those values and set them to variables called `firstName` and `lastName`. Super handy.

Now, I know I just said we have to use the property name as our variable, but that's not entirely true. With arrays, the destructuring starts at index 0 and moves through the array, so if we just want the first two items in the array, we put two variable names in our brackets and the first two items are assigned to those. With objects, we have to use the property name so that it knows which property to grab. However, there's a way to tell it that you want to grab the value at a property but assign it to a variable with another name:

```js
const { firstName: name } = await http.get('/api/user/123')
```

This says "give me the value of the object at property `firstName` and assign that value to a variable called `name`". I find this especially useful when making HTTP calls using a popular library called [axios](https://npmjs.com/package/axios). The response from an axios HTTP request is an object containing multiple properties about the request. The vast majority of the time I only want the `data` property, not the properties containing request information. I will commonly destructure those calls like so:

```js
const { data } = await axios.get('/api/some-endpoint')
```

However, that can get confusing because `data` is not a great name for a variable (it's so non-descript... isn't everything technically data?), and then I also would be unable to reuse that for subsequent axios calls in the same scope. What I find myself doing is this:

```js
const { data: users } = await axios.get('/api/users')
const { data: items } = await axios.get('/api/items')
```

Now, do you see where this is headed? We can combine these two destructuring practices if we wanted:

```js
const promises = [
	axios.get('/api/users'),
	axios.get('/api/items')
]

const [{ data: users }, { data: items }] = await Promise.all(promises)
```

We use both array and object destructuring assignment to make our code far more concise. As I said above, this is easily the feature I use most out of all the ones in this post. I find it so incredibly useful.


## Spread Syntax

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

The spread syntax allows iterables (such as Arrays or Objects) to be expanded in place. From a practical standpoint, this gives us an easy way to copy, combine, or update arrays and objects in a non-destructive manner.

#### Simpler Array Operations

We can easily copy an array and not keep references to the old array:

```js
const arrayCopy = [...otherArray]
```

This also makes it trivial to combine two arrays:

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]
```

Or add items to an array without modifying the existing array. `Array.push` modifies the existing array, but this approach gives us a new array with the new item on it and doesn't modify the original array:

```js
const updated = [...oldArray, newItem]
```

#### Object Operations

We can do some similar things using the spread syntax with Objects. First let's take a look at combining two Objects. In the past you may have used `Object.assign`:

```js
const defaultItem = { name: 'New Item', price: 5, currency: 'USD' }
const myItem = { name: 'Sweatshirt', price: 20 }
const objectWithDefaults = Object.assign({}, defaultItem, myItem)
```

This operation says take an empty object, then assign all the enumerable properties of `defaultItem` onto it, and then take that result and assign all enumerable properties of `myItem` onto that, and give me the final result. This can be especially useful in Classes where you want to set some default values but if an object is passed into the constructor, you prefer those values over the default ones. However, the spread syntax gives us an easier way of doing this:

```js
const defaultItem = { name: 'New Item', price: 5, currency: 'USD' }
const myItem = { name: 'Sweatshirt', price: 20 }
const objectWithDefaults = { ...defaultItem, ...myItem }
```

The result is exactly the same as the `Object.assign` code above.

Another useful feature of this syntax combines the destructuring assignment with the spread. Say we have an object and we want a couple of properties off of the object stored in their own variables, with the remaining properties remaining together on a new variable as an object. That would look something like this:

```js
const user = {
	firstName: 'Mike',
	lastName: 'McBride',
	occupation: 'web developer',
	location: 'St. Louis, MO',
	age: 31
}

const { firstName, lastName, ...others } = user
```

Now we have two variables, `firstName` and `lastName`, set to those respective properties from the `user` object. We have a third variable which is an object containing all of the remaining properties from `user` (in this instance, `occupation`, `location`, and `age`).

## Arrow Functions

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Arrow functions were one of the most talked about features that landed in the massive ES2015 spec. Many people saw them as a shorthand for functions, which they certainly can be, but there's a whole lot more to them that makes them especially useful. I'll cover two aspects of arrow functions that I find particularly handy. The MDN article on Arrow Functions is quite excellent. I've put links in the next two sections that take you directly to the part of the entry that references the features I'm talking about.

#### No `this` context

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this)

Before arrow functions, we would sometimes find ourselves in a situation where you have to reassign the `this` keyword to a variable for use inside of another function. You see, each function has its own scope, and thus its own context for `this`. When you have an inner function that needs access to the `this` context from an outer scope, you're left having to some inelegant variable manipulation or using the [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method. Please bear with me as I try to explain why it is a problem before we jump in to solving this with arrow functions. Here's an example scenario:

```js
const mike = { name: 'Mike' }

mike.greet = function() {
	const getName = function() {
		return this.name
	}

	return `Hello, ${getName()}`
}

mike.greet() // Hello, undefined
```

We have a couple ways to solve this. First, we could set `this` to a variable for access within a function:

```js
const mike = { name: 'Mike' }
mike.greet = function() {
	const that = this
	const getName = function() {
		return that.name
	}

	return `Hello, ${getName()}`
}

mike.greet() // Hello, Mike
```

Not great, but it works. We could also use `bind`:

```js
const mike = {
	name: 'Mike'
}

mike.greet = function() {
	const getName = function () {
		return this.name
	}

	let localGetName = getName.bind(this)
	return `Hello, ${localGetName()}`
}
```

Arrow functions make all of these problems go away. Because an arrow function does not get its own `this` context, it uses the `this` context of the parent. So our greet function can now look like this:

```js
mike.greet = function() {
	const getName = () => {
		return this.name
	}
	return `Hello, ${getName()}`
}
```

How great is that? No `let that = this`, no `fn.bind()`. Super clean!

#### Implicit Returns

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body)

The other feature of arrow functions of which I am particularly fond is implicit returns. Rather than doing the normal function curly braces, if your function body is a single expression, the arrow function will automatically return the result of that expression. I use this more times than I can count, especially within functions such as `Array.map`. Here's an example of what I mean:

```js
// without implicit return
const items = ['apple', 'banana', 'orange', 'pineapple']
const notApples = items.filter(item => {
	return !item.includes('apple')
})

console.log(notApples) // ['banana', 'orange']
```

Because we're only doing one operation and returning the result, we can use implicit returns:

```js
const items = ['apple', 'banana', 'orange', 'pineapple']
const notApples = items.filter(item => !item.includes('apple'))

console.log(notApples) // ['banana', 'orange']
```

Here's another simple example for a function that doubles every number in an array:

```js
const nums = [1, 2, 3, 4, 5]
const doubled = nums.map(num => num * 2)

console.log(doubled) // [2, 4, 6, 8, 10]
```

#### Caveat: returning Object literals

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Returning_object_literals)

One thing to note about the implicit return stuff is that if you were iterating over an array and wanted to return an Object literal, you could get tripped up thinking it would do an implicit return. In reality, the arrow function sees the curly brace and doesn't think "this is an object which I should return", it says "this is the start of a new function block". If you want to implicitly return an object from an arrow function, you can wrap it in parenthesis:

```js
const users = [
	{ name: 'Randall', id: 1 },
	{ name: 'Amelia', id: 2 },
	{ name: 'Terrence', id: 3 }
]
const activeUsers = users.map(user => ({ ...user, active: true }))
```

In this example, we map over an array of users and return a new object with the `active` property set to `true`. Notice we used the Object spread syntax which we just talked about to spread out the properties of the `user` object onto the new value which we are returning.


## Default Parameters

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

This one is pretty simple and incredibly useful. How many times have you done a check on a function parameter to see if it was passed in, and if not, defaulted it to some value? Like this:

```js
function greetUser(name) {
	if (!name) {
		name = 'World'
	}
	console.log(`Hello, ${name}`)
}
```

Wouldn't it be nice if we could set some defaults? We can:

```js
function greetUser(name = 'World') {
	console.log(`Hello, ${name}`)
}
```

Default parameters are one of those things that are super easy to grasp conceptually and make your life so much easier. One of the most practical additions to JavaScript in recent years, I think.

## for...of loops

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

The new `for...of` statement is similar to a traditional `for` loop, but rather than your iterator being the index of the iterable object, it is the value at that index. That's probably a rather simplified and naive explanation of what is going on under the hood, but in practice you are essentially looping over the values, not the index. See the comparison of a traditional `for` loop vs a `for...of`:

```js
for (let i = 0; i < users.length; i++) {
	let user = users[i]
	console.log(user.name)
}
```

In the code above, we loop through the users array and set a variable, `user`, to the item at that position in the array. We do this each iteration so that we can use the value. This is a super common thing to do, and the `for...of` statement makes this significantly easier:

```js
for (let user of users) {
	console.log(user.name)
}
```

That's it! How awesome is that? `for...of` works with any iterable object, not just arrays. Check out the MDN reference for more information there.

## Optional Chaining

optional chaining (ES2020)

## Bonus Methods

These are just some quick hits of things that I find useful. They are not necessarily confusing, but they may not be quite as well-known features.

#### Array.flat

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

We got a new `Array.flat()` method that will flatten an array. I haven't had to use it often but in the instances where I have, it's great to have. The alternative is fairly tedious, especially if you have a mixed array where some items are arrays and others are primitives. Take this example:

```js
const mixed = [1, 'hello', ['a', 'b', 'c'], null, [4, 1, 8], 'fun']
const flattened = mixed.flat()

// result:
[1, 'hello', 'a', 'b', 'c', null, 4, 1, 8, 'fun']
```

#### Array.includes

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

I should probably stop with the Array methods because there are so many useful ones that have been added, but this one is worth mentioning. I'd urge you to check out [MDN's docs on Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) though. A number of my co-workers were surprised to learn that there were native Array methods that could do a lot of things they were using libraries like Lodash to accomplish.

Segue over... so anyway. There's this method `Array.includes()`, which makes it super easy to check if an item exists in an array. No more of this:

```js
const arrayHasValue = someArray.indexOf('value-you-care-about') > -1
```

Now you can do this:

```js
const arrayHasValue = someArray.includes('value-you-care-about')
```

Pretty useful!

#### Array.find

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Okay last one on Arrays for real this time. This is too good not to share, because this method took something that always required at least 2 lines of code to accomplish and worked it into one line - `Array.find()`.

I want to find out if an item exists in an array, and if it does, I want the value of that item. There are multiple ways of doing this, but probably the most common would be to use a `for` loop. Let's say we have a list of users and we want to check if the user's `id` property matches an ID string we have:

```js
const idString = 'abc-123'
const users = [] // pretend this array is full of user objects

let foundUser

for (let user of users) {
	if (user.id === idString) {
		foundUser = user
		break
	}
}

if (foundUser) {
	// we have the user
}
```

Not horrible, but `Array.find` makes this significantly easier:

```js
const idString = 'abc-123'
const users = [] // pretend this array is full of user objects

let foundUser = users.find(user => user.id === idString)

if (foundUser) {
	// we have the user. Array.find returns `undefined` if it doesn't find a match.
}
```

`Array.find` gives us a mechanism for easily determining whether an item exists in an Array and simultaneously setting that value to a variable. If it reaches the end of the array without finding a match, it returns `undefined`.

### Object.entries and Object.values

[MDN Reference - Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | [MDN Reference - Object.values ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

We have had `Object.keys()` for quite some time now, which gives us an Array of keys in an Object. This is super useful for having a way to iterate through an Object and test some logic, but it was still fairly tedious if you needed to do something with the values in an Object. Your best approach was to do something like this:

```js
const user = {} // pretend it has properties in it
Object.keys(user).forEach(key => {
	let value = user[key]
	// now I can do something with the value
})
```

Certainly better than nothing, but `Object.entries` and `Object.values` came along more recently and gave us more power. `Object.values` does the same thing as `Object.keys`, but with the values instead of the properties (or keys):

```js
const user = {}
Object.values(user).forEach(value => {
	// I have the value now
})
```

`Object.entries` does both... it returns an array of arrays. Each inner array has two values - a key and its corresponding value. We can use our destructuring assignment thing from above to see them like so:

```js
const user = {}

Object.entries(user).forEach([key, value] => {
	console.log(`user ${key} is ${value}`)
})
```

This is another one of those things where it's not something you'll be reaching for on a regular basis, but I think they're very useful to know about because in the infrequent instances where you need something like this it's really great to have.

---

I hope this was helpful! I'd love feedback, or if you just want to talk about JavaScript, I'm always down for that. Find me on Twitter in the link down there. 👇
