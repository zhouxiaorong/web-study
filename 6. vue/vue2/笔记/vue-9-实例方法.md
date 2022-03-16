# vue 实例方法

  > 凡是以 $ 开头的东西，指的都是 Vue 的实例属性或实例方法

## vm.$set
  > 

  - 语法
    ```js
      vm.$set(target, propertyName/index, value)
      Vue.set(target, key, value)
    ```
  - 参数：
    - target: {Object | Array}: 目标对象 
    - propertyName/index: {string | number}: 对象key值或数组下标 
    - value: {any}: 值
    - 返回值：设置的值。
  - 说明
    - *vm.$set()* 是全局 *Vue.set* 的别名
    - 向响应式对象中添加一个 property
    - 使用 *vm.$set()*或 *Vue.set* 添加的 property 是**响应式**的，且**触发视图更新**。
  - 注意事项
    - 对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
    - Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！
    - 它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')
  - 例
    - 改变对象
      ```js
      // 向对象中添加数据，值为字符串
      Vue.set(vm.objects, 'name', 'zxr');
      // 向对象中添加数据，值为数值
      vm.$set(vm.objects, 'age', 18);
      ```
    - 改变数组
      ```js
      // 第二个参数为下标，第三个参数为新的内容
      Vue.set(vm.arrs, 1, 5);
      vm.$set(vm.arrs, 2, 8);
      ```



## vm.$emit
  > 监听 delete 事件

## vm.$data
  > data 对象

## vm.$el
  > id元素

## $watch
  > 观察一个变量的变化

  - 语法
    ```js
    // newValue: 新的值   oldValue: 旧的值
    vm.$watch('参数', function (newValue, oldValue) {
        // 这个回调将在 `vm.参数` 改变后调用
    })
    ```
  - 说明
    - 数据更改： beforeUpdate -> watch -> updated
    

## vm.$destroy
  > 销毁 vm 实例
  - 注意事项
    - 销毁后，双向绑定功能不存在，不过之前绑定的事件还遗留着并没有销毁完全

## $nextTick
  > 在下一次 DOM 更新结束后执行其指定的回调  
  > 在修改数据之后立即使用它，然后等待 DOM 更新

  - 语法
    ```js
    // 这个回调将在视图重新渲染后调用
    this.$nextTick(回调函数)
    ```
  - 说明
    - 当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
  - 例
    ```html
    <div id="root">
      <div v-if="!showInput">{{ name }}</div>
      <input v-else type="text" v-model="name" ref="inputTitle">
      <button @click="EditName">编辑</button>
    </div>
    
    <script>
    new Vue({
      el: '#root',
      data() {
        return {
          name: 'zxr',
          showInput: false
        }
      },
      methods: {
        EditName(){
          this.showInput = true;
          
          this.$nextTick(function(){
            // input 获取焦点（只有在视图渲染完成后调用，才能正确获得焦点）
            this.$refs.inputTitle.focus()
          })
        }
      },
    })
    </script>
    ```



## dfs



