<template lang="html">
  <nav class="block text-base pt-4 bg-white dark:bg-black mb-6 sm:mb-12">
    <HorizontalPad>
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
      <NavLink to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
    </HorizontalPad>
    <div class="border-b border-grey-light dark:border-grey-darkest w-screen -mt-px"></div>
  </nav>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import NavLink from '@/components/NavLink'

export default {
  name: 'SiteNav',
  components: {
    HorizontalPad,
    NavLink,
  },
}
</script>
