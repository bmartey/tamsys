import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Info from '@/components/Info'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
