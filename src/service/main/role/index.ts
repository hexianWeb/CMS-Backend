import request from '@/service';
import { GetRoleListParams } from './types';

export enum RoleAPI {
  // eslint-disable-next-line no-unused-vars
  RoleList = '/role/list'
}

/**
 * 获取用户列表接口
 * @param params
 * @returns
 */
export function getRoleList(params: GetRoleListParams) {
  return request.post({
    url: RoleAPI.RoleList,
    data: params
  });
}
