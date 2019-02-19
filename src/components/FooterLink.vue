<template functional>
  <a
    class="inline-flex no-underline justify-center items-center text-grey hover:text-grey-darker px-1 mx-1"
    :href="props.to"
    :title="props.title">
    <span class="h-8 w-8 inline-block">
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