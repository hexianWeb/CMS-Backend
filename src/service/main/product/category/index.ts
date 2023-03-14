import request from '@/service';

enum CategoryAPI {
  CategoryList = '/category/list'
}

export function getCategoryList(params: any) {
  return request.post({
    url: CategoryAPI.CategoryList,
    data: params
  });
}
