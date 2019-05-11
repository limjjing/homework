import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import container from '@/components/container.vue'
import search from '@/components/search.vue'
import viewV from '@/components/view.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/',
      name: 'container',
      component: container
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/viewV',
      name: 'viewV',
      component: viewV,
    },
  ]
})
