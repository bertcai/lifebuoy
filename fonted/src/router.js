import Vue from 'vue'
import Router from 'vue-router'
import Postlist from './components/Postlist'
import Article from './components/Article'
import UserInfo from './components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Postlist
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/userInfo/:id',
    name: 'userInfo',
    component: UserInfo
  }
  ]
})
