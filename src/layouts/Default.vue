<template>
  <div class="w-full text-black font-sans min-h-screen flex flex-col sm:pl-16 lg:pl-24 px-4 leading-tight">
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
  }
}
</script>