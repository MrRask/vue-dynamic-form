export const schema = [
  {
    label: 'คำนำหน้า',
    horizontal: true,
    field: [
      {
        is: 'el-select',
        type: 'text',
        value: 'title',
        placeholder: 'กรุณากรอกข้อมูล',
        required: true,
        disabled: false,
        col: 6,
        options: [],
        default: ''
      },
      {
        is: 'el-select',
        type: 'text',
        value: 'title',
        placeholder: 'กรุณากรอกข้อมูล',
        required: true,
        disabled: false,
        ref: 'title',
        whenValue: '1',
        path: '', // call api
        action: '', // hidden, request, disabled
        col: 6,
        options: [],
        default: ''
      },
      {
        type: 'el-checkbox-group',
        values: ['thai', 'english', 'japan'],
        model: 'language',
        required: true,
        disabled: false
      },
      {
        is: 'el-input',
        type: 'text',
        value: 'name',
        placeholder: 'กรุณากรอกข้อมูล',
        required: true,
        disabled: false,
        col: 6,
        regex: /test/,
        rules: 'title == 2 && (gender == 3 || gender)',
        default: ''
      }
    ]
  }
]
