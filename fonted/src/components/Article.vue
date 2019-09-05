<template>
  <div class="box">
    <div class="wrap" v-if="!isLoading">
      <div class="article-header">
        <span class="cate">{{article.tab | formatTab(article.top,article.good)}}</span>
        <h2 class="title">{{article.title}}</h2>
        <div class="desc">
          <span>发布于 {{article.create_at | formatTime}}</span>
          <router-link :to="{name: 'userInfo',params:{id:article.author.loginname}}">
            <span class="author">作者 {{article.author.loginname}}</span>
          </router-link>
          <span>{{article.visit_count}} 次浏览</span>
          <span>来自 {{article.tab | formatTab}}</span>
        </div>
      </div>
      <div class="content" v-html="article.content"></div>
    </div>
    <div class="reply-box" v-if="!isLoading">
      <div class="reply-header">{{article.reply_count}} 回复</div>
      <div class="reply-content">
        <div v-for="(item,index) in article.replies" :key="item.id" class="reply-item">
          <router-link :to="{name:'userInfo',params:{id:item.author.loginname}}">
            <img class="avatar" :src="item.author.avatar_url" />
          </router-link>
          <div class="user-info">
            <router-link :to="{name:'userInfo',params:{id:item.author.loginname}}">
              <span class="reply-author">{{item.author.loginname}}</span>
            </router-link>
            <div class="reply-desc">{{index+1}}楼 • {{item.create_at | formatTime}}</div>
          </div>
          <div class="reply-details" v-html="item.content"></div>
          <div class="reply-good">
            <i class="iconfont icon-zan_"></i>
            {{item.ups.length}}
          </div>
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
  name: 'Article',
  data () {
    return {
      isLoading: true,
      article: {}
    }
  },
  methods: {
    getArticle () {
      this.$http
        .get(`/topic/${this.$route.params.id}`)
        .then(res => {
          this.article = res.data.data
          this.isLoading = false
          console.log(this.article)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount () {
    this.isLoading = true
    this.getArticle()
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 10px;
  .wrap {
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    .article-header {
      border-bottom: 1px solid #eee;
      .cate {
        display: inline-block;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 3px;
        background: #80bd01;
        color: #fff;
        line-height: 12px;
      }
      .title {
        display: inline-block;
        margin-left: 10px;
      }
      .desc {
        color: #838383;
        font-size: 10px;
        .author {
          color: #838383;
        }
        .author:hover {
          color: #444;
          text-decoration: underline;
        }
        span::before {
          content: " • ";
        }
        span::after {
          content: " ";
        }
        margin-bottom: 10px;
      }
    }
    .content {
      padding: 20px;
    }
  }
  .reply-box {
    margin-top: 10px;
    border-radius: 5px;
    .reply-header {
      background: #f6f6f6;
      color: #444;
      padding: 20px;
    }
    .reply-content {
      background: #fff;
      padding: 20px;
      .reply-item {
        position: relative;
        border-bottom: 1px #ccc solid;
        padding: 10px 0;
        .avatar {
          width: 30px;
          height: 30px;
        }
        .user-info {
          position: absolute;
          left: 33px;
          top: 10px;
          .reply-author {
            font-size: 12px;
            color: #666;
            font-weight: 2;
            display: inline;
            margin-right: 5px;
          }
          .reply-author:hover {
            color: #444;
          }
          .reply-desc {
            display: inline-block;
            color: #08c;
            font-size: 12px;
          }
        }
        .reply-details {
          margin-left: 40px;
          margin-bottom: 20px;
        }
        .reply-good {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #666;
          font-size: 14px;
          i:hover {
            color: #444;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.loading {
  text-align: center;
  animation: rotate 1000ms linear infinite;
  i {
    font-size: 30px;
    color: #aaa;
  }
}
</style>
