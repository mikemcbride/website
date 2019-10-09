<template functional>
  <article class="mb-16 w-full">
    <a
      :href="props.project.url"
      class="text-default inline-block mb-2 text-2xl leading-tight hover:underline"
      target="_blank"
      rel="nofollow noreferrer noopener">
      {{ props.project.title }}
    </a>
    <p class="text-lg leading-normal mb-2">{{ props.project.description }}</p>
    <div class="flex items-center">
      <a
        v-if="props.project.url"
        :href="props.project.url"
        class="inline-block text-base hover:underline"
        target="_blank"
        rel="nofollow noreferrer noopener">Website</a>
      <a
        v-if="props.project.source"
        :href="props.project.source"
        class="inline-block text-base hover:underline"
        :class="{'pl-2 ml-2 border-l border-grey-dark': props.project.url}"
        target="_blank"
        rel="nofollow noreferrer noopener">Source</a>
    </div>
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