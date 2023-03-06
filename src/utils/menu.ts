import { BreadcrumbProp } from '@/base-ui/breadcrumb';
import type { UserMenus } from '@/service/login/type';

/**
 * 根据路径获取目录
 * @param userMenus
 * @param pathName
 * @returns
 */
export const getMenuByPath = (userMenus: UserMenus[], pathName: string): UserMenus | void => {
  const currentMenu = __recursiveMenuByPath(userMenus, pathName);
  return currentMenu;
};

/**
 * 获取该用户的第一个目录
 * @param userMenus
 * @returns
 */
export const getFirstMenuPath = (userMenus: UserMenus[]): UserMenus | void => {
  const firstMenu = __recursiveFirstMenu(userMenus);
  return firstMenu;
};

/**
 * 获取用户当前模块的面包屑
 * @param userMenus
 * @param pathName
 * @param breadCrumbs
 * @returns
 */
export const getBreadCrumbsByPath = (userMenus: UserMenus[], pathName: string): BreadcrumbProp[] => {
  const breadcrumbs: BreadcrumbProp[] = [];
  __recursiveMenuByPath(userMenus, pathName, breadcrumbs);
  return breadcrumbs.reverse();
};

const __recursiveFirstMenu = (menus: UserMenus[]): UserMenus | void => {
  for (let i = 0; i < menus.length; i++) {
    const currentMenu = menus[i];
    if (currentMenu.type === 1) {
      const subMenu = currentMenu?.children || [];
      const m = __recursiveFirstMenu(subMenu);
      if (m) return m;
    } else if (currentMenu.type === 2) {
      return currentMenu;
    }
  }
};
/**
 * 根据路径获取目录
 * @param menus
 * @param pathName
 * @returns
 */
const __recursiveMenuByPath = (
  menus: UserMenus[],
  pathName: string,
  breadCrumbs?: BreadcrumbProp[]
): UserMenus | void => {
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    // 递归查找目录
    if (menu.type === 1) {
      const submenu = menu?.children || [];
      const m = __recursiveMenuByPath(submenu, pathName, breadCrumbs);
      if (m) {
        if (breadCrumbs) {
          breadCrumbs?.push({
            name: menu.name,
            path: '' //一级路由 不可点击 不应该增加path
          });
        }
        return m;
      }
    } else if (menu.type === 2 && menu.url === pathName) {
      if (breadCrumbs) {
        breadCrumbs.push({
          name: menu.name,
          path: menu.url
        });
      }
      return menu;
    }
  }
};
