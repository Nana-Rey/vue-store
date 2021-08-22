import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: ()=> import('../views/Detail.vue')
    
  },
  {
    path: '/pra',
    name: 'Pra',
    
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login')
  },
  {
    path: '/product/:id/:name',
    name: 'Product',
    component: ()=> import('../views/Product.vue')
  },
  {
    path: '/Shopping1',
    component: ()=> import('../views/Shopping1.vue')
  },
  {
    path: '/Shopping2',
    component: ()=> import('../views/Shopping2.vue')
  },
  {
    path: '/Shopping3',
    component: ()=> import('../views/Shopping3.vue')
  },
  {
    path: '/Shopping4',
    component: ()=> import('../views/Shopping4.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
