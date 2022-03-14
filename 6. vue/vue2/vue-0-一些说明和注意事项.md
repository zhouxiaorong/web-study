# vue

## 目录
  - [this相关](#this相关)
  - [关于数组](#关于数组)
  - [其他说明](#其他说明)
  - [Vue监视数据的原理](#Vue监视数据的原理)

## this相关
  - 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。最好写成普通函数，这样this的指向才是vm 或 组件实例对象
  - 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

## 关于数组
  - 数组，直接赋值时不会监听，dom中值不会更改
  - 可以使用push()、pop()、shift()、unshift()、splice()、sort()、reverse()这些方法更改数组数据
  - 可以使用Vue.set() 或 vm.$set()更改数组数据


## 其他说明
  - MVVM模型
    1. M：模型(Model) ：data中的数据
    2. V：视图(View) ：模板代码
    3. VM：视图模型(ViewModel)：Vue实例
  - 数据代理
    > 数据代理就是通过一个对象代理对另一个对象中属性的操作（读/写）

## Vue监视数据的原理
  1. vue会监视data中所有层次的数据。

  2. 如何监测对象中的数据？

    通过setter实现监视，且要在new Vue时就传入要监测的数据。
      (1).对象中后追加的属性，Vue默认不做响应式处理
      (2).如需给后添加的属性做响应式，请使用如下API：
              Vue.set(target，propertyName/index，value) 或 
              vm.$set(target，propertyName/index，value)

  3. 如何监测数组中的数据？

    通过包裹数组更新元素的方法实现，本质就是做了两件事：
      (1).调用原生对应的方法对数组进行更新。
      (2).重新解析模板，进而更新页面。

  4. 在Vue修改数组中的某个元素一定要用如下方法：

    1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
    2.Vue.set() 或 vm.$set()

  特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

  - 数据劫持
    - 每个数据都经过数据代理的过程就叫数据劫持
    - 数据劫持描述的是过程,数据代理针对的是某个数据

