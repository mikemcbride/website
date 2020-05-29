<template>
  <div class="bg-white text-black dark:bg-black dark:text-white w-full font-sans text-lg min-h-screen flex flex-col leading-tight">
    <SiteHeader />
    <SiteNav />
    <HorizontalPad>
      <main role="main" class="w-full flex-auto max-w-xl">
        <slot />
      </main>
    </HorizontalPad>
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
  }
}
</script>