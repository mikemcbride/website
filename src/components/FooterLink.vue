<template functional>
  <a
    class="inline-block text-grey-dark hover:text-grey-darkest text-sm mx-2"
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