import { createRouter, createWebHistory ,RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Warehouse',
    component: () => import('@/pages/Warehouse.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router