<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: "history",
    base: '/Vue3/',
    routes: [
        {
            path: '/dist',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/dist/todos',
            component: () => import('./views/ToDos.vue')
        },
        {
            path: '/dist/users',
            component: () => import('./views/Users.vue')
        },
        {
            // instead 404 page
            path: '/*',
            redirect: '/dist'
        }
    ]
=======
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: "hash",
    routes: [
        {
            path: '/dist',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/dist/todos',
            component: () => import('./views/ToDos.vue')
        },
        {
            path: '/dist/users',
            component: () => import('./views/Users.vue')
        },
        {
            // instead 404 page
            path: '/*',
            redirect: '/dist'
        }
    ]
>>>>>>> 4658f110edbcec70f761c7576ce2695fdca07bb7
})