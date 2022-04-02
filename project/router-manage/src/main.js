import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
