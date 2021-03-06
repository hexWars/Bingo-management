/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 18:39:16
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-21 21:41:21
 * @FilePath: \Bingo-manage\bingo-manage\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home.vue'),
    children:[
      {
        path: '',
        redirect: '/dashboard/workspace'
      },
      {
        path: '/dashboard/workspace',
        component: () => import('../views/dashboard/workspace/index.vue')
      },
      {
        path: '/dashboard/analysis',
        component: () => import('../views/dashboard/analysis/index.vue')
      },
      {
        path: '/userAdmin/administrators',
        component: () => import('../views/userAdmin/administrators.vue')
      },
      {
        path: '/userAdmin/ordinaryuser',
        component: () => import('../views/userAdmin/ordinaryuser.vue')
      },
      {
        path: '/examine/experiment',
        component: () => import('../views/examine/experiment.vue')
      },
      {
        path: '/examine/questionnaire',
        component: () => import('../views/examine/questionnaire.vue')
      }
    ]
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

// 全局守卫：登陆拦截
// router.beforeEach((to, from, next) => {
//   if(!localStorage.getItem('token')) {
//     if(to.name == 'login') {
//       next();
//     }else {
//       router.push('login')
//     }
//   }else {
//     next();
//   }
// })

export default router