<template>
  <div class="nav">
    <div class="wrap clearfix">
      <router-link :to="{name:'home'}" class="logo">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" />
      </router-link>
      <ul>
        <li>
          <router-link :to="{name:'home'}" class="active">
            <span>首页</span>
          </router-link>
        </li>
        <!-- <li><span href="#">未读消息</span></li> -->
        <li>
          <router-link :to="{name:'home'}" class="">
            <span href="#">新手入门</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}" class="">
            <span href="#">API</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}" class="">
            <span href="#">关于</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}" class="">
            <span href="#">注册</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}" class="">
            <span href="#">登陆</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.nav {
  background: #444;
  padding: 5px 0;
  .wrap {
    margin: 0 auto;
    max-width: 800px;
    .logo {
      display: inline-block;
      height: 28px;
      padding: 6px 20px;
      img {
        width: 120px;
        height: 28px;
      }
    }
    ul {
      display: block;
      float: right;
      margin: 0;
      li {
        margin: 0 20px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        span {
          font-size: 14px;
          color: #ccc;
        }
        span:hover {
          color: #fff;
        }
      }
      .active {
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
