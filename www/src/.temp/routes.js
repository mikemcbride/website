const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/mcbridem/src/website/www/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--blog--id-vue" */ "/Users/mcbridem/src/website/www/src/pages/blog/[id].vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--wp-admin-vue" */ "/Users/mcbridem/src/website/www/src/pages/WpAdmin.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--writing-vue" */ "/Users/mcbridem/src/website/www/src/pages/Writing.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--uses-vue" */ "/Users/mcbridem/src/website/www/src/pages/Uses.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/mcbridem/src/website/www/src/pages/Projects.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/mcbridem/src/website/www/src/pages/Blog.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/mcbridem/src/website/www/src/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mcbridem/src/website/www/src/pages/Index.vue")

export default [
  {
    path: "/writing/why-i-switched-back-to-android/",
    component: c1
  },
  {
    path: "/writing/why-use-build-tools/",
    component: c1
  },
  {
    path: "/writing/vue-computed-methods-watchers/",
    component: c1
  },
  {
    path: "/writing/update-default-git-branch/",
    component: c1
  },
  {
    path: "/writing/reducing-css-file-size/",
    component: c1
  },
  {
    path: "/writing/remembering-mom/",
    component: c1
  },
  {
    path: "/writing/pagination-in-fauna/",
    component: c1
  },
  {
    path: "/writing/manipulating-filtered-arrays-in-angularjs/",
    component: c1
  },
  {
    path: "/writing/paper/",
    component: c1
  },
  {
    path: "/writing/my-android-experience/",
    component: c1
  },
  {
    path: "/writing/life-is-unexpected/",
    component: c1
  },
  {
    path: "/writing/method-overloading/",
    component: c1
  },
  {
    path: "/writing/modern-javascript/",
    component: c1
  },
  {
    path: "/writing/lessons-learned/",
    component: c1
  },
  {
    path: "/writing/keyboard-shortcuts/",
    component: c1
  },
  {
    path: "/writing/color-picker-input-with-validation/",
    component: c1
  },
  {
    path: "/writing/designing-in-the-browser/",
    component: c1
  },
  {
    path: "/writing/flexbox-tricks/",
    component: c1
  },
  {
    path: "/writing/advanced-google-sheets-formatting/",
    component: c1
  },
  {
    path: "/writing/better-console-logging/",
    component: c1
  },
  {
    path: "/writing/cancer-sucks/",
    component: c1
  },
  {
    path: "/writing/clearing-intervals/",
    component: c1
  },
  {
    path: "/writing/css-conventions/",
    component: c1
  },
  {
    path: "/writing/alfred-emoji/",
    component: c1
  },
  {
    path: "/writing/2020-update/",
    component: c1
  },
  {
    name: "__blog_id",
    path: "/blog/:id",
    component: c2,
    meta: {
      dataPath: "/blog/_id.json",
      dynamic: true
    }
  },
  {
    path: "/wp-admin/",
    component: c3
  },
  {
    path: "/writing/",
    component: c4
  },
  {
    path: "/uses/",
    component: c5
  },
  {
    path: "/projects/",
    component: c6
  },
  {
    path: "/blog/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
