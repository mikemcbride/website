<template functional>
  <article class="py-8">
    <div class="text-sm text-grey-darker dark:text-grey-dark leading-normal mb-2">{{ props.post.date | formatDate }}</div>
    <g-link
      class="inline-block text-2xl font-semibold text-black dark:text-white leading-tight hover:underline mb-4"
      :to="props.post.path">
      {{ props.post.title | formatTitle }}
    </g-link>
    <p class="text-black dark:text-white mb-6 leading-loose text-base">{{ props.post.excerpt }}</p>
    <g-link
      class="inline-block text-sm text-blue dark:text-blue-light no-underline uppercase tracking-wide"
      :to="props.post.path">
      Read more →
    </g-link>
  </article>
</template>

<script>
import formatDate from '@/filters/formatDate'
import formatTitle from '@/filters/formatTitle'

export default {
  name: 'ProjectListItem',
  filters: {
    formatDate,
    formatTitle
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
