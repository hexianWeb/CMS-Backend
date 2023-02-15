import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia'; // 导入 Pinia

createApp(App).use(router).use(createPinia()).mount('#app');

console.log(process.env.VUE_APP_BASE_URL);
