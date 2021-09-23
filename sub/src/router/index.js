import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'





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
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: ()=> import('../views/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=> import('../views/Cart.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: ()=> import('../views/Signup.vue')
  },
  {
    path: '/check',
    name:'Check',
    component: ()=> import('../views/Check.vue'),
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: ()=> import('../views/Checkout.vue'),
  },
  {
    path:'/product2',
    name: 'Product2',
    component: ()=> import('../views/Product2.vue'),
  },
  {
    path:'/log2',
    name:'Log2',
    component: ()=> import('../views/Log2.vue'),
  },
  {
    path:'/register',
    name:'Register',
    component: ()=> import('../views/Register.vue'),
  },
  {
    path:'/detail1/:id',
    name:'Detail1',
    component: ()=> import('../views/Detail1.vue'),
  },
  {
    
      path: '/after',
      name: 'After',
      component: ()=> import('../views/After.vue'),
    
  },
  {
    path:'/detail/:orderId',
    name:'Detail_detail',
    component:()=> import('../views/Detail.vue'),
  }
  
  
  
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from,next) => {
//   const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
//   if (requiresAuth) {
//     next({ path: "/singin", query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });
router.beforeEach((to,from,next) =>{
  const requiresAuth= (to.matched.some(record => record.meta.requiresAuth))
    if (requiresAuth){

      firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        next({ name: 'Login'});
      }
    })
  } else {
    next();
  }
});

export default router;
