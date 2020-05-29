<template lang="html">
  <footer class="text-center sm:text-left py-8">
    <HorizontalPad>
      <FooterLink
        v-for="(link, index) in settings"
        :key="index"
        :title="link.title"
        :to="link.to">
      </FooterLink>
    </HorizontalPad>
  </footer>
</template>

<script>
import HorizontalPad from '@/components/HorizontalPad'
import FooterLink from '@/components/FooterLink'
import settings from '@/data/settings'

export default {
  name: 'SiteFooter',
  components: {
    HorizontalPad,
    FooterLink,
  },
  created() {
    this.settings = settings.footerLinks
  }
}
</script>