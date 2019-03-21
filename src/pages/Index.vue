<template>
  <Layout>
    <section class="post-content">
      <div class="text-center mb-8 mt-4">
        <span class="inline-block overflow-hidden p-1 h-32 w-32 rounded-full shadow border border-grey-light">
          <img
            v-if="supportsWebp !== null"
            :src="imageUrl"
            class="w-full h-full rounded-full border border-grey-lightest" />
        </span>
      </div>
      <p class="mb-8">
        Hey there! I'm Mike. I'm a web developer based out of St. Louis, MO, 
        where I live with <a href="https://putting-on-love.com" target="_blank" rel="nofollow noreferrer noopener">my amazing wife</a> and our
        <span class="line-through mr-1">daughter</span>
        <span class="line-through">two</span> three children.
        I enjoy running, LSU football, good whiskey, hiking, and reading.
        I am slightly obsessed with keyboard shortcuts and productivity hacks.
      </p>
      <p>
        The easiest place to find and reach me is <a :href="settings.twitterUrl" target="_blank" rel="nofollow noreferrer noopener">Twitter</a>, or if you'd prefer, you can <a :href="`mailto:${settings.email}`">send me an email</a>.
      </p>
    </section>
  </Layout>
</template>

<script>
import Bowser from 'bowser'
import settings from '@/data/settings'

export default {
  name: 'Home',
  data() {
    return {
      settings: settings,
      supportsWebp: null
    }
  },
  computed: {
    imageUrl() {
      if (this.supportsWebp === null) {
        return ''
      }
      
      const urlBase = 'https://res.cloudinary.com/mikemcbride/image/upload'
      const imageName = 'v1553193958/profile_pic'
      let options = ''
      let format = ''
      
      if (this.supportsWebp === true) {
        // use WebP image format
        options = 'c_scale,w_118'
        format = 'webp'
      } else {
        // fall back to progressive jpeg
        options = 'c_scale,fl_progressive,q_60,w_118'
        format = 'jpg'
      }
      
      return `${urlBase}/${options}/${imageName}.${format}`
    }
  },
  mounted() {
    const browser = Bowser.getParser(window.navigator.userAgent)
    
    // these browsers support the webp image format.
    // if our browser matches this, use webp since it's better.
    // otherwise, we will fall back to a progressive jpeg.
    const conditions = {
      chrome: '>=32',
      firefox: '>=65',
      edge: '>=18',
      opera: '>=19'
    }
    
    this.supportsWebp = browser.satisfies(conditions) === true
  }
}
</script>
