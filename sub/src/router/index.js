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
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/product/:id/:name/:price',
    name: 'Product',
    component: ()=> import('../views/Product.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=> import('../views/Cart.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: ()=> import('../views/List.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: ()=> import('../views/Signup.vue')
  }
  
  
]

const router = new VueRouter({
  routes
})

export default router
