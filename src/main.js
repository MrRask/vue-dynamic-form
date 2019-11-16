import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import locale from 'element-ui/lib/locale/lang/th'
import ElementUI from 'element-ui'
import '@/assets/font.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'flexboxgrid'
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
