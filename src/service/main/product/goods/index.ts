import request from '@/service';

enum GoodsAPI {
  GoodsList = '/goods/list'
}

export function getGoodsList(params: any) {
  return request.post({
    url: GoodsAPI.GoodsList,
    data: params
  });
}
