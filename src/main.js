import Vue from 'vue'
import App from './App'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
