<template functional>
  <article class="py-8">
    <g-link
      class="block mb-2 text-2xl text-black leading-tight hover:underline"
      :to="props.post.path">
      {{ props.post.title }}
    </g-link>
    <div class="text-sm text-grey-dark leading-normal">{{ props.post.date | formatDate }}</div>
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
