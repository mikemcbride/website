<template>
  <div
    class="main-layout w-full font-sans text-lg min-h-screen flex flex-col sm:pl-16 lg:pl-24 px-4 leading-tight"
    :class="{
      'dark-mode': useDarkMode === true,
      'light-mode': useDarkMode !== true,
      'overflow-y-hidden h-screen': navOpen === true
    }">
    <SiteHeader />
    <main role="main" class="w-full flex-auto max-w-xl">
      <slot />
    </main>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  computed: {
    useDarkMode() {
      return this.$store.state.useDarkMode
    },
    navOpen() {
      return this.$store.state.navOpen
    }
  },
  mounted() {
    if (this.useDarkMode === null) {
      let themePref = window.getComputedStyle(this.$el).getPropertyValue('--app-bg').trim()
      this.$store.commit('setDarkMode', themePref !== '#fff')
    }
  },
  methods: {
    toggleDarkMode() {
      this.useDarkMode = !this.useDarkMode
    }
  },
}
</script>

<style>
.main-layout {
  background-color: var(--app-bg);
  color: var(--app-text);
}
</style>