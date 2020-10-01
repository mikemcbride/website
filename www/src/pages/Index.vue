<template>
  <Layout>
    <section class="post-content md:flex">
      <div class="text-center mb-8 mt-4 md:mr-8">
        <Avatar />
      </div>
      <div>
          <h1 class="text-3xl font-semibold mb-4 md:mt-4">Hey there! 👋 I'm Mike.</h1>
          <p class="mb-8">
              I'm a web developer based out of St. Louis, MO,
              where I live with <a href="https://instagram.com/putting.on.love" target="_blank" rel="nofollow noreferrer noopener">my amazing wife</a>
              and our four children. I love running, LSU football, reading, keyboard shortcuts, and Oxford commas.
          </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'Home',
  components: {
    Avatar,
  },
  metaInfo: {
    title: 'About'
  }
}
</script>
