// 该文件专门用于创建整个应用的路由器
import Vue from 'vue';
import VueRouter from 'vue-router';
//引入组件
// import Error_404 from '../components/404'
// import PageOne from '../pages/PageOne.vue'
// import PageTwo from '../pages/PageTwo.vue'

const Error_404 = r => require.ensure([], () => r(require('../components/404.vue')), 'Error_404')
const Login = r => require.ensure([], () => r(require('../pages/Login.vue')), 'Login')

const Layout = r => require.ensure([], () => r(require('../layout/index.vue')), 'Layout')
const PageOne = r => require.ensure([], () => r(require('../pages/PageOne.vue')), 'PageOne')
const PageTwo = r => require.ensure([], () => r(require('../pages/PageTwo.vue')), 'PageTwo')
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        isNotLogin: true,
        isHide: true
      }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/PageOne/index',
      meta: {
        title: 'home',
        isHide: true
      }
    },
    {
      path: '/PageOne',
      component: Layout,
      meta: {
        isHide: false, 
        icon: 'el-icon-star-on'
      },
      children: [
        {
          path: "index",
          name: "PageOneIndex",
          component: PageOne,
          meta: { title: 'PageOne', icon: 'el-icon-star-on' },
        }
      ]
    },
    {
      path: '/hello',
      component: Layout,
      meta: {
        isHide: false,
        title: 'hello',
        icon: 'el-icon-sunny'
      },
      children: [
        {
          path: "one",
          name: 'HelloOne',
          // component: () => import('@/pages/PageOne'),
          // import PageOne from '../pages/PageOne.vue'
          component: PageOne,
          meta: { title: 'Hello One', icon: 'el-icon-s-promotion' },
        }, {
          path: "two",
          name: 'HelloTwo',
          component: PageTwo,
          meta: { title: 'Hello Two', icon: 'el-icon-s-opportunity' },
        }
      ]
    },
    {
      path: '/PageTwo',
      component: Layout,
      meta: { isHide: false, icon: 'el-icon-menu' },
      children: [
        {
          path: "index",
          name: "PageTwoIndex",
          component: PageTwo,
          meta: { title: 'PageTwo', icon: 'el-icon-menu' },
        }
      ]
    },
    {
      path: '/world',
      component: Layout,
      meta: {
        isHide: false,
        title: 'world',
        icon: 'el-icon-magic-stick'
      },
      children: [
        {
          path: "one",
          name: 'WorldOne',
          component: PageOne,
          meta: { title: 'Hello One', icon: 'el-icon-edit' },
        }, {
          path: "two",
          name: 'WorldTwo',
          component: PageTwo,
          meta: { title: 'Hello Two', icon: 'el-icon-umbrella' },
        }
      ]
    },
    {
      path: '/PageTest',
      name: 'PageTest',
      component: PageTwo,
      meta: { isHide: true, title: "PageTest", icon: 'el-icon-data-board' },
    },
    {
      path: '*',
      component: Error_404,
      meta: {
        isNotLogin: true,
        title: 'error',
        isHide: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'manage';
  if (to.meta.isNotLogin) {
    // 不需登录的路由直接跳转
    next();
  } else {
    if (true) {
      // 未登录时跳转登录页面
      next({ path: '/login' });
    } else {
      // 判断是否已登录
      // next();
    }
  }
  
  /* 必须调用 `next` */
  next();
})

//创建并暴露一个路由器
export default router;