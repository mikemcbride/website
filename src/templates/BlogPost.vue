<template>
  <Layout :title="$page.post.title">
    <header class="mb4 lh-title">
      <h1 class="fw4 mv0">{{ $page.post.title }}</h1>
      <p class="mb3 f7 silver">{{ $page.post.date | formatDate }}</p>
    </header>

    <article class="mb5 post-content">
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

export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  filters: {
    formatDate
  }
}
</script>