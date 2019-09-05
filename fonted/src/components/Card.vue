<template>
  <div>
    <div class="header">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
