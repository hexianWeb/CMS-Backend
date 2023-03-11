/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
interface RequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  showLoading?: boolean;
}

/**
 * service层的所有的接口的定义
 */
export interface Result<T = any> {
  code: number;
  data: T;
}

// 所有table都要接受收的类型
/**
 * 请求Params中都需要的offset/size的父类接口
 */
export interface ParamsPagination {
  offset: number;
  size: number;
}
export { RequestInterceptors, RequestConfig };
