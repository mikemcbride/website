<template lang="html">
  <Layout>
        <PageHeader header-text="Uses" />
        <article class="prose lg:prose-xl">
        <p>Inspired by <a href="https://wesbos.com/uses/" target="_blank" rel="nofollow noreferrer">Wes Bos</a>, this page details the things I use to stay productive. Let's dive in.</p>

        <h2 class="font-semibold text-2xl">Editor</h2>

        <blockquote>
            Time is a huge factor in staying productive. Your editor is the one tool you spend most of yours in and you should invest in optimizing your workflow skills. You'll benefit from them every day.
            <div class="text-right -mt-1">&ndash;&nbsp;<a href="https://twitter.com/addyosmani" target="_blank" rel="nofollow noreferrer">Addy Osmani</a></div>
        </blockquote>

        <ul>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://code.visualstudio.com" target="_blank" rel="nofollow noreferrer">VS Code</a>
                    </strong>
                </p>
                <p>
                I am probably one of the last people to make the switch to VS Code. I'll probably do a write-up on why I switched, because it took a lot for me to leave Atom. For now, I'm really enjoying VS Code.
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://marketplace.visualstudio.com/items?itemName=mikemcbride.electron-highlighter" target="_blank" rel="noreferrer nofollow">Electron Highlighter Syntax</a>
                    </strong>
                </p>
                <p>
                I wrote my own theme. It's a slightly more vibrant version of Atom's One Dark syntax theme that I've customized to my liking. I have spent way more time on this theme than I care to admit.
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://monolisa.dev" target="_blank" rel="nofollow noreferrer">MonoLisa</a>
                    </strong>
                </p>
                <p>
                I have used a number of fonts over the years. MonoLisa is what I currently use in my editor and terminal. It's highly readable and looks excellent. If I have to stare at a font all day, it's worth paying for one I enjoy looking at.
            </p>
            </li>
        </ul>

        <h2 class="font-semibold text-2xl">Terminal</h2>

        <ul>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://hyper.is/" target="_blank" rel="nofollow noreferrer">Hyper</a>
                    </strong>
                </p>
                <p>
                Hyper is my terminal app. It's an electron app, so it's built with HTML, CSS, and JavaScript which is pretty impressive... and it's quite fast. Also, it looks gorgeous.
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://fishshell.com" target="_blank" rel="nofollow noreferrer">fish</a>
                    </strong>
                </p>
                <p>
                Fish is my shell. Much better than bash in my opinion. I used zsh for years (both oh-my-zsh and prezto) and fish is a much more enjoyable experience. The intelligent autocomplete has changed my life. It's amazing. Also super easy to customize. It used to have a lot of incompatibilities with bash scripts which was annoying because you couldn't copy them and run them, but many of these things have been made compatible so it's much better than it used to be.
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>
                        <a href="https://github.com/mikemcbride/hyper-electron-highlighter" target="_blank" rel="nofollow noreferrer">Hyper Electron Highlighter</a>
                    </strong>
                </p>
                <p>
                The theme is my Electron color scheme from Atom, ported to Hyper.
            </p>
            </li>
        </ul>

        <p>Here are a few of my favorite aliases I've set up:</p>

        <ul>
            <li>
                <p><code>afk</code> starts my screensaver</p>
            </li>
            <li>
                <p><code>bitly</code> followed by a URL runs a Python script to get the shortened link and copies it to my clipboard. Mostly useful for <a href="https://en.wikipedia.org/wiki/Rickrolling" target="_blank" rel="nofollow noreferrer">Rickrolling</a> people.</p>
            </li>
            <li>
                <p><code>weather</code> gets the current weather in your area - try it out! Run <code>curl wttr.in</code> in your own terminal.</p>
            </li>
            <li>
                <p><code>please</code> = <code>sudo</code>. Stole this idea from <a href="https://github.com/paulirish/dotfiles" target="_blank" rel="noreferrer nofollow">Paul Irish</a>, but I can't seem to find it in his dotfiles anymore.</p>
            </li>
            <li>
                <p><code>resource</code> re-sources my shell if I've made changes</p>
            </li>
            <li>
                <p><code>rm</code> = <code>trash</code>. I installed <a href="https://github.com/sindresorhus/trash-cli" target="_blank" rel="nofollow noreferrer">trash-cli</a>, so setting <code>rm</code> equal to <code>trash</code> means instead of losing something forever when I run <code>rm</code>, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.</p>
            </li>
            <li>
                <p><code>gpub</code> = <code>git push -u origin $(git_current_branch)</code>. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.</p>
            </li>
        </ul>

        <h2 class="font-semibold text-2xl">Desktop Applications</h2>

        <p>I use a variety of other desktop applications to get things done. I'll elaborate a little on why I chose some of them, especially in lieu of other popular applications. If you can install the app via <a href="https://formulae.brew.sh/cask" target="_blank" rel="noreferrer nofollow">Homebrew Cask</a> I will include the install command.</p>

        <ul>
            <li>
                <p class="mb-0">
                    <strong>Firefox</strong>
                </p>
                <p>
                I am a big fan of the open web. Mozilla is one of the few companies that still seems like an advocate for that. Firefox is super fast, it looks great, and unlike Chrome, they're not tracking everything I do so they can sell personalized ads. It's got build in ad and tracker blocking. <code>brew cask install firefox</code>
                </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>Notion</strong>
                </p>
                <p>
                Notion is where I organize notes on things I'm developing. I love that each project can have its own pages. It makes it super easy to organize things (and I'm notoriously not organized).
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>Kap</strong>
                </p>
                <p>
                Kep is the best app I've found for doing screen captures. You can easily export them to MP4 or GIF. Super useful for showing UI changes in GitHub PRs. [<a href="https://ketcap.co" target="_blank" rel="noreferrer nofollow">website</a>, <a href="https://getkap.co/download" target="_blank" rel="nofollow noreferrer">download</a>] <code>brew cask install kap</code>
                </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>Rectangle</strong>
                </p>
                <p>
                This might be the most underrated app ever. Rectangle gives you keyboard shortcuts for rearranging and resizing your windows, and also gives you "window snapping", where if you drag a window to a certain edge of the screen it will snap to fill part of the screen. I will never be able to use a Mac without this app again. [<a href="https://rectangleapp.com/" target="_blank" rel="nofollow noreferrer">website</a>] <code>brew cask install rectangle</code>
                </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>Insomnia</strong>
                </p>
                <p>
                A REST client, used for testing API calls. I previously used Postman for a REST client, but I came across Insomnia and it's really great. It also has excellent GraphQL support. <code>brew cask install insomnia</code>
                </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>MongoDB Compass</strong>
                </p>
                <p>
                A really solid desktop GUI for interacting with Mongo.
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>1Password</strong>
                </p>
                <p>
                I use 1Password for password management across all my devices, and at this point I think it's safe to say that I couldn't live without it. I use the Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate. [<a href="https://1password.com" target="_blank" rel="noreferrer nofollow">website</a>]
            </p>
            </li>
            <li>
                <p class="mb-0">
                    <strong>HEY</strong>
                </p>
                <p>
                HEY is a radically different approach to email, from the makers of Basecamp. It's definitely not for everyone, but I've been loving it. [<a href="https://hey.com" target="_blank" rel="noreferrer nofollow">website</a>]
            </p>
            </li>
        </ul>

        <h2 class="font-semibold text-2xl">Desk Setup</h2>

        <h3 class="font-medium text-xl">At work:</h3>

        <p class="text-hot-pink italic">Note: This isn't really relevant anymore since our company is working remotely due to the coronavirus.</p>

        <ul>
            <li>I have two 23" monitors mounted on monitor arms to a sit/stand desk that I didn't pay for.</li>
            <li>My laptop (15" MBP) sits beneath the two monitors, centered on the desk.</li>
            <li>I use <a href="https://apple.com/airpods/" target="_blank" rel="nofollow noreferrer">Apple AirPods</a> and can't recommend them enough.</li>
            <li>When I'm not standing, I sit on a <a href="http://moddea.com/2013/06/20/buoy-multifunctional-chair/" target="_blank" rel="nofollow noreferrer">buoy stool</a>. My company had a few of them sitting around our building and I snagged one instead of using a normal desk chair. I love it. I have bad posture and this helps a lot.</li>
            <li>I use an <a href="https://smile.amazon.com/Apple-Keyboard-Wireless-Rechargable-English/dp/B016QO64FI" target="_blank" rel="nofollow noreferrer">Apple Magic Keyboard</a> and <a href="http://smile.amazon.com/Apple-MJ2R2LL-A-Magic-Trackpad/dp/B016QO5YWC" target="_blank" rel="nofollow noreferrer">Apple Magic Trackpad</a>. I love the gestures on the MacBook touchpad, so I opted for the Magic Trackpad instead of a Magic Mouse, but I do hear excellent things about the mouse.</li>
        </ul>

        <h3 class="font-medium text-xl">At home:</h3>

        <ul>
            <li>I have one 23" Acer monitor</li>
            <li>To the left of the monitor, my laptop (15" MBP) sits on top of an <a href="http://smile.amazon.com/Rain-Design-10032-mStand-Laptop/dp/B000OOYECC" target="_blank" rel="nofollow noreferrer">mStand by Rain Design</a>. I love it. It also helps keep the laptop cool so it doesn't overheat.</li>
            <li>I have some Logitech speakers and subwoofer that I plug into my laptop most of the time when I want to listen to music.</li>
            <li>The desk itself is an IKEA table top mounted on a frame I built out of steel pipes that I spray painted black.</li>
        </ul>
    </article>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Uses',
  components: {
    PageHeader
  },
  metaInfo: {
    title: 'Uses'
  }
}
</script>
