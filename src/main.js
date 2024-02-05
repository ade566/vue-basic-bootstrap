import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import App from '@/App.vue'

import HomePage from '@/HomePage.vue'
import AboutPage from '@/AboutPage.vue'
import ServicePage from '@/ServicePage.vue'
import ServiceFind from '@/ServiceFind.vue'
import FaqPage from '@/FaqPage.vue'
import ContactPage from '@/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage, name: '/' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/service', component: ServicePage, name: 'service' },
  { path: '/service/:id', component: ServiceFind, name: 'service-find' },
  { path: '/faq', component: FaqPage, name: 'faq' },
  { path: '/contact', component: ContactPage, name: 'contact' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
