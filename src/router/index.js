import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Archive from '../views/Archive.vue'
import VueTest from '../views/Vue.vue'
import LaravelTest from '../views/Laravel.vue'
import Puzzle from '../views/Puzzle.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/puzzle',
    name: 'puzzle',
    component: Puzzle
  },
]

const router = new VueRouter({
  routes
})

export default router
