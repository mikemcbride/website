<template>
    <article class="mb-16 w-full">
        <TitleLink v-if="project.url" :to="project.url" target="_blank" rel="nofollow noreferrer noopener">{{ project.title }}</TitleLink>
        <p class="prose lg:prose-lg mb-4 -mt-2">{{ project.description }}</p>
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
import TitleLink from '@/components/TitleLink'

export default {
  name: 'ProjectListItem',
  components: {
    TitleLink,
  },
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
