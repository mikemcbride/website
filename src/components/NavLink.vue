<template functional>
  <g-link
    class="inline-block mr-4 md:mr-6 mb-4 md:mb-0 md:uppercase font-semibold md:tracking-wider"
    :class="{
      'text-default': props.active === true,
      'inactive text-gray': props.active === false
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

<style scoped>
.active { color: var(--app-text); }
.inactive { color: var(--app-gray); }
.inactive:hover { color: var(--app-text); }
</style>
