import type { App } from 'vue';

import { utcToDateTimeFormat } from '@/utils/date-format';

export const setupFilters = (app: App) => {
  // 设置全局组件
  app.config.globalProperties.$filter = {
    utcFormat(value: string) {
      return utcToDateTimeFormat(value);
    },
    getStatus(value: number) {
      return value === 0 ? '禁用' : '启用';
    }
  };
};
