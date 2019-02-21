<template lang="html">
  <footer class="text-center py-8">
    <FooterLink
      v-for="(link, index) in settings"
      :key="index"
      :title="link.title"
      :to="link.to">
      <Component :is="link.component" />
    </FooterLink>
  </footer>
</template>

<script>
import FooterLink from '@/components/FooterLink'
import GitHub from '@/components/icons/GitHub'
import Twitter from '@/components/icons/Twitter'
import LinkedIn from '@/components/icons/LinkedIn'
import Email from '@/components/icons/Email'
import settings from '@/data/settings'

export default {
  name: 'SiteFooter',
  components: {
    FooterLink,
    GitHub,
    Twitter,
    LinkedIn,
    Email
  },
  computed: {
    settings() {
      // make settings a computed property because the settings will never change. This doesn't need to be reactive.
      return settings.footerLinks
    }
  }
}
</script>