const tableOptions = {
  header: {
    title: '用户列表',
    handleOption: {
      title: '新建用户',
      icon: 'User',
      handleNewClick: () => {
        console.log('新建用户');
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
        label: '用户名',
        minWidth: '100'
      },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '120'
      },
      {
        prop: 'cellphone',
        label: '电话号码',
        minWidth: '150'
      },
      {
        label: '状态',
        minWidth: '120',
        slotName: 'status'
      },
      {
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        width: '180',
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
