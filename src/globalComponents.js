import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueLazyLoad from 'vue-lazyload'
import Toasted from 'vue-toasted'
import Navbar from '@layouts/Navbar'
import AppFooter from '@layouts/footer'


Vue.use(VueLazyLoad)
Vue.use(Vuelidate)
Vue.use(Toasted)


Vue.component('navbar', Navbar)
Vue.component('app-footer', AppFooter)
