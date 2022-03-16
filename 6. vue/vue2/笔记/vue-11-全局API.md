# vue 全局API

## Vue.component
  > 全局组件

  - 语法
    ```js
    Vue.component("TodoItem", {
      name: '',
      template: '',
      data(){
        return {
        }
      },
      // ... 其他方法与Vue相同
    })
    ```

## Vue.mixin
  > 全局混入
  
  - 注意点
    - 一旦使用全局混入，它将影响每一个之后创建的 Vue 实例(包括第三方组件)
  - 例
    ```js
    // 为自定义的选项 'myOption' 注入一个处理器。
    Vue.mixin({
      created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
          console.log(myOption)
        }
      }
    })

    new Vue({
      myOption: 'hello!'
    })
    // => "hello!"
    ```

##