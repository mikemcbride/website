<template functional>
  <g-link
    class="inline-block mr-4 md:mr-6 mb-4 md:mb-0 font-semibold md:font-medium md:tracking-wider md:pb-2 md:border-b-2 border-transparent"
    :class="{
      'text-default border-default': props.active === true,
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
.active { color: var(--app-text); opacity: .9; }
.inactive { color: var(--app-gray); }
.inactive:hover { color: var(--app-text); }
</style>
