import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/instructions',
    name: 'InstructionsPage',
    component: () => import('../views/Instructions.vue')
  },
  {
    path: '/assessment',
    name: 'Assessment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Assessment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
