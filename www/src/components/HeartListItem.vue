<template>
  <li class="flex items-baseline leading-relaxed">
      <span class="inline-block text-hot-pink w-4 h-4 mr-3 pt-1">
          <Heart class="w-full" />
      </span>
      <div class="flex-1">
          <slot></slot>
      </div>
  </li>
</template>

<script>
import Heart from '@/components/icons/Heart'

export default {
  name: 'HeartListItem',
  components: {
    Heart,
  },
}
</script>
