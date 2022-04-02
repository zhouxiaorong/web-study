<template>
  <div v-if="isShow()">
    <!-- 无子路由或只有一个子路由时 -->
    <router-link v-if="obj" :to="{ name: obj.name }">
      <el-menu-item :index="getUrl(obj.path)">
        <i :class="obj.meta.icon"></i>
        <span slot="title">{{ obj.meta.title }}</span>
      </el-menu-item>
    </router-link>

    <!-- 子路由个数大于2个时 -->
    <el-submenu v-else :index="baseUrl">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <!-- 递归，展现子路由 -->
      <nav-link v-for="child in item.children" :key="child.path" :item="child" :baseUrl="getUrl(child.path)"></nav-link>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['item', 'baseUrl', ],
  data() {
    return {
      obj: null, //当前导航
    }
  },
  methods: {
    /** 判断当前导航是否展示；获取当前展示的导航 */
    isShow() {
      // 路由中设置了不展示
      if(this.item.meta.isHide){
        return false
      }
      // 无子路由时，显示当前路由
      if(!this.item.children || this.item.children.length <= 0){
        this.obj = {...this.item, path: ''};

      // 只有一个子路由时，显示子路由
      }else if(this.item.children.length == 1){
        this.obj = this.item.children[0];
      }
      return true;
    },
    /** 获取当前导航路由地址 */
    getUrl(url) {
      return !url ? this.baseUrl : this.baseUrl + '/' + url;
    }
  },
}
</script>

<style scoped>
a {text-decoration: none;}

.el-submenu .el-menu-item { background-color: #3e4348 !important; }
.el-submenu .el-menu-item:hover { background-color: #2a2d30 !important; }
</style>