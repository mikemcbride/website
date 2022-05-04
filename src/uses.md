---
layout: post
title: Uses
back_url: /extras
---

Inspired by [Wes Bos](https://wesbos.com/uses/), this page details the things I use to stay productive. Let's dive in.

## Editor & Terminal

- Most of the time now my editor is Vim. I used VS Code for years but finally made the jump after using a vim plugin inside VS Code. Depending on the project or my needs at the moment, I'll still jump into VS Code as I'm still figuring out parts of my Vim workflow.
- My theme in terminal, Vim, and VS Code is [gruvbox-material](https://github.com/sainnhe/gruvbox-material)
- My font in my editor and terminal is [MonoLisa](https://monolisa.dev). It's also the monospace font you see on this website. It's highly readable and looks excellent. If I have to stare at a font all day, it's worth paying for one I enjoy looking at. For my terminal, I used the nerd-font font patcher script to add a bunch of extra icons to it.
- I use [iTerm2](https://iterm2.com) for my terminal. It's a great improvement over the default macOS terminal.
- [Fish](https://fishshell.com) is my shell. I used zsh for years (both oh-my-zsh and prezto) and fish is a much more enjoyable experience. The intelligent autocomplete has changed my life.
- I use a terminal prompt called [Starship](https://starship.rs). It's built in Rust so it's super fast, and customizing is done via a TOML file so it's dead simple to make it look exactly how you want. I can't recommend it highly enough.

I have a lot of terminal aliases and scripts to help me be more
productive. Here are a few of my favorites:

- `afk` starts my screensaver
- `weather` gets the current weather in your area - try it out! Run `curl wttr.in` in your own terminal.
- `please` = `sudo`. Stole this idea from [Paul Irish](https://github.com/paulirish/dotfiles), but I can't seem to find it in his dotfiles anymore.
- `rm` = `trash`. I installed [trash-cli](https://github.com/sindresorhus/trash-cli), so setting `rm` equal to `trash` means instead of losing something forever when I run `rm`, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.
- `gpub` = `git push -u origin $(git_current_branch)`. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.

## Desktop Apps

- [Firefox](https://firefox.com) is my browser. I occasionally use Brave or Opera to test out Chromium stuff, but mostly stick with Firefox. `brew install --cask firefox`, `brew install --cask opera` and `brew install --cask brave-browser`
- [Kap](https://getkap.co) is the best app I've found for doing screen captures. You can easily export them to MP4 or GIF. Super useful for showing UI changes in GitHub PRs.`brew install --cask kap`
- I use [Rectangle](https://rectangleapp.com) for window management. It gives you keyboard shortcuts for rearranging and resizing your windows, and also gives you "window snapping", where if you drag a window to a certain edge of the screen it will snap to fill part of the screen. I will never be able to use a Mac without this app again. `brew install --cask rectangle`
- [Insomnia](https://insomnia.rest) is an excellent REST client, used for testing API calls that also has top notch GraphQL support. `brew install --cask insomnia`
- I use [1Password](https://1password.com) for password management across all my devices, and at this point I think it's safe to say that I couldn't live without it. I use the Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate.
- [Alfred](https://alfredapp.com) for launching apps, [emoji picker](/writing/alfred-emoji), dark/light mode toggle, lorem ipsum generator, snippet manager, clipboard history, and all sorts of other useful stuff. `brew install --cask alfred`

## Desk Setup

- I have one 23" HP monitor that work gave us when we went remote. It's mounted to the wall with a swivel wall mount I got on Amazon. I'm looking to upgrade to a 27" at some point.
- To the left of my monitor, my laptop (currently a 16" M1 Pro MacBook) sits on a [Curve stand by TwelveSouth](https://www.twelvesouth.com/products/curve-for-macbook). It frees up desk space and is really minimal.
- I have some **AudioTechnica over-ear headphones** when I'm in meetings or listening to music. The model I have isn't available anymore, but [this model](https://www.audio-technica.com/en-us/headphones/type/over-ear/ath-m40x) looks to be pretty much the same thing.
- I have a [Tonor USB Microphone](https://www.amazon.com/Microphone-TONOR-Podcasting-Compatible-TC30/dp/B08CVP2HXP) for meetings. It's pretty affordable and gives better sound quality than the built-in laptop mic.
- I use a Logitech webcam that work provided. Even a cheap webcam has far superior video quality than the built-in camera on the MacBooks.
- I use an [Apple Magic Keyboard](https://smile.amazon.com/Apple-Keyboard-Wireless-Rechargable-English/dp/B016QO64FI) and [Apple Magic Trackpad](http://smile.amazon.com/Apple-MJ2R2LL-A-Magic-Trackpad/dp/B016QO5YWC). I love the gestures on the MacBook touchpad, so I opted for the Magic Trackpad instead of a Magic Mouse, but I do hear excellent things about the mouse.
- I have [this light](https://www.amazon.com/gp/product/B07YFY7H7J) set up behind my monitor and webcam for better lighting on video calls. I built my desk into a shallow closet in my bedroom and the lighting situation is awful. If I don't have this turned on during meetings, my face is totally dark.
- The desk itself is one that I custom built. When we moved in 2020, our master bedroom had a walk-in closet and a smaller closet with sliding doors. We didn't need both, and I needed an office, so I ripped out the shelves, painted the interior of the closet, and built a desk that mounts inside the walls. I used 2x4's for the frame and made a slab from a few pieces of pine that I then glued up, stained, and sealed. It's worked out really well.
