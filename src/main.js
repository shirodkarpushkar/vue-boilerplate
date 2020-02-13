import Vue from 'vue'
import App from './App.vue'
import router from "@router";
import axios from "axios";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
