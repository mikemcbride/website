<template>
  <div
    class="main-layout w-full font-sans text-lg min-h-screen flex flex-col sm:pl-16 lg:pl-24 px-4 leading-tight"
    :class="{
      'dark-mode': theme === 'dark',
      'light-mode': theme === 'light',
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
    theme() {
      return this.$store.state.theme
    },
    navOpen() {
      return this.$store.state.navOpen
    }
  }
}
</script>

<style>
.main-layout {
  background-color: var(--app-bg);
  color: var(--app-text);
}
</style>