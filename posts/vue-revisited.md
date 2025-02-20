---
layout: post
tags: post
title: "One Year Later: Thoughts on Vue 3"
date: 2022-03-27
published: true
excerpt: A year ago I wrote some very early thoughts on Vue 3. Let's see how they hold up.
---

A year ago I wrote some very early thoughts on Vue 3. Let's see how they hold up.

## The Good/Not So Good

I mostly had good things to say in this section. The biggest downside was that the Composition API was less intuitive to pick up and some minor differences in things like `$refs` took some getting used to. I would say that still holds up. The Composition API is really excellent, but it's much less intuitive to pick up than the Options API. I can understand why the Composition API is being made as the default - it's much easier to share code across your app. Implementing that sort of functionality is inherently complex, so naturally explaining it in the docs is more complicated and difficult to understand than the Options API (which is basically a bunch of object properties that do magic stuff). Things like having to reference `.value` on pieces of state still trip me up occasionally but like all things, you get used to it very quickly and hardly notice it after a while.

## Comparisons

I compared Vue 3 to React and Svelte, two of the other major players in front-end JavaScript frameworks (yes yes I know, don't call React a framework... you get my point though). React has been the top dog in this game for a long time, and that still continues. Did Vue take ideas from the React team? Sure. They have lots of great ideas. Did they take every idea from the React team? No. I was probably a little harsh here. It's natural for framework authors to be inspired by things other frameworks are doing and take the good ideas and implement similar features in their own frameworks. Vue 3 itself was a massive rewrite from the ground up - migrating to TypeScript, rebuilding the reactivity layer using Proxies, etc. If they had added ZERO new features and only done these things, it would have been a great new version. The fact that they also added new stuff in addition is awesome.

I have used Svelte sparingly since writing that post, and every time I do I am certainly impressed. I still think Svelte has incredible potential and we will continue to see adoption skyrocket. There's a lot to love about Svelte. I praised it for its simplicity, and contrased that with Vue 3 becoming more complex with the addition of the Composition API and `<script setup>`, and I think that still holds up. Complexity is not necessarily a bad thing, but a gentle learning curve goes a long way towards adoption, especially with more entry-level developers.

## Conclusion

I think the biggest testament I can give is that when I spin up a side project today, I'm still reaching for Vue. I gladly use Vue 3 with Vite (still maybe the most exciting tech of the past year) and I don't see that changing. Do I still use the Options API a lot more often than the Composition API? Yeah, I do. Change is hard, and I'm VERY used to the Options API. Kudos to the Vue team for supporting both APIs. Keep up the awesome work. ♥️
