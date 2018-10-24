<template>
  <header class="pa3 pa4-ns mb4 sans-serif">
    <nav class="f6 fw4 db site-nav mw7 center ph3">
      <g-link
        class="near-black dib pv2 bb bw1 b--transparent no-underline-hover"
        :class="{
          'fw5': $route.path === '/',
          'silver hover-near-black': $route.path !== '/'
        }"
        to="/">Home
      </g-link>
      <g-link
        class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover"
        :class="{
          'fw5': $route.path === '/about',
          'silver hover-near-black': $route.path !== '/about',
        }"
        to="/about">About</g-link>
      <g-link
        class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover"
        :class="{
          'fw5': $route.path === '/work',
          'silver hover-near-black': $route.path !== '/work',
      }"to="/work">Work</g-link>
      <g-link
        class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover"
        :class="{
          'fw5': $route.path.indexOf('/blog') === 0,
          'silver hover-near-black': $route.path.indexOf('/blog') !== 0
        }"
        to="/blog">Blog</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>

</style>