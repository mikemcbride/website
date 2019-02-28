<template lang="html">
  <footer class="text-center sm:text-left py-8">
    <FooterLink
      v-for="(link, index) in settings"
      :key="index"
      :title="link.title"
      :to="link.to">
    </FooterLink>
  </footer>
</template>

<script>
import FooterLink from '@/components/FooterLink'
import settings from '@/data/settings'

export default {
  name: 'SiteFooter',
  components: {
    FooterLink,
  },
  created() {
    this.settings = settings.footerLinks
  }
}
</script>