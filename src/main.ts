import App from './App.vue';
import router from './router/index';
import store, { setupStore } from './stores';
// 引入样式重置css
import 'normalize.css';
// 自定义全局样式
import './assets/css/index.less';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { setupRouterGuard } from './router/guard';
import { setupGlobalProperties } from './global';

const app = createApp(App);
// 注册图标组件（不推荐 推荐自动引入） https://blog.csdn.net/zhoudingding/article/details/127237942

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store);

// setup store
setupStore();
// setup permission
setupRouterGuard();
// setup global direction
setupGlobalProperties(app);

// 注意 router在每次热更新重启之后会做一次当前匹配 ，所以为了防止path出现component NotFound情况 推荐将router放在最后
app.use(router);
app.mount('#app');
