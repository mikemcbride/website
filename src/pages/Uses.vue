<template lang="html">
  <Layout>
    <h1 class="text-4xl font-medium mb-4">Uses</h1>
    <p>Inspired by <a href="https://wesbos.com/uses/" target="_blank" rel="nofollow noreferrer">Wes Bos</a>, this page details the things I use to stay productive. Let's dive in.</p>

    <h2 class="font-semibold text-xl">Editor</h2>

    <blockquote class="italic text-lg text-grey-darker dark:text-grey-dark leading-relaxed">
      Time is a huge factor in staying productive. Your editor is the one tool you spend most of yours in and you should invest in optimizing your workflow skills. You'll benefit from them every day.
      <div class="text-right -mt-2">&ndash;&nbsp;<a href="https://twitter.com/addyosmani" target="_blank" rel="nofollow noreferrer">Addy Osmani</a></div>
    </blockquote>

    <ul class="mb-8">
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a class="text-black dark:text-white font-bold underline" href="https://code.visualstudio.com" target="_blank" rel="nofollow noreferrer">VS Code</a>
        </p>
        <p>
          I am probably one of the last people to make the switch to VS Code. I was a super early adopter of Atom and was heavily invested in the community and ecosystem, having written a few themes and plugins and contributing to a few core packages. I endured performance issues for years because I loved the customizability. When VS Code started becoming popular, I was very hesitant to switch. A new project started up in the Atom organization to re-write the editor component. It was incredibly promising. Being written in Rust and doing all the heavy lifting on the server, it had incredible performance even on large files. Combined with the new tree-sitter parsing system for syntax higlighting, it had so much potential. But the project (called x-ray), got shut down. I was done holding out hope at that point. I had tried VS Code a few different times in the past and it never stuck. I finally gave in and made the switch and have been pretty happy with it. The intellisense is very impressive, and while I still don't think it's quite as polished as Atom, the performance is generally much better and it's got a wonderful ecosystem. If x-ray ever becomes a reality, I'll jump back to Atom in a heartbeat but for now I'm sticking with VS Code.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a class="text-black dark:text-white font-bold underline" href="https://marketplace.visualstudio.com/items?itemName=mikemcbride.electron-highlighter" target="_blank" rel="noreferrer nofollow">Electron Highlighter Syntax</a>
        </p>
        <p>
          I wrote my own theme. It's a slightly more vibrant version of Atom's One Dark syntax theme that I've customized to my liking. I have spent way more time on this theme than I care to admit.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a class="text-black dark:text-white font-bold underline" href="https://fonts.google.com/specimen/Fira+Mono" target="_blank" rel="nofollow noreferrer">Fira Mono</a>
        </p>
        <p>
          Fira Mono is my font in both the editor and terminal. It's free on Google Fonts. There's also Fira Code which is the same font but with coding ligatures if you're into that sort of thing.
        </p>
      </li>
    </ul>
<!-- 
  TODO: these are outdated after switching to VS Code. Update them or just ditch the section entirely.
    <h3 class="font-semibold">Plugins</h3>
    <p>Here are a handful of the plugins I use in my editor that I find especially useful:</p>
    <ul class="mb-8">
      <li class="mb-2"><a href="https://atom.io/packages/autocomplete-paths" target="_blank">autocomplete-paths</a> - gives you file path completion inside the editor.</li>
      <li class="mb-2"><a href="https://atom.io/packages/file-icons" target="_blank">file-icons</a> - adds icons (and optional colors) to files to better visual grepping.</li>
      <li class="mb-2"><a href="https://atom.io/packages/emmet" target="_blank">emmet</a> - powerful snippet completion for HTML. See <a href="http://emmet.io" target="_blank" rel="nofollow noreferrer">Emmet</a> for more info if you're unfamiliar with Emmet.</li>
      <li class="mb-2"><a href="https://atom.io/packages/vim-mode-plus" target="_blank">vim-mode-plus</a> - I like vim a lot, but I love the features you get from a code editor like Atom. A vim plugin gives me the best of both worlds.</li>
      <li class="mb-2"><a href="https://atom.io/packages/sync-settings" target="_blank">sync-settings</a> - super useful package, especially if you use Atom on multiple machines. This allows you to back up and restore your settings to/from a Gist linked to your GitHub account. It will sync your installed packages, settings, init script, stylesheet, keymap, and snippets.</li>
      <li class="mb-2"><a href="https://atom.io/packages/set-syntax" target="_blank">set-syntax</a> - a package that adds syntax switching options to the command palette instead of having to remember the keybinding to open the panel for switching syntax.</li>
      <li class="mb-2"><a href="https://atom.io/packages/editorconfig" target="_blank">editorconfig</a> - helps developers maintain consistent coding styles between different editors.</li>
      <li class="mb-2"><a href="https://atom.io/packages/autocomplete-modules" target="_blank">autocomplete-modules</a> - provides autocomplete on packages in <code>node_modules</code></li>
      <li class="mb-2"><a href="https://atom.io/packages/less-than-slash" target="_blank">less-than-slash</a> - auto-close HTML tag when you type <code>&lt;/</code></li>
    </ul>
     -->
    <h2 class="font-semibold text-xl">Terminal</h2>

    <ul>
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a href="https://hyper.is/" class="text-black dark:text-white font-bold underline" target="_blank" rel="nofollow noreferrer">Hyper</a>
        </p>
        <p>
           It's super easy to customize and more performant than iTerm in a number of benchmark tests.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a href="https://fishshell.com" class="text-black dark:text-white font-bold underline" target="_blank" rel="nofollow noreferrer">fish</a>
        </p>
        <p>
           Fish is my shell. Much better than bash in my opinion. I used zsh for years (both oh-my-zsh and prezto) and fish is a much more enjoyable experience. The intelligent autocomplete has changed my life. It's amazing. Also super easy to customize. It used to have a lot of incompatibilities with bash scripts which was annoying because you couldn't copy them and run them, but many of these things have been made compatible so it's much better than it used to be.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1">
          <a href="https://github.com/mikemcbride/hyper-electron-highlighter" class="text-black dark:text-white font-bold underline" target="_blank" rel="nofollow noreferrer">Hyper Electron Highlighter</a>
        </p>
        <p>
           This theme is my Electron color scheme from Atom, ported to Hyper.
        </p>
      </li>
    </ul>

    <p>Here are a few of my favorite aliases I've set up:</p>

    <ul class="mb-8">
      <li class="mb-2"><code>afk</code> starts my screensaver</li>
      <li class="mb-2"><code>bitly</code> followed by a URL runs a Python script to get the shortened link and copies it to my clipboard. Mostly useful for <a href="https://en.wikipedia.org/wiki/Rickrolling" target="_blank" rel="nofollow noreferrer">Rickrolling</a> people.</li>
      <li class="mb-2"><code>weather</code> gets the current weather in your area - try it out! Run <code>curl wttr.in</code> in your own terminal.</li>
      <li class="mb-2"><code>please</code> = <code>sudo</code>. Stole this idea from <a href="https://github.com/paulirish/dotfiles" target="_blank" rel="noreferrer nofollow">Paul Irish</a>, but I can't seem to find it in his dotfiles anymore.</li>
      <li class="mb-2"><code>resource</code> re-sources my shell if I've made changes</li>
      <li class="mb-2"><code>rm</code> = <code>trash</code>. I installed <a href="https://github.com/sindresorhus/trash-cli" target="_blank" rel="nofollow noreferrer">trash-cli</a>, so setting <code>rm</code> equal to <code>trash</code> means instead of losing something forever when I run <code>rm</code>, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.</li>
      <li class="mb-2"><code>gpub</code> = <code>git push -u origin $(git_current_branch)</code>. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.</li>
    </ul>
    
    <h2 class="font-semibold text-xl">Desktop Applications</h2>

    <p>I use a variety of other desktop applications to get things done. I'll elaborate a little on why I chose some of them, especially in lieu of other popular applications. If you can install the app via <a href="https://formulae.brew.sh/cask" target="_blank" rel="noreferrer nofollow">Homebrew Cask</a> I will include the install command.</p>

    <ul class="mb-8">
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Brave Browser
        </p>
        <p>
          Brave is a browser that puts your privacy first and automatically blocks trackers and ads. I always loved the idea - especially because it made many sites load faster - but there were a few things that kept me away, mostly extensions. In late 2018 they switched from their own browser shell, called Muon, and began using Chromium, and along with that change we got access to every Chrome extension and the Chrome dev tools. I switched immediately and never looked back. At this point, it's essentially Chrome without Google tracking everything you do, plus built-in ad-blocking. <code>brew cask install brave-browser</code>
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Apple Notes
        </p>
        <p>
          I was using Bear for a while and it's really great (LOVE the markdown support), but ultimately I switched back to Apple Notes because I can't have shared notes with my wife in Bear. If they ever add that, I'll probably switch back.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Reminders
        </p>
        <p>
          I used Wunderlist for years and loved it, then realized that Reminders could do everything I needed in a todo list app, plus being able to add items to my lists via Siri is a huge benefit. I can even share lists with my wife, like a grocery list, and we can both add/remove items.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Tweetbot
        </p>
        <p>
          I love Twitter, and I use it as my primary source of news/information, but I can't stand the ads and their official desktop app wasn't updated for years. Years ago I got Tweetbot for iOS and fell in love. Then they came out with the desktop app, and it's awesome. Ever since I started using the desktop app, I find that I keep up with it much better.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Kap
        </p>
        <p>
          Great app for doing screen captures with options for exporting as a GIF or video file. Super useful for showing UI changes in GitHub PRs. [<a href="https://ketcap.co" target="_blank" rel="noreferrer nofollow">website</a>, <a href="https://getkap.co/download" target="_blank" rel="nofollow noreferrer">download</a>] <code>brew cask install kap</code>
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Slack
        </p>
        <p>
          basically the go-to app for team collaboration. I like it pretty well. Slackbots are fun to build when you have some free time. <code>brew cask install slack</code>
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Spectacle
        </p>
        <p>
          This might be the most underrated app ever. Windows computers have some handy built-in capabilities for managing your application window placement, but macOS doesn't have that. Spectacle gives you keyboard shortcuts for rearranging and resizing your windows. I will never be able to use a Mac without this app. [<a href="https://www.spectacleapp.com/" target="_blank" rel="nofollow noreferrer">website</a>] <code>brew cask install spectacle</code>
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Insomnia
        </p>
        <p>
          A REST client, used for testing API calls. I used to use Postman for a REST client, but I came across Insomnia and it's really great. It also has excellent GraphQL support. <code>brew cask install insomnia</code>
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          MongoDB Compass
        </p>
        <p>
          I use it for interacting with Mongo databases. It's pretty solid.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          1Password
        </p>
        <p>
          I use 1Password for password management across all my devices. I pay about $60 a year for a Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate.
        </p>
      </li>
      <li class="mb-2">
        <p class="leading-normal mb-1 font-bold">
          Apple Mail
        </p>
        <p>
          I was using Newton Mail for a few months but it's pretty pricy ($49 per year) and there were still a few bugs that would drive me nuts. Apple Mail is super stable and compatible with basically every type of email service. If Newton gets a little more polished I could see myself switching back.
        </p>
      </li>
    </ul>
    
    <h2 class="font-semibold text-xl">Desk Setup</h2>

    <h3 class="font-semibold">At work:</h3>

    <ul>
      <li>I have two 23" HP monitors mounted on monitor arms mounted to a really nice sit/stand desk that I didn't pay for.</li>
      <li>My laptop (15" MBP) sits beneath the two monitors, centered on the desk.</li>
      <li>I use <a href="https://apple.com/airpods/" target="_blank" rel="nofollow noreferrer">Apple AirPods</a> and can't recommend them enough.</li>
      <li>When I'm not standing, I sit on a <a href="http://moddea.com/2013/06/20/buoy-multifunctional-chair/" target="_blank" rel="nofollow noreferrer">buoy stool</a>. My company had a few of them sitting around our building and I snagged one instead of using a normal desk chair. I love it. I have bad posture and this helps a lot.</li>
      <li>I use an <a href="https://smile.amazon.com/Apple-Keyboard-Wireless-Rechargable-English/dp/B016QO64FI" target="_blank" rel="nofollow noreferrer">Apple Magic Keyboard</a> and <a href="http://smile.amazon.com/Apple-MJ2R2LL-A-Magic-Trackpad/dp/B016QO5YWC" target="_blank" rel="nofollow noreferrer">Apple Magic Trackpad</a>. I love the gestures on the MacBook touchpad, so I opted for the Magic Trackpad instead of a Magic Mouse, but I do hear excellent things about the mouse.</li>
    </ul>
    
    <h3 class="font-semibold">At home:</h3>

    <ul>
      <li>I have one 23" Acer monitor</li>
      <li>To the left of the monitor, my laptop (15" MBP) sits on top of an <a href="http://smile.amazon.com/Rain-Design-10032-mStand-Laptop/dp/B000OOYECC" target="_blank" rel="nofollow noreferrer">mStand by Rain Design</a>. I love it. It also helps keep the laptop cool so it doesn't overheat.</li>
      <li>I have some Logitech speakers and subwoofer that I plug into my laptop most of the time when I want to listen to music. If I need to get on a call or be quieter, I have a pair of Apple headphones I plug in.</li>
      <li>The desk itself is an IKEA table top (61" beech wood, don't remember the name) mounted on a frame I built out of black steel pipes from Lowe's.</li>
      <li>I have two glass dry erase boards on the wall next to my desk. They were also from IKEA, and look a lot nicer than they really are. So far I'm not super impressed. We have some glass dry erase boards at work that are way better to write on (but also probably 10x more expensive).</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  name: 'Uses',
  metaInfo: {
    title: 'Uses'
  }
}
</script>