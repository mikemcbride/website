<template functional>
  <article class="mb5 w-100">
    <a
      :href="props.project.url"
      class="db f3 dark-gray lh-title underline-hover"
      target="_blank"
      rel="nofollow noreferrer noopener">
      {{ props.project.title }}
    </a>
    <p class="f5 mt2 mid-gray lh-copy">{{ props.project.description }}</p>
  </article>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>