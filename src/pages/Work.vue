<template lang="html">
  <Layout>    
    <p class="mb-16">
      Most of my work I am not able to showcase publicly, since it is for my company, 
      but I do try to contribute to open source projects when I have time, 
      especially ones that I find particularly helpful to me. 
      I also have a few open source projects and public websites which I have built. 
      You can find some of them listed below.
    </p>

    <section class="mb-16">
      <ProjectListItem
        v-for="(project, $index) in projects"
        :key="$index"
        :project="project" />
    </section>
  </Layout>
</template>

<script>
import projects from '@/data/work'
import ProjectListItem from '@/components/ProjectListItem'

export default {
  name: 'Work',
  components: {
    ProjectListItem
  },
  data() {
    return {
      projects
    }
  }
}
</script>