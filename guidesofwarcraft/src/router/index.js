import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Guides of Warcraft' }
    },
    {
        path: '/guides/mounts',
        name: 'Mounts',
        component: () => import('../views/Mounts.vue'),
        meta: { title: 'Mounts - Guides of Warcraft' }
    },
    {
        path: '/guides/pets',
        name: 'Pets',
        component: () => import('../views/Pets.vue'),
        meta: { title: 'Pets - Guides of Warcraft' }
    },
    {
        path: '/guides/toys',
        name: 'Toys',
        component: () => import('../views/Toys.vue'),
        meta: { title: 'Toys - Guides of Warcraft' }
    },
    {
        path: '/guides/transmogs',
        name: 'Transmogs',
        component: () => import('../views/Transmogs.vue'),
        meta: { title: 'Transmogs - Guides of Warcraft' }
    },
    {
        path: '/guides/mounts/:slug',
        name: 'MountDetail',
        component: () => import('../views/MountDetail.vue'),
        meta: { title: 'Mounts - Guides of Warcraft'}
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUs,
        meta: { title: 'About us - Guides of Warcraft' }
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