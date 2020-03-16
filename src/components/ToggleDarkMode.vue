<template lang="html">
  <button @click="toggleDarkMode" title="Toggle dark mode">
    <svg viewBox="0 0 32 32" width="100%" height="100%" fill="currentColor">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="4"></circle>
      <path d="M 16 0 A 16 16 0 0 0 16 32 z"></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ToggleDarkMode',
  methods: {
    prefersDarkMode() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true
      }
      return false
    },
    toggleDarkMode() {
      let body = document.body
      if (body.classList.contains('mode-dark')) {
        body.classList.remove('mode-dark')
      } else {
        body.classList.add('mode-dark')
      }
    }
  },
  mounted() {
    // check if they prefer dark mode
    if (this.prefersDarkMode()) {
      // if so, add `mode-dark` to body
      document.body.classList.add('mode-dark')
    }
  },
}
</script>

<style scoped>
button {
  color: inherit;
  font-size: inherit;
  border: 2px solid transparent;
  background-color: transparent;
  padding: 2px;
  border-radius: 50%;
}

button:focus {
  outline: none;
  border-color: currentColor;
}
</style>