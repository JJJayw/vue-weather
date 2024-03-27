import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/views/HomeView.vue")
        },
        {
            name: "home",
            path: "/home",
            component: () => import("@/views/HomeView.vue")
        },
        {
            name: 'cityView',
            path: "/weather/:city",
            component: () => import("@/views/CityView.vue")
        },
        {
            name: 'testView',
            path: "/Test",
            component: () => import("@/views/TestView.vue")
        }
    ]
})

export default router
