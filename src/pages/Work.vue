<template lang="html">
  <Layout>    
    <p class="mb4">
      Most of my work I am not able to showcase publicly, since it is for my company, 
      but I do try to contribute to open source projects when I have time, 
      especially ones that I find particularly helpful to me. 
      I also have a few open source projects and public websites which I have built. 
      You can find some of them listed below.
    </p>

    <section class="flex flex-wrap mb5">
      <article
        class="pt5 w-100"
        v-for="project in projects">
        <a :href="project.url" class="db f3 dark-gray lh-title underline-hover" target="_blank">
          {{ project.title }}
        </a>
        <p class="f5 mt2 mb4 mid-gray lh-copy">{{ project.description }}</p>
      </article>
    </section>
  </Layout>
</template>

<script>
import projects from '@/data/work'

export default {
  name: 'Work',
  data() {
    return {
      projects
    }
  }
}
</script>