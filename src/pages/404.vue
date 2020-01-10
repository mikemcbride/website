<template lang="html">
  <div class="main-layout h-screen flex items-center justify-center font-sans">
    <div class="flex flex-col md:flex-row items-center max-w-xl px-4">
      <div
        class="text-2xl font-semibold py-4 md:py-2 px-4 mb-4 md:mb-0 md:mr-4 border-b md:border-b-0 md:border-r border-faded">404</div>
      <p class="mb-0 text-center md:text-left">Sorry... <code class="text-pink">{{ $route.path }}</code> doesn't exist. <g-link to="/">Take me home</g-link>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
  metaInfo: {
    title: '404'
  }
}
</script>

<style>
.main-layout {
  background-color: var(--app-bg);
  color: var(--app-text);
}
</style>