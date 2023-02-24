<!-- VueWithTS -->
<template>
  <div class="content">
    <div class="slice-menu">
      <!-- Logo -->
      <div class="logo">
        <img class="img" src="@img/logo.png" alt="logo" />
        <span class="title">Vue3+TS后台管理</span>
      </div>

      <!-- 菜单部分 -->
      <el-menu
        :unique-opened="false"
        default-active="2"
        class="el-menu-vertical"
        active-text-color="#ffd04b"
        background-color="#001529"
        text-color="#B7BDC3"
      >
        <template v-for="menu in menus" :key="menu.id">
          <!-- CASE1： 一级菜单 -->
          <el-menu-item v-if="!(menu.children && menu.children.length)" :index="menu.id + ''">
            <!-- vue3 + element-plus 动态绑定icon图标 -->
            <el-icon :size="20"> <component :is="menu.icon"></component> <Edit /> </el-icon>
            <span>{{ menu.name }}</span>
          </el-menu-item>
          <!-- CASE2:二级菜单 -->
          <el-sub-menu v-else :index="menu.id + ''">
            <template #title>
              <el-icon :size="20">
                <component :is="menu.icon"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="submenu in menu.children" :key="submenu.id">
              <el-menu-item :index="submenu.id + ''">
                {{ submenu.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/login';
// 获取menus数据
const menus = useUserStore().getUserMenus;
// const router = useRouter();
</script>
<style lang="less" scoped>
@import '@/assets/css/_var.less';

// less 混合模式
.selectActiveColor {
  color: white !important;
}
.slice-menu {
  cursor: pointer;
  height: 100%;
  .logo {
    display: flex;
    height: 28px;
    padding: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu-vertical {
    // width: 100%;
    // border-right: none;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: @side-lighten-bg-color !important;
      &:hover {
      }
    }
  }
}
</style>
