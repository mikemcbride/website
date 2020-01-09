<template functional>
  <g-link
    class="inline-block mr-4 md:mr-6 mb-0 font-medium tracking-wider pb-2 border-b-2 border-transparent"
    :class="{
      'text-default border-default': props.active === true,
      'text-gray hover:text-default': props.active === false
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

