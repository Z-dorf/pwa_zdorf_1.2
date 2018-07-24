import Vue from 'vue'
import Router from 'vue-router'
import Experiences from '@/components/Experiences'
import Home from '@/components/Home'
import Projets from '@/components/Projets'
import About from '@/components/About'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    }
  ]
})
