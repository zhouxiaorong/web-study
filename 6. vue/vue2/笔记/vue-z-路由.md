# vue 路由 Router

## 配置
  ```js
    import VueRouter from 'VueRouter';
    import xxVue = import '../xxx.vue';
    new VueRouter({
      // 整个应用的路由信息数组
      routers: [
        {
          name: 'xxxx', // 路由名称，可替代路由地址使用，简化路由的跳转（使用时必须写成对象形式
          path: '/aa', // 路由地址
          component: xxVue,// 组件
          // 配置子级路由（第二层路由）
          children: [
            {
              path: 'bb', // 路由地址（不需要写`/`, 不用写包括父级，跳转时路径： `/aa/bb`
              component,
              children: [
                ...
              ]
            } 
          ],
          // 传递数据，对象写法：（传递死数据
          props: {
            a: 1
          },
          // 传递数据，布尔值写法，判断是否把该路由组件收到的所有 params 参数，以props的形式传给Detail组件
          props: true，
          // 值为函数，返回query参数，该路由组件收到的所有 query  参数，以props的形式传给Detail组件
          props($route){
            return {
              id: $route.query.id,
              ...
            }
          }
        },
        {
          path: '/xx/:name'// :name 为占位符，name为params中的参数名，使用时放参数值
          component: () => import('@/pages/home/Home'),// 异步组件

        }
      ]
    })
  ```


## 标签
  ```html
  <!-- 直接写，router-link转成a标签（必须点才能跳路由地址） -->
  <router-link to="/xxx?paramName=value&..." active-class="class-name"></router-link>
  <!-- 用对象；path：路由地址，query：参数 -->
  <router-link :to="{
    path="/xxx"
    query: {
      paramName: value,
      ...
    },
    params: {
      ...
    }
  }">
  <!-- 使用路由名称 -->
  <router-link :to="{name: 'xxxx', query: {}}"></router-link>
  <!-- /xx是路由，zhou是为`:name`的值，使用`$router.params.name`获取 -->
  <router-link to="/xx/zhou"></router-link>
  <!-- 使用对象+params写法时，必须使用name方式，否则使用path时路径会有问题 -->
  <router-link :to="{
    name="routerName"
    params: {
      ...
    }
  }">
  <!-- 视图 -->
  <router-view></router-view> 
  ```

## 注意事项 
  - 切换走不用的路由组件会被销毁


## $route
  > 当前的路由信息
  
  - 参数信息
    ```js
      $router.query.paramName
      $router.params.paramName
    ```
  
  - 接收路由数据
    ```js
      new Vue({
        props
      })
    ```


## $router
  - 整个应用的router

## 