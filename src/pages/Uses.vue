<template lang="html">
  <Layout>
    <h1 class="text-4xl font-medium mb-4">Uses</h1>
    <p>Inspired by <a href="https://wesbos.com/uses/" target="_blank">Wes Bos</a>, this page details the things I use to stay productive. Let's dive in.</p>

    <h2 class="font-semibold text-lg">Editor</h2>

    <blockquote class="italic text-lg text-gray leading-relaxed">
      Time is a huge factor in staying productive. Your editor is the one tool you spend most of yours in and you should invest in optimizing your workflow skills. You'll benefit from them every day.
      <div class="text-right -mt-2">&ndash;&nbsp;<a href="https://twitter.com/addyosmani" target="_blank" rel="nofollow noreferrer">Addy Osmani</a></div>
    </blockquote>

    <ul class="mb-8">
      <li class="mb-2"><a class="font-bold underline hover:text-blue" href="https://atom.io" target="_blank" rel="nofollow noreferrer">Atom</a> - no, I don't use VS Code. I realize I'm in the minority here and I constantly get asked why I'm not using VS Code, but I've been using Atom since it was in it's earliest days and I have invested a lot in both my set up and the community. I've written a handful of themes and plugins and heavily customized my editor. Any time I've tried switching to VS Code I end up switching back within days because I'm just not as productive and the switch doesn't seem worth it to me.</li>
      <li class="mb-2"><a class="font-bold underline hover:text-blue" href="https://atom.io/themes/electron-highlighter-syntax" target="_blank" rel="noreferrer nofollow">Hyper Electron Highlighter</a> - I wrote my own theme (see screenshot below). It's a slightly more vibrant version of Atom's One Dark syntax theme that I've customized to my liking.</li>
      <g-image
        src="https://res.cloudinary.com/mikemcbride/image/upload/c_scale,f_auto,w_576,q_auto,dpr_auto/atom"
        class="w-full"
        alt="color scheme for my code editor" />
      <li class="mb-2"><a class="font-bold underline hover:text-blue" href="https://fonts.google.com/specimen/Fira+Mono" target="_blank" rel="nofollow noreferrer">Fira Mono</a> is my font in both the editor and terminal. It's free on Google Fonts.</li>
    </ul>

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
      <li class="mb-2"><a href="https://atom.io/packages/autocomplete-modules" target="_blank">autocomplete-modules</a> - provides autocomplete on packages in <code class="text-pink">node_modules</code></li>
      <li class="mb-2"><a href="https://atom.io/packages/less-than-slash" target="_blank">less-than-slash</a> - auto-close HTML tag when you type <code class="text-pink">&lt;/</code></li>
    </ul>
    
    <h2 class="font-semibold text-lg">Terminal</h2>

    <ul>
      <li class="mb-2"><a href="https://hyper.is/" class="font-bold underline hover:text-blue" target="_blank" rel="nofollow noreferrer">Hyper</a> - It's super easy to customize and more performant than iTerm in a number of benchmark tests.</li>
      <li class="mb-2"><a href="https://fishshell.com" class="font-bold underline hover:text-blue" target="_blank" rel="nofollow noreferrer">fish</a> as my shell. Much better than bash in my opinion. The intelligent autocomplete has changed my life. It's amazing. Also super easy to customize.</li>
      <li class="mb-2"><a href="https://github.com/mikemcbride/hyper-electron-highlighter" class="font-bold underline hover:text-blue" target="_blank" rel="nofollow noreferrer">Hyper Electron Highlighter</a> theme. It's my Electron color scheme from Atom, ported to Hyper.</li>
    </ul>

    <g-image
      src="https://res.cloudinary.com/mikemcbride/image/upload/c_scale,f_auto,w_576,q_auto,dpr_auto/hyper"
      class="w-full"
      alt="my hyper theme and setup" />

    <p>Here are a few of my favorite aliases I've set up:</p>

    <ul class="mb-8">
      <li class="mb-2"><code class="text-pink">afk</code> starts my screensaver</li>
      <li class="mb-2"><code class="text-pink">bitly</code> followed by a URL runs a Python script to get the shortened link and copies it to my clipboard. Mostly useful for <a href="https://en.wikipedia.org/wiki/Rickrolling" target="_blank" rel="nofollow noreferrer">Rickrolling</a> people.</li>
      <li class="mb-2"><code class="text-pink">weather</code> gets the current weather in your area - try it out! Run <code class="text-pink">curl wttr.in</code> in your own terminal.</li>
      <li class="mb-2"><code class="text-pink">please</code> = <code class="text-pink">sudo</code>. Stole this idea from <a href="https://github.com/paulirish/dotfiles" target="_blank" rel="noreferrer nofollow">Paul Irish</a>, but I can't seem to find it in his dotfiles anymore.</li>
      <li class="mb-2"><code class="text-pink">resource</code> re-sources my shell if I've made changes</li>
      <li class="mb-2"><code class="text-pink">rm</code> = <code class="text-pink">trash</code>. I installed <a href="https://github.com/sindresorhus/trash-cli" target="_blank" rel="nofollow noreferrer">trash-cli</a>, so setting <code class="text-pink">rm</code> equal to <code class="text-pink">trash</code> means instead of losing something forever when I run <code class="text-pink">rm</code>, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.</li>
      <li class="mb-2"><code class="text-pink">gpub</code> = <code class="text-pink">git push -u origin $(git_current_branch)</code>. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.</li>
    </ul>
    
    <h2 class="font-semibold text-lg">Desktop Applications</h2>

    <p>I use a variety of other desktop applications to get things done. I'll elaborate a little on why I chose some of them, especially in lieu of other popular applications. If you can install the app via <a href="https://formulae.brew.sh/cask" target="_blank" rel="noreferrer nofollow">Homebrew Cask</a> I will include the install command.</p>

    <ul class="mb-8">
      <li class="mb-2"><span class="font-bold">Brave Browser</span> - Brave is a browser that puts your privacy first and automatically blocks trackers and ads. I always loved the idea - especially because it made many sites load faster - but there were a few things that kept me away, mostly extensions. In late 2018 they switched from their own browser shell, called Muon, and began using Chromium, and along with that change we got access to every Chrome extension and the Chrome dev tools. I switched immediately and never looked back. At this point, it's essentially Chrome without Google tracking everything you do, plus built-in ad-blocking. <code class="text-pink">brew cask install brave-browser</code></li>
      <li class="mb-2"><span class="font-bold">Apple Notes</span> - I was using Bear for a while and it's really great (LOVE the markdown support), but ultimately I switched back to Apple Notes because I can't have shared notes with my wife in Bear. If they ever add that, I'll probably switch back.</li>
      <li class="mb-2"><span class="font-bold">Reminders</span> - I used Wunderlist for years and loved it, then realized that Reminders could do everything I needed in a todo list app, plus being able to add items to my lists via Siri is a huge benefit. I can even share lists with my wife, like a grocery list, and we can both add/remove items.</li>
      <li class="mb-2"><span class="font-bold">Tweetbot</span> - I love Twitter, and I use it as my primary source of news/information, but I can't stand the ads and their official desktop app wasn't updated for years. Years ago I got Tweetbot for iOS and fell in love. Then they came out with the desktop app, and it's awesome. Ever since I started using the desktop app, I find that I keep up with it much better.</li>
      <li class="mb-2"><span class="font-bold">Kap</span> - Great app for doing screen captures with options for exporting as a GIF or video file. Super useful for showing UI changes in GitHub PRs. [<a href="https://ketcap.co" target="_blank" rel="noreferrer nofollow">website</a>, <a href="https://getkap.co/download" target="_blank" rel="nofollow noreferrer">download</a>] <code class="text-pink">brew cask install kap</code></li>
      <li class="mb-2"><span class="font-bold">Slack</span> - basically the go-to app for team collaboration. I like it pretty well. Slackbots are fun to build when you have some free time. <code class="text-pink">brew cask install slack</code></li>
      <li class="mb-2"><span class="font-bold">Spectacle</span> - This might be the most underrated app ever. Windows computers have some handy built-in capabilities for managing your application window placement, but macOS doesn't have that. Spectacle gives you keyboard shortcuts for rearranging and resizing your windows. I will never be able to use a Mac without this app. [<a href="https://www.spectacleapp.com/" target="_blank" rel="nofollow noreferrer">website</a>] <code class="text-pink">brew cask install spectacle</code></li>
      <li class="mb-2"><span class="font-bold">Insomnia</span> - A REST client, used for testing API calls. I used to use Postman for a REST client, but I came across Insomnia and it's really great. It also has excellent GraphQL support. <code class="text-pink">brew cask install insomnia</code></li>
      <li class="mb-2"><span class="font-bold">Robo3T</span> - Previously Robomongo. I use it for interacting with MongoDBs. Pretty solid. <code class="text-pink">brew cask install robo3t</code></li>
      <li class="mb-2"><span class="font-bold">LastPass</span> - I use LastPass for password management across all my devices. I pay $48 per year for a Family Plan because it gives me a family sharing folder so my wife and I can both use it, and also has an emergency access so if I die, someone can get access to my account and get my passwords if necessary. <code class="text-pink">brew cask install lastpass</code></li>
      <li class="mb-2"><span class="font-bold">Apple Mail</span> - I was using Newton Mail for a few months but it's pretty pricy ($49 per year) and there were still a few bugs that would drive me nuts. Apple Mail is super stable and compatible with basically every type of email service, and it's reportedly getting some nice new features in Fall 2019.</li>
    </ul>
    
    <h2 class="font-semibold text-lg">Desk Setup</h2>

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

<style scoped>
code::before,
code::after {
  content: '`';
}
</style>
