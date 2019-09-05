import Vue from 'vue'
import Router from 'vue-router'
import Postlist from './components/Postlist'
import Article from './components/Article'

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
    path: '/',
    name: 'userInfo'
  }
  ]
})
