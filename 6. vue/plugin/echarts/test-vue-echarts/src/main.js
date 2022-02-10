import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 引入echarts
let echarts = require('echarts')
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
