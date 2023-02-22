export interface UserState {
  token?: string;
  userInfo?: UserInfo;
  userMenus?: UserMenu[];
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

export interface UserMenu {
  icon?: string;
  id: number;
  name: string;
  children?: UserMenu[];
  sort?: number;
  type: number;
  url: string;
  parentId: number;
  permission: string;
}
