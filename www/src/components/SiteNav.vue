<template lang="html">
  <nav class="z-20 block text-base pt-4 sticky top-0 bg-white dark:bg-black mb-6 sm:mb-12">
    <HorizontalPad>
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
      <NavLink to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
      <div class="border-b border-grey-light dark:border-grey-darkest -ml-4 sm:-ml-16 lg:-ml-24 w-screen -mt-px"></div>
    </HorizontalPad>
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