import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'

Vue.use(Router) 

export default new Router({
    mode: "history",
    // base: '/dist',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path:'/todos',
            component: () => import('./views/ToDos.vue')
        }
    ]
})