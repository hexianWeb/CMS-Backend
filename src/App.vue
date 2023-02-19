<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <el-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </el-button>
  <h2>{{ store.message }}</h2> -->
  <!-- <router-link to="/login">Login</router-link>
  <router-link to="/main">首页</router-link> -->
  <router-view></router-view>
</template>

<script lang="ts" setup>
// import { useStore } from './stores';
// import { ref } from 'vue';

// 像 useRouter 那样定义一个变量拿到实例
// const store = useStore();

// 直接通过实例来获取数据
// console.log(store.message);

// 这种方式需要把整个 store 给到 template 去渲染数据

// const fullscreenLoading = ref(false);
// const openFullScreen1 = () => {
//   fullscreenLoading.value = true;
//   setTimeout(() => {
//     fullscreenLoading.value = false;
//   }, 2000);
// };
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
