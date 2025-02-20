---
layout: post
tags: post
title: Beginner Vim Tips
date: 2022-08-04
published: true
excerpt: Here are some helpful tips for getting started with Vim.
---

Earlier this year I switched to using Vim full time. I had used Vim plugins in my editors for a number of years,
but never made the switch to using it full time in the terminal as my main editor. Here are some tips for making the switch easier.
Vim has a very steep learning curve, and these things will help you get over the curve more quickly.

1. **Disable mouse mode**. Coming from other editors, it's tempting to reach for the mouse to navigate around. Vim allows you to use the mouse to click and put the cursor exactly where you want, click on tabs to switch buffers or close them, click into different splits, etc. I would suggest that at least for the first month you disable the mouse and get used to using Vim's actions to nagivate around. It will force you to get familiar with them much more quickly.
2. **Disable arrow keys**. This is similar to the first one. You can use the arrow keys to navigate around instead of using HJKL, but I would suggest you don't do that. Some people remap the arrow keys to a null action. If you find yourself using the arrow keys a lot, you might consider doing this.
3. **Force yourself to do things the most optimal way**. You'll be tempted to try to replicate your current flow in Vim, rather than doing things "the Vim way". If you do something like enter Insert mode and hold the backspace key to delete a whole sentence, then realize "I could have been much more efficient using a motion", my recommendation is to undo the change and re-do it the more efficient way (`dT.` to delete backwards to the next period might be a good one). You're training yourself to use these motions. If you force yourself to do things the more optimal way, it will become common practice.
4. **Stay out of insert mode as much as possible**. When writing code, you're not spending most of your time writing. You spend a ton of time navigating around and modifying existing stuff. It can be tempting to stay in insert mode. I would suggest that as soon as you're done writing something, go back to Normal mode until you know you need to insert more text. This will help you learn motions and also get used to replacing/editing text without going into insert mode.
5. **Enable relative line numbers**. This can be weird at first, but it helps you jump around. Relative line numbers shows the line number of the current line you're on and then the line numbers above and below show how many lines up/down they are from the current line you're on. So if you're on line 284 and you need to jump to line 266, you don't have to do the math in your head - line 266 will have the number 18 (284-266 = 18). So you'll see `18` as the line number and you can do `18k` to jump up 18 lines. Super handy.

If you want some more great Vim content, I would highly recommend checking out The Primeagen's course on Frontend Masters or his YouTube videos, or check out chris@machine on YouTube. Those guys are top notch!

What do you think? If you're a Vim user, are there any tips I'm missing?
