<template functional>
  <article class="mb-16 w-full">
    <a
      :href="props.project.url"
      class="block mb-2 text-2xl text-black leading-tight hover:underline"
      target="_blank"
      rel="nofollow noreferrer noopener">
      {{ props.project.title }}
    </a>
    <p class="text-base text-grey-darkest leading-normal">{{ props.project.description }}</p>
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