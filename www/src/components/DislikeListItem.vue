<template>
  <li class="flex items-baseline leading-relaxed">
      <span class="inline-block text-purple-600 w-4 h-4 mr-3 pt-1">
          <XBrush class="w-full" />
      </span>
      <div class="flex-1">
          <slot></slot>
      </div>
  </li>
</template>

<script>
import XBrush from '@/components/icons/XBrush'

export default {
  name: 'DislikeListItem',
  components: {
    XBrush,
  },
}
</script>
