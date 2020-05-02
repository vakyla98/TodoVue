import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'

Vue.use(Router) 

export default new Router({
    mode: "history",
    base: 'Vue3/',
    routes:[
        {
            path: 'dist/',
            component: Home
        },
        {
            path:'dist/todos',
            component: () => import('./views/ToDos.vue')
        }
    ]
})