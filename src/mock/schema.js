export const schema = [
  {
    type: 'el-input',
    inputType: 'text',
    label: 'ชื่อ',
    model: 'name',
    style: {
      width: '100%'
    }
  },
  {
    type: 'el-select',
    values: ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
    label: 'ทักษะ',
    model: 'skill',
    style: {
      width: '100%'
    }
  },
  {
    type: 'el-radio-group',
    values: ['male', 'female'],
    label: 'เพศ',
    model: 'gender'
  },
  {
    type: 'el-checkbox-group',
    values: ['thai', 'english', 'japan'],
    label: 'ภาษา',
    model: 'language'
  },
  {
    type: 'el-input',
    inputType: 'textarea',
    model: 'other',
    label: 'อื่นๆ',
    style: {
      width: '100%'
    }
  }
]
