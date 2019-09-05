<template>
  <div class="box">
    <div class="post">
      <div class="tab-bar">
        <a href="#" class="active">全部</a>
        <a href="#">精华</a>
        <a href="#">分享</a>
        <a href="#">问答</a>
        <a href="#">招聘</a>
        <a href="#">客户端测试</a>
      </div>
      <ul>
        <li v-for="item in itemlist" :key="item.id" class="clearfix">
          <img :src="item.author.avatar_url" class="avatar" />
          <span class="count-wrap">
            <span class="reply-count">{{item.reply_count}}</span>/
            <span class="visit-count">{{item.visit_count}}</span>
          </span>
          <div class="wrap">
            <span
              :class="[{top:(item.top===true),good:(item.good===true),cate:true}]"
            >{{item.tab | formatTab(item.top,item.good)}}</span>
            <router-link :to="{name:'article', params:{id:item.id}}">
              <span class="title">{{item.title}}</span>
            </router-link>
          </div>
          <span class="last-time">{{item.last_reply_at | formatTime}}</span>
        </li>
      </ul>
      <div class="loading" v-if="isLoading">
        <i class="iconfont icon-loading"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Postlist',
  data () {
    return {
      isLoading: false,
      itemlist: []
    }
  },
  computed: {},
  methods: {
    getItemlist () {
      this.isLoading = true
      this.$http
        .get('/topics', {
          params: {
            page: 1,
            limit: 10
          }
        })
        .then(res => {
          this.itemlist = res.data.data
          console.log(this.itemlist)
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount () {
    this.getItemlist()
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 10px;
  background: #fff;
  border-radius: 3px;
}
.loading {
  text-align: center;
  animation: rotate 1000ms linear infinite;
  i {
    font-size: 30px;
    color: #aaa;
  }
}
.post {
  .tab-bar {
    height: 30px;
    padding: 10px;
    background: #f5f5f5;
    a {
      display: block;
      float: left;
      margin-right: 20px;
      font-size: 14px;
      line-height: 30px;
      border-radius: 3px;
      background: #f5f5f5;
      padding: 0 10px;
      color: #80bd01;
      cursor: pointer;
    }
    a:hover {
      background: #80bd01;
      color: white;
      transition: 0.5s;
    }
    .active {
      background: #80bd01;
      color: white;
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    position: relative;
    padding: 10px;
    border-bottom: 0.5px solid #eee;
    .avatar {
      width: 30px;
      height: 30px;
      float: left;
    }
    .count-wrap {
      position: absolute;
      font-size: 8px;
      left: 85px;
      bottom: 5px;
      color: #333;
      .visit-count {
        color: #b4b4b4;
      }
      .reply-count {
        color: #9e78c0;
      }
    }
    .wrap {
      position: relative;
      height: 30px;
      line-height: 30px;
      margin-left: 40px;
      .cate {
        display: inline-block;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 3px;
        background: #999;
        color: #e5e5e5;
        line-height: 12px;
        margin: 0 4px;
      }
      .top,
      .good {
        background: #80bd01;
        color: #fff;
      }
      .title {
        font-size: 12px;
        color: #333;
      }
      .title:hover {
        text-decoration:underline;
      }
      .title:visited {
        color: #888;
      }
    }
    .last-time {
      position: absolute;
      right: 5px;
      bottom: 5px;
      font-size: 10px;
      color: #888;
    }
  }
  ul li:hover {
    background: #f5f5f5;
  }
}
</style>
