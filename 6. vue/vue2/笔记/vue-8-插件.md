# vue 插件

## 功能说明
  - 用于增强Vue
  - 包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

## 定义插件
  - 第一种
    ```js
      export default {
        install(Vue, ...params){

        }
      }
    ```
  - 第二种
    ```js
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 使用插件：

  ```js
  Vue.use()
  //引入插件
  import plugins from './plugins.js'

  //应用（使用）插件
  Vue.use(plugins,1,2,3)
  ```
