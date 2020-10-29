<template>
    <h1 class="mb-8">
        <div class="inline-block relative text-5xl leading-tight">
            <span class="px-6 py-2 inline-block text-transparent font-sans font-black pointer-events-none">{{ headerText }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-hot-pink to-purple-600 rounded shadow-sm transform -rotate-6"></div>
            <div class="absolute flex items-center justify-center inset-0 text-center bg-white text-black font-sans font-black rounded shadow-md">{{ headerText }}</div>
        </div>
    </h1>
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
