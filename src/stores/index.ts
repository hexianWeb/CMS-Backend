// src/stores/index.ts
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  // Store 选项...
  // 先定义一个最基本的 message 数据
  state: () => ({
    message: 'Hello World',
    // 添加了一个随机消息数组
    randomMessages: [] as string[]
  })
});
