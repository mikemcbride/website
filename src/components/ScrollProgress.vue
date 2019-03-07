<template lang="html">
  <div class="fixed pin-t pin-l h-05 bg-blue" :style="progressWidth"></div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      scrollY: 0,
      offset: 1
    }
  },
  computed: {
    progressWidth() {
      let pct = (this.scrollY / this.offset) * 100
      return `width: ${pct}%`
    }
  },
  mounted() {
    this.offset = document.body.clientHeight - window.innerHeight
    this.scrollY = window.scrollY
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  },
}
</script>