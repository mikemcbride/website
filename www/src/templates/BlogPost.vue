<template>
  <Layout :title="$page.post.title">
    <ScrollProgress />

    <header class="mb-4 leading-tight font-mono inline-flex flex-col items-start">
      <h1 class="font-medium py-2 px-4 bg-hot-pink inline-block transform rotate-1 text-white text-4xl my-0 relative">{{ $page.post.title | formatTitle }}</h1>
      <p class="self-end inline-block bg-teal-400 text-white px-2 py-1 transform -rotate-2 -mt-1 -mr-3 z-10 relative mb-4 text-sm">{{ $page.post.date | formatDate }}</p>
    </header>

    <article class="mb-16 leading-normal prose lg:prose-lg">
      <div v-html="$page.post.content"></div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date
    content
  }
}
</page-query>

<script>
import formatDate from '@/filters/formatDate'
import formatTitle from '@/filters/formatTitle'
import ScrollProgress from '@/components/ScrollProgress'

export default {
  components: {
    ScrollProgress,
  },
  metaInfo () {
    return {
      title: formatTitle(this.$page.post.title)
    }
  },
  filters: {
    formatDate,
    formatTitle
  }
}
</script>
