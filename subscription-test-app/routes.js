import Vue from 'vue'
import VueRouter from 'vue-router'
import TestComponent from '@/components/testComponent'

Vue.use(VueRouter)

const routes = [
    { path: '', name: 'home', component: TestComponent },
    { path: '/', name: 'home', component: TestComponent },
    { path: '*', redirect: '/' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;