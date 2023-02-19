<!-- VueWithTS -->
<template>
  <div class="login">
    <loginPanel />
  </div>
</template>
<script lang="ts" setup>
import loginPanel from './cpn/login-panel.vue';
</script>
<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url('@img/login-bg.svg');
  background-size: cover;
}
</style>
