import request from '../index';
import { Account, LoginInfo } from './type';

// eslint-disable-next-line no-unused-vars
enum LoginAPI {
  // eslint-disable-next-line no-unused-vars
  AccountLogin = '/login'
}

export function accountLoginRequest(account: Account) {
  return request.post<LoginInfo>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
