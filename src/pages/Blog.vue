<template lang="html">
  <Layout>
    <h1 class="text-2xl font-bold mb-4">Blog</h1>
    <p class="mb-8 text-lg">Sometimes I write things. You can read them here.</p>
    <section>
      <BlogListItem
        v-for="({ node: post }, $index) in $page.allBlogPost.edges"
        :key="$index"
        :post="post" />
    </section>
  </Layout>
</template>

<script>
import BlogListItem from '@/components/BlogListItem'

export default {
  name: 'Blog',
  components: {
    BlogListItem
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<page-query>
query BlogList {
  allBlogPost {
    edges {
      node {
        title
        date
        path
      }
    }
  }
}
</page-query>