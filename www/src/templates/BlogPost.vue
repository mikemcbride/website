<template>
  <Layout :title="$page.post.title">
    <ScrollProgress />

    <header class="leading-tight font-mono inline-flex flex-col items-start max-w-3xl mt-12">
      <PageHeader :header-text="blogTitle" />
      <p class="inline-block text-sm md:text-base text-gray-600 mt-8 md:mt-12">Posted on {{ $page.post.date | formatDate }}</p>
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
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    ScrollProgress,
    PageHeader,
  },
  metaInfo () {
    return {
      title: formatTitle(this.$page.post.title)
    }
  },
  computed: {
    blogTitle() {
      return formatTitle(this.$page.post.title)
    }
  },
  filters: {
    formatDate,
    formatTitle
  }
}
</script>
