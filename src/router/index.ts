import localCache from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children:[] ->该属性由userMenus来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (token) {
      return '/login';
    }
  }
});
export default router;
