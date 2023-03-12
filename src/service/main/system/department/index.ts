import request from '@/service';
import { GetDepartmentListParams } from './types';

enum DepartmentAPI {
  DepartmentList = '/department/list'
}

export function getDepartmentList(params: GetDepartmentListParams) {
  return request.post({
    url: DepartmentAPI.DepartmentList,
    data: params
  });
}
