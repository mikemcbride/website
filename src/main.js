import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/tailwind.css'
import ExternalLink from '~/components/ExternalLink.vue'

export default function (Vue, { head }) {
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })

  head.link.push({
    rel: "preload",
    href: "/inter/Inter-Regular-subset.woff2?v=3.11",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/inter/Inter-Medium-subset.woff2?v=3.11",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/inter/Inter-SemiBold-subset.woff2?v=3.11",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "stylesheet",
    href: "/inter/inter.css",
  })

  Vue.component('Layout', DefaultLayout)
  Vue.component('ExternalLink', ExternalLink)
}
