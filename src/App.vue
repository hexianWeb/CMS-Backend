<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h2>{{ store.message }}</h2>
  <router-link to="/login">Login</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './stores';
export default defineComponent({
  name: 'App',
  setup() {
    // 像 useRouter 那样定义一个变量拿到实例
    const store = useStore();

    // 直接通过实例来获取数据
    console.log(store.message);

    // 这种方式需要把整个 store 给到 template 去渲染数据
    return {
      store
    };
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
