const formData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: 'id',
      type: 'input',
      field: 'id',
      placeHolder: '请输入查询id'
    },
    {
      label: '商品名称',
      type: 'input',
      field: 'name',
      placeHolder: '请输入商品名称'
    },
    {
      label: '商品描述',
      type: 'input',
      field: 'desc',
      placeHolder: '请输入描述关键字'
    },
    {
      label: '商品状态',
      type: 'select',
      placeHolder: '请选择状态',
      field: 'status',
      otherOptions: {
        options: [
          {
            label: '正常',
            value: 1
          },
          {
            label: '禁止',
            value: 0
          }
        ]
      }
    },
    {
      label: '地址',
      type: 'input',
      field: 'desc',
      placeHolder: '请输入地址描述'
    }
  ]
};

export default formData;
