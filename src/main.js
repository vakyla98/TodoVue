import Vue from 'vue'

import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')