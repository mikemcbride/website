<template lang="html">
  <Layout>
    <h1 class="text-3xl sm:text-4xl font-medium mb-3">Blog</h1>
    <p class="text-sm sm:text-base mb-8">Sometimes I write things. You can read them here.</p>
    <div class="block relative mb-6 search-input">
      <label>
        <input
          v-model="searchText"
          placeholder="Search blog posts"
          aria-label="Search blog posts"
          class="text-base lg:text-sm bg-transparent py-2 pl-8 text-black dark:text-white placeholder-grey-dark focus:outline-none w-full" />
      </label>
      <Search class="inline-block w-4 h-4 absolute search-icon text-black dark:text-white opacity-50" />
    </div>
    <div class="border-b border-grey-light dark:border-grey-darkest left-0 -ml-4 sm:-ml-16 md:-ml-24 lg:-ml-30 w-screen"></div>
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