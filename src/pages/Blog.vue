<template lang="html">
  <Layout>
    <section class="mb5">
      <article
        class="pv4"
        v-for="{ node: post } in $page.allBlogPost.edges">
        <g-link
          class="db mb1 f3 dark-gray lh-title underline-hover"
          :to="post.path">
          {{ post.title }}
        </g-link>
        <div class="post-date f5 fw4 pb1 gray db">{{ post.date | formatDate }}</div>
      </article>
  </section>
  </Layout>
</template>

<script>
import formatDate from '@/filters/formatDate'

export default {
  name: 'Blog',
  filters: {
    formatDate
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