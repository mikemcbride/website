<template>
  <header class="py-6 sm:py-12 mb-6">
    <div class="flex justify-between items-center mb-3 mb-8">
      <g-link to="/" class="block font-semibold text-black dark:text-white text-2xl">Mike McBride</g-link>
      <ToggleDarkMode class="h-8 w-8 block" />
    </div>

    <nav class="block text-base sticky top-0">
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
      <NavLink to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
      <div class="border-b border-grey-light dark:border-grey-darkest -ml-4 sm:-ml-16 lg:-ml-24 w-screen -mt-px"></div>
    </nav>
  </header>
</template>

<script>
import NavLink from '@/components/NavLink'
import ToggleDarkMode from '@/components/ToggleDarkMode'

export default {
  name: 'SiteHeader',
  components: {
    NavLink,
    ToggleDarkMode
  }
}
</script>
