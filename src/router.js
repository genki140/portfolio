import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Archive from './views/Archive.vue'
import VueTest from './views/Vue.vue'
import LaravelTest from './views/Laravel.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueTest
    },
    {
      path: '/laravel',
      name: 'laravel',
      component: LaravelTest
    }
  ]
})
