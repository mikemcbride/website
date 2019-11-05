<template functional>
  <article class="py-8">
    <div class="text-sm text-gray leading-normal mb-4">{{ props.post.date | formatDate }}</div>
    <g-link
      class="inline-block text-2xl font-semibold text-default leading-tight hover:underline"
      :to="props.post.path">
      {{ props.post.title }}
    </g-link>
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
