---
layout: post
tags: post
title: Clearing an Interval in JavaScript
date: 2020-04-02
published: true
excerpt: Sometimes you need to set an interval in JavaScript... and sometimes you need to make it stop. We'll go over the basics of how to do this and also cover clearing an interval in a Vue component.
---

In JavaScript, we have a method available to us on the `window` object (or `global`, in Node) called [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval). If you are unfamiliar with this method, it is similar in nature to [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), which is much more commonly used. If you haven't heard of either or just want a refresher, here's what they do:

## setTimeout

The `window.setTimeout` (or `global.setTimeout` in Node) method accepts two parameters: a callback function to run, and a delay (in milliseconds) to wait until running that function. This is handy for  simulating asynchronous code in mockups or examples if you don't have a real API endpoint to use yet. Here's an example:

```js
setTimeout(function() {
  console.log('World')
}, 2000)

console.log('Hello')
```

When the code above executes, the word "Hello" will be printed to the console, and then 2 seconds later (2000 milliseconds) the word "World" will be printed to the console.

## setInterval

The `setInterval` method looks very similar. It also takes a callback function and an a delay/interval parameter. The main difference is that instead of running the callback function once after the provided delay, it continuously runs the function. So if we have this:

```js
setInterval(function() {
  console.log('World')
}, 2000)

console.log('Hello')
```

This will print "Hello" to the console and then 2 seconds later it will print "World", just like it did above. Except now it will continue printing "World" every 2 seconds until the page is reloaded or you close the tab.

This method can be super handy for a number of things. Let's look at a simple example. You are building a quiz app and the user has 10 seconds to answer a question. If they answer within the time, you move on to the next question and reset the timer. If the timer reaches zero, they lose. You might do something like this:

```js
let quizTimer = 10
let status = 'playing'

setInterval(() => {
  quizTimer -= 1

  if (quizTimer === 0) {
    // they lose
    status = 'lose'
  }
}, 1000)

let realAnswer = 'blue'
checkAnswer(answer) {
  if (answer === realAnswer) {
    // they got it right. reset the timer to 10 seconds
    quizTimer = 10
  } else {
    status = 'lose'
  }
}
```

This is fairly crude but you get the idea. We decrement the timer every second and if it hits zero, they lose. If they get the question right, we reset it to 10 seconds. If they answer the question wrong, they also lose.

But then you have a little bug... the `quizTimer` keeps decrementing even after the game is over, because your interval is still running. That's no good. So how do we get rid of the interval?

## clearInterval

There's a method called `clearInterval` available to us as well. Its method signature takes one parameter, which is an instance of `setInterval`. Here's how it works:

```js
let quizTimer = 10
let quizInterval = setInterval(() => {
  quizTimzer -= 1

  if (quizTimer === 0) {
    clearInterval(quizInterval)
  }
}, 1000)
```

We do two main things here. First, instead of simply invoking `setInterval`, we set it equal to a variable. That way we have a reference to the instance of the interval. Second, when our timer hits zero, we pass that instance as the parameter into the `clearInterval` method. Now our timer will stop at zero and the interval will be done.

---

If you're not interested in Vue.js, the blog post ends here :)

## Usage in Vue.js

I ran into this issue of how to clear an interval in Vue a couple years ago. Quite recently I had a colleague ask for help trying to figure it out, and earlier that same day I was on a Vue forum where someone asked the same exact question as my colleague - "How do I stop a `setInterval` from running inside a Vue component?"

It's not the most intuitive thing to figure out, so we'll cover it here as well.

```html
<template>
  <div>
    <p>
      {{ quizTimer }} second(s) remaining
    </p>
    <button
      @click="doCountdown">
      Start Quiz
    </button>
  </div>
</template>
```

```js
export default {
  data() {
    quizTimer: 10,
    quizInterval: null
  },
  methods: {
    doCountdown() {
      this.quizInterval = setInterval(() => {
        this.decrementTimer()
        if (this.quizTimer === 0) {
          this.stopTimer()
        }
      }, 1000)
    },
    decrementTimer() {
      this.quizTimer -= 1
    },
    stopTimer() {
      clearInterval(this.quizInterval)
    }
  }
}
```

Okay, so what's going on here? We have a `data` property called `quizTimer` that starts at 10 and a `quizInterval` that defaults to `null`. We have a paragraph tag in our template that renders the number of seconds remaining, and we have a button in our template that, when clicked, starts the countdown interval.

Inside this `doCountdown` method, we start the interval and set it to the `quizInterval` property on our data. The interval begins running and it decrements the value of the timer by 1 every second. If the value is zero after decrementing, it stops the timer by running `clearInterval` and passing in the interval instance that we have stored in our data property.

Once you see it laid out, it's not really all that different from how you would normally do it. The main thing that I think isn't super obvious is that you need a way to access the interval in order to clear it. In Vue, variables declared in one method aren't available in other methods, just like function scoping. You *could* declare a variable outside the default export and reference it anywhere, but that's not typically considered best practice. Putting it in `data` means you get access to it from another method.

Another approach that would also work is using a local variable inside of `doCountdown` and clearing it within itself, like we did above:

```js
export default {
  data() {
    quizTimer: 10
  },
  methods: {
    doCountdown() {
      let timer = setInterval(() => {
        this.decrementTimer()
        if (this.quizTimer === 0) {
          clearInterval(timer)
        }
      }, 1000)
    },
    decrementTimer() {
      this.quizTimer -= 1
    }
  }
}
```

This approach would absolutely work, but what you lose is the ability to clear the timer from outside the scope of the `doCountdown` method. By putting the interval in a property on the `data`, we could put a button in our template that allowed us to stop the timer if, say, we needed a way to "pause" our quiz:

```html
<template>
  <div>
    <p>
      {{ quizTimer }} second(s) remaining
    </p>
    <button
      @click="doCountdown">
      Start Quiz
    </button>

    <button
      @click="stopTimer">
      Pause Quiz
    </button>
    <button
      @click="doCountdown">
      Resume Quiz
    </button>
  </div>
</template>
```

Hopefully this was a helpful explanation!

```js
setInterval(() => {
  console.log("Happy coding!")
}, 1000)
```
