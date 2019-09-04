<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <Postlist></Postlist>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  components: {
    Header,
    Postlist
  }
}
</script>
<style>
@import url(./normalize.css);
@import url(//at.alicdn.com/t/font_1297651_a6il7yh8saq.css);
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
