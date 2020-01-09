<template lang="html">
  <Layout>
    <h1 class="text-4xl font-medium mb-3">Blog</h1>
    <p class="mb-8">Sometimes I write things. You can read them here.</p>
    <label class="block relative mb-6 search-input">
      <input
        name="Search blog posts"
        v-model="searchText"
        placeholder="Search blog posts"
        class="text-base lg:text-sm bg-transparent py-2 pl-8 text-default focus:outline-none w-full" />
      <Search class="inline-block w-4 h-4 absolute search-icon text-default opacity-50" />
    </label>
    <div class="border-faded border-b left-0 -ml-4 sm:-ml-16 md:-ml-24 lg:-ml-30 w-screen"></div>
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

.search-input > input:focus + .search-icon,
.search-input:hover > .search-icon {
  opacity: 1;
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
        excerpt
      }
    }
  }
}
</page-query>