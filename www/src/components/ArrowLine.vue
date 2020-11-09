<template>
  <div class="absolute">
      <ArrowHead class="arrow-head w-4 transform rotate-180 -mt-1 absolute right-0 -translate-x-1/2" />
      <LoopyLine class="mr-1" />
      <slot></slot>
  </div>
</template>

<script>
import ArrowHead from '@/components/icons/ArrowHead'
import LoopyLine from '@/components/icons/LoopyLine'
export default {
  name: 'ArrowLine',
  components: {
    ArrowHead,
    LoopyLine,
  },
}
</script>
