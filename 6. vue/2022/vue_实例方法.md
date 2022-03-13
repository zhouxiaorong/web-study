# vue 实例方法

## Vue.set(),vm.$set()
  - 语法
    ```js
      vm.$set(target, propertyName/index, value)
      Vue.set(target, key, value)
    ```
  - 参数：r
  - 说明
    - target: {Object | Array}，目标对象 
    - propertyName/index: {string | number}，对象key值或数组下标 
    - value: {any} ，值
    - 返回值：设置的值。
    - **vm.$set()** 是全局 **Vue.set** 的别名
  - 说明
    - 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
    - 它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')
  - 注意事项
    - Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！
    - 对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
  - 例


  

## 

##
