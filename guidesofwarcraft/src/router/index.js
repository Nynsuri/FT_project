import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mounts from '../views/Mounts.vue'
import Pets from '../views/Pets.vue'
import Toys from '../views/Toys.vue'
import Transmogs from '../views/Transmogs.vue'
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
        component: Mounts,
        meta: { title: 'Mounts - Guides of Warcraft' }
    },
    {
        path: '/guides/pets',
        name: 'Pets',
        component: Pets,
        meta: { title: 'Pets - Guides of Warcraft' }
    },
    {
        path: '/guides/toys',
        name: 'Toys',
        component: Toys,
        meta: { title: 'Toys - Guides of Warcraft' }
    },
    {
        path: '/guides/transmogs',
        name: 'Transmogs',
        component: Transmogs,
        meta: { title: 'Transmogs - Guides of Warcraft' }
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