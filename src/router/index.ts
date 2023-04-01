import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Warehouses',
    component: () => import('@/pages/Warehouses.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('@/pages/Favorites.vue'),
  },
  {
    path: '/deals',
    name: 'Deals',
    component: () => import('@/pages/Deals.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router