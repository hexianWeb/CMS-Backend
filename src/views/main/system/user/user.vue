<template>
  <div class="user">
    <fromComponent v-bind="searchConfig"></fromComponent>
  </div>
</template>

<script lang="ts" setup>
import fromComponent from '@/base-ui/form/index';
import searchConfig from './config/search.conf';
</script>

<style scoped></style>
