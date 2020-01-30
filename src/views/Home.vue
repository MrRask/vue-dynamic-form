<template>
  <div class="container">
    <h1>This page for form generate</h1>
    <div class="row">
      <div class="col-xs-6">
        <form-schema @create="addSchema"></form-schema>
      </div>
      <div class="col-xs-6">
        <el-card
          class="box-card"
          shadow="never"
        >
          <div>
            <b>Result :</b>
          </div>
          <form-generator
            :schema="schema"
            :rules="rules"
          ></form-generator>
        </el-card>
      </div>
    </div>
    <div>
      <pre>{{ schema }}</pre>
    </div>
    <hr />
    <div>
      <pre>{{ rules }}</pre>
    </div>
  </div>
</template>

<script>
import FormSchema from '@/components/form-schema'
import FormGenerator from '@/components/form-generator'
// import { schema } from '@/mock/schema'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    FormGenerator,
    FormSchema
  },
  data () {
    return {
      form: {},
      schema: [],
      rules: {}
    }
  },
  async created () {
    // set structor
    this.schema = await this.getSchema()
    console.log(this.schema)
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
    getSchema: async function () {
      let { data } = await axios.get(`http://192.168.145.252:8007/api/v1/setting/app-form/1`)
      return data
    },
    addSchema (val) {
      this.schema.push(val.form)
      this.rules = val.rules
      console.log(this.schema)
    }
  }
}
</script>
