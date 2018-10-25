<template lang="html">
  <footer class="db tc center ph2 pv4">
    
    <FooterLink :to="settings.social.github" title="GitHub">
      <GitHub />
    </FooterLink>
    
    <FooterLink :to="settings.social.twitter" title="Twitter">
      <Twitter />
    </FooterLink>
    
    <FooterLink :to="settings.social.linkedin" title="LinkedIn">
      <LinkedIn />
    </FooterLink>
    
    <FooterLink :to="`mailto:${settings.social.email}`" title="Email me">
      <Email />
    </FooterLink>
    
  </footer>
</template>

<script>
import FooterLink from '@/components/FooterLink'
import GitHub from '@/components/GitHub'
import Twitter from '@/components/Twitter'
import LinkedIn from '@/components/LinkedIn'
import Email from '@/components/Email'
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
  data() {
    return {
      settings
    }
  }
}
</script>