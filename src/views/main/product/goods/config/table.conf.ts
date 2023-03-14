const tableOptions = {
  header: {
    title: '商品列表',
    handleOption: {
      title: '商品',
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
        label: '商品名称',
        minWidth: '100'
      },
      {
        prop: 'oldPrice',
        label: '原价',
        minWidth: '60'
      },
      {
        prop: 'newPrice',
        label: '现价',
        minWidth: '60'
      },
      {
        prop: 'desc',
        label: '商品描述',
        minWidth: '100'
      },
      {
        prop: 'imgUrl',
        label: '商品图片',
        minWidth: '80',
        slotName: 'imgUrl'
      },
      {
        prop: 'inventoryCount',
        label: '库存',
        minWidth: '80'
      },
      {
        prop: 'saleCount',
        label: '销量',
        minWidth: '80'
      },
      {
        prop: 'favorCount',
        label: '收藏',
        minWidth: '80'
      },
      {
        prop: 'address',
        label: '地址',
        minWidth: '80'
      },
      {
        label: '创建时间',
        minWidth: '200',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        minWidth: '200',
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
    pageSizes: [5, 10, 15, 20, 25],
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
