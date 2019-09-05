<template>
  <div class="box">
    <div v-if="!isLoading">
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
  name: 'UserInfo',
  data () {
    return {
      isLoading: false,
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      this.$http
        .get('/user/' + this.$route.params.id)
        .then(res => {
          this.userInfo = res.data.data
          this.isLoading = false
          console.log(this.userInfo)
          console.log(this.isLoading)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount () {
    this.isLoading = true
    this.getUserInfo()
  },
  watch: {
    $route: function () {
      this.isLoading = true
      this.getUserInfo()
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  color: #333;
  text-align: center;
  img {
    width: 30px;
    height: 30%;
    border-radius: 3px;
  }
  .loading {
    display: inline-block;
    animation: rotate 1000ms linear infinite;
    i {
      font-size: 30px;
      color: #aaa;
    }
  }
  .userinfo {
    text-align: left;
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    .header {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: #f1f1f1;
      text-align: left;
      padding: 10px;
      font-size: 14px;
      span {
        color: #80bd01;
      }
      span:hover {
        text-decoration: underline;
      }
    }
    .content {
      padding: 10px;
      .wrap {
        display: flex;
        color: #778087;
        img {
          width: 40px;
          height: 40px;
        }
        span {
          margin-left: 20px;
        }
      }
      .register-time {
        color: #777;
        font-size: 14px;
      }
    }
  }
  .topic {
    text-align: left;
    background: #fff;
    border-radius: 5px;
    margin-top: 20px;
    .header {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: #f1f1f1;
      padding: 10px;
      font-size: 14px;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 15px;
      font-size: 10px;
      border-bottom: 1px #eee solid;
      .title {
        font-size: 14px;
        color: #08c;
        cursor: pointer;
        margin-left: 10px;
      }
      .title:hover {
        color: #005580;
        text-decoration: underline;
      }
      .last-time {
        color: #777;
        margin-left: auto;
      }
    }
  }
}
</style>
