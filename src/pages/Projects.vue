<template lang="html">
  <Layout>    
    <p class="mb-16">
      Most of my work is private, since it is for my company,
      but I do have a few open source projects and public websites which I have built. 
      You can find some of them listed below, and the rest you can find on my GitHub profile.
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
  name: 'Projects',
  components: {
    ProjectListItem
  },
  created() {
    this.projects = projects
  }
}
</script>