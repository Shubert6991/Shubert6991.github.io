import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 70 }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ],
})

export default router
