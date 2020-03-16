<template lang="html">
  <div class="fixed top-0 left-0 bg-blue dark:bg-blue-light" :style="progress"></div>
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
      return (this.scrollY / this.offset) * 100
    },
    progress() {
      return `height: 2px; width: ${this.calculatedWidth}%`
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