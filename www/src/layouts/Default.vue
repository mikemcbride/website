<template>
    <div class="bg-white text-black dark:bg-black dark:text-white w-full font-mono text-lg min-h-screen flex flex-col leading-tight">
        <KonamiCode />
        <SiteNav />
        <HorizontalPad class="flex-1">
        <main role="main" class="w-full flex-auto">
            <slot />
        </main>
        </HorizontalPad>
        <SiteFooter/>
    </div>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import KonamiCode from '@/components/KonamiCode'

export default {
  components: {
    HorizontalPad,
    SiteNav,
    SiteFooter,
    KonamiCode,
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
