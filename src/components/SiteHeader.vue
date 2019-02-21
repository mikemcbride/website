<template>
  <header class="p-4 md:p-8 mb-8">
    <nav class="text-sm font-normal block site-nav text-right">
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
