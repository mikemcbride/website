<template>
  <a
    class="font-sans font-bold text-aqua hover:underline leading-normal transform inline-block text-base md:text-lg mx-4"
    :href="to"
    :title="title">
    {{ title }}
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
  },
}
</script>
