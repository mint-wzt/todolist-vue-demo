import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../TodoList.vue'
import Count from '../components/Count.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/info',
        name: 'TodoList',
        component: TodoList
    },
    {
        path: '/count',
        name: 'Count',
        component: Count
    },
    {
        path: '/request',
        name: 'http request',
        component: () => import('../components/Axios.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
