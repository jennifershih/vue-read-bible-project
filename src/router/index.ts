import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/read-bible',
      name: 'read-bible',
      component: () => import('../views/ReadBibleView.vue')
    }
  ]
})

export default router
