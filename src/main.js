import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import '~/assets/tailwind.css'

export default function (Vue, { head, appOptions }) {
  Vue.use(Vuex)
  
  appOptions.store = new Vuex.Store({
    state: {
      useDarkMode: null,
      navOpen: false
    },
    mutations: {
      toggleDarkMode(state) {
        state.useDarkMode = !state.useDarkMode
      },
      setDarkMode(state, val) {
        state.useDarkMode = val
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