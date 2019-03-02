<template functional>
  <g-link
    class="inline-block mr-4 md:mr-6 uppercase font-medium tracking-wide no-underline hover:text-black"
    :class="{
      'text-black': props.active === true,
      'text-grey-dark': props.active === false
    }"
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
