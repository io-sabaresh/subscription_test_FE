import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '@/components/homeScreen'
import Signup from "@/components/signup"
import Login from "@/components/login"

Vue.use(VueRouter)

const routes = [
    { path: '*', redirect: '/' },
    { path: '/', name: 'Home', component: HomeScreen },
    { path: '/signup', name: 'SignUp', component: Signup },
    { path: '/login', name: 'Login', component: Login },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.user.isAuthorized !== true) next({ name: 'Login' })
    next()
})

export default router;