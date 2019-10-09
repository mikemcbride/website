<template functional>
  <a
    class="inline-block text-sm mx-2"
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

<style scoped>
a { color: var(--app-gray); }
a:hover { color: var(--app-text); }
</style>