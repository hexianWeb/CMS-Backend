// 路由类型
import type { RouteRecordRaw } from 'vue-router';
// 构建路由与菜单的映射
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  // 匹配所有的TS文件 第二个参数表明是否递归
  const routeFiles = require.context('../router/main', true, /\.ts/);
  // 遍历所有TS的路径
  routeFiles.keys().forEach((path) => {
    // 动态加载路由文件
    const route = require('../router/main' + path.split('.')[1]).default;
    allRoutes.push(route);
  });

  // 2.再根据菜单获取需要添加的routes

  const _recursiveGetRoute = (menus: any[]): void => {
    // 根据menus引入对应的路由
    for (const menu of menus) {
      // debugger;
      if (menu.type === 2) {
        // route) => route.path === menu.url
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) {
          routes.push(route);
        }
      } else {
        _recursiveGetRoute(menu.children);
      }
    }
  };
  _recursiveGetRoute(userMenus);

  return routes;
}
