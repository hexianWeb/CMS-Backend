export interface UserState {
  token?: string;
  userInfo?: UserInfo;
  // userMenus?: UserMenu[];
  // userPermissions?: string[];
}

export interface UserInfo {
  id: string | number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: Date;
  updateAt: Date;
}
