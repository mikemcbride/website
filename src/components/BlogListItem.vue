<template functional>
  <article class="pv4">
    <g-link
      class="db mb1 f3 dark-gray lh-title underline-hover"
      :to="props.post.path">
      {{ props.post.title }}
    </g-link>
    <div class="f7 fw4 pb1 silver db">{{ props.post.date | formatDate }}</div>
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