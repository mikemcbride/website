<template>
    <div class="relative z-10 inline-block mb-8 w-screen md:w-auto -ml-4 md:ml-0">
        <h1 class="m-0 text-3xl md:text-5xl px-6 py-4 md:py-2 leading-tight bg-white text-black font-sans font-black md:rounded shadow-md">{{ headerText }}</h1>
        <div class="-z-1 absolute inset-0 bg-gradient-to-r from-hot-pink to-purple-600 md:rounded shadow-md md:shadow-sm transform -skew-y-3 md:skew-y-0 md:-rotate-6"></div>
    </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    headerText: {
      type: String,
      required: true
    },
  },
}
</script>
