<template>
  <div class="bg-white text-black dark:bg-black dark:text-white w-full font-mono text-lg min-h-screen flex flex-col leading-tight">
    <SiteNav />
    <transition name="fade" appear>
      <HorizontalPad class="flex-1">
        <main role="main" class="w-full flex-auto">
          <slot />
        </main>
      </HorizontalPad>
    </transition>
    <SiteFooter/>
  </div>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    HorizontalPad,
    SiteNav,
    SiteFooter
  },
  mounted() {
    const { timeZone, locale } = Intl.DateTimeFormat().resolvedOptions()
    const { pathname } = window.location
    fetch('/api/pageview', {
      method: 'POST',
      body: JSON.stringify({ timeZone, locale, pathname }),
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .4s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
