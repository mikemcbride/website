<template lang="html">
  <div class="bg-white text-black dark:bg-black dark:text-white h-screen flex items-center justify-center font-sans">
    <div class="flex flex-col md:flex-row items-center max-w-xl px-4">
      <div
        class="text-2xl font-semibold py-4 md:py-2 px-4 mb-4 md:mb-0 md:mr-4 border-b md:border-b-0 md:border-r border-grey-dark dark:border-grey-darker">404</div>
      <p class="mb-0 text-center md:text-left">Sorry... <code class="text-pink dark:text-pink-light">{{ $route.path }}</code> doesn't exist. <g-link to="/">Take me home</g-link>.</p>
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