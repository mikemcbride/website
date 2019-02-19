<template>
  <Layout>
    <section class="post-content">
      <p class="my-8">
        I am a web developer based out of St. Louis, MO, 
        where I live with <a href="https://putting-on-love.com" target="_blank" rel="nofollow noreferrer noopener">my amazing wife</a> and our
        <span class="line-through mr-1">daughter</span>
        <span class="line-through">two</span> three children.
        I enjoy running, LSU football, good whiskey, hiking, and reading.
        I am slightly obsessed with keyboard shortcuts and productivity hacks.
      </p>
      <p>
        The easiest place to find and reach me is <a :href="settings.social.twitter" target="_blank" rel="nofollow noreferrer noopener">Twitter</a>, or if you'd prefer, you can <a :href="`mailto:${settings.social.email}`">send me an email</a>.
      </p>
    </section>
  </Layout>
</template>

<script>
import settings from '@/data/settings'

export default {
  name: 'About',
  data() {
    return {
      settings: settings
    }
  }
}
</script>
