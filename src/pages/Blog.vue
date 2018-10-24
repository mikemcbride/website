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
export default {
  name: 'Blog',
  filters: {
    formatDate(val) {
      let d = new Date(val)
      let day = d.getDay()
      let month = d.getMonth()
      let date = d.getDate()
      let year = d.getFullYear()
      
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      
      return `${days[day]}, ${months[month]} ${date}, ${year}`
    }
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