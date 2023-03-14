<template>
  <div class="user">
    <!-- 搜索表单模块 -->
    <fromComponent v-bind="searchConfig" @query="queryData" @reset="resetData">
      <template #header>用户管理 </template>
    </fromComponent>
    <!-- 表格渲染模块 -->
    <TableComponent :options="tableOptionsRef" @selectOptions="getSelectOptions">
      <template #status="scope">
        <el-button plain :type="scope.row.enable ? 'success' : 'danger'" size="small">
          {{ $filter.getStatus(scope.row.enable) }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filter.utcFormat(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.utcFormat(scope.row.updateAt) }}
      </template>
      <template #operation="scope">
        <el-row>
          <el-button type="primary" size="small" icon="EditPen" @click="editUser(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" icon="Delete" @click="delUser(scope.row)">删除</el-button>
        </el-row>
      </template>
    </TableComponent>
  </div>
</template>

<script lang="ts" setup>
import fromComponent from '@/base-ui/form/index';
import TableComponent from '@/base-ui/table';
import { getCategoryList } from '@/service/main/product/category';
import searchConfig from './config/search.conf';
import tableOptions from './config/table.conf';

const tableOptionsRef = ref(tableOptions);

// tableOptions的处理
tableOptions.header.handleOption.handleNewClick = () => {
  console.log('载入user 新增商品');
};
tableOptions.header.handleOption.handleRefresh = () => {
  tableOptionsRef.value.content.dataSource = [];
  getCategoryListData();
};
tableOptions.footer.sizeChange = (size: number) => {
  tableOptionsRef.value.footer.pageSize = size;
};
tableOptions.footer.currentChange = (currentPage: number) => {
  tableOptionsRef.value.footer.currentPage = currentPage;
};
onMounted(() => {
  getCategoryListData();
});

const queryData = (queryInfo: any) => {
  getCategoryListData(queryInfo);
};

const resetData = () => {
  getCategoryListData();
};
const pageOptions = computed({
  get() {
    return tableOptionsRef.value.footer;
  },
  set(newValue) {
    tableOptionsRef.value.footer = newValue;
  }
});
watch(
  () => pageOptions,
  () => {
    getCategoryListData();
  },
  {
    deep: true
  }
);
const getCategoryListData = (queryInfo: any = {}) => {
  const pageSize = tableOptionsRef.value.footer.pageSize;
  const currentPage = tableOptionsRef.value.footer.currentPage;
  const offset = pageSize * currentPage;
  getCategoryList({ offset: offset, size: pageSize, ...queryInfo }).then((res) => {
    console.log(res);
    tableOptionsRef.value.content.dataSource = res.list;
    tableOptionsRef.value.footer.total = res.totalCount;
  });
};
// 获取选择Options
const getSelectOptions = (val: []) => {
  console.log(val);
};
const delUser = (e) => {
  console.log('del', e);
};
const editUser = (e) => {
  console.log('edit', e);
};
</script>

<style scoped></style>
