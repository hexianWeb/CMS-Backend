const formData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: '职位等级',
      type: 'input',
      field: 'id',
      placeHolder: '请输入查询职位等级'
    },
    {
      label: '角色名',
      type: 'input',
      field: 'name',
      placeHolder: '请输入角色名'
    },
    {
      label: '职位名称',
      type: 'input',
      field: 'intro',
      defaultFieldValue: undefined,
      placeHolder: '请输入职位名称'
    }
  ]
};

export default formData;
