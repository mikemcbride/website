<template>
  <header class="pa3 pa4-ns mb4 sans-serif">
    <nav class="f6 fw4 db site-nav mw7 center ph3 tr">
      <NavLink to="/" :active="false" title="Home" v-if="$route.path !== '/'" />
      <NavLink to="/about" :active="$route.path.startsWith('/about')" title="About" />
      <NavLink to="/work" :active="$route.path.startsWith('/work')" title="Work" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
    </nav>
  </header>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  name: 'SiteHeader',
  components: {
    NavLink
  }
}
</script>
