<template>
  <div id="app">
    <!-- exclude: 不被缓存的组件 -->
    <keep-alive exclude="Details">
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
div, h3, ul, li, body, canvas {border:0px;margin:0px;padding:0px;}
</style>
