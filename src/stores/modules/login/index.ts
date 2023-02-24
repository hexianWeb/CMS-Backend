/**
 * 1. 定义容器并导出
 * 参数一: 容器ID, 唯一, 将来 Pinia 会把所有的容器挂载到根容器
 * 参数二: 选项对象
 * 返回值: 函数, 调用的时候要空参调用, 返回容器实例
 */

import localCache from '@/utils/cache';
import { TOKEN_KEY, USER_INFO_KEY, USER_MENUS_KEY } from '@/constants/cache_keys';
import { Account, UserMenus } from '@/service/login/type';
import { accountLoginRequest, getUserById, getUserMenusById } from '@/service/login/login';
import { UserInfo, UserState } from './type';
import router from '@/router';

export function setupUser() {
  const userStore = useUserStore();
  // 设置token
  const token = localCache.getCache(TOKEN_KEY);
  token && userStore.setToken(token);
}
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined,
    userInfo: undefined,
    userMenus: undefined
  }),
  getters: {
    getToken(): string | null {
      return this.token || localCache.getCache(TOKEN_KEY);
    },
    getUserInfo(): UserInfo {
      return this.userInfo || localCache.getCache(USER_INFO_KEY) || '';
    },
    getUserMenus(): UserMenus[] {
      // EP-v版本为2.2.30
      let icons = ['Monitor', 'Setting', 'ShoppingBag', 'ChatDotRound'];
      const menus = this.userMenus || localCache.getCache(USER_MENUS_KEY) || '';
      for (const key in menus) {
        menus[key].icon = icons[Number(key)];
      }
      return menus;
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localCache.setCache(TOKEN_KEY, token);
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
      localCache.setCache(USER_INFO_KEY, userInfo);
    },
    setUserMenu(userMenus: UserMenus[]) {
      this.userMenus = userMenus;
      localCache.setCache(USER_MENUS_KEY, userMenus);
    },
    async login(account: Account) {
      // 1.登录认证通过 获取用户token
      const { id, token } = await accountLoginRequest(account);
      this.setToken(token);

      // 2.获取userInfo
      const UserInfo = await getUserById({ id });
      this.setUserInfo(UserInfo);

      // 3.请求用户菜单
      const UserMenusRes = await getUserMenusById({ id });
      this.setUserMenu(UserMenusRes);

      // 4.跳转到首页
      router.push('/main');
    }
  }
});
