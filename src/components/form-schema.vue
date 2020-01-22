<template>
  <el-form
    ref="form"
    :model="form"
    label-width="120px"
  >
    <el-form-item label="label">
      <el-input
        v-model="form.label"
        size="small"
      ></el-input>
    </el-form-item>
    <el-form-item label="model">
      <el-input
        v-model="form.model"
        size="small"
      ></el-input>
    </el-form-item>
    <el-form-item label="type">
      <el-select
        v-model="form.type"
        placeholder="please select your type"
        size="small"
        style="width:100%"
      >
        <el-option
          v-for="(item,index) in typeList"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="required">
      <el-switch v-model="form.required"></el-switch>
    </el-form-item>
    <el-form-item label="error message">
      <el-input
        v-model="form.errorMessage"
        size="small"
      ></el-input>
    </el-form-item>
    <el-form-item
      v-if="form.type == 'el-input'"
      label="inputType"
    >
      <el-select
        v-model="form.inputType"
        placeholder="please select your type"
        size="small"
        style="width:100%"
      >
        <el-option
          v-for="(item,index) in inputTypeList"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-else
      label="values"
    >
      <el-col :span="11">
        <el-input
          v-model="value"
          type="text"
          size="small"
        ></el-input>
      </el-col>
      <el-col
        :span="11"
        style="margin-left:0.5rem"
      >
        <el-button
          type="primary"
          size="small"
          @click="addValues"
        >
          Add
        </el-button>
      </el-col>
    </el-form-item>
    <el-form-item v-if="form.type != 'el-input'">
      <el-row
        v-for="(item,index) in values"
        :key="index"
        :gutter="12"
      >
        <el-col :span="11">
          {{ item }}
        </el-col>
        <el-col :span="1">
          <el-link
            type="primary"
            size="small"
            @click="delValues(index)"
          >
            ลบ
          </el-link>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="small"
        @click="onSubmit"
      >
        Create
      </el-button>
      <el-button size="small">
        Cancel
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      form: {},
      typeList: ['el-input', 'el-select', 'el-radio-group', 'el-checkbox-group'],
      inputTypeList: ['date', 'password', 'text', 'textarea'],
      values: [],
      rules: {},
      value: ''
    }
  },
  methods: {
    addValues () {
      this.values.push(this.value)
      this.value = ''
    },
    delValues (index) {
      this.values.splice(index, 1)
    },
    onSubmit () {
      this.form.values = this.values
      this.rules[this.form.model] = [{
        required: this.form.required,
        message: this.form.errorMessage
      }]
      console.log(this.rules)
      this.$emit('create', { form: this.form, rules: this.rules })
      this.form = {}
      this.values = []
    }
  }
}
</script>
