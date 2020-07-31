---
title: Comparing Vue Computed Properties, Methods, and Watchers
date: 2020-04-14T12:00:00Z
published: true
excerpt: When I was learning Vue, one of the more confusing aspects was trying to wrap my head around when to use computed properties, methods, or watchers. They have a lot of overlapping functionality, so let's jump in and see what they're all about.
---

When I was learning Vue, one of the more confusing aspects was trying to wrap my head around when to use computed properties, methods, or watchers. They have a lot of overlapping functionality, so let's jump in and see what they're all about.

<!-- more -->

First of all, this post is going to assume some basic working knowledge of [Vue](https://vuejs.org), but is definitely geared more towards beginners. If you've never seen or used Vue before this will probably make no sense, but if you've tinkered with it for any amount of time you should be fine.

Okay with that out of the way, let's dive in. We should start by giving some context. Computed properties, methods, and watchers - what are they? All three options expose a way to react to changing data in a component. The manner in which they react to it and what they can do differs, so they each have their own proper time and place.

## Methods

We'll start with methods, because this is probably the most familiar concept coming from any other JavaScript framework background. At it's core, a method is just a function that you call from somewhere else in your component. You can pass in parameters (or not), read data from the component, and update other data. You can make HTTP calls to fetch or update data outside the component if you want. They are probably the most versatile of the three options, and also probably very similar to some other concept in any framework you're used to using. You can invoke a method from inside another method or lifecycle hook in your component, or you can invoke it in response to an event in another component in your template. There are tons of options here. Let's look at some examples.

### Responding to an event

This is one of the most common use cases, and probably one of the first examples you'll run across. I have a button, and I want to run some code when I click it. Here's what that looks like in Vue.

> NB: In this post, I'll commonly show an HTML snippet followed by a JavaScript snippet. If you're unfamiliar with Vue Single-File Components, I'd check out the docs. The HTML is markup from the template section, and the JavaScript is inside the script section of the component. These snippets live in the same file.

```html
<button v-on:click="handleClick">Click me!</button>
<span>You have clicked {{ clickCount }} times.</span>
```

```js
export default {
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    handleClick() {
      this.clickCount += 1
    }
  }
}
```

Pretty basic example here, but you get the idea. You can click a button and run some custom functionality. When you need to react to events or change data, you will be using methods the vast majority of the time. Let's look at one more example before moving on.

### A more advanced example

Let's say we have some data we want to fetch from the database when our component is created, and then set the response to some other data in our component. That would look something like this:

```js
export default {
  data() {
    return {
      books: []
    }
  },
  methods: {
    async getBooks() {
      let res = await fetch('/api/books')
      return await res.json()
    }
  },
  async created() {
    this.books = await this.getBooks()
  }
}
```

In this example, we invoke our `getBooks` method from inside the `created` lifecycle hook. You invoke a method just as you would access a data property - it lives on the `this` object in the component. Inside that method we make an asynchronous fetch call and return the response. Back in the lifecycle hook, we set the `books` data property to the result of that `Promise`.

There are countless other use cases and examples we could go through on how and when you might use a method. Let's move on to watchers.

## Watchers

Depending what frameworks you have worked with, you may have encountered something similar to watchersr. In my own experience, I moved to Vue from Angular.js and there was a concept of `$scope.$watch`, where you could set up watchers on certain properties and run arbitrary logic in response to that value changing. If this sounds at all familiar, then you're in luck because that's basically how this works in Vue as well. Here's a quick example:

```js
export default {
  data() {
    selectedAuthor: null
  },
  watch: {
    selectedAuthor(newValue) {
      this.fetchBooksForAuthor(newValue)
    }
  }
}
```

What's happening in this snippet is that we have a property in our data, `selectedAuthor`. Whenever that changes, we'll call a method to fetch the books for that new author. I'm omitting the other logic for brevity, but let's just assume we'd fetch those books and then populate them somewhere in our UI.

Watchers can be quite powerful, but they're also fairly expensive. They're constantly watching the property, and so are generally more well suited for asynchronous operations. A great example that we recently used in a project at work is that we have a route with multiple nested child routes. Picture something like this:

```
mysite.com/author/1/bio
mysite.com/author/1/works
mysite.com/author/1/interviews
```

All three routes - bio, works, and interview - are child routes of a parent `AuthorDetail` route. When the route first loads, we fetch the author, but once that happens, we don't really want to fetch it again each child route change, because the author info isn't changing. But when we go to `/author/2/bio`, we do want to fetch the new author. So we implemented something like this, setting up a watcher on the Vue router instance:

```js
export default {
  watch: {
    $route (to, from) {
      this.fetchAuthor(to.params.authorId)
        .then(newAuthor => {
          this.author = newAuthor
        })
    }
  }
}
```

The `watch` property sets up a function that accepts two parameters - the new value and the previous value, which can be handy for comparing if that's something the application logic necessitates. Watchers can be great, but there is certainly a time and place for them. They're great for operations like the example above where something isn't changing often (the current route), but when it does you need to fetch something that may be particularly expensive and you don't want to lock up your UI. Because of this they are also a great candidate for offloading complex JavaScript-based animations.

Let's move on to the third and final topic, computed properties.

## Computed Properties

I remember the first Vue app I was working on at my job. We previously used Angular.js, so I had a lot of habits of writing application logic "the Angular way" - certain things we had to do to work around limitations of the framework. I specifically recall a comment that a co-worker made on one of my first pull requests saying that a pattern I did was a bad practice carried over from Angular, and that there was a "Vue way" to do the same thing. This magical new thing was called Computed Properties.

When I first started reading about them, computed properties felt like magic. So many issues I previously had to work around in other apps just disappeared. I already really liked working with Vue, but this got me hooked. So what are they?

Computed properties are sort of a mix between watchers and data. The best comparison I can make is that they are like a `getter` in a `Class` instance. They're method-like, but you access them like you would access a property on the Class. Computed properties are like watchers because once you set them up, you never invoke them to re-fetch the data - they're just always running. They're like data because you access them the same way, both in the component script section and in the template. The benefit to computed properties is that they cache their value until one of their dependencies changes, and so they're not as intensive as watchers are.

I found that when switching from Angular.js to Vue, there were a LOT of times where I would want to use a method and I would instead use a computed property. Here's one of the examples I love most to illustrate the difference. You are iterating over a list of users from the database. Let's also say that you have an optional display property where you can show the users names as `FirstName LastName` or `LastName, FirstName`. First, we'll take a look at how that might look with a method:

```html
<ul>
  <li v-for="user in users" :key="user.id">
    {% raw %}
    {{ getUserDisplayName(user) }}
    {% endraw %}
  </li>
</ul>
```

```js
export default {
  data() {
    users: [...],
    nameDisplay: 'first_last' // can also be last_first
  },
  methods: {
    getUserDisplayName(user) {
      if (this.nameDisplay === 'first_last') {
        return `${user.firstName} ${user.lastName}`
      } else {
        return `${user.lastName}, ${user.firstName}`
      }
    }
  }
}
```

This works fine, and in coming from Angular.js, that was really the only way you could do something like this. However, these functions are re-evaluated all the time, even if you aren't changing the user list or the sort preference. Let's take a look at how we could improve this code using computed properties.

```html
<ul>
  <li
    v-for="(user, index) in formattedUsers"
    :key="index">
    {% raw %}
    {{ user }}
    {% endraw %}
  </li>
</ul>
```

```js
export default {
  data() {
    users: [...],
    nameDisplay: 'first_last' // can also be last_first
  },
  computed: {
    formattedUsers() {
      if (this.nameDisplay === 'first_last') {
        return this.users.map(user => {
          return `${user.firstName} ${user.lastName}`
        })
      } else {
        return this.users.map(user => {
          return `${user.lastName}, ${user.firstName}`
        })
      }
    }
  }
}
```

First thing you will notice is that we are looping over a different array - `formattedUsers` instead of `users`. In our `formattedUsers` computed property, we do the same logic we did in the method above. The benefit here is that unless the `nameDisplay` preference or the `users` array changes, the `formattedUsers` array will have its value cached so it's not wasting cycles re-evaluating each time unnecessarily. Honestly, computed properties are still one of my absolute favorite things to use in Vue.

My absolute favorite example of when you'd want to use computed properties is for filtering lists of data. Instead of looping through like this:

```html
<li
  v-for="item in items"
  v-if="item.includes(searchTerm)">
  {% raw %}
  {{ item }}
  {% endraw %}
</li>
```

You could do this:

```html
<li v-for="item in filteredItems">
  {% raw %}
  {{ item }}
  {% endraw %}
</li>
```

```js
computed: {
  filteredItems() {
    return this.items.filter(item => {
      return item.includes(this.searchTerm)
    })
  }
}
```

In fact, in the most recent versions of Vue and the Vue ESLint plugin, it will throw a warning saying that you shouldn't mix `v-for` and `v-if` on the same node, and that you should consider using a computed property to obtain the same result, because it is more performant.

### Drawbacks

I don't want this to sound like computed properties solve all the problems. They are excellent, but they have limitations. They're not like methods where they can take a parameter (okay, there's a way they can, but it's not common and it makes it a lot harder to use). So you can become limited in what you can do in situations like we have above where you're iterating over a list. You have to manipulate the entire list rather than use the computed property on each item as you're iterating. Remember that computed properties are accessed like data properties, not like methods, so you reference it as `this.formattedUsers`, not `this.formattedUsers()`, which is why we can't say `this.formattedUser(user)` (that would require a method). There is a way to define individual `set` and `get` methods on a computed property to some super advanced stuff and make them behave a little more like methods, but it gets pretty gnarly and generally isn't done unless you have a *really* good use case. Managing form values in Vuex is the best example for doing this, but that is pretty finicky so I try to stay away from it if possible.

## Recap

Hopefully this shed a little light on when and how you might use these three different ways of reacting to changing data in Vue components. Let's do a real quick recap of the three and touch on the highlights for when you would probably end up choosing to use it:

### Methods

If you are responding to an event, either in the DOM or a Vue event emitted from another component, you are almost certainly using a method. If you have some logic that needs to be able to be executed from somewhere else in your component, you're going to use a method.

### Watchers

If you have some complex logic or asynchronous data that needs to be run/fetched in response to something changing, you'd probably consider a watcher... especially if that thing isn't changing often. You might also choose a watcher if you're running complex/heavy JavaScript animations in your component.

### Computed Properties

If you have data that changes based on one or more other pieces of data, you probably want a computed property. If you're filtering lists of data, you definitely want computed properties.

## Resources

For further reading on all of these topics, check out the [Vue docs](https://vuejs.org/v2/guide). They are seriously amazing. The team puts a ton of time and effort into the docs and it shows. There is plenty more you can do with all three of these Vue component options so head over there if you're curious to learn more.