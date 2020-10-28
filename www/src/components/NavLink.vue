<template>
  <g-link
    class="relative inline-block px-4 py-1"
    :to="to">
    <span v-if="active === true" class="transform top-1/2 -translate-y-1/2 absolute left-0 w-full text-blue">
        <CircleSolidWide />
    </span>
    <span class="z-10 relative inline-block font-mono font-medium tracking-wider transform" :class="{
      'text-blue -rotate-2': active === true,
      'text-black hover:text-hot-pink': active === false
    }">
        {{ title }}
    </span>
  </g-link>
</template>

<script>
import CircleSolidWide from '@/components/icons/CircleSolidWide'

export default {
  name: "NavLink",
  components: {
    CircleSolidWide,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
