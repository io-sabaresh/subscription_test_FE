import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '@/components/homeScreen'
import Signup from "@/components/signup"
import Login from "@/components/login"


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: HomeScreen },
    { path: '*', redirect: '/' },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;