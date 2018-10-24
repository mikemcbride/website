---
layout: post
title: What I Use
date: 2016-04-08
status: publish
type: post
published: true
---

**last updated: May 29, 2018**

- updated work/desk setup
- switched from zsh to fish shell
- removed `atom-ternjs` and `split-diff` packages
---

I recently read a post by [a developer I follow on Twitter](https://twitter.com/wesbos) where he outlined a lot of the things he uses to keep up his productivity, and it inspired me to do this write-up on the things I use (apps, tools, setups, configs, etc) to stay productive. Let's dive in.

## Editor

I have been using [Atom](https://atom.io) as my primary code editor for a long time now and I love it more every day. It's built on web technologies, so it's super customizable. [Addy Osmani](https://twitter.com/addyosmani), an engineer at Google, had a great quote about the importance of optimizing your editor:

> Time is a huge factor in staying productive. Your editor is the one tool you spend most of yours in and you should invest in optimizing your workflow skills. You'll benefit from them everyday.

That is one of the biggest reasons I love Atom - there are tons of plugins and themes, and it's super easy to customize things to do exactly what you want. It's built by an internal team at GitHub (with help from the community), and they are constantly releasing new updates. Here are some of the plugins (in no particular order) that I'm using for Atom that I find to give me a lot of benefit:

- [autocomplete-paths](https://atom.io/packages/autocomplete-paths) - gives you file path completion inside the editor.
- [file-icons](https://atom.io/packages/file-icons) - adds icons (and optional colors) to files to better visual grepping.
- [emmet](https://atom.io/packages/emmet) - powerful snippet completion for HTML. See [Emmet](http://emmet.io) for more info if you're unfamiliar with Emmet.
- [vim-mode-plus](https://atom.io/packages/vim-mode-plus) - I like vim a lot, but I love the features you get from a code editor like Atom. A vim plugin gives me the best of both worlds. *Note:* `vim-mode` was the official Atom package but it's been deprecated. This one has better performance and support.
- [sync-settings](https://atom.io/packages/sync-settings) - super useful package, especially if you use Atom on multiple machines. This allows you to back up and restore your settings to/from a Gist linked to your GitHub account. It will sync your installed packages, settings, init script, stylesheet, keymap, and snippets.
- [set-syntax](https://atom.io/packages/set-syntax) - a package that adds syntax switching options to the command palette instead of having to remember the keybinding to open the panel for switching syntax.
- [language-dotfiles](https://atom.io/packages/language-dotfiles) - adds syntax highlighting for bash in dotfiles.
- [editorconfig](https://atom.io/packages/editorconfig) - helps developers maintain consistent coding styles between different editors.
- [autocomplete-modules](https://atom.io/packages/autocomplete-modules) - provides autocomplete on packages in `node_modules`
- [less-than-slash](https://atom.io/packages/less-than-slash) - auto-close HTML tag when you type `</`

I also care a lot about my color scheme. It might sound dumb, but I spend a lot of time looking at a code editor and a terminal and having a color scheme that I enjoy makes a difference. I spent a lot of time tweaking one that I really love (screenshot below), and I use it in Atom and my terminal. I published it as a theme for Atom, so you can use it too! [You can check it out here](https://atom.io/themes/electron-highlighter-syntax).

![color scheme for my code editor](https://cdn.jsdelivr.net/gh/mikemcbride/electron-highlighter-syntax/screenshot.png)

My font in both Atom and the terminal is [Hack](http://sourcefoundry.org/hack/) - an open source font designed specifically for source code. It's pretty killer. You can install it via Homebrew.

## Terminal

I also spend a lot of time in the terminal, so I've put a lot of time into my setup (and a lot of time into automating it). You can check out [my dotfiles on GitHub](https://github.com/mikemcbride/dotfiles) if you want to see the whole thing. Here's an overview of what I use:

> **Note:** I won't keep this section super updated. Check out the dotfiles repo above, the README there has an extensive list of everything the install script will do, including all the configs listed below and more.

- [Hyper](https://hyper.is/). It's a terminal that runs in Electron and is built using HTML, JS, and CSS. It's more performant than iTerm and is almost as fast as the default Terminal.app (their goal is to be faster). It's super legit, and easily customizable.
- [fish](https://fishshell.com) as my shell. You should consider it if you are using bash and haven't considered other shells. It's amazing. I've customized it pretty heavily - if you want to check out my config, you can [install it](https://github.com/mikemcbride/dotfiles#setup).
- My Electron color scheme from Atom. I made themes for [Hyper](https://github.com/mikemcbride/hyper-electron-highlighter), [Terminal, and iTerm 2](https://github.com/mikemcbride/electron-terminal-colors). Admittedly I don't keep the Terminal/iTerm versions updated since I don't use those apps.

Here's what all of that looks like in Hyper:

![my hyper theme and setup](./hyper.png)

I have spent quite a bit of time setting up some configs, aliases, and functions that I find to be really useful. Here are a few of my favorites (find the rest of them on GitHub in my dotfiles):

- I have a function that when I `cd` into a directory it immediately runs `ls -la` so I can see what's in there. This might be my favorite.
- alias `afk` starts my screensaver
- alias `bitly` followed by a URL runs a Python script to get the shortened link and copies it to my clipboard. Mostly useful for [Rickrolling](https://en.wikipedia.org/wiki/Rickrolling) people.
- alias `weather` gets the current weather in your area - try it out! Run `curl wttr.in` in your own terminal.
- alias `please` = `sudo`. Stole this idea from [Paul Irish](https://github.com/paulirish/dotfiles), but I can't seem to find it in his dotfiles anymore.
- alias `resource` re-sources my `.zshrc` if I've made changes
- alias `rm` = `trash`. I installed [trash-cli](https://github.com/sindresorhus/trash-cli), so setting `rm` equal to `trash` means instead of losing something forever when I run `rm`, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.
- alias `gpub` = `git push -u origin $(git_current_branch)`. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.

## Desktop Applications

I use a variety of other desktop applications to get things done. I'll elaborate a little on why I chose some of them, especially in lieu of other popular applications. If you can install the app via [Homebrew Cask](https://caskroom.github.io/) I will include the install command.

- **IntelliJ Idea** - when I'm working on Java/Grails APIs and not doing front-end code, this is the IDE our company uses. It's pretty nice.
- **Firefox** - Got a massive revamp in late 2017 and it's amazing. Beautiful UI, dev tools are great (not quite as good as Chrome, but good enough, plus their CSS Grid inspector is lit), and blazing fast. `brew cask install firefox`
- **Notes** - I don't use Evernote anymore, despite it being fantastic and pretty much the de-facto note taking app. I switched when Apple updated the Notes app to have folders, checklist items, and embedded photos inside of notes (summer/fall 2015 I think?). You can share notes now too, so at this point it does everything I used Evernote for anyway.
- **Reminders** - I used Wunderlist for years and loved it, then realized that Reminders could do everything I needed in a todo list app, plus being able to add items to my lists via Siri is a huge benefit. I can even share lists with my wife, like a grocery list, and we can both add/remove items.
- **Tweetbot** - I love Twitter, and I use it as my primary source of news/information, but I can't stand the ads and their official desktop app wasn't updated for years. Years ago I got Tweetbot for iOS and fell in love. Then they came out with the desktop app, and it's awesome. Ever since I started using the desktop app, I find that I keep up with it much better.
- **Kap** - Great app for doing screen captures with options for exporting as a GIF or video file. Super useful for showing UI changes in GitHub PRs. [[website](https://getkap.co/)] [[download](https://getkap.co/download)] `brew cask install kap`
- **Slack** - basically the go-to app for team collaboration. I like it pretty well. Slackbots are fun to build when you have some free time. `brew cask install slack`
- **Spotify** - I don't have the premium version because I have a few playlists on iTunes of music I ACTUALLY PURCHASED (WHAT?!? PEOPLE STILL DO THAT??). Mostly I listen to the music I already have because I like it, but occasionally I like a change of pace and check out some new stuff. Spotify is good for that. If I ever convince my wife to let us budget for a premium family membership for Spotify I'd likely use it a lot, but the ads are really brutal in the free version. You get maybe 2 songs between ads. `brew cask install spotify`
- **Spectacle** - This might be the most underrated app ever. Windows computers have some handy built-in capabilities for managing your application window placement, but macOS doesn't have that. Spectacle gives you keyboard shortcuts for rearranging and resizing your windows. I will never be able to use a Mac without this app. [[website](https://www.spectacleapp.com/)] `brew cask install spectacle`
- **Robo3T** - Previously Robomongo. I use it for interacting with MongoDBs. Pretty solid. `brew cask install robo3t`
- **Postman** - use it for making HTTP calls to test APIs. Pretty great app. Has some built-in features to allow you to do load testing and all kinds of other nifty things. `brew cask install postman`
- **LastPass** - I use LastPass for password management across all my devices. I pay $12 per year for premium service because previously that's the only way you could get access on all devices. That feature is now free, but premium gives me a family sharing folder so my wife and I can both use it. `brew cask install lastpass`

## Desk Setup

### Desk at work:

- I have two 23" HP monitors mounted on monitor arms mounted to a really nice sit/stand desk.
- My laptop (15" MBP) sits beneath the two monitors, centered on the desk.
- I have [a cheap pair of headphones](https://smile.amazon.com/Panasonic-Headphones-RP-HJE120-K-Comfort-Fit-Compatible/dp/B003EM6AOG/ref=sr_1_1?ie=UTF8&qid=1474258166&sr=8-1&keywords=panasonic%2Bheadphones&th=1) that I love so much I bought 3 more and keep a pair everywhere I might need them. One on my desk, one in my bag, one in my night stand at home so I can watch YouTube videos/listen to podcasts while my wife reads, and one with my running/workout stuff.
- When I'm not standing, I sit on a [buoy stool](http://moddea.com/2013/06/20/buoy-multifunctional-chair/). My company had a few of them sitting around our building and I snagged one instead of using a normal desk chair. I love it. I have bad posture and this helps a lot.

### Desk at home:

- I have one 23" Acer monitor
- To the left of the monitor, my laptop (156" MBP) sits on top of an [mStand by Rain Design](http://smile.amazon.com/Rain-Design-10032-mStand-Laptop/dp/B000OOYECC). I love it. It also helps keep the laptop cool so it doesn't overheat.
- I use an [Apple wired keyboard](http://smile.amazon.com/Apple-Keyboard-Compatible-v-10-6-8-MB110LL/dp/B005DPF08E) and [Apple touchpad](http://smile.amazon.com/Apple-MJ2R2LL-A-Magic-Trackpad/dp/B016QO5YWC) - that touchpad link is for the newer model, which I don't have. I went with a wired keyboard because it was cheaper and I only use it at my desk, so I don't need to worry about the wire. Plus the number pad is nice to have. I love the gestures on the MacBook touchpad, so I opted for the Magic Trackpad instead of a Magic Mouse, but I do hear excellent things about the mouse.
- I have some Logitech speakers and subwoofer that I plug into my laptop most of the time when I want to listen to music. If I need to get on a call or be quieter, I have a pair of Apple headphones I plug in.
- The desk itself is an IKEA table top (61" beech wood, don't remember the name) mounted on a frame I built out of black steel pipes from Lowe's.
- I have two glass dry erase boards on the wall next to my desk. They were also from IKEA, and look a lot nicer than they really are. So far I'm not super impressed. We have some glass dry erase boards at work that are way better to write on (but also probably 10x more expensive).
- I sit on a cheap-ish desk chair. Nothing to write home about, but it's comfortable and doesn't give me any issues.
