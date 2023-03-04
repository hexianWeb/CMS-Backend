import type { Router } from 'vue-router';
import { useUserStore } from '@/stores/modules/login';
import { getFirstMenuPath } from '../../utils/menu';
import localCache from '@/utils/cache';
import { TOKEN_KEY } from '@/constants/cache_keys';
import { mapMenusToRoutes } from '@/utils/map-menus';
export const createPermissionGuard = (router: Router): void => {
  // 全局路由导航守卫 监听鉴权
  router.beforeEach((to, from, next) => {
    // 获取用户菜单
    const userStore = useUserStore();
    const userMenus = userStore.getUserMenus;
    if (to.path !== '/login') {
      // 1.判断登录状态是否有效
      const token = localCache.getCache(TOKEN_KEY);
      if (!token || token === 'undefined') {
        next('/login');
        return;
      }
      const routes = mapMenusToRoutes(userMenus);
      // 注册UserMenu的所有路由
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }

    // 如果页面路径为/ 则重定向至用户的第一个菜单
    if (to.path === '/') {
      const firstMenu = getFirstMenuPath(userMenus);
      next(firstMenu!);
    } else {
      next();
    }
  });
};
