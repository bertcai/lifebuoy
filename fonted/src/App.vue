<template>
  <div id="app">
    <Header></Header>
    <div class="main-home">
      <!-- <div class="main"> -->
        <router-view name="main" class="main"></router-view>
      <!-- </div> -->
      <!-- <div class="side"> -->
        <router-view name="sidebar" class="side"></router-view>
      <!-- </div> -->
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
<style lang="scss">
@import url(./assets/normalize.css);
@import url(//at.alicdn.com/t/font_1297651_09rqyrgldf0w.css);
@import url(./assets/markdown-github.css);
.footer {
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
.main-home {
  width: 90%;
  margin: 0 auto;
  display: flex;
  // justify-content: space-between;
  .main {
    flex:1;
    overflow: hidden;
    // flex-basis: 70%;
  }
  .side {
    // flex: auto;
    margin-left: 20px;
    // // min-width: 300px;
    flex-basis: 30%;
  }
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
