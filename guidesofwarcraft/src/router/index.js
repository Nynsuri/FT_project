import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mounts from '../views/Mounts.vue'
import Pets from '../views/Pets.vue'
import Toys from '../views/Toys.vue'
import Transmogs from '../views/Transmogs.vue'
import About from '../views/About.vue'

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
        component: Mounts
    },
    {
        path: '/guides/pets',
        name: 'Pets',
        component: Pets
    },
    {
        path: '/guides/toys',
        name: 'Toys',
        component: Toys
    },
    {
        path: '/guides/transmogs',
        name: 'Transmogs',
        component: Transmogs
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