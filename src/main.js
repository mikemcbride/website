import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/tailwind.css'

export default function (Vue, { head }) {
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })
  
  Vue.component('Layout', DefaultLayout)
}
