<template>
  <div class="user">
    <fromComponent v-bind="searchConfig" @query="queryData" @reset="resetData"></fromComponent>
  </div>
</template>

<script lang="ts" setup>
import fromComponent from '@/base-ui/form/index';
import searchConfig from './config/search.conf';

const queryData = (queryInfo: any) => {};
</script>

<style scoped></style>
