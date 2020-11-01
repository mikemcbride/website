<template>
  <Layout>
    <section class="md:flex">
      <div class="text-center mb-8 mt-4 md:mr-8">
        <Avatar />
      </div>
      <div>
        <p class="md:mt-4 mb-4 text-4xl inline-block font-sans font-black">
          Hey there! <span class="inline-block mx-1">👋</span> I'm Mike.
        </p>
        <div class="leading-loose text-lg md:text-xl text-gray-800">
          <p class="mb-32">
            And this is my website. I worked really hard on it just for you (yes, YOU), so I hope you like it. Let's
            get to know each other... I'll start.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-48">
      <PageHeader header-text="About Me" />
      <div class="leading-loose text-lg md:text-xl text-gray-800">
        I'm a web developer from St. Louis, MO, where I live with
        <ExternalLink class="text-blue underline hover:text-hot-pink hover:underline" to="https://instagram.com/putting.on.love">my wife</ExternalLink>
        and our four children. I enjoy running, LSU football, reading, Oxford commas<OxfordCommaJoke /> and keyboard shortcuts.
      </div>
    </section>
    <LikesDislikes />
    <section class="w-1/2 md:w-1/3 text-gray-400 mx-auto mb-20">
        <Divider class="w-full" />
    </section>
    <WhatOthersAreSaying />
    <p class="leading-loose text-lg md:text-xl text-gray-800 mb-12">
         I like meeting new people. If you do too, you can hit me up on <ExternalLink class="text-blue underline hover:text-hot-pink hover:underline" to="https://twitter.com/_mcbridem_">Twitter</ExternalLink> and return the favor. If you're still not sure, you can keep browsing this site and make up your mind. Maybe <g-link class="text-blue underline hover:text-hot-pink hover:underline" to="/projects">check out some stuff I've built</g-link> or <g-link class="text-blue underline hover:text-hot-pink hover:underline" to="/blog">read some words I've written</g-link>. If you really like it, you can <g-link class="text-blue underline hover:text-hot-pink hover:underline" to="/feed.json">subscribe to my RSS feed</g-link> to get notified of new posts whenever I get around to actually writing things. It won't be often, but I promise I'll try to make it worth your time.
    </p>
    <p class="mb-24 text-lg md:text-xl">Thanks for stopping by!</p>
  </Layout>
</template>

<script>
import Avatar from '@/components/Avatar'
import OxfordCommaJoke from '@/components/OxfordCommaJoke'
import LikesDislikes from '@/components/LikesDislikes'
import WhatOthersAreSaying from '@/components/WhatOthersAreSaying'
import Divider from '@/components/Divider'
import PageHeader from '@/components/PageHeader'
import ExternalLink from '@/components/ExternalLink'

export default {
  name: 'Home',
  components: {
    Avatar,
    OxfordCommaJoke,
    LikesDislikes,
    WhatOthersAreSaying,
    Divider,
    PageHeader,
    ExternalLink,
  },
  metaInfo: {
    title: 'About',
  },
}
</script>
