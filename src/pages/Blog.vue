<template lang="html">
  <Layout>
    <h1 class="text-4xl font-medium mb-8">Blog</h1>
    <div class="relative mb-6">
      <input
        v-model="searchText"
        placeholder="Search blog posts"
        class="text-sm bg-transparent py-2 pl-8 text-default focus:outline-none search-input" />
      <Search class="inline-block w-4 h-4 absolute search-icon text-default opacity-50" />
    </div>
    <div class="divider -ml-4 border-b left-0 lg:-ml-30 sm:-ml-24 w-screen"></div>
    <section>
      <BlogListItem
        v-for="({ node: post }, $index) in filteredPosts"
        :key="$index"
        :post="post" />
    </section>
  </Layout>
</template>

<script>
import BlogListItem from '@/components/BlogListItem'
import Search from '@/components/Search'

export default {
  name: 'Blog',
  components: {
    BlogListItem,
    Search
  },
  metaInfo: {
    title: 'Blog'
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    filteredPosts() {
      const lcTerm = this.searchText.toLowerCase()
      return this.$page.allBlogPost.edges.filter(({ node }) => {
        return node.title.toLowerCase().includes(lcTerm)
      })
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

.search-input:focus + .search-icon {
  opacity: 1;
}

.divider {
  border-color: rgba(127,127,127,0.3)
}
</style>

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