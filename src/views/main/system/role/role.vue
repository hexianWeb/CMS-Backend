<template>
  <div class="role">
    <fromComponent v-bind="searchConfig" @query="queryData" @reset="resetData">
      <template #header>角色管理 </template>
    </fromComponent>
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
      <template #id="scope">
        <template v-for="star in scope.row.id" :key="star">
          <el-icon><StarFilled /></el-icon>
        </template>
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
import fromComponent from '@/base-ui/form';
import TableComponent from '@/base-ui/table';
import { getRoleList } from '@/service/main/system/role';
import searchConfig from './config/search.conf';
import tableOptions from './config/table.conf';

const tableOptionsRef = ref(tableOptions);
// 重写对应方法
tableOptions.header.handleOption.handleRefresh = () => {
  tableOptionsRef.value.content.dataSource = [];
  getRoleListData();
};
tableOptions.footer.sizeChange = (size: number) => {
  tableOptionsRef.value.footer.pageSize = size;
};
tableOptions.footer.currentChange = (currentPage: number) => {
  tableOptionsRef.value.footer.currentPage = currentPage;
};
onMounted(() => {
  getRoleListData();
});
const queryData = (queryInfo: any) => {
  getRoleListData(queryInfo);
};

const resetData = () => {
  getRoleListData();
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
    getRoleListData();
  },
  {
    deep: true
  }
);
const getRoleListData = (queryInfo: any = {}) => {
  let pageSize = tableOptionsRef.value.footer.pageSize || 10;
  let currentPage = tableOptionsRef.value.footer.currentPage || 0;
  const offset = pageSize * currentPage;
  getRoleList({ offset: offset, size: pageSize, ...queryInfo }).then((res) => {
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
