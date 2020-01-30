<template>
  <el-form
    ref="form"
    :label-position="labelPosition"
    :model="form"
    :rules="rules"
    label-width="120px"
  >
    <el-form-item
      v-for="(item,index) in schema"
      :key="index"
      :label="item.label"
      :prop="item.model"
    >
      <template v-if="item.type=='el-radio-group'">
        <el-radio-group
          v-model="form[item.model]"
          :prop="item.model"
        >
          <el-radio
            v-for="(sub,subIndex) in item.options"
            :key="'el-radio'+subIndex"
            :label="sub.label"
            :value="sub.value"
          >
            {{ sub.label }}
          </el-radio>
        </el-radio-group>
      </template>
      <template v-else>
        <component
          :is="item.type"
          v-model="form[item.model]"
          :size="'small'"
          :type="item.inputType"
          :style="item.style"
          :prop="item.model"
        >
          <template v-if="item.type == 'el-select'">
            <el-option
              v-for="(sub,subIndex) in item.options"
              :key="'el-option'+subIndex"
              :label="sub.label"
              :value="sub.value"
            >
              {{ sub.label }}
            </el-option>
          </template>
          <template v-else-if="item.type=='el-checkbox-group'">
            <el-checkbox
              v-for="(sub,subIndex) in item.options"
              :key="'el-checkbox'+subIndex"
              :label="sub.value"
            >
              {{ sub.label }}
            </el-checkbox>
          </template>
        </component>
      </template>
    </el-form-item>
    <el-form-item v-if="schema.length && !withOutSubmit">
      <el-button
        type="primary"
        size="small"
        @click="submitForm"
      >
        submit
      </el-button>
      <el-button
        size="small"
        @click="resetForm"
      >
        reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'FormGenerator',
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => { }
    },
    withOutSubmit: {
      type: Boolean,
      default: () => false
    },
    labelPosition: {
      type: String,
      default: () => 'right'
    }
  },
  data () {
    return {
      form: {}
    }
  },
  watch: {
    'schema': function () {
      this.form = this.initalStructure()
    }
  },
  created () {
    this.form = this.initalStructure()
  },
  methods: {
    initalStructure () {
      var obj = {}
      this.schema.map((item) => {
        if (item.type === 'el-checkbox-group') {
          obj[item.model] = item.defaultValue ? item.defaultValue : []
        } else {
          obj[item.model] = item.defaultValue
        }
      })
      return obj
    },
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form)
        } else {

        }
      })
    },
    resetForm (formName) {
      this.$refs.form.resetFields()
    }
  }
}
</script>
