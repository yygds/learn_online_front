import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {      
      path: '/login',      
      name: 'login',      
      component: login    
    },
    {      
      path: '/home',      
      name: 'home',      
      component: home    
    },
  ]
})
