<template>
  <HorizontalPad>
    <header class="pt-6 sm:pt-12 mb-8">
      <div class="flex justify-between items-center">
        <g-link to="/" class="block font-semibold text-black text-3xl">Mike McBride</g-link>
      </div>
    </header>
  </HorizontalPad>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'

export default {
  name: 'SiteHeader',
  components: {
    HorizontalPad,
  }
}
</script>
