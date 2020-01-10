import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import '~/assets/tailwind.css'
import '~/assets/inter/inter.css'
import ExternalLink from '~/components/ExternalLink.vue'

export default function (Vue, { head, appOptions, router }) {
  Vue.use(Vuex)
  
  appOptions.store = new Vuex.Store({
    state: {
      theme: null,
      navOpen: false
    },
    mutations: {
      toggleDarkMode(state, val) {
        if (state.theme === null) {
          // they're using whatever color scheme the browser set based on their OS.
          // let's figure out what that is and 
          let themePref = window.getComputedStyle(val).getPropertyValue('--app-theme').trim()
          if (themePref === 'light') {
            // already using light mode
            state.theme = 'dark'
          } else {
            state.theme = 'light'
          }
        } else {
          if (state.theme === 'light') {
            state.theme = 'dark'
          } else {
            state.theme = 'light'
          }
        }
      },
      toggleNav(state) {
        state.navOpen = !state.navOpen
      }
    }
  })
  
  router.beforeEach((to, from, next) => {
    if (appOptions.store.state.navOpen === true) {
      appOptions.store.commit('toggleNav')
    }
    next()
  })
  
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })

  head.link.push({
    href: 'https://rsms.me/inter/inter.css',
    rel: 'stylesheet'
  })
  
  Vue.component('Layout', DefaultLayout)
  Vue.component('ExternalLink', ExternalLink)
}
