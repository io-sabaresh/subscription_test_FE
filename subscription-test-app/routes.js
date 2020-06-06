
import VueRouter from 'vue-router'
import TestComponent from '@/components/testComponent'

const routes = [
    { path: '/test', component: TestComponent, name: 'test' },
]


const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;