const tableOptions = {
  header: {
    title: '部门列表',
    handleOption: {
      title: '新建部门',
      icon: 'HelpFilled',
      handleNewClick: () => {
        console.log('新建用户角色列表');
      },
      handleRefresh: () => {
        console.log('刷新数据');
      }
    }
  },
  content: {
    showIndex: true,
    showSelect: true,
    dataSource: [],
    columns: [
      {
        prop: 'name',
        label: '部门名称',
        minWidth: '100'
      },
      {
        prop: 'leader',
        label: '权限介绍',
        minWidth: '120'
      },
      {
        prop: 'parentId',
        label: '上级部门',
        minWidth: '120'
      },
      {
        label: '创建时间',
        minWidth: '120',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        minWidth: '120',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        width: '168',
        slotName: 'operation'
      }
    ]
  },
  footer: {
    currentPage: 0,
    pageSizes: [5, 10],
    pageSize: 10,
    total: 0,
    sizeChange: (size: number) => {
      console.log(size);
    },
    currentChange: (current: number) => {
      console.log(current);
    }
  }
};

export default tableOptions;
