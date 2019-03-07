<template>
  <Layout :title="$page.post.title">
    <ScrollProgress />
    
    <header class="mb-8 leading-tight">
      <h1 class="font-normal my-0">{{ $page.post.title }}</h1>
      <p class="mb-4 text-sm text-grey-darker">{{ $page.post.date | formatDate }}</p>
    </header>

    <article class="mb-16 post-content">
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
import ScrollProgress from '@/components/ScrollProgress'

export default {
  components: {
    ScrollProgress,
  },
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

<style lang="scss">
/**
* Images
*/
img {
  vertical-align: middle;
}

/**
* Blockquotes
*/
blockquote {
  border-left: 4px solid #b8c2cc;
  color: #606f7b;
  font-size: 1.2em;
  margin-left: 0;
  padding: .25rem 1em;
  width: 100%;

  > :last-child {
    margin-bottom: 0;
  }
}

/**
* Code styles
*/
pre, code, .code, .monospace {
  font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, Courier, monospace;
}

code {
  color: #d8009c;
  font-size: 90%;
  
  &::before,
  &::after {
    content: '`';
  }
}

pre {
  background: #f8fafc;
  border: 1px solid #dae1e7;
  border-radius: .25rem;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-top: 0;
  overflow-x: auto;
  padding: 1rem;
  white-space: pre;
  word-break: inherit;
  word-wrap: inherit;
  
  > code {
    font-size: inherit;
    
    &::before,
    &::after {
      content: none;
    }
  }
}

hr {
  border: 0px solid rgba(0,0,0,0.2);
  border-bottom-width: 1px;
  margin: 2rem 0;
}
// 
// .post-content p {
//   font-size: 16px;
// 
//   @media all and (min-width: 768px) {
//     font-size: 20px;
//   }
// }
</style>