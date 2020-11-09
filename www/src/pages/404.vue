<template lang="html">
    <HorizontalPad>
        <div class="bg-white text-black font-mono">
            <g-image src="~/assets/lost.jpg" class="w-full mb-12 mt-6" />
            <p class="mb-12 text-xl leading-loose">Well this is embarrassing...</p>
            <div class="text-center">
                <g-link to="/" class="inline-block bg-blue hover:bg-hot-pink text-white text-lg rounded px-4 py-2">Take me home, please!</g-link>
            </div>
          </div>
        </div>
    </HorizontalPad>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'

export default {
  name: '404',
  metaInfo: {
    title: "Where's Waldo?"
  },
  components: {
    HorizontalPad,
  },
}
</script>
