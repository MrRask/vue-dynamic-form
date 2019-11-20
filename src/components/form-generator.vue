<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px">
    <el-form-item
      :label="item.label"
      v-for="(item,index) in schema"
      :key="index"
      :prop="item.model"
    >
      <template v-if="item.type=='el-radio-group'">
        <el-radio-group v-model="form[item.model]" :prop="item.model">
          <el-radio :label="sub" v-for="(sub,index) in item.values" :key="index">{{sub}}</el-radio>
        </el-radio-group>
      </template>
      <template v-else>
        <component
          v-bind:is="item.type"
          v-model="form[item.model]"
          :size="'small'"
          :type="item.inputType"
          :style="item.style"
          :prop="item.model"
        >
          <template v-if="item.type == 'el-select' && item.values">
            <el-option
              :label="sub"
              :value="sub"
              v-for="(sub,index) in item.values"
              :key="'el-option'+index"
            ></el-option>
          </template>
          <template v-else-if="item.type=='el-radio-group' && item.values">
            <el-radio
              v-for="(sub,index) in item.values"
              :key="'el-radio'+index"
              :label="sub"
              :name="sub"
              :value="sub"
            >{{sub}}</el-radio>
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
    <el-form-item v-if="schema.length && withOutSubmit">
      <el-button type="primary" size="small" @click="submitForm">submit</el-button>
      <el-button size="small" @click="resetForm">reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'form-generator',
  data () {
    return {
      form: {}
    }
  },
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
      default: () => true
    }
  },
  created () {
    this.form = this.initalStructure()
  },
  watch: {
    'schema': function () {
      this.form = this.initalStructure()
    }
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
