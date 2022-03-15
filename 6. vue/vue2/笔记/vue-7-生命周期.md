# 生命周期
  > 又名：生命周期回调函数、生命周期函数、生命周期钩子。是Vue在关键时刻帮我们调用的一些特殊名称的函数。  

  - 说明
    - 生命周期函数就是vue实例在某一个时间点会自动执行的函数
    - 生命周期函数的名字是不可更改的
    - 生命周期函数中的*this*指向调用它的 Vue/组件 实例（除了beforeCreate）

  - 语法
    ```js
      new Vue({
        beforeCreate(){}, // 创建之前 
        created(){}, // 数据监测、数据代理已创建
        beforeMount(){}, // 挂载之前
        mounted(){}, // 常用；页面已初始化完成；虚拟DOM已转为真实DOM插入到页面中
        beforeUpdate(){}, // 更新之前；数据不同步
        updated(){}, // 更新之后；数据已同步
        beforeDestroy(){}, // 常用；销毁之前；vue可用，在些处理后事
        destroyed(){}, // 销毁之后
      })
    ```
## 注意点
  1. 不要在选项 property 或回调上使用箭头函数，因为箭头函数并没有 this     

    > 比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。  
    > this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。


## beforeCreate
  > 什么都没有；数据监测、数据代理创建之前调用；
  > 此时this不是指向vue
  - 说明
    - 在实例初始化之后，数据监测（data observer) 和 event/watcher 事件配置之前被调用。（整个页面创建之前）
    - `this` 不是指向 vm 实例

## created
  > 数据监测、数据代理已创建；可以通过vue访问data中的数据、methods中的方法
  - 说明
    - 在实例创建之后被立即调用
    - 在这一步,实例已完成以下的配置:数据观测（data observer）、属性和方法的运算、watch/event 事件回调
    - 挂载阶段还没开始，***$el***属性目前不可见
    - `this` 指向 vm 实例
    
## beforeMount
  > 挂载之前；已完成模板解析，生成虚拟DOM(内存中)；  
  > vue会解析模板，生成虚拟DOM放在vue.$el中，然后转为真实DOM插入到页面；之后如果有更新，会拿虚拟DOM比较，更新
  - 说明
    - 在挂载开始之前被调用： 相关的渲染函数首次被调用
    - 页面呈现的是未经vue编译的DOM模板结构
    - 此时对DOM的操作，最终都不奏效（DOM会在mounted之前被虚拟DOM替换）
  - 注意事项
    - 该钩子在服务器端渲染期间不被调用
    
## mounted
  > 常用, 实例被挂载后调用；Vue完成模板的解析并把初始的真实DOM元素放入页面
  > this : 指向调用它的 Vue 实例。

  - 说明
    - el 空闲虚拟内存新创建的 vm.$el 替换， 挂载成功
    - 页面呈现的是经过Vue编译过的DOM
    - 可以在此进行开启定时器、发送网络请求、订阅消息、绑定自定义事件等初始化操作

  - 注意
    - mounted 不会保证所有的子组件也都一起被挂载
    - 如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
    - 该钩子在服务器端渲染期间不被调用
    - 如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内


## beforeUpdate
  > 更新之前调用

  - 说明
    - 数据更新之前调用（数据变化之前）
    - 页面和vue中的数据不同步（vue中的数据是新的，但页面中的数据还是旧的）
    - 数据更改： ***beforeUpdate -> watch -> updated***
    - 发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如*手动移除已添加的事件监听器*。
  - 注意事项
    - 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。




## updated
  > 更新之后；  
  > vue会根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即完成了Model→View的更新

  - 说明
    - 组件 DOM 已经更新，组件更新完毕
    - 页面和vue中的数据已同步（vue中的数据是新的，页面中的数据也是新的）
    - this : 指向调用它的 Vue 实例。
    - 数据更改： beforeUpdate -> watch -> updated

## beforeDestroy
  > 常用；执行销毁之前；可在此处理后事
  - 说明
    - 
  - 此时vue中的data、methods、指令等都处于可用状态
  - 可在此函数中关闭定时器、取消订阅消息、解绑自定义事件等收尾操作
  - 在此操作数据不会触发更新流程（vue中的数据会改变，但页面不会变了）
  - 定时器不关闭会导致vue已销毁，但定时器还在执行的结果

## destroyed
  > 销毁之后  

  - 说明
    - 
  - 销毁后借助Vue开发者工具看不到任何信息。
  - 销毁后自定义事件会失效，但原生DOM事件依然有效。（之前生成的DOM还在页面中，只是之后vue不会再有操作了）
  - this : 指向调用它的 Vue 实例。

