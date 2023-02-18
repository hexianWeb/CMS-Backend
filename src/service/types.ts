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

export { RequestInterceptors, RequestConfig };
