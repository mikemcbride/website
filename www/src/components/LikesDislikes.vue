<template>
  <div class="flex flex-col md:flex-row md:justify-center">
    <section class="mb-12 md:mb-20 md:mr-10">
      <h2
        class="font-sans font-bold text-3xl mb-4 bg-hot-pink text-white py-1 px-3 transform -rotate-1 inline-block"
      >Things I Like</h2>
      <ul>
        <HeartListItem>Peanut butter and jelly sandwiches</HeartListItem>
        <HeartListItem>Running</HeartListItem>
        <HeartListItem>Jesus</HeartListItem>
        <HeartListItem>Being outside</HeartListItem>
        <HeartListItem>Playing piano</HeartListItem>
        <HeartListItem>Hammocks</HeartListItem>
        <HeartListItem>Hugs</HeartListItem>
        <HeartListItem>Keyboard shortcuts</HeartListItem>
        <HeartListItem>Pineapple on pizza</HeartListItem>
      </ul>
    </section>
    <section class="mb-20 md:ml-10">
      <h2
      class="font-sans font-bold text-3xl mb-4 bg-blue text-white py-1 px-3 transform rotate-1 inline-block"
      >
      Things I Dislike
      </h2>
      <ul>
        <DislikeListItem>Glitter 🤮</DislikeListItem>
        <DislikeListItem>Hair spray</DislikeListItem>
        <DislikeListItem>Bug bites</DislikeListItem>
        <DislikeListItem>Washing dishes</DislikeListItem>
        <DislikeListItem>Cottage cheese</DislikeListItem>
        <DislikeListItem>Glitter (again)</DislikeListItem>
      </ul>
    </section>
  </div>
</template>

<script>
import HeartListItem from '@/components/HeartListItem'
import DislikeListItem from '@/components/DislikeListItem'

export default {
  name: 'LikesDislikes',
  components: {
    HeartListItem,
    DislikeListItem
  },
}
</script>
