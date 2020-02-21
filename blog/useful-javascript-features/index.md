---
layout: post
title: Useful Javascript Features
date: 2020-02-14
status: publish
type: post
published: false
excerpt: In this post we'll cover some of the new(ish) features in Javascript that I didn't really understand at first but now that I do, I find them super useful. Hopefully you'll take something away from this as well.
---

## What I want to cover

- array destructuring - const [first, second] = await somePromises()
- object rest/spread - const { firstName, lastName, ...others } = user
- array spread operator - const combined = [...firstArray, ...secondArray]
- arrow functions (why they're useful - hint: no `this`, implicit returns)
- destructuring assignment (`const { data } = await axios.get(url)`)
- default parameters
- for...of loops (no more `let thisItem = array[i]`)
- optional chaining (ES2020)
- quick hits
	- these won't necessarily be the "confusing" ones, but maybe lesser-known things that I find super handy. I'm thinking:
	- Array.flat()
	- Array.includes()
	- Object.entries() and Object.values()
