import Vue from 'vue'
import Router from 'vue-router'
// 引入路由
import index from '../pages/index'
import movieDetail from "../pages/movieDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
  ]
})
