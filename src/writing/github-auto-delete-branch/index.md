---
layout: post
tags: post
title: Auto-delete branches after merging
date: 2021-08-02
published: true
excerpt: Here's a quick tip to help keep your branches clean on GitHub.
---

So the problem here is when you have a massive project where lots of people are contributing, many times you end up with a TON of branches. Some people aren't diligent about deleting branches after they merge a PR, so when someone clones or pulls from the remote, they're bringing in a bunch of extra branches that are no longer being used.

Fortunately, GitHub has a setting on repos that allows you to automatically delete branches once they're merged. On your repository page on github.com, head to Settings and then scroll about 3/4 of the way down the page. You'll see a section labeled "Pull Requests" with a few groups of options in there. The bottom option is labeled "After pull requests are merged, you can have head branches deleted automatically." Beneath that there's a checkbox for "Automatically delete head branches" - that's what we want. Check that box (GitHub will automatically save the setting), and then anytime a Pull Request is merged, the branch will be automatically deleted.

Cheers!

