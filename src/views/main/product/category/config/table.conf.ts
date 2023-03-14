const tableOptions = {
  header: {
    title: '类别列表',
    handleOption: {
      title: '新建类别',
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
        label: '类别名称',
        minWidth: '100'
      },
      {
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        minWidth: '100',
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
    pageSizes: [5, 10, 15, 20],
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
