<template lang="html">
  <Layout>
    <PageHeader header-text="Blog" />
    <p class="text-sm sm:text-base mb-8">Sometimes I write things. You can read them here.</p>
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
  name: 'Blog',
  components: {
    BlogListItem,
    PageHeader,
  },
  metaInfo: {
    title: 'Blog'
  },
  computed: {
    posts() {
        return this.$page.allBlogPost.edges
    }
  },
}
</script>

<style scoped>
.search-icon {
  left: .25rem;
  top: 50%;
  transform: translateY(-50%);
}

.search-input > input:focus + .search-icon,
.search-input:hover > .search-icon {
  opacity: 1;
}
</style>

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
