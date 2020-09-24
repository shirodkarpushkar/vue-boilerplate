import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@state/store'
import Vuelidate from 'vuelidate'
import VueLazyLoad from 'vue-lazyload'
import Toasted from 'vue-toasted'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueLazyLoad)
Vue.use(Vuelidate)
Vue.use(Toasted)

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'


const app = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
