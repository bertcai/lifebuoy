<template>
  <div class="box">
    <div class="wrap">
      <span @click="currentPage=1">首页</span>
      <span @click="currentPage = currentPage > 1 ? currentPage-- : 1">上一页</span>
      <span v-if="currentPage>=4" class="disable">...</span>
      <span
        v-for="(page,index) in pageBtns"
        :key="index"
        :class="[{active:currentPage === page},{disable:page === '...'}]"
        @click="currentPage = typeof page === 'number' ? page : currentPage"
      >{{page}}</span>
      <span @click="currentPage++">下一页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      pageBtns: [1, 2, 3, 4, 5, '...'],
      currentPage: 1
    }
  },
  methods: {
    changePage () {
      if (this.currentPage >= 4) {
        let page = this.currentPage
        this.pageBtns = [page - 2, page - 1, page, page + 1, page + 2, '...']
      } else {
        this.pageBtns = [1, 2, 3, 4, 5, '...']
      }
      if (typeof this.currentPage === 'number') {
        console.log(this.currentPage)
        this.$emit('page-change', this.currentPage)
      }
    }
  },
  watch: {
    currentPage: function () {
      this.changePage()
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 10px 5px;
  .wrap {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
    span {
      padding: 4px 10px;
      margin-right: 10px;
      background: #fff;
      border-radius: 3px;
      color: #777;
      min-width: 14px;
      text-align: center;
      cursor: pointer;
      outline: none;
      font-size: 12px;
      border: 1px solid #ccc;
    }
    span::selection {
      background: no-repeat;
    }
    span:hover {
      background: #eee;
      color: #333;
      transition: 100ms;
    }
    .active {
      background: #333;
      color: #fff;
      cursor: default;
    }
    .active:hover {
      background: #333;
      color: #fff;
    }
    .disable{
        cursor: default;
    }
  }
}
</style>>
