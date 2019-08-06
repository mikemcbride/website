<template>
  <header class="py-6 sm:py-12">
    <g-link to="/" class="block text-black font-bold text-2xl lg:text-3xl mb-2">Mike McBride</g-link>
    <nav class="block site-nav text-xs">
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
    </nav>
  </header>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  name: 'SiteHeader',
  components: {
    NavLink,
  },
}
</script>
