import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("@/views/HomeView.vue"),
            meta: {
                title: "首页",
            }
        },
        {
            name: 'cityView',
            path: "/weather/:city",
            component: () => import("@/views/CityView.vue"),
            meta: {
                title: "天气",
            }
        },
        {
            name: 'testView',
            path: "/Test",
            component: () => import("@/views/TestView.vue")
        }
    ]
})

router.beforeEach((to, form, next) => {

    // 修改标题
    document.title = `${to.params.city ? to.params.city : to.meta.title} | 当地天气`;
    next();
})
export default router
