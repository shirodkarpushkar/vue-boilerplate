import Vue from 'vue'
import App from './App.vue'
import router from "@router";
import Vuelidate from "vuelidate";
import store from '@state/store'

Vue.config.productionTip = false
Vue.use(Vuelidate)

const app = new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
