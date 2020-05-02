import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'

Vue.use(Router) 

export default new Router({
    mode: "history",
    routes:[
        {
            path: 'Vue3/dist/',
            component: Home
        },
        {
            path:'Vue3/dist/todos',
            component: () => import('./views/ToDos.vue')
        }
    ]
})