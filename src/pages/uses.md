---
layout: '../layouts/Post.astro'
title: Uses
back_url: /lists
---

Inspired by [Wes Bos](https://wesbos.com/uses/), this page details the things I use to stay productive. Let's dive in.

Last updated: Feburary 20, 2025

## Editor & Terminal

- My editor is [Neovim](https://github.com/neovim/neovim). 
- I made a theme called [Electron Highlighter](https://electron-highlighter.github.io) and have spent an absurd amount of time on it. I have made this theme for a bunch of different apps, and use it pretty much everywhere that I can use a theme.
- My font in my editor and terminal is JetBrains Mono.
- I use [Rex](https://www.superlogical.com/rex/docs/installation) for my terminal.
- I use fish as my shell. It is fast, has really killer autocomplete suggestions, and the scripting feels a lot less archaic than zsh or bash.
- I use a terminal prompt called [Starship](https://starship.rs). It is built in Rust so it's very fast to render, it has support for a ton of different shells, and customizing is done via a TOML file so it's dead simple to make it look exactly how you want. I can't recommend it highly enough.

I have a lot of terminal aliases and scripts to help me be more
productive. Here are a few of my favorites:

- `afk` starts my screensaver
- `weather` gets the current weather in your area - try it out! Run `curl wttr.in` in your own terminal.
- `please` = `sudo`. Stole this idea from [Paul Irish](https://github.com/paulirish/dotfiles), but I can't seem to find it in his dotfiles anymore.
- `rm` = `trash`. I installed [trash-cli](https://github.com/sindresorhus/trash-cli), so setting `rm` equal to `trash` means instead of losing something forever when I run `rm`, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.
- `gpub` = `git push -u origin $(git_current_branch)`. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.

## Desktop Apps

I used to prefer having desktop apps for everything, but these days I try not to use too many apps, and generally prefer to use web apps for most things (because portability). Things like Notion and email that I could use an app for I just use the web app. Most of my time is spent in a browser or terminal. Here's the rest:

- For my browser, I'm using [Dia](https://diabrowser.com) from [The Browser Company](https://thebrowser.company). Still very sad that they killed Arc though. RIP.
- I use [1Password](https://1password.com) for password management across all my devices, and at this point I think it's safe to say that I couldn't live without it. I use the Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate.
- I use [Raycast](https://raycast.com) for launching apps, emoji picker, dark/light mode toggle, lorem ipsum generator, snippet manager, clipboard history, window management, and a confetti cannon (seriously), and AI chats. `brew install --cask raycast`

## Desk Setup

- My desk is an IKEA countertop that I cut down to 84" mounted to Fully Jarvis adjustable desk frame. Unfortunately, Fully was purchased by another company and no longer sells the frame-only model.
- I have a 32" [Benq monitor designed for programming](https://www.benq.com/en-us/monitor/programming.html) mounted to the desk with Fully Jarvis dual adjustable monitor arms.
- To the left of my monitor, my laptop (currently a 16" MacBook Pro) sits on a laptop stand attachment to the dual monitor arms.
- I use a [Dygma Defy](https://dygma.com/pages/defy) keyboard mounted to my desk on adjustable arms. This is my main keyboard but I have a few others I like to use as well. ZSA Moonlander and Dygma Sensei are great too.
- I use Apple AirPods Max for headphones. Easily connects to my laptop, and I can get up and walk around during meetings.
- I use an [Elgato Wave 3](https://www.elgato.com/us/en/p/wave-3) microphone with a pop filter.
- I use an [OBSBOT Meet 2 webcam](https://www.obsbot.com/store/products/meet-2) for my camera.
- I use a [Logitech MX Master 4](https://www.logitech.com/en-us/shop/p/mx-master-4) bluetooth mouse. I like that Logitech has software for mapping the different keys to Mac-specific actions that I typically use trackpad gestures for (like switching between desktops or Mission Control).
- I have two Logitech Litra Glow lights mounted behind my monitor. My office is in the unfinished part of my basement, and the lighting is horrible for video calls. These help a lot.
