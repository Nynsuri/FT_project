import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Guides of Warcraft' }

    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'About - Guides of Warcraft' }

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.afterEach((to) => {
    document.title = to.meta.title || 'Guides of Warcraft';
});
export default router