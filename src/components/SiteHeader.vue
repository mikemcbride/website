<template>
  <header class="py-6 sm:py-12">
    <div class="flex justify-between items-center mb-3">
      <g-link to="/" class="block font-semibold text-default text-2xl">Mike McBride</g-link>
      <ToggleDarkMode class="h-8 w-8 hidden md:block" />
      <button class="block md:hidden w-8 h-8 p-0 bg-transparent text-default" @click="toggleNav">
        <Bars v-if="!navOpen" />
        <Close v-else />
      </button>
    </div>
    <!-- mobile nav -->
    <nav class="mobile-nav z-10 inset-x-0 bottom-0 fixed flex flex-col md:hidden pl-4 text-lg" v-if="navOpen">
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
      <NavLink to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
      <button
        class="inline-block mb-4 p-0 text-left text-default font-semibold text-lg bg-transparent"
        @click="toggleDarkMode">
        Toggle dark mode
      </button>
    </nav>
    
    <!-- desktop nav -->
    <nav class="hidden md:block text-sm">
      <NavLink to="/" :active="$route.path === '/'" title="About" />
      <NavLink to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
      <NavLink to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
      <NavLink to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
    </nav>
  </header>
</template>

<script>
import NavLink from '@/components/NavLink'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Bars from '@/components/Bars'
import Close from '@/components/Close'

export default {
  name: 'SiteHeader',
  components: {
    NavLink,
    ToggleDarkMode,
    Bars,
    Close
  },
  computed: {
    navOpen() {
      return this.$store.state.navOpen
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode', this.$el)
    },
    toggleNav() {
      this.$store.commit('toggleNav')
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  background: var(--app-bg);
  top: 92px;
  
  a {
    color: var(--app-text)
  }
}
</style>