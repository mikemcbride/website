<template>
  <div class="bg-white text-black dark:bg-black dark:text-white w-full font-sans text-lg min-h-screen flex flex-col leading-tight">
    <SiteHeader />
    <SiteNav />
    <transition name="fade" appear>
      <HorizontalPad>
        <main role="main" class="w-full flex-auto max-w-xl">
          <slot />
        </main>
      </HorizontalPad>
    </transition>
    <SiteFooter/>
  </div>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import SiteHeader from '@/components/SiteHeader'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    HorizontalPad,
    SiteHeader,
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