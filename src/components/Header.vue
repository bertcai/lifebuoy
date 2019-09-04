<template>
  <div class="nav">
    <div class="wrap clearfix">
      <a class="logo">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" />
      </a>
      <ul>
        <li class="active">
          <a href="#">首页</a>
        </li>
        <!-- <li><a href="#">未读消息</a></li> -->
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登陆</a>
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
        a {
          font-size: 14px;
          color: #ccc;
        }
        a:hover {
          color: #fff;
        }
      }
      .active {
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
