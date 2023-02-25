<!-- VueWithTS -->
<template>
  <div class="content">
    <div class="slice-menu">
      <!-- Logo -->
      <div class="logo">
        <img class="img" src="@img/logo.png" alt="logo" />
        <span class="title" v-show="!isCollapse">Vue3+TS后台管理</span>
      </div>

      <!-- 菜单部分 -->
      <el-menu
        :unique-opened="false"
        default-active="2"
        class="el-menu-vertical"
        active-text-color="#ffd04b"
        background-color="#001529"
        text-color="#B7BDC3"
        :collapse="isCollapse"
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
              <!-- 绑定路由跳转事件在二级菜单上 -->
              <el-menu-item :index="submenu.id + ''" @click="handleItemClick(submenu)">
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
import { UserMenus } from '@/service/login/type';
import { isUrl } from '@/utils/common';
import { getMenuByPath } from '@/utils/menu';

// 父子组件传值 伸展
defineProps({
  isCollapse: {
    type: Boolean,
    defalut: false,
    require: true
  }
});
// 获取menus数据
const menus = useUserStore().getUserMenus;

const router = useRouter();

const route = useRoute();

const currentActiveMenuIndex = ref<String>('');

// 监听路由地址是否存在变化
watch(
  () => route.path,
  () => {
    _selectCurrentMenu();
  }
);

// 挂载时 根据当前URL已有的路径 获取相应MENU
onMounted(() => {
  _selectCurrentMenu();
});

const _selectCurrentMenu = () => {
  const currentMenu = getMenuByPath(menus, route.path) as UserMenus;
  currentActiveMenuIndex.value = String(`${currentMenu?.id}`);
};
const handleItemClick = (subMenu: UserMenus) => {
  currentActiveMenuIndex.value = String(subMenu.id);
  if (isUrl(subMenu.url)) {
    window.open(subMenu.url);
  } else {
    router.push({
      path: subMenu.url || '/notfound'
    });
  }
};
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
