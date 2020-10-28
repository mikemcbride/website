<template>
  <span class="relative">,
      <ArrowLine class="top-0 w-12 transform -translate-x-1/2 left-1/2 mt-8 text-aqua -ml-4">
        <span class="absolute bottom-0 left-0 ml-2 w-48 transform -translate-x-1/2 translate-y-full text-xs italic font-mono text-hot-pink">(see what I did there?)</span>
      </ArrowLine>
  </span>
</template>

<script>
import ArrowLine from '@/components/ArrowLine'
export default {
  name: 'OxfordCommaJoke',
  components: {
    ArrowLine
  },
}
</script>
