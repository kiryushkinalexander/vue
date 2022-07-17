import Vue from 'vue'
import App from './assets/App.vue'

import router from './router'
import store from './store'

import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
