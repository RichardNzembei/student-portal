import { createRouter, createWebHistory } from "vue-router";
import loginCard from "@/views/loginCard.vue";
import dashboardCard from "@/views/dashboardCard.vue";
const routes = [
    {
        path: '/',
        name: 'loginCard',
        component: loginCard
    },
    {
        path: '/dashboard',
        name: 'dashboardCard',
        component: dashboardCard
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;