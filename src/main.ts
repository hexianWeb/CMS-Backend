import App from './App.vue';
import router from './router/index';
import store, { setupStore } from './stores';
// 引入样式重置css
import 'normalize.css';
// 自定义全局样式
import './assets/css/index.less';

const app = createApp(App);
app.use(router).use(store);
// setup store
setupStore();

app.mount('#app');
