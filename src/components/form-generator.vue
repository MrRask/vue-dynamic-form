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
            v-for="(sub,index) in item.values"
            :key="index"
            :label="sub"
          >
            {{ sub }}
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
          <template v-if="item.type == 'el-select' && item.values">
            <el-option
              v-for="(sub,index) in item.values"
              :key="'el-option'+index"
              :label="sub"
              :value="sub"
            ></el-option>
          </template>
          <template v-else-if="item.type=='el-radio-group' && item.values">
            <el-radio
              v-for="(sub,index) in item.values"
              :key="'el-radio'+index"
              :label="sub"
              :name="sub"
              :value="sub"
            >
              {{ sub }}
            </el-radio>
          </template>
          <template v-else-if="item.type=='el-checkbox-group' && item.values">
            <el-checkbox
              v-for="(sub,index) in item.values"
              :key="'el-checkbox'+index"
              :label="sub"
              :value="sub"
            ></el-checkbox>
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
        if (item.type === 'el-checkbox-group') { obj[item.model] = [] } else obj[item.model] = null
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
