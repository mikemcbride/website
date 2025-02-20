---
layout: post
tags: post
title: Delightful UX
date: 2021-06-14
published: true
excerpt: I have been super impressed with the attention to detail in some of GitHub's products lately and wanted to share a little on that.
---

GitHub's UI has always been one of the best around, in my opinion. They have a knack for adding lots of features without making the UI feel cluttered.
Recently I've been noticing little UX things here and there across their products that legitimately make me smile the first time
I see them, and I don't recall the last time software made me do that. I want to share a few of those things here.

## Lists and Checklists

In markdown fields on github.com, you can add lists by using `-` or `*` as bullet points. For ordered lists, you can use
numbers (hint: you can just use `1.` every time and they'll auto-number it for you). At some point (I don't know when they added it),
pressing <kbd>enter</kbd> moves you down to the next line and automatically inserts the character for you so you don't have to.
It's such a small but thoughtful improvement that's genuinely useful. Well done.

## Branch Management in GitHub Desktop

I mostly use the terminal for git operations, but occasionally I need to do more complex stuff that I don't necessarily
remember the commands for off the top of my head, so I jump into GitHub Desktop. The first time I did this flow I almost
laughed out loud - I was so impressed, it felt like the application was anticipating my needs. That's the goal we should
be striving for when building software - it should feel so intuitive to use the product that we can predict what you want
to do next. Here's the flow:

1. I test a bug. I'm on the `main` branch, just trying to replicate it.
1. I run the app locally. I find the bug. I start making changes to see if I can fix it.
1. I fix the bug (naturally).
1. I go to commit - oops I'm still on `main`, my team won't like it if I force push this bug fix.
1. I jump into GitHub Desktop and create a new branch.
1. Here's the first thing that made me smile - a dialog pops up and asks me if I want to bring my changes to the new branch or if I'd like to keep them on `main`. SO THOUGHTFUL!
1. I want to bring them to the new branch so I press that button.
1. I commit my changes and since there are no local changes anymore, I get a screen with some options. The first one is "Push origin". I click it.
1. It pushes my changes and then it says - get this - it says, "Do you want to create a Pull Request?" **OF COURSE I DO.** Wow. Just another incredibly thoughtful interaction.
1. I push the button and it takes me to GitHub on the screen to create my PR.

Now, I shouldn't be THAT surprised - it's a super common flow in git to do exactly what I did, but the fact that the developers
building the software said, "hey - we know how this goes. Let's anticipate every step they're about to take and make it easy for them to do it"
is super thoughtful and really well executed.

## Cherry Pick Commits

Another workflow in git is cherry picking commits from other branches. It's not something I do often by any means, but I know
that some developers use this feature very frequently. There's an interactive mode to do this from the terminal, but the team
decided to implement it in GitHub Desktop using drag and drop. You literally click to select the commits you want to bring over
and you just DRAG THEM TO THE NEW BRANCH. That's it! They took something that was tedious and make it incredibly simple.

## Conclusion

These are just a few of the interactions I've had with GitHub products lately that made me smile. I think maybe we could all
take some lessons from that team and consider how to make more delightful experiences in our own software. Let's try to make that the benchmark.
