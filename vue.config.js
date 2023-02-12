const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
// const { resolve } = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // resolve: {
  //   alias: {
  //     '@': resolve('src'), // 源码根目录
  //     '@img': resolve('src/assets/img'), // 图片
  //     '@less': resolve('src/assets/less'), // 预处理器
  //     '@libs': resolve('src/libs'), // 本地库
  //     '@plugins': resolve('src/plugins'), // 本地插件
  //     '@cp': resolve('src/components'), // 公共组件
  //     '@views': resolve('src/views') // 路由组件
  //   }
  // }
});
