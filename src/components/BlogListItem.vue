<template functional>
  <article class="py-8">
    <g-link
      class="block mb-1 text-2xl text-black lh-title hover:underline"
      :to="props.post.path">
      {{ props.post.title }}
    </g-link>
    <div class="text-sm font-normal pb-1 text-black block">{{ props.post.date | formatDate }}</div>
  </article>
</template>

<script>
import formatDate from '@/filters/formatDate'

export default {
  name: 'ProjectListItem',
  filters: {
    formatDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>