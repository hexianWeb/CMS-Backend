<!-- VueWithTS -->
<template>
  <div class="nav-header">
    <div class="left-wrapper">
      <el-icon @click="handleFoldClick" :size="30">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
      <div class="brand">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="right-wrapper">
      <el-icon :size="20"><ChatDotRound /></el-icon>
      <el-icon :size="20"><CollectionTag /></el-icon>
      <el-icon :size="20"><Paperclip /></el-icon>
      <el-tag>等级</el-tag>
      <el-avatar :size="32" class="mr-3" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <el-dropdown>
        <span class="text-sm" style="color: var(--el-text-color-regular)"> 用户信息 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>登出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts" name="nav-header">
//使用defineEmits代替$emit
const emit = defineEmits(['foldClick']); //这里最好写出来
const isFold = ref<Boolean>(false);

const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldClick', isFold.value);
};
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left-wrapper {
    display: flex;
    .brand {
      padding-left: 13px;
    }
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
  .right-wrapper {
    display: flex;
    flex: 0 0 300px;
    align-items: end;
    justify-content: flex-end;
    padding: 3px;
    .el-icon {
      margin: 5px;
      &:last-of-type {
        margin-right: 20px;
      }
    }
    .text-sm {
      cursor: pointer;
      margin: 0 7px;
      font-size: 16px;
      vertical-align: bottom;
    }
  }
}
</style>
