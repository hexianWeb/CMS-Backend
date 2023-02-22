/* eslint-disable no-unused-vars */
import request from '../index';
import { Account, GetUserById, LoginInfo, UserInfo, UserMenus } from './type';

export enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

// 登录模块所有api

/**
 * 登录接口
 * @param account 登录信息
 * @returns token
 */
export function accountLoginRequest(account: Account) {
  return request.post<LoginInfo>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

/**
 * 根据用户ID获取用户个人信息
 * @param params 用户ID
 * @returns 用户个人信息
 */
export function getUserById(params: GetUserById) {
  return request.get<UserInfo>({
    url: LoginAPI.UserInfo + params.id
  });
}

export function getUserMenusById(params: GetUserById) {
  return request.get<UserMenus[]>({
    url: `${LoginAPI.UserMenus + params.id}/menu`
  });
}
