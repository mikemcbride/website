<template>
  <HorizontalPad>
    <header class="pt-6 sm:pt-12 mb-8">
      <div class="flex justify-between items-center">
        <g-link to="/" class="block font-semibold text-black dark:text-white text-2xl">Mike McBride</g-link>
        <ToggleDarkMode class="h-8 w-8 block" />
      </div>
    </header>
  </HorizontalPad>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import ToggleDarkMode from '@/components/ToggleDarkMode'

export default {
  name: 'SiteHeader',
  components: {
    HorizontalPad,
    ToggleDarkMode
  }
}
</script>
