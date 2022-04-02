# vue 路由 vue-router

  > 一个路由（route）就是一组映射关系（key - value）  
  > 多个路由需要路由器（router）进行管理  
  > 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。

## 注意事项
  1. 切换走的路由组件，默认是被销毁的，需要的时候再去挂载

## Vue生命钩子
  > 路由组件所独有的两个钩子，用于捕获路由组件的激活状态
### activated
  > 路由组件被激活时触发 

### deactivated
  > 路由组件失活时触发

## 安装
  - 安装3版本 **vue-router**: ```npm i vue-router@3```
  - 安装最新（4）版本 **vue-router**: ```npm i vue-router```


## 基本使用
  1. 在入口文件 `main.js` 中应用插件

    ``` js
      //引入VueRouter
      import VueRouter from 'vue-router'
      // 应用插件（安装路由功能）
      Vue.use(VueRouter);
    ```

  2. 编写 `vue-router` 配置项文件 `router/index.js`；[配置项](#配置项)

    ```js
      //引入VueRouter
      import VueRouter from 'vue-router'
      //创建并输出暴露 vue-router 实例对象（管理一组一组的路由规则）
      export default new VueRouter({
        // 定义路由
        routes: [
          {name,path,component,children,...},
          ...
        ],
        ...
      });
    ```

  3. 通过 *router* 配置参数在创建和挂载根实例时 *注入路由* ，从而让整个应用都有路由功能

    ```js
      //引入路由器
      import router from './router'
    
      //创建vm
      new Vue({
        el:'#app',
        render: h => h(App),
        // 注入路由
        router:router
      })
    ```

  4. 在组件中使用路由； [router-link](#router-link) 、[router-view](#router-view)

    ```vue
    <template>
      <div>
        <!-- 实现切换: -->
        <!-- 使用 router-link 组件来导航；通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
    
        <!-- 指定展示位置: -->
        <!-- 路由出口；路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </template>
    ```


## 配置项
  > 每个路由应该映射一个组件。 其中 component 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。

### mode
  > 配置路由模式

  - 语法
    ```js
      new VueRouter({
        // 定义路由
        mode: string
      });
    ```
  - 属性值
    - `hash`: 浏览器环境默认值
    - `history`
    - `abstract`: Node.js 环境默认值

  - `abstract`模式
    - 支持所有 JavaScript 运行环境，如 Node.js 服务器端。
    - 如果发现没有浏览器的 API，路由会自动强制进入这个模式
    
  - `hash`模式
    - 说明
      - 地址中永远带着 `#` 号，不美观
      - 使用 URL hash 值来作路由；`#`及其后面的内容就是hash值
    - 特点
      - 兼容性较好。
      - hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器
      - 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。

  - `history`模式
    - 说明
      - 地址中不带 `#` 号，地址干净，URL 就像正常的 url
    - 特点
      - 兼容性和hash模式相比略差
      - 需要后台配置支持（解决因所有值都包含在HTTP请求中，导致的刷新页面404的问题）

### routes
  > 配置路由，整个应用的路由信息数组

  - 语法
    ```js
      new VueRouter({
        routes: [{
          path: string,
          name?: string, // 命名路由
          component?: Component,
          components?: { [name: string]: Component }, // 命名视图组件
          children?: Array<RouteConfig>, // 嵌套路由
          props?: boolean | Object | Function,
          meta?: any,
          beforeEnter?: (to: Route, from: Route, next: Function) => void,
          redirect?: string | Location | Function,
          alias?: string | Array<string>,
          caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
          pathToRegexpOptions?: Object // 编译正则的选项
        },
        ...
        ]
      });
    ```

#### path
  > 路由路径
  - 语法
    ```js
    new VueRouter({
      routes: [
        {
          path: 'str', 
        }
      ]
    })
    ```
  - 说明
    - 可以携带 [params参数](#params参数)
      ```js
      new Router({
        routes: [{
          // :id 为占位符，id 是 params 中的参数名，使用时放参数值
          path:'Animal/:id',
        }]
      })
      ```
    - 以 `/` 开头的嵌套路径会被当作根路径；子路由直接写路由名，而不用加 `/`
      ```js
      new VueRouter({
        routes: [
          {
            path: '/Animal', 
            component: Animal,
            children: [
              {
                // 路由地址（不需要写`/`, 不用写包括父级，跳转时路径： `/Animal/Child`
                path: 'Child',
                component: Child
              }
            ]
          }
        ]
      })
      ```

#### name
  > 给路由命名，路由名称，可替代路由地址使用，简化路由的跳转（使用时必须写成对象形式
  - 语法
      ```js
      new VueRouter({
        name: 'string'
      })
      ```
  - 说明
    - 可以简化路由的跳转
  - 例
    - 配置路由名称
      ```js
      new VueRouter({
      	path:'/Animal',
      	component:Animal,
      	name:'AnimalName' //给路由命名
      })
      ```
    - 在组件中使用
      ```html
      <!-- 直接通过名字跳转 -->
      <router-link :to="{name:'AnimalName'}">跳转</router-link>
      ```
    - 通过 [router-link](#router-link) 中的 [参数：to](参数：to) 的对象写法，使用 `name`、`params`/`query` 配合传递参数
      ```html
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```

#### component
  > 映射一个组件

  - 配置 component
    ```js
    import Animal from '../pages/Animal'
    new VueRouter({
      component: Animal,
    })
    ```
  - 可以使用异步组件
    ```js
    new VueRouter({
      component: () => import('@/pages/Animal'),// 异步组件
    })
    ```


#### components

  > 配置命名视图

  - [命名视图](#命名视图)

#### children
  > 配置子级路由（第二层路由）

  - 配置 
  - 语法
    ```js
      new VueRouter({
        routes: [{
          children: [
            {path, componnent,....},
            ...
          ]
        },
        ...
        ]
      });
    ```
  - 说明
    - 配置 [嵌套路子由](#嵌套路由)
    - 可以嵌套多层路由
    - 路由配置参数同 [routes](#routes) 配置一样

#### props
  > 传递参数给组件
  - 语法
    ```js
    new VueRouter({
      props: Boolean, Object, Function
    })
    ```
  - 说明
    - 让路由组件更方便的收到参数
    - [传参](#传参)
  - 例
    - 当值为对象时；直接传递死数据给组件，该方法不常用
      ```js
      newe VueRouter({
        props: {
          id: 666
        }
      })
      ```

    - 当值为布尔值时，且值为 `true` 时；会把路由收到的所有 `params参数` 通过 `props` 传给组件
      - 在路由配置中配置 `props` 数据
        ```js
        newe VueRouter({
          path: '/Animal/:id',
          props: true
        })
        ```
    
    - 当值为函数时，会接收一个 [$route](#$route) 对象，可以直接把对象中的 `query` / `params` 中的参数传递给组件
        ```js
        newe VueRouter({
          path: '/Animal/:id',
          props(route){
            return {
              // 可以传递 query 中的参数，也可以传递 params 中的参数
              id: route.query.id
            }
          }
        })
        ```
    
    - 通过 `vue-router` 中 `props` 配置的参数，在组件中可以用 `props` 属性接收
      ```js
      export default {
        name:'Animal',
        props:['id'],
      }
      ```
    
    - 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项
      ```js
      const router = new VueRouter({
        routes: [{
            path: '/user/:id',
            // 命名视图
            components: { default: User, sidebar: Sidebar },
            // 分别配置 `props`
            props: { default: true, sidebar: false }
        }]
      })
      ```


​    

#### meta
  > 配置路由元信息
  - [路由元信息](#路由元信息)

#### beforeEnter
  > 配置路由独享的守卫；

  - 语法
    ```js
    new VueRouter({
      routes: [{
        // 与全局前置守卫的方法参数是一样的
        beforeEnter: (to, from, next) => {
          // ...
        }
      },
      ...
      ]
    })
    ```
    
  - 说明
    
    - `to`: 路由对象；将要去往的路由的路由信息 [$route](#$route)
    - `from`: 路由对象；当前的路由激活对象的路由信息 [$route](#$route)
    
  - [路由守卫](#路由守卫)

  - 注意点

    - 路由独享的守卫应写在目标路由中
    - 在当前路由配置 [重定向](#重定向) 后，在当前路由配置上添加的 `beforeEnter` 守卫不会有任何效果

  - 例
    ```js
    beforeEnter(to,from,next){
      if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
        if(localStorage.getItem('name') === 'zxr'){
          next()
        }else{
          alert('暂无权限查看')
        }
      }else{
        next()
      }
    }
    ```

#### redirect
  > 配置路由重定向

  - [路由重定向](#重定向)

#### alias
> 配置路由别名

- [路由别名](#别名)

#### caseSensitive

  > 匹配规则是否大小写敏感？(默认值：false)

#### pathToRegexpOptions
  > 编译正则的选项

### base

- 语法

  ```js
  new VueRouter({
    base: 'string'
  })
  ```

- 说明

  - 默认值: `/`
  - 应用的基路径

- 注意事项

  - 如果整个单页应用服务在 `/app/` 下，然后 `base` 就应该设为 `"/app/"`

### linkActiveClass

  - 语法
    ```js
    new VueRouter({
      linkActiveClass: 'className'
    })
    ```

  - 说明
    - 默认值: `router-link-active`
    - 用于激活的 RouterLink 的默认类

### linkExactActiveClass

- 语法

  ```js
  new VueRouter({
    linkExactActiveClass: 'className'
  })
  ```

- 说明

  - 默认值: `router-link-exact-active`
  - 用于精准激活的 RouterLink 的默认类

### scrollBehavior
  > 自定义路由切换时页面如何滚动

  - 语法
    ```js
    new VueRouter({
      // to, from : 
      scrollBehavior: (to, from, savedPosition) {
        // 返回期望滚动到的位置
        return { x: number, y: number }
      }
    })
    ```
  - 参数
    - `to`: 目标路由对象
    - `from`: 当前路由对象
    - `savedPosition`: 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
  - 说明
    - 如果返回一个空对象，那么不会发生滚动。
  - 注意事项 
    - 这个功能只在支持 `history.pushState` 的浏览器中可用
  - 例
    - 让页面滚动到顶部
      ```js
      new VueRouter({
        routes: [{
          scrollBehavior (to, from, savePosition){
            return { x: 0, y: 0 }
          }
        }]
      })
      ```

  - 更多详情参考[滚动行为 官方说明](https://v3.router.vuejs.org/zh/guide/advanced/scroll-behavior.html)。

### parseQuery / stringifyQuery

### fallback

## 标签

### router-link
  > 实现导航；  
  > 通过 `to` 属性指定目标地址；  
  >
  > 默认渲染成带有正确链接的 `<a>` 标签，可以通过配置 `tag` 属性生成别的标签.  
  >
  > 当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名

- 与 `a` 标签相比
  - 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
  - 在 HTML5 history 模式下，`router-link` 会守卫点击事件，让浏览器不再重新加载页面。
  - 当你在 HTML5 history 模式下使用 `base` 选项之后，所有的 `to` 属性都不需要写 (基路径) 了。

#### 语法

```html
<router-link to replace active-class aria-current-value custom exact-active-class></router-link>
```

#### 说明
    - 默认渲染成 `a` 标签

#### 参数：to

  - 语法
    - 值为 `string`
      ```js
        <!-- str: 路由地址，可以为固定值，也可为 v-bind 绑定的 JS表达式 -->
        <router-link to="str">
      ```
    - **值为描述目标位置的对象** `RouteLocationRaw`时
      
      ```js
        <router-link :to="{
          path: '路由地址',
          name: '路由名称',
          params: {...},
          query: {...}
        }">
      ```
    
  - 说明
    - 表示目标路由的链接、参数
    - 当被点击后，内部会立刻把 `to` 的值传到 `router.push()`
    - 当值为对象时，`path` 和 `name` 不能同时存在；
    - 可以携带 [qeury参数](#qeury参数) 和 [params参数](#params参数)
  
  - 例
    - `string`: 使用固定值描述路由地址
      ```html
      <!-- 直接写，router-link转成a标签（必须点才能跳路由地址） -->
      <router-link to="/Animal">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal page</a>
      ```
    
    - `string`:
     使用 `v-bind` 的 `JS表达式` 设置路由地址
      ```html
      <router-link :to="'/Animal'">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal page</a>
      ```
    
    - `string`: 链接中带params参数，to的字符串写法
      ```html
      <!-- /Animal是路由，666是为`:id`的值，使用`$router.params.id`获取 -->
      <router-link :to="/Animal/666">跳转</router-link>
      
      <!-- 渲染 -->
      <a href="#/Animal/666">跳转</>
      ```
    
    - `string`: 带query参数
      ```html
      <router-link :to="`/Animal?id=${123}`">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal?id=123/title=123">Animal page</a>
      ```

    - 对象: 使用路由地址 `path`
      ```html
      <!-- 相当于 to="/home" -->
      <router-link :to="{ path: '/Animal' }">Animal</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal</a>
      ```
    
    - 对象: 使用命名路由`name`，带 `params` 参数
      ```html
      <!-- 使用对象+params写法时，必须使用name方式，否则使用path时路径会有问题 -->
      <router-link :to="{ name: 'animal', params: { id: '123' }}">Animate page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal/123">Animate page</a>
      ```
    
    - 对象: 使用路由地址 `path`，带查询参数`query`
      ```html
      <router-link :to="{ path: '/Animal', query: { name: 'zxr' }}">Home</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal?name=zxr">Home</a>
      ```

#### 参数：replace

  - 语法
    ```html
    <router-link replace="boolean"></router-link>
    ```
    
  - 值说明
    - `false`: 默认；当点击时，调用 `router.push()`；导航会有历史记录，点击 `返回` 可以返回点击之前的页面
    - `true`: 当点击时，调用 `router.replace()`；导航后不会留下历史记录 
  
  - 说明 
    - 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
  
  - 例
    - 开启 `replace` 模式
      ```html
      <!-- 当需要把 replace 设置成 true 时，只需要在标签里加个 `replace` 属性，而不用写成 `:replace="true"` -->
      <router-link to="/Animal" replace></router-link>
      ```

#### 参数：active-class

 - 语法

   ```html
   <router-link active-class="className">
   ```

 - 说明
   - 默认值为全局 [linkActiveClass](#linkActiveClass)，或 `router-link-active`
   - 链接激活时，应用于渲染的标签的 `class`

#### 参数：exact-active-class

  - 语法

    ```html
    <router-link exact-active-class="className">
    ```

  - 说明

    - 默认值为全局局 linkExactActiveClass 或 `router-link-exact-active`
    - 链接精准激活时，应用于渲染的标签的 `class`

#### 参数：aria-current-value

 - 语法

   ```html
   <router-link aria-current-value="string">
   ```

 - 值

   - `string`: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' 

 - 说明

   - 默认值: `page`
   - 当链接激活时，传递给属性  `aria-current`  的值

#### 参数：append

- 语法

  ```html
  <router-link append="boolean"></router-link>
  ```

- 值说明

  - `false`: 
  - `true`: 在当前 (相对) 路径前添加基路径

- 说明

  - 例如，我们从 `/a` 导航到一个相对路径 `b`，如果没有配置 `append`，则路径为 `/b`，如果配了，则为 `/a/b`

    ```html
    <router-link :to="{ path: 'relative/path'}" append></router-link>
    ```

#### 参数：tag

- 语法

  ```html
  <router-link tag="string"></router-link>
  ```

- 说明

  - 默认值: `a`
  - `string`: 相要渲染的标签名，例： `li` ,
  - 无论更改成哪个标签名，都还是会有监听点击，触发导航功能

#### 参数：exact

- 语法

  ```html
  <router-link exact="boolean"></router-link>
  ```

- 说明

  - “是否激活”默认类名的依据是**包含匹配**

#### 参数：event

- 语法

  ```html
  <router-link exact="string | Array<string>"></router-link>
  ```

- 说明

  - 默认值: `'click'`
  - 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。

### router-view
  > 是一个 functional 组件，渲染路径匹配到的视图组件

- 语法

  ```html
  <router-view name="string"></router-view>
  ```

- 说明

  - `<router-view>` 渲染的组件里还可以再内嵌自己的 `<router-view>`，根据嵌套路径，渲染嵌套组件

  - 可以配合 `<transition>` 和 `<keep-alive>` 使用；如果两个结合一起用，要确保在内层使用 `<keep-alive>`

    ```html
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    ```

  - `string`:  视图名称；设置 [命名视图](#命名视图) ；会渲染对应的路由配置中 [components](#components)  下的相应组件；




### keep-alive
  > 缓存路由组件

  - 语法
    ```html
    <keep-alive include exclude max></keep-alive>
    ```
  - 参数说明
    - `include`: 字符串或正则表达式。只有名称匹配的组件 **会被缓存**
    - `exclude`: 字符串或正则表达式。任何名称匹配的组件都 **不会被缓存**
    - `max`: - 数字。最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
    
  - 说明
    - 主要用于保留组件状态或避免重新渲染
    - `<keep-alive>` 不会渲染一个 DOM 元素，也不会出现在组件的父组件链中；是一个抽象组件。
    - 当组件在 `<keep-alive>` 内被切换，它的 [activated](#activated) 和 [deactivated](#deactivated) 这两个生命周期钩子函数将会被对应执行。
  - 注意事项
    - `keep-alive` 标签里含有 `v-for` 指令时会失效
    - `include`/`exclude` 匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配
  - 例
    - 让不展示的路由组件保持挂载，不被销毁
      ```html
      <!-- 让路由组件 `News` 保持挂载；而不是销毁 -->
      <keep-alive include="News"> 
            <!-- keep-alive 里面也可以是路由视图 -->
          <router-view></router-view>
      </keep-alive>
      
      <!-- 缓存多个路由组件 -->
      <keep-alive :include="['News','Message']">
          <router-view></router-view>
      </keep-alive>
      ```
    - 缓存条件：使用分隔字符串`,`
      ```html
      <!-- 逗号分隔字符串（a、b组件 -->
      <keep-alive include="a,b">
        ...
      </keep-alive>
      ```
    - 缓存条件：使用正则表达式
      ```html
      <!-- 正则表达式 (使用 `v-bind`) -->
      <keep-alive :include="/a|b/">
        ...
      </keep-alive>
      ```
    - 缓存条件：使用数组
      ```html
      <!-- 数组 (使用 `v-bind`) -->
      <keep-alive :include="['a', 'b']">
        ...
      </keep-alive>
      ```
    - 和 `<transition>` 一起使用
      ```vue
      <template>
        <!-- transition 标签要套在 keep-alive 外面 -->
        <transition>
          <keep-alive>
            <!-- keep-alive 里面也可以是组件 -->
            <component :is="view"></component>
          </keep-alive>
        </transition>
      </template>
      ```


2. 具体编码：


## 实例属性

### $route
  > **当前激活的路由对象**；表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的**路由记录 (route records)**。

- 说明
  - `$route`对象是只读的
  - 每次成功的导航后都会产生一个新的对象
  - 可以 watch (监测变化) 它
  
- 路由对象出现的地方
  - 在组件内，即 `this.$route`
  - 在 `$route` 观察者回调内
  - `router.match(location)` 的返回值
  - 导航守卫的参数：to、from
  - `scrollBehavior` 方法的参数
  
  - **$route.path**
  
    - 类型: `string`
  
      字符串，对应当前路由的路径，总是解析为绝对路径，如 `"/foo/bar"`。
  
  - **$route.params**
  
    - 类型: `Object`
  
      一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
  
  - **$route.query**
  
    - 类型: `Object`
  
      一个 key/value 对象，表示 URL 查询参数。例如，对于路径 `/foo?user=1`，则有 `$route.query.user == 1`，如果没有查询参数，则是个空对象。
  
  - **$route.hash**
  
    - 类型: `string`
  
      当前路由的 hash 值 (带 `#`) ，如果没有 hash 值，则为空字符串。
  
  - **$route.fullPath**
  
    - 类型: `string`
  
      完成解析后的 URL，包含查询参数和 hash 的完整路径。
  
  - **$route.matched**
  
    - 类型: `Array<RouteRecord>`
  
    一个数组，包含当前路由的所有嵌套路径片段的**路由记录** 。路由记录就是 `routes` 配置数组中的对象副本 (还有在 `children` 数组)。
  
    ```js
    const router = new VueRouter({
      routes: [
        // 下面的对象就是路由记录
        {
          path: '/foo',
          component: Foo,
          children: [
            // 这也是个路由记录
            { path: 'bar', component: Bar }
          ]
        }
      ]
    })
    ```
  
    
  
    - 当 URL 为 `/foo/bar`，`$route.matched` 将会是一个包含从上到下的所有对象 (副本)。
  
  - **$route.name**
  
    当前路由的名称，如果有的话；[命名路由](#命名路由)
  
  - **$route.redirectedFrom**
  
    如果存在重定向，即为重定向来源的路由的名字；[重定向](#重定向)
  
### $router
  > router 实例；存储着整个应用的路由数据

  - [路由实例方法](路由实例方法)

## 路由实例方法
### router.push
  > 导航到一个新的路由地址；
  - 语法
    ```js
    this.$router.push(to)
    ```
  - 说明
    - `to`: 要导航到的路由地址；与 [router-link](#router-link) 中的 [参数：to](#参数：to) 的对象写法相同
    - 在历史堆栈中添加一条记录
  - 例
    ```js
    this.$router.push({
      name:'AnimalName',
      params:{
        id:666
      }
    })
    ```

### router.replace
  > 导航到一个新的路由地址；
  - 语法
    ```js
    this.$router.replace(to)
    ```
  - 说明
    - `to`: 要导航到的路由地址；与 [router-link](#router-link) 中的 [参数：to](#参数：to) 的对象写法相同
    - 替换历史堆栈中最后一条记录（当前路由）
  - 例
    ```js
    this.$router.push({
      name:'AnimalName',
      params:{
        id:666
      }
    })
    ```
  ```js
   this.$router.replace({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
  ```

### router.forward
  > 前进到下一个历史

  - 语法
    ```js
      this.$router.forward() //前进
    ```
  - 说明
    - 相当于 `router.go(1)`

### router.back
  > 后退到上一个历史

  - 语法
    ```js
    void this.$router.back() //后退
    ```
  - 说明
    - 相当于 `router.go(-1)`

### router.go
  > 可在历史中前进或后退。

  - 语法
    ```js
    void this.$router.go(number)
    ```
  - 说明
    - `number`: 值为 `number` 类型；相对于当前页面，你要移动到的历史位置


### router.addRoutes
  > 已废弃：使用 $router.addRoute() 代替。
  - 说明
    - 动态添加更多的路由规则。
    - 参数必须是一个符合 routes 选项要求的数组。
  - 例
    ```js
    const baseRoute = [
      {
        name: 'layout',
        path: '/',
        component: layout,
        children: arr
      }
    ]
    router.addRoutes(baseRoute)
    ```

### router.addRoute
  > 添加路由

  - 语法
    ```js
    void $router.addRoute(route);
    void $router.addRoute(parentName, route)
    ```
  - 值说明
    - `parentName`: string | symbol；父路由名称，`route` 应该被添加到的位置
    - `route`: RouteConfig；要添加的路由记录
  - 说明
    - 添加一条新的路由记录作为现有路由的子路由。
    - 如果路由有 `name` 属性，并且已经有一个与之 **名字相同** 的路由，它会 先 **删除** 之前的路由
  - 注意事项
    - 添加路由并不会触发新的导航。除非触发新的导航，否则不会显示所添加的路由。
  - 例
    - 添加有父路由记录的新路由
      ```js
      router.addRoute({
        path: '/Animal',
        component: Animal
      })
      ```
    - 添加无父路由记录的新路由
      ```js
      router.addRoute({
        path: '/Animal',
        component: Animal
      })
      ```

### router.getmatchedcomponents
  > 通常在服务端渲染的数据预加载时使用

  ```js
  const matchedComponents: Array<Component> = router.getMatchedComponents(location?)
  ```

  - 返回目标位置或是当前路由匹配的组件数组 (是数组的定义/构造类，不是实例)。

### router.resolve
  ```js
  const resolved: {
    location: Location;
    route: Route;
    href: string;
  } = router.resolve(location, current?, append?)
  ```
  - 参数说明
    - `current`: 当前默认的路由 (通常不需要改变它)
    - `append`: 允许你在 `current` 路由上附加路径（如同 [router-link](#router-link)）
  - 说明
    - 解析目标位置 (格式和 <router-link> 的 to prop 一样)。

### router.beforeEach
  > 全局的路由前置守卫，初始化时执行、每次路由切换前执行

  - 语法
    ```js
    router.beforeEach((to, from, next) => {
      /* 必须调用 `next` */
      next();
    })
    ```
  - 说明
    - 在守卫中，必须调用 `next()` 方法才能跳转到下一个路由地址
    - `to`: 路由对象；将要去往的路由的路由信息 [$route](#$route)
    - `from`: 路由对象；当前的路由激活对象的路由信息 [$route](#$route)
  - 例
    - 可以在守卫中调用路由 [meta](#meta) 信息判断是否需要进行权限控制
      ```js
      router.beforeEach((to, from, next)=>{
        console.log('beforeEach',to,from)
        if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制 
          //权限控制的具体规则
          if(localStorage.getItem('name') === 'zxr'){ 
            next() //放行
          }else{
            alert('暂无权限查看')
          }
        }else{
          next() //放行
        }
      })
      ```

  - [路由守卫](#路由守卫)

### router.afterEach
  > 全局的路由后置守卫：初始化时执行、每次路由切换后执行

  - 语法
    ```js
    router.afterEach((to, from) => {})
    ```
  - 说明
    - 可以在该守卫中执行一些页面跳转后的操作
    - `to`: 路由对象；将要去往的路由的路由信息 [$route](#$route)
    - `from`: 路由对象；当前的路由激活对象的路由信息 [$route](#$route)
  - 例
    - 修改网页的title
      ```js
      router.afterEach((to,from)=>{
        if(to.meta.title){ 
          document.title = to.meta.title
        }else{
          document.title = 'vue_test'
        }
      })
      ```
  - [路由守卫](#路由守卫)


### router.beforeResolve
  > 全局解析守卫

  - 语法
    ```js
    router.beforeResolve((to, from, next) => {
      /* 必须调用 `next` */
    })
    ```
  - 说明
    - `to`: 路由对象；将要去往的路由的路由信息 [$route](#$route)
    - `from`: 路由对象；当前的路由激活对象的路由信息 [$route](#$route)
    - 在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用
  - [路由守卫](#路由守卫)

### router.getRoutes
  > 获取所有活跃的路由记录列表。

 - 语法

   ```js
   getRoutes(): RouteRecord[]
   ```

   

 - 说明

   - 只有文档中记录下来的 property 才被视为公共 API
   - 避免使用任何其它 property，例如 `regex`，因为它在 Vue Router 4 中不存在

### router.onReady

  - 语法：

    ```js
    router.onReady(callback, [errorCallback])
    ```

  - 语法

    - 该方法把一个回调排队，在路由完成初始导航时调用
    - 可以解析所有的异步进入钩子和路由初始化相关联的异步组件
    - 可以有效确保服务端渲染时服务端和客户端输出的一致
    - 第二个参数会在初始化路由解析运行出错 (比如解析一个异步组件失败) 时被调用

### router.onError

  - 语法

    ```js
    router.onError(callback)
    ```

  - 说明

    - 注册一个回调，该回调会在路由导航过程中出错时被调用

    - 被调用的错误必须是下列情形中的一种

      - 错误在一个路由守卫函数中被同步抛出；

      - 错误在一个路由守卫函数中通过调用 `next(err)` 的方式异步捕获并处理；

      - 渲染一个路由的过程中，需要尝试解析一个异步组件时发生错误。

## 功能点

### 嵌套路由
  - 说明
    - 使用配置项 [children](#children) 实现嵌套路由
  
  - 通过 [children](#children) 配置的子级路由；[path](#path) 中不需要写 `/`
    ```js
    routes:[
      {
        path:'/a',
        component:A,
        children:[
          {
            path:'b', //此处一定不要写：/b
            component:B
          }
        ]
      }
    ]
    ```

  - 组件中作用；通过 [router-link](#router-link) 实现跳转时要写完整路径
    ```vue
    <template>
      <router-link to="/a/b">B页面</router-link>
    </template>
    ```

### 传参
#### query参数
  - 不用声明!!!
  - 传递参数
    - 使用 [router-link](#router-link) 中的 [参数 to](#参数：to) 传递 `query` 参数
      - 直接在路由地址中携带
        ```html
          <!-- 跳转并携带query参数，to的字符串写法 -->
          <router-link :to="/Animal?id=666">跳转</router-link>
        
          <!-- 渲染 -->
          <a href="#/Animal?id=666">跳转</a>
        ```
      - `to` 的对象写法；该种写法不能使用 [path](#path) 配置项，必须使用 [name](#name) 配置！
        ```html
        <!-- 跳转并携带params参数，to的对象写法 -->
        <router-link 
          :to="{
            name:'Animal',
            params:{
              id:666
            }
          }"
        >跳转</router-link>
        
          <!-- 渲染 -->
          <a href="#/Animal?id=666">跳转</a>
        ```

  - 接收参数 
    - 直接从当前激活的路由对象 [$route](#$route) 中获取
      ```js
      // 获取参数 id 的数据
      $route.query.id
      ```

#### params参数
  1. 配置路由，声明接收 params 参数

    ```js
    new VueRouter({
      // 必须在此声明,才能接收到
      path: '/Animal/:id',
      name: 'AnimalName'
    })
    ```

  - 传递参数
    - 使用 [router-link](#router-link) 中的 [参数 to](#参数：to) 传递 `params` 参数
      - 直接在路由地址中携带
        ```html
        <!-- 跳转并携带params参数，to的字符串写法 -->
        <router-link :to="/Animal/666">跳转</router-link>
        
        <!-- 渲染: -->
        <a href="#/Animal/666">跳转</a>
        ```
      - `to` 的对象写法；该种写法不能使用 [path](#path) 配置项，必须使用 [name](#name) 配置！
        ```html
        <!-- 跳转并携带params参数，to的对象写法 -->
        <router-link 
          :to="{
            name:'AnimalName',
            params:{
              id:666
            }
          }"
        >跳转</router-link>
        
        <!-- 渲染: -->
        <a href="#/Animal/666">跳转</a>
        ```

  - 接收参数 
    - 直接从当前激活的路由对象 [$route](#$route) 中获取
      ```js
      // 获取参数 id 的数据
      $route.params.id
      ```
    - [router-link](#router-link) 中的 [参数：to](参数：to) 中；该方法需在 `VueRouter` 的配置项 [path](#path) 中配置链接

#### 配置props参数，直接接收
  - 可以通过配置路由的 [props](#props) 参数，来将参数传递给组件



### 路由守卫
  > 对路由进行权限控制

#### 全局前置守卫
  > 初始化时执行、每次路由切换前执行

- [beforeEach](#router.beforeEach)

- 语法

  ```js
  router.beforeEach((to, from, next) => {
    // ...
  })
  ```

- 参数说明

  - **`to`**: 即将要进入的目标路由对象
  - `from`: 当前导航正要离开的路由
  - `next`: 

#### 全局后置守卫
  > 初始化时执行、每次路由切换后执行

  - [afterEach](#router.afterEach)

#### 路由独享的守卫
  - [路由独享的守卫: beforeEnter](#beforeEnter)

#### 组件内守卫

  - beforeRouteEnter： [进入守卫；通过路由规则，进入该组件时被调用](./vue-4-%E9%80%89%E9%A1%B9.md#beforeRouteEnter)

  - beforeRouteLeave: [离开守卫；通过路由规则，离开该组件时被调用](./vue-4-%E9%80%89%E9%A1%B9.md#beforeRouteLeave)



### 命名视图 
    > ​	用于当想在同个路由下展现多个组件，多个视图时

  - 参数配置： [命名视图](#components)
  - 语法
    ```js
    new VueRouter({
      routes: [
        { components: {
            default: value,
          key: value
        } }
      ]
    })
    ```

  - 参数说明
    - `key`: 路由视图名称；路由视图 [router-view](#router-view) 中属性 `name` 的值，
    - `value`: 映射的组件；
    - `default`: 当路由视图 [router-view](#router-view) 没有设置 `name` 属性时，展现 `default` 映射的组件

  - 例
    - 同个路由配置映射多个组件
      ```js
      new VueRouter({
        routes: [{
            path: '',
            compontents: {
              default: User,
              a: UserName, 
              b: UserPwd
            }
        }]
      });
      ```
    - 在组件中应用
      ```html
      <!-- 未设置 name 属性，展现组件 User 的数据 -->
      <router-view></router-view>
      <!-- 展现组件 UserName 的数据 -->
      <router-view name="a"></router-view>
      <!-- 展现组件  的数据 -->
      <router-view name="b"></router-view>
      ```

### 重定向

- 参数配置： [路由重定向](#redirect)

- 语法

  ```js
  new VueRouter({
    routes: [
      { redirect: string | Object | Function }
    ]
  })
  ```

- 参数说明

  - `string`: 直接写重定向的路由地址

    ```js
    new VueRouter({
      routes: [
          // 从 `/a` 重定向到 `/b`
        { path: '/a', redirect: '/b' }
      ]
    }) 
    ```

  - `object`:  在对象中写路由名称

    ```js
    new VueRouter({
      routes: [
          // 从 `/a` 重定向到 `/b`
        { path: '/a', redirect: { name: 'bName' } }
      ]
    }) 
    ```

  - `Function`: 从方法中返回重定向目标

    ```js
    new VueRouter({
      routes: [
          // 从 `/a` 重定向到 `/b`
        { path: '/a', redirect: to => {
           // to: 目标路由
            return '重定向的字符串路径/路径对象';
        } }
      ]
    }) 
    ```




### 别名

> 使可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构

  - 参数配置： [路由别名](#alias)

  - 语法

    ```js
    new VueRouter({
      routes: [
        { redirect: string | Object | Function }
      ]
    })
    ```

  - 例

    - 设置路由的别名为`/b`

      ```js
      new VueRouter({
        routes: [
           // /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
          { path: '/a', component: A, alias: '/b' }
        ]
      })
      ```

      

### 路由元信息
  - 参数配置： [路由元信息](#alias)

  - 语法

    ```js
    new VueRouter({
      routes: [
        { meta: Object }
      ]
    })
    ```

  - 说明

    - 使用 [$route](#$route) 中的 **$route.matched** 参数获取路由记录

  - 例

    - 在路由中配置 `meta` 数据

      ```js
      new VueRouter({
        routes: [
          { path: '/a', component: A, meta: {
              isAuth: true,// 当前路由是否需要鉴权
          } }
        ]
      })
      ```

    - 在 [路由全局前置守卫](#router.beforeEach) 中检查元字段，鉴权操作

      ```js
      router.beforeEach((to, from, next) => {
        // 判断目标路由中是否需要鉴权
        if (to.matched.some(record => record.meta.isAuth)) {
          // 需要鉴权，先检查是否已登录
          if (!auth.loggedIn()) {
            // 未登录，重定向到登录页面。
            next({
              path: '/login',
              query: { redirect: to.fullPath }
            })
          } else {
            // 已登录，跳转到下一个路由地址
            next()
          }
        } else {
          // 不需要鉴权，直接跳转到下一个路由地址
          next() 
        }
      })
      ```



## 模块路由


# 完整的导航解析流程

 1. 导航被触发

 2. 在失活的组件里调用 [beforeRouteLeave](./vue-4-%E9%80%89%E9%A1%B9.md#beforeRouteLeave) 离开组件守卫

 3. 调用全局的 [beforeEach](#router.beforeEach) 前置守卫

 4. 在重用的组件里调用 [beforeRouteUpdate](./vue-4-%E9%80%89%E9%A1%B9.md#beforeRouteUpdate) 复用组件守卫

 5. 在路由配置里调用 [ beforeEnter](#beforeEnter) 路由独享的守卫

 6. 解析异步路由组件

 7. 在被激活的组件里调用 [beforeRouteEnter](./vue-4-%E9%80%89%E9%A1%B9.md#beforeRouteEnter) 进入组件守卫

 8. 调用全局的 [beforeResolve](#router.beforeResolve) 守卫

 9. 导航被确认

 10. 调用全局的 [afterEach](#router.afterEach) 后置守卫

 11. 触发 DOM 更新

 12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入

     

# 权限管理

