import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/index.vue'
import People from '../pages/people.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
  ]
})

export default router
