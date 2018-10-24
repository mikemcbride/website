<template lang="html">
  <footer class="db tc center ph2 pv4">
    <a
      class="inline-flex no-underline justify-center items-center gray hover-blue mh1"
      :href="settings.social.github"
      title="GitHub">
      <span class="h2 w2 dib">
        <GitHub />
      </span>
    </a>
    <a
      class="inline-flex no-underline justify-center items-center gray hover-blue mh1"
      :href="settings.social.twitter"
      title="Twitter">
      <span class="h2 w2 dib">
        <Twitter />
      </span>
    </a>
    <a
      class="inline-flex no-underline justify-center items-center gray hover-blue mh1"
      :href="settings.social.linkedin"
      title="LinkedIn">
      <span class="h2 w2 dib">
        <LinkedIn />
      </span>
    </a>
    <a
      class="inline-flex no-underline justify-center items-center gray hover-blue mh1"
      :href="`mailto:${settings.social.email}`"
      title="Email me">
      <span class="h2 w2 dib">
        <Email />
      </span>
    </a>
  </footer>
</template>

<script>
import GitHub from '@/components/GitHub'
import Twitter from '@/components/Twitter'
import LinkedIn from '@/components/LinkedIn'
import Email from '@/components/Email'
import settings from '@/data/settings'

export default {
  name: 'SiteFooter',
  components: {
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