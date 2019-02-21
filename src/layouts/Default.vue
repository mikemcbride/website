<template>
  <div class="w-full max-w-lg mx-auto px-4 text-black font-sans min-h-screen flex flex-col">
    <SiteHeader />
    <main role="main" class="w-full flex-auto">
      <slot />
    </main>
    <SiteFooter />
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