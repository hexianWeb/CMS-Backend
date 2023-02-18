import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const token_request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截');
      return error;
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截');
      return res;
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败的拦截');
      return error;
    }
  }
});

export default token_request;
