import { createRouter, createWebHistory } from 'vue-router'
import "../assets/styles/style.css"
import Home from '@/views/Home.vue'
import ServiceList from '@/views/ServiceList.vue'
import ServiceDetails from '@/views/ServiceDetails.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/auth/login', name: 'login', component: Login },
    { path: '/auth/register', name: 'register', component: Register },
    // { path: '/blog', name: 'blog-list', component: BlogListView },
    // { path: '/blog/:id', name: 'blog-detail', component: BlogDetailView },
    { path: '/services', name: 'service-list', component: ServiceList },
    { path: '/service/:id', name: 'service-detail', component: ServiceDetails },
  ]
})

export default router
