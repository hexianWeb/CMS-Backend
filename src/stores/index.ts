import { createPinia } from 'pinia';
import { setupUser } from './modules/login/';

const store = createPinia();

export function setupStore() {
  setupUser();
}

export default store;
