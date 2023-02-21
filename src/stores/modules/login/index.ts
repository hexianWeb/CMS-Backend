/**
 * 1. 定义容器并导出
 * 参数一: 容器ID, 唯一, 将来 Pinia 会把所有的容器挂载到根容器
 * 参数二: 选项对象
 * 返回值: 函数, 调用的时候要空参调用, 返回容器实例
 */

import localCache from '@/utils/cache';
import { TOKEN_KEY, USER_INFO_KEY } from '@/constants/cache_keys';
import { Account } from '@/service/login/type';
import { accountLoginRequest, getUserById } from '@/service/login/login';
import { UserInfo, UserState } from './type';

export function setupUser() {
  const userStore = useUserStore();
  // 设置token
  const token = localCache.getCache(TOKEN_KEY);
  token && userStore.setToken(token);
}
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined
  }),
  getters: {
    getToken(): string | null {
      return this.token || localCache.getCache(TOKEN_KEY);
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
    async login(account: Account) {
      // 1.登录认证通过 获取用户token
      const { id, token } = await accountLoginRequest(account);
      console.log(id, token);
      this.setToken(token);

      // 2.获取userInfo
      const UserInfo = await getUserById({ id });
      this.setUserInfo(UserInfo);
    }
  }
});
