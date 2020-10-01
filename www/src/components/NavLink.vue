<template functional>
  <g-link
    class="inline-block mr-4 md:mr-6 mb-0 font-medium tracking-wider pb-2 border-b-2 border-transparent"
    :class="{
      'text-black dark:text-white border-black dark:border-white': props.active === true,
      'text-grey-darker hover:text-black dark:text-grey-dark dark-hover:text-white': props.active === false
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

