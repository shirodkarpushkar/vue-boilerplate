import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
// import './plugins/vuetify'
import Vuelidate from 'vuelidate'
import VueLazyLoad from 'vue-lazyload'
import Toasted from 'vue-toasted'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueLazyLoad)
Vue.use(Vuelidate)
Vue.use(Toasted)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$flag = 0
    // Standard Vuetify theme

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (window.Cypress) {
    // Ensure tests fail when Vue emits an error.
    Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

const app = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
    // Attach the app to the window, which can be useful
    // for manually setting state in Cypress commands
    // such as `cy.logIn()`.
    window.__app__ = app
}
