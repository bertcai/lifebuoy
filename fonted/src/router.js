import Vue from 'vue'
import Router from 'vue-router'
import Postlist from './components/Postlist'
import Article from './components/Article'
import UserInfo from './components/UserInfo'
import SideBar from './components/SideBar'
import ErrorPage from './views/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    components: {
      main: Postlist
    }
  },
  {
    path: '/article/:id&:author',
    name: 'article',
    components: {
      main: Article,
      sidebar: SideBar
    }
  },
  {
    path: '/userInfo/:id',
    name: 'userInfo',
    components: {
      main: UserInfo
    }
  },
  {
    path: '/404',
    components: {
      main: ErrorPage
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
  ]
})
