import request from '@/service';
import { GetUserListParams } from './types';

export enum UserAPI {
  // eslint-disable-next-line no-unused-vars
  UserList = '/users/list'
}

/**
 * 获取用户列表接口
 * @param params
 * @returns
 */
export function getUserList(params: GetUserListParams) {
  return request.post({
    url: UserAPI.UserList,
    data: params
  });
}
