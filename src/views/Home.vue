<template>
  <div class="container">
    <h1>This page for form generate</h1>
    <div class="row">
      <div class="col-xs-6">
        <form-schema @create="addSchema"></form-schema>
      </div>
      <div class="col-xs-6">
        <el-card class="box-card" shadow="never">
          <form-generator :schema="schema"></form-generator>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import FormSchema from '@/components/form-schema'
import FormGenerator from '@/components/form-generator'
import { schema } from '@/mock/schema'
export default {
  name: 'home',
  components: {
    FormGenerator,
    FormSchema
  },
  data () {
    return {
      form: {},
      schema: schema
    }
  },
  created () {
    // set structor
    var obj = {}
    this.schema.map((item) => {
      if (item.type === 'el-checkbox-group') { obj[item.model] = [] } else obj[item.model] = null
    })
    this.form = obj
  },
  beforeDestroy () {
    console.log('DESTROYYYY!!!')
  },
  methods: {
    addSchema (val) {
      this.schema.push(val)
      console.log(this.schema)
    }
  }
}
</script>
