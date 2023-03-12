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
      label: '部门名称',
      type: 'input',
      field: 'name',
      placeHolder: '请输入部门名称'
    },
    {
      label: '部门领导',
      type: 'input',
      field: 'leader',
      placeHolder: '请输入领导名称'
    }
  ]
};

export default formData;
