import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { RequestInterceptors, RequestConfig } from '../types';
class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    // 应用自定义config
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 应用请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptorCatch,
      this.interceptors?.requestInterceptor
    );

    // 应用相应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 为所有的实例添加拦截器

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求失败');
        return config;
      },
      (err) => {
        console.log('请求失败');

        return err;
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (config) => {
        console.log('响应成功');

        return config;
      },
      (err) => {
        console.log('响应失败');
        return err;
      }
    );
  }

  request(config: RequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        config = config.interceptors.responseInterceptor(res);
      }
    });
  }
}

export default Request;
