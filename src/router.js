import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Create from './views/Create.vue'
import Update from './views/Update.vue'
import Find from './views/Find.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    }
  ]
})
