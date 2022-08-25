import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/indexPage.vue'

const routerArr = [
    {
        path: '/',
        redirect: 'vehiclePad'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/vehicleData',
        component: () => import('@/views/vehicleData/indexPage.vue'),
        name: 'vehicleData',
    },
    {
        path: '/vehiclePad',
        component: () => import('@/views/vehicleData_Pad/indexPage.vue'),
        name: 'vehiclePad',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerArr
})

export default router