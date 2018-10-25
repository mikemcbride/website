<template functional>
  <g-link
    class="near-black dib ml3 no-underline-hover"
    :class="{'fw5': props.active === true, 'gray hover-blue': props.active === false}"
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