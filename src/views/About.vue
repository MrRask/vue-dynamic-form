<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="col-xs-12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{schema.name}}</span>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th style="width:20px">No</th>
                  <th style="width:500px">Question</th>
                  <th style="width:200px">Answer</th>
                  <th style="width:400px">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in schema.questions" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.question}}</td>
                  <td>
                    <el-radio-group v-model="item.answer.model">
                      <el-radio
                        :label="sub"
                        v-for="(sub,index) in item.answer.values"
                        :key="index"
                      >{{sub}}</el-radio>
                    </el-radio-group>
                  </td>
                  <td>
                    <FormGenerator
                      :schema="renderSchema(item.answer.model,item.option)"
                      with-out-submit
                      label-position="top"
                    ></FormGenerator>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import FormGenerator from '@/components/form-generator'
export default {
  components: {
    FormGenerator
  },
  data () {
    return {
      form: {},
      schema: {
        name: 'Sale Approval',
        questions: [
          {
            question: 'ท่านเคยเสพสารเสพติดหรือไม่ ?',
            answer: {
              type: 'el-radio-group',
              values: ['yes', 'no'],
              label: 'เพศ',
              model: 'gender'
            },
            option: [
              {
                answer: 'yes',
                schema: [
                  {
                    type: 'el-input',
                    inputType: 'text',
                    label: 'ชื่อ',
                    model: 'name',
                    style: {
                      width: '100%'
                    }
                  }
                ]
              },
              {
                answer: 'no',
                schema: [
                  {
                    type: 'el-input',
                    inputType: 'text',
                    label: 'username',
                    model: 'name',
                    style: {
                      width: '100%'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    renderSchema (val, items) {
      console.log(items.filter((item) => item.answer === val))
      if (val) {
        let find = items.filter((item) => item.answer === val)
        if (find.length) {
          return find[0].schema
        } else {
          return []
        }
      } else return []
    }
  }
}
</script>
<style scoped>
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 15px;
}
</style>
