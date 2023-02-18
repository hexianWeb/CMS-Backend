import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { RequestInterceptors, RequestConfig } from '../types';
import { ElLoading } from 'element-plus';
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading';

const DEFAULT_LOADING = true;
class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  loadingInstance?: LoadingInstance;
  showLoading: boolean = DEFAULT_LOADING;
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

    // 请求拦截器 注入token
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求失败');
        const token = '';
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        if (this.showLoading) {
          // Loading组件
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
            // fullscreen: true
          });
        }
        return config;
      },
      (err) => {
        console.log('请求失败');
        return err;
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应成功');
        this.loadingInstance?.close();
        if (res.data.code === 0) {
          return res.data.data;
        }
        return res.data;
      },
      (err) => {
        console.log('响应失败');
        return err;
      }
    );
  }

  request<T>(config: RequestConfig): Promise<T> {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res);
          }

          // 2。重置showloading 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;

          // 3.resolve将结果返回出去
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default Request;
