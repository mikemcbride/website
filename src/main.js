import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.meta.push({
    name: 'description',
    content: 'Personal website of Mike McBride'
  })
  
  Vue.component('Layout', DefaultLayout)
}
