<template>
  <article class="mb-16 w-full">
    <a
      :href="project.url"
      class="font-bold inline-block mb-2 text-2xl leading-tight"
      target="_blank"
      rel="nofollow noreferrer noopener">
      {{ project.title }}
    </a>
    <p class="text-base leading-normal mb-2">{{ project.description }}</p>
    <div class="flex items-center">
      <a
        v-if="project.url"
        :href="project.url"
        class="text-blue dark:text-blue-light inline-block text-base hover:underline"
        target="_blank"
        rel="nofollow noreferrer noopener">Website</a>
      <a
        v-if="project.source"
        :href="project.source"
        class="text-blue dark:text-blue-light inline-block text-base hover:underline"
        :class="{'pl-2 ml-2 border-l border-grey-dark': project.url}"
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
    },
    index: {
        type: Number,
        required: true
    }
  },
}
</script>
