---
layout: post
tags: post
title: Useful Automation Scripts
date: 2022-05-03
published: true
excerpt: There are a number of useful automation scripts I have set up over the years in my dotfiles. I'll share some of the ones I use on a daily basis to boost my productivity.
---

I love scripting in Node. It's fine for writing APIs, though there are almost always better choices. Where Node really shines, in my opinion, is as a scripting language.
Being able to write JavaScript, a language I'm super comfortable and familiar with, to interact with my computer in ways traditionally reserved for compiled languages is vastly underrated.
Whenever I need to do batch processing on a ton of files within a project or some other similar task, I find myself immediately reaching for Node. Let's take a look at some useful scripts I use on a daily basis.

## Empty the trash

I use a node module called `trash-cli` with an alias set up for `rm` so that when I remove a file, it doesn't go into oblivion.
Too many times I've deleted something with `rm` only to realize minutes later that I wasn't quite done with that...
Unfortunately there's no way to get that back. But using `trash-cli` and an alias, `rm` now calls the `trash` binary and moves
the files to the trash rather than permanently deleting them. It's incredibly useful.

The drawback here is that my trash fills up kind of quickly... especially when I'm removing `node_modules` folders to do a fresh install.
I don't like leaving the terminal when I don't have to, so I have an alias `dump` set up to empty the trash. It calls out
to another node module (by the same author as `trash-cli` - Sindre Sorhus, go figure) to empty the trash from inside a script.

It's a pretty simple one, but it saves me a few seconds every time I need to do it. [Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/emptyTrash.mjs)

## Get my IP address

This one is pretty excellent. Could I use `ifconfig`? Sure. But I don't want to parse through that wall of text to find my IP address.
This script uses a node module `internal-ip` to get the internal IP address, but first it checks the network interfaces to see if I'm
on my company VPN. If so, it grabs the correct IP address from that, and then falls back to using the `internal-ip` module. Then it 
copies the IP address to my clipboard, because if I'm going through the trouble to script all this I might as well save myself the time
of copying it, right? [Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/getIp.mjs)

## Set default applications

This script makes use of a binary I installed called [`duti`](https://github.com/moretension/duti) that can be used to set 
the default application for filetypes. The script grabs the appId for [Zed](https://zed.dev), gets a list of extensions that I want to open
in the app, and then runs the `duti` command and passes in the list of extensions. It's not something I run often, but it's supremely useful when setting up a new machine.
[Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/setDefaultApplications.js)

## Toggle color themes

I used to use this quite often. I was using Hyper for my terminal and VS Code for my editor. I still used Vim for editing certain files. All three of those applications have their theme configuration accessible in a file, so I just modified the file on disk to swap the theme from light to dark. My colorscheme matches in my terminal, Vim, and VS Code, and I have light and dark themes I use. The light theme I pretty much only use when I'm sitting outside, where the dark ones are just too difficult to read. When I need to toggle all these themes quickly and at the same time, I run this script.

*NB* I'm mostly using Vim now, but I still use VS Code occasionally. I also use iTerm instead of Hyper, and as far as I've been able to tell I can't change the profile of an existing session - I have to open a new session with a different profile. Because of that, I almost never use this script anymore, but it was so helpful to me that I wanted to leave it on this list in case it inspired someone else to do something similar. [Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/toggleThemes.mjs)

## Open a git remote

How often do you find yourself in a project and wanting to jump to GitHub to check open issues or pull requests? Happens to me frequently.
So frequently, in fact, that I was tired of not having a simple way to do it from within the project. So I wrote a script
that gets the remote origin url from the git config, parses the URL, then opens the URL in my browser. I alias this to `gopen`
and I love everything about it. [Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/openGitRepo.mjs)

## Open a pull request

This was a fairly natural successor to opening the current project at its remote URL. When I'm done making my commits, I push
my code and then I want to cut a PR. The nice thing about GitHub PRs is that the URL for the "create pull request" page is
very easy to build out when you know the branches.

This script uses a fish function to do the first part - it parses the current branch and then gets the value of `git remote get-url origin`.
Then it passes those two values into the Node script which builds out the URL for the new pull request page, and I can immediately
start editing the PR. The fish function (and therefore terminal alias) for this one is `gpr`. [Source](https://github.com/mikemcbride/dotfiles/tree/main/scripts/openGitPullRequest.mjs)

## A Better `git clone`

I'm saving the best for last here, and unsurprisingly the last three are all about simplifying tedious git operations.
This one is easily my favorite and most used (and maybe most useful?) script. I've made tweaks over the years and it works super well for me now.

I clone a repo, then I have to `cd` into it. That's the basic problem I started out to solve. In what universe am I cloning a repo and not immediately going into that folder?
I'm not sure I've ever done something different. So I started out to write a script that would do that. Pretty basic.
But then I noticed another problem. For my job at WWT, we have GitHub Enterprise, so I have a totally different set of git credentials for that instance.
When I clone the repo, I need to override the git config to use my WWT email so my commits show up correctly.
That got annoying, so I added in a check to parse the URL passed to the script and look for `github.wwt.com`. If it was there, I'd execute a command to set the proper git config.

Then recently, I realized a lot of the time I know the org and repo name that I want to clone - especially for work repos.
Why should I have to type out a fully qualified URL with `.git` at the end when I could pass the `org/repo` string and let the script do it for me?
So here's where I landed. I added a second check - if the argument passed to the script starts with `https://`, just use the URL.
If it doesn't, build out the URL to clone. I can also pass a `--wwt` flag - if that exists, I build the URL out to fetch from GitHub Enterprise.
If it doesn't exist, I fetch from public GitHub.

I use fish as my terminal, so I set up two separate fish functions so I don't have to type out the extra `--wwt` flag.
The first is `clone.fish`, which I already had, and I added `wclone.fish` (for WWT Clone). That calls the clone script with the `--wwt` flag.
Now I can run `clone mikemcbride/dotfiles` and it will clone my dotfiles from public GitHub. Or I could run `wclone mcbridem/interview-questions`
and it will clone a repo I have on WWT GitHub where I keep a list of questions to ask people in interviews. But it also still works with a full URL.
If the script detects that it's a fully qualified URL, it will just ignore the `--wwt` flag and detect it based on the URL itself.
Finally, after cloning, the script immediately `cd`s into the new directory. [Source](https://github.com/mikemcbride/dotfiles/scripts/clone.mjs)

## Conclusion

Hopefully this was helpful or enlightening. I love writing little scripts to speed up my workflow (queue up the classic [XKCD](https://xkcd.com/1319/)),
and I'm glad I finally found the time to share some of them here. If you have any scripts that are part of your workflow I'd love to hear about it.
Drop me a line on [Mastodon](https://mastodon.social/@mcbridem).
