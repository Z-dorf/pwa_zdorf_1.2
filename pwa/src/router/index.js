import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projets from '@/components/Projets'
import Contact from '@/components/Contact'
import Competences from '@/components/Competences'
import About from '@/components/About'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/competences',
      name: 'Competences',
      component: Competences
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    }
  ]
})
