export interface Account {
  name: string;
  password: string;
}

export interface LoginInfo {
  id: number | string;
  token: string;
  name: string;
}

export interface GetUserById {
  id: string | number;
}

export interface UserInfo {
  id: string | number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: Date;
  updateAt: Date;
  //   role: Role
  //   department: Department
}
