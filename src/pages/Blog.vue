<template lang="html">
  <Layout>
    <section class="mb5">
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