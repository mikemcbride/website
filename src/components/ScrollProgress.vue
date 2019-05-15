<template lang="html">
  <div class="fixed top-0 left-0 h-05 bg-blue" :style="progressWidth"></div>
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
    progressWidth() {
      return `width: ${(this.scrollY / this.offset) * 100}%`
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