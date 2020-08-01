// 引入vue的依赖
import Vue from 'vue'
// 引入router的依赖
import VueRouter from 'vue-router'
// 引入home组件 
// import Home from '../views/Home.vue'
 import  Header from '../views/Header.vue'
// 将vueRouter引入到vue中
// this.$router
Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
 
]

const router = new VueRouter({
  // mode: 'history',  默认hash模式
  // base: process.env.BASE_URL,   暂时用不到
  routes
})

export default router
