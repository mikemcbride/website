<template functional>
  <a
    class="inline-flex no-underline justify-center items-center gray ph1 mh1"
    :href="props.to"
    :title="props.title">
    <span class="h2 w2 dib">
      <slot />
    </span>
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

<style lang="scss" scoped>
a:hover {
  color: var(--blue);
}
</style>