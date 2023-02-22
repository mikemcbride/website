---
layout: post
title: Uses
back_url: /lists
---

Inspired by [Wes Bos](https://wesbos.com/uses/), this page details the things I use to stay productive. Let's dive in.

Last updated: February 21, 2023

## Editor & Terminal

- My editor is [Neovim](https://github.com/neovim/neovim).
- My theme is [Tokyo Night](https://github.com/folke/tokyonight.nvim). I made a theme called [Electron Highlighter](/electron-highlighter) and spent an absurd amount of time on it and eventually came to realize I didn't want to keep tweaking it or making versions of it for new apps. Tokyonight is great, and there are plugins for lots of applications.
- My font in my editor and terminal switches between [Berkeley Mono](https://berkeleygraphics.com) and [MonoLisa](https://monolisa.dev). Berkeley Mono feels like a font from the early days of computers and I freaking love it (it's the font you see on this website). Mono Lisa is highly readable and looks excellent. Both fonts are an aboslute joy to use. If I have to stare at a font all day, it's worth paying for one I enjoy looking at. For my terminal, I used the [nerd-font font patcher script](https://github.com/ryanoasis/nerd-fonts/blob/master/font-patcher) to add a bunch of extra icons to it.
- I use [Kitty](https://sw.kovidgoyal.net/kitty/) for my terminal. I used iTerm for a very long time, but what sold me on Kitty was how every option is in a single config file, so it's super portable, and it's also cross-platform. The single config file works great for my dotfiles setup.
- I use zsh as my shell, specifically oh-my-zsh. Their plugin system makes it super easy to add functionality.
- I use a terminal prompt called [Starship](https://starship.rs). It's built in Rust so it's super fast (nobody likes slow terminal prompts), and customizing is done via a TOML file so it's dead simple to make it look exactly how you want. I can't recommend it highly enough.

I have a lot of terminal aliases and scripts to help me be more
productive. Here are a few of my favorites:

- `afk` starts my screensaver
- `weather` gets the current weather in your area - try it out! Run `curl wttr.in` in your own terminal.
- `please` = `sudo`. Stole this idea from [Paul Irish](https://github.com/paulirish/dotfiles), but I can't seem to find it in his dotfiles anymore.
- `rm` = `trash`. I installed [trash-cli](https://github.com/sindresorhus/trash-cli), so setting `rm` equal to `trash` means instead of losing something forever when I run `rm`, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.
- `gpub` = `git push -u origin $(git_current_branch)`. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.

## Desktop Apps

I used to prefer having desktop apps for everything, but these days I try not to use too many apps, and generally prefer to use web apps for most things (because portability). Things like Notion and email that I could use an app for I just use the web app. Most of my time is spent in a browser, terminal, or Slack (I tried Slack in the browser and just couldn't make it stick. Might give it another go sometime). Here's the rest:

- For my browser, I'm using [Arc](https://arc.net) from [The Browser Company](https://thebrowser.company). It's still in early release. It's Chromium based, but is a totally rethought browser experience. I'm absolutely loving it. Before Arc I used [Firefox](https://firefox.com) for years.  `brew install --cask firefox`
- I use [1Password](https://1password.com) for password management across all my devices, and at this point I think it's safe to say that I couldn't live without it. I use the Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate.
- I use [Raycast](https://raycast.com) for launching apps, emoji picker, dark/light mode toggle, lorem ipsum generator, snippet manager, clipboard history, window management, and a confetti cannon (seriously). It took a lot for me to leave Alfred but Raycast is really incredible. `brew install --cask raycast`
- [Kap](https://getkap.co) is the best app I've found for doing screen captures (for videos only - the builtin macOS screenshot utility is perfectly fine for screenshots). You can easily export them to MP4 or GIF. Super useful for showing UI changes in GitHub PRs.`brew install --cask kap`
- [Insomnia](https://insomnia.rest) is an excellent REST client, used for testing API calls that also has top notch GraphQL support. `brew install --cask insomnia`

## Desk Setup

- I have a 32" 4K curved monitor mounted to the wall with a swivel wall mount.
- To the left of my monitor, my laptop (currently a 16" MacBook Pro) sits on a [Curve stand by TwelveSouth](https://www.twelvesouth.com/products/curve-for-macbook). It frees up desk space and is really minimal.
- I use a [ZSA Moonlander](https://zsa.io/moonlander) keyboard.
- I use [HyperX Cloud Alpha](https://smile.amazon.com/gp/product/B074NBSF9N/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8) gaming headphones. I'm fully remote and have these on nearly all day, so comfort is super important, and they are ridiculously comfortable.
- I use the microphone built in to my headphones.
- I use a Logitech C920x webcam. Any standalone webcam will be a significant upgrade over the builtin webcam on your laptop.
- I'm currently in the process of renovating an unfinished area of my basement and converting it to my office. So right now my desk is a folding table. The ultimate goal is a 72" IKEA table top mounted to Fully Jarvis adjustable desk frame, with the monitor and my laptop sitting on mounts. I'll post pictures eventually.
