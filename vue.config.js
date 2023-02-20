const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { resolve } = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        // 自动按需引入 vue 需要额外的import vue的api。比如使用ref时，需要先import { ref } from 'vue'。
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()],
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        // dirs 指定组件所在位置，默认为 src/components
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        dirs: ['src/components/'],
        // 配置需要将哪些后缀类型的文件进行自动按需引入
        extensions: ['vue'],
        // 解析的 UI 组件库，这里以 Element Plus 为例
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src'), // 源码根目录
        '@img': resolve('src/assets/img'), // 图片
        '@less': resolve('src/assets/less'), // 预处理器
        '@libs': resolve('src/libs'), // 本地库
        '@plugins': resolve('src/plugins'), // 本地插件
        '@cp': resolve('src/components'), // 公共组件
        '@views': resolve('src/views'), // 路由组件
        '@store': resolve('src/stores') // pinia组件
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
});
