import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 当用户访问 / 时，给用户展现 HelloWorld 组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: Home // 同步加载（所有逻辑都在 app.js 里，进入首页时就全部加载完成）
      // 异步组件（实现按需加载）=> 如果 app.js 文件过大时这这么搞（比如超过1MB）
      component: () => import('@/components/HelloWorld')// 异步组件
    },{
      path: '/test1',
      name: 'test-1',
      // component: Home // 同步加载（所有逻辑都在 app.js 里，进入首页时就全部加载完成）
      // 异步组件（实现按需加载）=> 如果 app.js 文件过大时这这么搞（比如超过1MB）
      component: () => import('@/pages/test-1')// 异步组件
    },{
      path: '/test2',
      name: 'test-2',
      // component: Home // 同步加载（所有逻辑都在 app.js 里，进入首页时就全部加载完成）
      // 异步组件（实现按需加载）=> 如果 app.js 文件过大时这这么搞（比如超过1MB）
      component: () => import('@/pages/test-2')// 异步组件
    }
  ],
  // 每次切换页面时始终回到最顶部（x轴:0，y轴：:0）
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})