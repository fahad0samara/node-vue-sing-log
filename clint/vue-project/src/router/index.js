import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sing',
      component: () => import('../page/sing.vue')
    },
    {
      path: '/log',
      name: 'log',
 
      component: () => import('../page/log.vue')
    }
  ]
})

export default router
