<template functional>
  <g-link
    class="near-black dib ml3 pb1 no-underline-hover bb bw1"
    :class="{'fw5 b--near-black': props.active === true, 'b--transparent hover-blue': props.active === false}"
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