<template>
  <header class="pa3 pa4-ns mb4 sans-serif">
    <nav class="f6 fw4 db site-nav mw7 center ph3">
      <g-link
        class="near-black dib pv2 bb bw1 b--transparent no-underline-hover"
        :class="{'fw5': true, 'silver hover-near-black': false}"
        to="/">Home
      </g-link>
      <a class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover {% if page.url == '/about/' %}fw5{% else %}silver hover-near-black{% endif %}" href="{{ site.baseurl }}/about/">About</a>
      <a class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover {% if page.url == '/work/' %}fw5{% else %}silver hover-near-black{% endif %}" href="{{ site.baseurl }}/work/">Work</a>
      <a class="near-black dib pv2 ml3 bb bw1 b--transparent no-underline-hover {% if page.url == '/blog/' or page.type == 'post' %}fw5{% else %}silver hover-near-black{% endif %}" href="{{ site.baseurl }}/blog/">Blog</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  
}
</script>

<style scoped>

</style>