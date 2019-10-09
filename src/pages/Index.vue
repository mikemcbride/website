<template>
  <Layout>
    <section class="post-content">
      <div class="text-center mb-8 mt-4">
        <span class="inline-block overflow-hidden p-1 h-32 w-32 rounded-full shadow-md">
          <g-image
            src="https://res.cloudinary.com/mikemcbride/image/upload/c_scale,f_auto,fl_progressive,q_auto,w_118/profile_pic"
            class="w-full h-full rounded-full"
            alt="Picture of Mike" />
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
    </section>
  </Layout>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'About'
  }
}
</script>
