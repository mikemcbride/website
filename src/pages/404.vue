<template lang="html">
  <div class="h-screen flex items-center justify-center">
    <div class="flex flex-col md:flex-row items-center max-w-xl px-4">
      <div class="text-2xl font-semibold py-4 md:py-2 px-4 mb-4 md:mb-0 md:mr-4 border-b md:border-b-0 md:border-r border-grey-light ">404</div>
      <p class="mb-0 text-center md:text-left">That page doesn't exist. <g-link to="/">Head home</g-link> and try finding it again.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>