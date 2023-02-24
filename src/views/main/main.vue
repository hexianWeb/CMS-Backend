<!-- VueWithTS -->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <navMenu />
      </el-aside>

      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-container class="page-content">
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
// 引入 目录组件
import navMenu from '@cp/nav-menu/src/index.vue';
</script>
<style lang="less" scoped>
@import '@/assets/css/_var.less';

.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-content,
  .page {
    height: 100%;
  }

  .page-content {
    height: calc(100% - 48px);
  }
  .el-header {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: @side-bg-color;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }
}
</style>
