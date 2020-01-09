<template>
  <Layout :title="$page.post.title">
    <ScrollProgress />
    
    <header class="mb-8 leading-tight">
      <h1 class="font-medium text-3xl my-0">{{ $page.post.title | formatTitle }}</h1>
      <p class="mb-4 text-sm text-gray">{{ $page.post.date | formatDate }}</p>
    </header>

    <article class="mb-16 post-content leading-normal">
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

<style lang="scss">
blockquote {
  font-size: 1.15rem;
  font-style: italic;
}

pre, code, .code, .monospace {
  font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

code {
  color: var(--code-color);
  font-size: .875rem;
  
  &::before,
  &::after {
    content: '`';
  }
}

pre {
  background: var(--app-bg);
  border-radius: .25rem;
  border: 1px solid var(--app-gray);
  overflow-x: auto;
  padding: 1rem;
  white-space: pre;
  word-break: inherit;
  word-wrap: inherit;
  
  > code {    
    &::before,
    &::after {
      content: none;
    }
    color: var(--code-color);
  }
}
</style>