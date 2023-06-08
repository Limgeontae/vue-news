import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/index'
import { store } from 'vuex'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router ,
  store,
}).$mount('#app')



