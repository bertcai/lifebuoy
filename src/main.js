import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.filter('formatTime', function (value) {
  let lastTime = new Date(value)
  // console.log(lastTime)
  let nowTime = Date.now()
  // console.log(nowTime)
  let duration = (nowTime - lastTime) / 1000
  console.log(duration)
  switch (true) {
    case duration < 30: {
      return '刚刚'
    }
    case duration < 60: {
      return Math.ceil(duration) + 's前'
    }
    case duration < 60 * 60: {
      return Math.ceil(duration / 60) + '分钟前'
    }
    case duration < 60 * 60 * 24: {
      return Math.ceil(duration / 3600) + '小时前'
    }
    case duration < (60 * 60 * 24 * 30): {
      return Math.ceil(duration / (3600 * 24)) + '天前'
    }
    case duration < 60 * 60 * 24 * 30 * 12: {
      return Math.ceil(duration / (3600 * 24 * 30)) + '月前'
    }
    default: {
      return '1年前'
    }
  }
})

Vue.filter('formatTab', function (value, top, good) {
  if (top) return '置顶'
  if (good) return '精华'
  switch (value) {
    case '­share':
      return '分享'
    case 'ask':
      return '问答'
    case 'jon':
      return '招聘'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
