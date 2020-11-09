<template lang="html">
  <Layout>
    <PageHeader header-text="Writing" />
    <p class="text-base md:text-lg leading-loose mb-8">I occasionally write things. Not often enough to call it a blog. You can read them here.</p>
    <section class="mb-20">
      <BlogListItem
        v-for="({ node: post }, $index) in posts"
        :key="$index"
        :post="post" />
    </section>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import BlogListItem from '@/components/BlogListItem'

export default {
  name: 'Writing',
  components: {
    BlogListItem,
    PageHeader,
  },
  metaInfo: {
    title: 'Writing'
  },
  computed: {
    posts() {
        return this.$page.allBlogPost.edges
    }
  },
}
</script>

<page-query>
query BlogList {
  allBlogPost(filter: { published: { eq: true }}) {
    edges {
      node {
        title
        date
        path
        excerpt
      }
    }
  }
}
</page-query>
