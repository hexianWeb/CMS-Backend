import { ParamsPagination } from '@/service/types';

// 对于复杂的返回数据可以使用`jsontotype`等一些网页
export interface NewUserInfo {
  name: string;
  password: string;
  realname?: string;
  cellphone: number;
  enable?: number;
  departmentId: number;
  roleId: number;
}

export interface GetUserListParams extends ParamsPagination {
  cellphone?: number;
}
