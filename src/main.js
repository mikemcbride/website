import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import '~/assets/tailwind.css'

export default function (Vue, { head, appOptions }) {
  Vue.use(Vuex)
  
  appOptions.store = new Vuex.Store({
    state: {
      theme: null,
      navOpen: false
    },
    mutations: {
      toggleDarkMode(state, val) {
        if (state.theme === null) {
          let themePref = window.getComputedStyle(val).getPropertyValue('--app-bg').trim()
          if (themePref === '#fff') {
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
  
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })
  
  Vue.component('Layout', DefaultLayout)
}