import '~/assets/tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'

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
    href: "/inter/Inter-Bold-subset.woff2?v=3.11",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/inter/Inter-Black-subset.woff2?v=3.11",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/code-saver/CodeSaver-Regular.woff2",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/code-saver/CodeSaver-Medium.woff2",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/code-saver/CodeSaver-Bold.woff2",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "preload",
    href: "/code-saver/CodeSaver-Italic.woff2",
    as: "font",
    crossorigin: "anonymous"
  })

  head.link.push({
    rel: "stylesheet",
    href: "/code-saver/code-saver.css",
  })

  head.link.push({
    rel: "stylesheet",
    href: "/inter/inter.css",
  })

  Vue.component('Layout', DefaultLayout)
}
