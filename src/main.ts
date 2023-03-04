import App from './App.vue';
import router from './router/index';
import store, { setupStore } from './stores';
// 引入样式重置css
import 'normalize.css';
// 自定义全局样式
import './assets/css/index.less';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { setupRouterGuard } from './router/guard';

const app = createApp(App);
// 注册图标组件（不推荐 推荐自动引入） https://blog.csdn.net/zhoudingding/article/details/127237942

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(store);

// setup store
setupStore();

// setup permission
setupRouterGuard();

app.mount('#app');
