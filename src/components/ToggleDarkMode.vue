<template lang="html">
  <button
    @click="toggleDarkMode"
    class="border rounded p-3 w-12 h-12 bg-transparent hover:bg-grey-lighter dark-hover:bg-grey-darkest border-transparent focus:outline-none"
    :title="toggleTitle">
    <svg v-if="isUsingDarkMode" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.4 13.7c-.8.2-1.6.3-2.4.3-5 0-9-4-9-9 0-.8.1-1.6.3-2.4.1-.3 0-.7-.3-1-.3-.3-.6-.4-1-.3C4.3 2.7 1 7.1 1 12c0 6.1 4.9 11 11 11 4.9 0 9.3-3.3 10.6-8.1.1-.3 0-.7-.3-1-.2-.2-.6-.3-.9-.2z"/></svg>
    <svg v-else viewBox="0 0 24 24" aria-hidden="true"><g stroke-linejoin="full" stroke-linecap="full" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></g></svg>
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