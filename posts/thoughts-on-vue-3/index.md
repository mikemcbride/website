---
title: Thoughts on Vue 3 and Simplicity
date: 2020-02-24T12:00:00Z
published: true
excerpt: Vue 3 is out of beta, and I've tried it out on a few projects. Here are some early thoughts.
---

I've been a big fan of Vue for a number of years now. Our organization at work was updating our tech stack when AngularJS went to version 2.0 and became Angular and was a complete rewrite. I'm sure I'm not alone in that experience. We evaluated a number of frameworks and landed on Vue because of it's familiarity in coming from AngularJS and it's ease of adoption. Vue has incredible documentation and the learning curve was not very steep. This was ideal when trying to onboard 300+ developers with varying levels of skill to a new framework. Overall the switch was largely successful.

That was over 5 years ago, and in that time I've invested a ton of time becoming a go-to person within our company for all things Vue related. So when Vue 3 went into beta and eventually out of beta, I started playing around with it on some side projects to get a feel for what it's like. Here are some thoughts about that.

_NB: As you read this, please keep in mind that I have not used Vue 3 on any large-scale project. It's all been smaller stuff, so while I have been able to get a general feel for what it's like to work with, building a large app is significantly different than the type of stuff I'm doing with these side projects._

## The Good

Vue 3 is a pretty seamless upgrade. There were few (if any?) deprecations. The new Composition API is being paraded around, but there's no obligation to use it. The Options API we're used to in Vue 2 is still alive and well. There are some minor changes in how you instantiate the app, but for a SPA that's just tweaking one file slightly and you're good to go.

It's also smaller and faster, which is a nice bonus for just a little bit of work. The Vue team did a great job trimming the cruft and keeping the framework snappy. I think a lot of this was due to being able to take advantage of newer browser APIs that make the reactivity system smaller by using native constructs (like Proxies). I'm sure there's other stuff that went into it, but that's the big one people were talking about.

## The Not So Good

Change is hard. The minor tweaks for adjusting how the app bootstraps is fine, but there are some other changes that are a little more invasive. For starters, the Composition API, while not necessary, gets promoted as the "better" way to do things since it makes your code more reusable. While that may be true, I have found it very difficult to feel comfortable working with it and that makes me nervous to recommend adopting it at our company. Not trying to toot my own horn, but if a senior developer who is widely regarded as one of the most knowledgeable/experienced Vue developers at the company struggles with parts of it, how can we expect less experienced developers to pick it up and be productive? It's a little worrisome.

The documentation is also pretty confusing, especially around the Composition API. It's not a simple concept to explain, but Vue has always done a great job of making it seem easy with their excellent docs. The Composition API docs almost feel as if you need a computer science degree to understand what they're talking about at times. It should never be like that.

I also stumbled a few times with certain things. For instance, the concept of using `refs` is different in the Composition API. Usage of `this.$el` is not allowed anymore because components aren't limited to a single DOM node. Little things like that would randomly trip me up, despite most things (90% or more) remaining the same. It's the 10% that's tripping me up.

## Comparisons

Now let's look at Vue compared to some other major players in the front-end game/

### Following the Leader

React has been the main name in front-end JS frameworks for a long time. Vue seems to be taking innovative features that React introduces and porting them over to Vue, although the features may look a little different. Hooks were introduced a couple years ago, which heavily inspired the Composition API. React introduced Fragments (multiple root-nodes in a single component), and Vue added support for multi-root components. React came out with Portals, and Vue followed up with Teleport. These features are all taken directly from the innovative things the React team is doing. Even meta frameworks started with React and then similar frameworks were created for Vue - Next.js and Gatsby for React paved the way for Nuxt and Gridsome. I have no doubts that the Vue team has some unreal talent, and Evan is brilliant. Vue will continue to be very successful, I just worry that they're not innovating and are just following.

### Simplicity

The other concern I have is with regards to simplicity. Vue 2, as I've mentioned, had a gentle learning curve. When I use [Vite](https://vitejs.dev) (which is CRAZY cool btw) to spin up a new Vue 3 project, I hardly recognize the structure. It feels overly complicated and intimidating in a way that Vue 2 never was. This might be due to the default usage of the Composition API, but I can't help but feel that it's just more complex.

On the other hand, Svelte has continued to impress me with its simplicity. It feels like the right mix of Vue and React, with some of its own features sprinkled in that really set it apart. It's becoming more and more appealing to me because of how simple they make things for the developer. It just works like you'd expect it to - something I constantly found happening as I was learning Vue 5 years ago that has been utterly missing with my foray into Vue 3. It's also about as lightweight as you can get - Svelte itself compiles away - there's no framework code that gets shipped to the browser, it's just the code you write, compiled into JavaScript that the browser can execute. There's no Virtual DOM or extraneous constructs. The compiled (unminified) code is even relatively easy to understand when you read it (when's the last time THAT happened?). I'm very optimistic about Svelte.

## Closing Thoughts

Overall, I think Vue 3 is a good update. I have been reading a lot of things from people who say it took them a bit to get ramped up but once they did they have found they are vastly more productive. I love Vue and I want to get to that point, but I'll be honest - I'm worried. I worry that it went from a framework that felt easy to pick up to something more complex to try and keep up with the features from other frameworks.
