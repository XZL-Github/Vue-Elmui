import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Report from '../components/Report/Report.vue'
import BubbleSort from '../components/SortAlgorthm/BubbleSort.vue'
// import Wangeditor from '../components/WangEditor/WangeditorDemo1.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redircet: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redircet: '/welcome',
    children: [
      {
        path: '/welcome', component: Welcome
      },
      {
        path: '/users', component: Users
      },
      {
        path:'/report', component: Report
      },
      {
        path:'/bubbleSort',component:BubbleSort
      }
      // {
      //   path:'/wangeditor',component:Wangeditor
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/**
 * 挂载路由导航守卫
 * to 将要访问的路径
 * form 从哪个路径跳转过来
 * next 是一个函数 表示放行
 */
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   //获取token
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) return next("/login");
//   next();
// })
export default router
