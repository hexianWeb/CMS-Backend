import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia'; // 导入 Pinia

import req from './service/index';

// 引入样式重置css
import 'normalize.css';
// 自定义全局样式
import './assets/css/index.less';

createApp(App).use(router).use(createPinia()).mount('#app');

req
  .request<DataType>({
    url: 'https://v.api.aa1.cn/api/yiyan/index.php',
    method: 'GET'
  })
  .then((res) => {
    console.log(res);
  });
interface DataType {
  data: string;
}
