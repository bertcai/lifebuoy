<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
@import url(./assets/normalize.css);
@import url(//at.alicdn.com/t/font_1297651_09rqyrgldf0w.css);
@import url(./assets/markdown-github.css);
.footer{
  height: 100px;
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
body {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.main {
  margin: 0 auto;
  max-width: 960px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
