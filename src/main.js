import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/tailwind.css'
import ExternalLink from '~/components/ExternalLink.vue'

export default function (Vue, { head }) {
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.xz.style/serve/inter.css"
  })

  Vue.component('Layout', DefaultLayout)
  Vue.component('ExternalLink', ExternalLink)
}
