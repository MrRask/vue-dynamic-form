<template>
  <div>
    <h1>this form render</h1>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        v-for="(item,index) in schema"
        :key="index"
        :label="item.label"
      >
        <el-col
          v-for="(sub,subIndex) in item.field"
          :key="subIndex"
          :span="sub.col"
        >
          <el-form-item>
            <component
              :is="sub.is"
              v-model="form[sub.value]"
              :size="'small'"
              :type="sub.type"
              :prop="item.value"
            ></component>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button
          size="mini"
          type="primary"
          @click="submitForm('ruleForm')"
        >
          Create
        </el-button>
        <el-button
          size="mini"
          @click="resetForm('ruleForm')"
        >
          Reset
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {},
      schema: [
        {
          label: 'คำนำหน้า',
          horizontal: true,
          field: [
            {
              is: 'el-input',
              type: 'text',
              value: 'title',
              placeholder: 'กรุณากรอกข้อมูล',
              required: true,
              disabled: false,
              col: 6
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
              rules: 'title == 2 && (gender == 3 || gender)'
            }
          ]
        }
      ],
      ruleForm: {},
      rules: {}
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
