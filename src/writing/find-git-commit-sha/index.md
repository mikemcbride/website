---
layout: post
tags: post
title: Searching Git Commits
date: 2022-05-12
published: true
excerpt: I recently had to find a commit SHA from a git repo and I didn't remember when I made the commit, but I knew a keyword. Here's a quick tip on how to find that.
---

Recently I wanted to update something in my dotfiles, and I knew I previously had a config for it but had since deleted the config.
I knew there was a commit I could find that had the keyword in it, but I wasn't sure how long ago the commit was. Rather than paging through
commits on github.com, I did a search for commits in the terminal and was able to grab the SHA. Since this might not be something
that people have to do very often, I wanted to share a tip on how to do this.

## Searching Commits

The command you want to search through commits is in `git log`. However, the default output when you don't pass any flags
is not ideal for searching. I use [ripgrep](https://github.com/BurntSushi/ripgrep) to search, so the matching text in the search would show up but the commit itself
is on a different line, so I wouldn't be able to find the SHA. Here's the default format of `git log`:

```
commit 76357cc11ca1975c44cef0f23d2c9bb622888771 (HEAD -> main, origin/main, origin/HEAD)
Author: Mike McBride <mike@mikemcbride.dev>
Date:   2022-05-11 17:15:23 -0500

    update uses, nav

```

As you can see, if I did a search for "nav", the result would come back but the actual commit is 4 lines up, so I wouldn't see
it in my results. Time to add some flags.

There are lots of flags you can add to make git logs do all sorts of cool things. For instance, try this one out real quick in a repo:

```
git log --graph --decorate --pretty=oneline --abbrev-commit --all
```

_Pretty impressive._

What I want is just the commit SHA and the commit text on one line so I can search. Here's the flag:

```
git log --pretty=oneline
```

That gives us a commit list like this:

```
76357cc11ca1975c44cef0f23d2c9bb622888771 (HEAD -> main, origin/main, origin/HEAD) update uses, nav
4d62819ffa2dc453902bbeabd6521b27577b1010 Update index.html
c617ce88f848adcf10467cdac85aafa825c8e113 Update site.css
68382346ef264bb41a3edd1e7dbc158e81625e1e remove unnecessary w-screen
623ca08ad4a211e9746bea9499c0804240dc129c double gradient on nav
```

Now I can run that, pipe the results to ripgrep, and grab the SHA:

```
git log --pretty=oneline | rg alacritty
```

And the result:

```
b5948c9517e83bb12cceee70d89f95a8e19a8daa remove alacritty config
```

That allowed me to go directly to that commit in the git history and grab the files I needed.

I hope you found this tip helpful!
