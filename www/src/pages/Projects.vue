<template lang="html">
  <Layout>
    <PageHeader header-text="Projects" />
    <p class="mb-16 leading-loose">
      When I'm not making stuff for my day job, I like to build websites, apps, and utilities to help other developers.
      You can find some of them listed below, and the rest you can find on my GitHub profile.
    </p>

    <section class="mb-16">
        <h2 class="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-aqua to-blue text-transparent bg-clip-text inline-block">Websites</h2>
        <p class="prose lg:prose-lg mb-6">
            I like building websites. Here are a few of the ones I've made.
        </p>
        <ProjectListItem
        v-for="(project, $index) in websites"
        :key="$index"
        :index="$index"
        :project="project" />
    </section>

    <section class="mb-16">
        <h2 class="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-blue to-purple text-transparent bg-clip-text inline-block">Utilities</h2>
        <p class="prose lg:prose-lg mb-6">
            I also build a lot of stuff that makes developers jobs easier. Mostly because it makes my own job easier. Check out some of my favorites below and find more on my GitHub or npm.
        </p>
        <ProjectListItem
            v-for="(project, $index) in utilities"
            :key="$index"
            :index="$index"
            :project="project" />
    </section>

    <section class="mb-16">
        <h2 class="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-purple to-hot-pink text-transparent bg-clip-text inline-block">Miscellaneous</h2>
        <p class="prose lg:prose-lg mb-6">
            This section is called "miscellaneous" but really it's just some themes I've built. Maybe someday it will have some other stuff too. Who knows. For now, these are the themes I use every day in my editor and terminal. I've made some other themes too, which you can find on GitHub.
        </p>
        <ProjectListItem
            v-for="(project, $index) in extras"
            :key="$index"
            :index="$index"
            :project="project" />
    </section>
  </Layout>
</template>

<script>
import projects from '@/data/work'
import PageHeader from '@/components/PageHeader'
import ProjectListItem from '@/components/ProjectListItem'

export default {
  name: 'Projects',
  metaInfo: {
    title: 'Projects'
  },
  components: {
      PageHeader,
      ProjectListItem
  },
  created() {
    this.websites = projects.filter(p => p.type === 'website')
    this.utilities = projects.filter(p => p.type === 'utility')
    this.extras = projects.filter(p => p.type === 'extra')
  }
}
</script>
