<template lang="html">
  <a :href="to" rel="nofollow noreferrer" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
