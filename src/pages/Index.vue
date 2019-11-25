<template>
  <Layout>
    <section class="post-content md:flex">
      <div class="text-center mb-8 mt-4 md:mr-8">
        <span class="inline-block overflow-hidden border border-faded h-32 w-32 rounded-full dynamic-shadow">
          <Avatar class="w-full h-full rounded-full" />
        </span>
      </div>
      <p class="mb-8 md:mt-4">
        Hey there! I'm Mike. I'm a web developer based out of St. Louis, MO, 
        where I live with <a href="https://putting-on-love.com" target="_blank" rel="nofollow noreferrer noopener">my amazing wife</a> and our
        <span class="line-through mr-1">daughter</span>
        <span class="line-through">two</span> three children.
        I enjoy running, LSU football, good whiskey, hiking, and reading.
        I am slightly obsessed with keyboard shortcuts and productivity hacks.
      </p>
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