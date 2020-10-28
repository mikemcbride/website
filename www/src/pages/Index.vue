<template>
  <Layout>
    <section class="md:flex">
      <div class="text-center mb-8 mt-4 md:mr-8">
        <Avatar />
      </div>
      <div>
        <h1 class="md:mt-4 mb-4 text-4xl inline-block font-sans font-black">
          Hey there! <span class="inline-block mx-1">👋</span> I'm Mike.
        </h1>
        <div class="leading-loose text-lg lg:text-xl text-gray-800">
          <p class="mb-32">
            And this is my website. I worked really hard on it just for you (yes, YOU), so I hope you like it. Let's
            get to know each other... I'll start.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-48">
      <h2 class="font-sans font-bold text-3xl mb-4 text-black">About Me</h2>
      <p class="leading-loose text-lg lg:text-xl text-gray-800">
        I am a web developer from St. Louis, MO, where I live with
        <a
          class="text-blue underline hover:text-hot-pink hover:underline"
          href="https://instagram.com/putting.on.love"
          rel="noopener noreferrer nofollow"
          >my wife</a>
        and our four children. I enjoy running, LSU football, reading, keyboard
        shortcuts<OxfordCommaJoke /> and Oxford commas.
      </p>
    </section>
    <LikesDislikes />
    <section class="w-1/3 text-gray-400 mx-auto mb-20">
        <Divider class="w-full" />
    </section>
    <WhatOthersAreSaying />
  </Layout>
</template>

<script>
import Avatar from '@/components/Avatar'
import OxfordCommaJoke from '@/components/OxfordCommaJoke'
import ArrowLine from '@/components/ArrowLine'
import LikesDislikes from '@/components/LikesDislikes'
import WhatOthersAreSaying from '@/components/WhatOthersAreSaying'
import Divider from '@/components/Divider'

export default {
  name: 'Home',
  components: {
    Avatar,
    OxfordCommaJoke,
    ArrowLine,
    LikesDislikes,
    WhatOthersAreSaying,
    Divider,
  },
  metaInfo: {
    title: 'About',
  },
}
</script>
