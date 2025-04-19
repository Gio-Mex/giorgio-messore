import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BioView from '@/views/BioView.vue'
import Projects from '@/views/Projects.vue'
import Contacts from '@/views/Contacts.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bio',
      name: 'bio',
      component: BioView
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router