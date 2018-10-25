<template>
  <Layout>
    <section class="post-content">
      <p class="mb4 mt4">
        I am a web developer based out of St. Louis, MO, 
        where I live with <a href="https://putting-on-love.com" target="_blank" rel="nofollow noreferrer noopener">my amazing wife</a> and our
        <span class="strike mr1">daughter</span>
        <span class="strike">two</span> three children.
        I enjoy running, LSU football, good whiskey, hiking, and reading.
        I am slightly obsessed with keyboard shortcuts and productivity hacks.
      </p>
      <p>
        The easiest place to find and reach me is <a :href="settings.social.twitter" target="_blank" rel="nofollow noreferrer noopener">Twitter</a>.
        I will occasionally pick up freelance projects, so if you're interested in working with or hiring me,
        you can feel free to <a :href="`mailto:${settings.social.email}`">get in touch</a>!
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
