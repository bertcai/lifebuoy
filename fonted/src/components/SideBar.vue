<template>
  <div class="box">
    <div v-if="isLoading">
      <div class="userinfo">
        <div class="header">
          <router-link to="/">
            <span>主页 /</span>
          </router-link>
        </div>
        <div class="content">
          <div class="wrap">
            <img :src="userInfo.avatar_url" class="user-avatar" />
            <span>{{userInfo.loginname}}</span>
          </div>
          <p class="score">{{userInfo.score}} 积分</p>
          <p class="register-time">注册时间：{{userInfo.create_at | formatTime}}</p>
        </div>
      </div>
      <div class="topic">
        <div class="header">最近创建的话题</div>
        <div class="item" v-for="item in userInfo.recent_topics" :key="item.id">
          <img :src="item.author.avatar_url" />
          <router-link :to="{name:'article', params:{id:item.id}}">
            <span class="title">{{item.title}}</span>
          </router-link>
          <span class="last-time">{{item.last_reply_at | formatTime}}</span>
        </div>
      </div>
      <div class="topic">
        <div class="header">最近参与的话题</div>
        <div class="item" v-for="item in userInfo.recent_replies" :key="item.id">
          <router-link :to="{name:'userInfo', params:{id:item.author.loginname}}">
            <img :src="item.author.avatar_url" />
          </router-link>
          <router-link :to="{name:'article', params:{id:item.id}}">
            <span class="title">{{item.title}}</span>
          </router-link>
          <span class="last-time">{{item.last_reply_at | formatTime}}</span>
        </div>
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <i class="iconfont icon-loading"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      userInfo: {},
      isLoading: true
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
}
</style>
