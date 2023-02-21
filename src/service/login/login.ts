/* eslint-disable no-unused-vars */
import request from '../index';
import { Account, GetUserById, LoginInfo, UserInfo } from './type';

export enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/'
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

export function getUserById(params: GetUserById) {
  return request.get<UserInfo>({
    url: LoginAPI.UserInfo + params.id
  });
}
