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
import { schema } from '@/mock/schema-v2'
export default {
  data () {
    return {
      form: {},
      schema,
      ruleForm: {},
      rules: {}
    }
  },
  created () {
    console.log(this.getSchema())
    this.getSchema()
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
