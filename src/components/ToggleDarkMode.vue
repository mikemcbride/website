<template lang="html">
  <button
    @click="toggleDarkMode"
    class="border rounded p-3 w-12 h-12 bg-transparent hover:bg-grey-lighter dark-hover:bg-grey-darkest border-transparent focus:outline-none"
    :title="toggleTitle">
    <svg v-if="isUsingDarkMode" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    <svg v-else fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  </button>
</template>

<script>
export default {
  name: 'ToggleDarkMode',
  computed: {
    isUsingDarkMode() {
      return this.isDark
    },
    toggleTitle() {
      return this.isUsingDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
    }
  },
  data() {
    return {
      isDark: false
    }
  },
  methods: {
    prefersDarkMode() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true
      }
      return false
    },
    toggleDarkMode() {
      this.isDark = !this.isDark
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
      this.isDark = true
      // if so, add `mode-dark` to body
      document.body.classList.add('mode-dark')
    }
  },
}
</script>
