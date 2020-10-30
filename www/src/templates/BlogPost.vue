<template>
  <Layout :title="$page.post.title">
    <ScrollProgress />

    <header class="leading-tight font-mono inline-flex flex-col items-start max-w-3xl">
      <h1 class="font-sans font-bold shadow-md py-2 px-6 bg-hot-pink inline-block text-white text-4xl my-0 relative rounded">{{ $page.post.title | formatTitle }}</h1>
      <p class="self-end inline-block bg-aqua text-black px-2 py-1 shadow rounded transform -rotate-2 -mt-2 -mr-3 z-10 relative mb-4 text-sm">{{ $page.post.date | formatDate }}</p>
    </header>

    <article class="mb-16 leading-normal prose md:prose-lg">
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
