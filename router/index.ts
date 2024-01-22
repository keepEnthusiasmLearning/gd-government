import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "首页",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "特色创新",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "个人服务",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "法人服务",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "好差评",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "效能监督",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "政务公开",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: "政民互动",
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router