<!-- VueWithTS -->
<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" :size="30">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <!-- <div class="content">

    </div> -->
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
<style lang="less" scoped></style>
