<template functional>
  <g-link
    class="text-black inline-block ml-4 pb-1 no-underline border-b-2"
    :class="{'font-medium border-black': props.active === true, 'border-transparent hover:text-blue': props.active === false}"
    :to="props.to">
    {{ props.title }}
  </g-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    active: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>