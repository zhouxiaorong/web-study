# vue-router 

## 标签
### router-link
  > 实现导航；通过传入 `to` 属性指定链接

#### 语法
```html
<router-link to replace active-class aria-current-value custom exact-active-class>
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
    - 值为描述目标位置的对象 `RouteLocationRaw`时
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
  
  - 例
    - `string`: 使用固定值描述路由地址
      ```html
      <router-link to="/Animal">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal page</a>
      ```
    
    - `string`: 使用 `v-bind` 的 `JS表达式` 设置路由地址
      ```html
      <router-link :to="'/Animal'">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal page</a>
      ```
    
    - `string`: 带参数
      ```html
      <router-link :to="`/Animal?id=${123}`">Animal page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal?id=123">Animal page</a>
      ```

    - 对象: 使用路由地址 `path`
      ```html
      <!-- 相当于 to="/home" -->
      <router-link :to="{ path: '/Animal' }">Animal</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animal</a>
      ```
    
    - 对象: 使用命名路由`name`，带 `params` 参数
      ```js
      <router-link :to="{ name: 'animal', params: { id: '123' }}">Animate page</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal">Animate page</a>
      ```
    
    - 对象: 使用路由地址 `path`，带查询参数`query`
      ```js
      <router-link :to="{ path: '/Animal', query: { name: 'zxr' }}">Home</router-link>
      
      <!-- 渲染结果: -->
      <a href="#/Animal?name=zxr">Home</a>
      ```

#### 参数：replace

  - 语法
    ```html
    <router-link replace="boolean">
    ```
    
  - 值说明
    - `false`: 默认；当点击时，调用 `router.push()`；导航会有历史记录，点击 `返回` 可以返回点击之前的页面
    - `true`: 当点击时，调用 `router.replace()`；导航后不会留下历史记录 
  
  - 例
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

#### 参数：custom

- 语法

  ```html
  <router-link custom="boolean">
  ```

- 说明

  - 设置 `<router-link>` 是否将其内容包裹在 `<a>` 元素中
  - 默认情况下，`<router-link>` 会将其内容包裹在 `<a>` 元素中，即使使用 `v-slot` 也是如此
  - 传递`自定义的` prop，可以去除这种行为

- 应用

  - 在使用 `v-slot` 创建自定义 RouterLink 时很有用

- [官方说明](https://router.vuejs.org/zh/api/#custom)

#### v-slot
- 语法

  ```html
  <router-link v-slot="{ href, route, navigate, isActive, isExactActive }">
  ```

- 说明

- [官方说明](https://router.vuejs.org/zh/api/#router-link-%E7%9A%84-v-slot)
