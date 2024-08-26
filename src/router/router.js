import { createRouter, createWebHistory } from 'vue-router'
import { HOME_PAGE_URL, POSTS_ID_PAGE_URL, POSTS_PAGE_URL } from './routes'
import Home from '@/pages/HomePage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'

const routes = [
    {
        path: HOME_PAGE_URL,
        component: Home
    },
    {
        path: POSTS_PAGE_URL,
        component: PostsPage
    },
    {
        path: POSTS_ID_PAGE_URL,
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
