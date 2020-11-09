<template lang="html">
  <div class="fixed top-0 inset-x-0 z-50">
      <div class="absolute top-0 inset-x-0 bg-gradient-to-r from-aqua to-blue z-10 h-1"></div>
      <div class="z-20 bg-white absolute right-0 top-0 h-1" :style="progress"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      scrollY: 0,
      clientHeight: 1,
      innerHeight: 0
    }
  },
  computed: {
    offset() {
      return this.clientHeight - this.innerHeight
    },
    calculatedWidth() {
      return 100 - ((this.scrollY / this.offset) * 100)
    },
    progress() {
      return `width: ${this.calculatedWidth}%`
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.innerHeight = window.innerHeight
      this.clientHeight = document.body.clientHeight
      this.scrollY = window.scrollY
    }
  },
}
</script>
