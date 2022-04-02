<template>
  <div class="layout">
    <div class="layout-left">
      <el-menu class="el-menu-vertical-demo" 
        :collapse="isCollapse" 
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <nav-link v-for="item in $router.options.routes" 
                  :key="item.path" 
                  :item="item" 
                  :baseUrl="item.path"
                  active-class=""
        ></nav-link>
      </el-menu>
    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink'
export default {
  name: 'LayoutPage',
  components: { 
    NavLink
  },
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {
    // console.log(this.$route.path)
  },
}
</script>

<style scoped>
.layout {width: 100%;height: 100%;}
.layout-left {width: 200px;position: fixed;left:0px;top:0px;bottom: 0px;background-color: #545c64;}
.layout-left a {color: white;text-decoration: none;}
.layout-right {height: 100%;margin-left: 200px;background-color: rgb(230, 230, 230);}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: 0px;
}
</style>