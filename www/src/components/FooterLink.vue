<template functional>
  <a
    class="text-grey-darker hover:text-black dark:text-grey dark-hover:text-white inline-block text-sm mr-4"
    :href="props.to"
    :title="props.title">
    {{ props.title }}
  </a>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>