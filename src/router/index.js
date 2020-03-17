import Vue from 'vue'
import Router from 'vue-router'

import main from "../views/main";
import login from "../views/login";

// 用于嵌套的路由组件
import userInfo from '../views/user/userInfo'
import userList from '../views/user/userList'

Vue.use(Router)

export default new Router({
  routes:[
    {
      // 登录页
      name: 'login',
      path: '/login',
      component: login
    },
    {
      // 首页
      name: 'main',
      path: '/main',
      component: main,
      // 配置嵌套路由
      children: [
        {path: '/user/userInfo', component: userInfo},
        {path: '/user/userList', component: userList},
      ]
    }
  ]
})
