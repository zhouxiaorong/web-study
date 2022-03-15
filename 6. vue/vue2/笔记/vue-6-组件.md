# 组件
## 基本使用法
  - 使用组件的三大步骤
    1. 定义组件(创建组件)
    2. 注册组件
    3. 使用组件（写组件标签）
  - 语法
    1. 定义组件`Vue.extend(options)`
      - ***options***:  和new Vue(options)时传入的那个options几乎一样
      ```js
        const 组件 = Vue.extend({
          name: '', // 在页面中显示的标签名
          template: ``,
          data(){return {}}
          mdthod: {}
        })
        // 简写（注册时   Vue.extend()最终还是会被调用）
        const 组件 = {
          name: '', // 在页面中显示的标签名
          template: ``,
          data(){return {}}
          mdthod: {}
        }
      ```
    2. 局部注册组件: 靠new Vue的时候传入components选项
      ```js
        new Vue({
          components: {
            组件名: 组件
          }
        })
      ```
    3. 全局注册组件: 
      ```js
        Vue.component('组件名',组件)
      ```
    4. 使用组件
      ```js
        <组件名></组件名>
      ```
  - 说明
    - 定义组件时，el不需要写 →→→ 最终所有的组件都要经过一个vue实例的管理，由vue实例中的el决定服务哪个容器
      - 使用template可以配置组件结构
    - 定义组件时，data必须写成函数 →→→ 避免组件被复用时，数据存在引用关系（一个改变，都改变了）
    - 组件名为多个单词时，每个首字母都大写或用`-`隔开；使用时，多个单词都要用`-`隔开
## 注意点
  - 组件名
    1. 关于组件名:
        一个单词组成：
              第一种写法(首字母小写)：school
              第二种写法(首字母大写)：School
        多个单词组成：
              第一种写法(kebab-case命名)：my-school
              第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持，html无效不处理大写字母)
        备注：
          1. 组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
          2. 可以使用name配置项指定组件在开发者工具中呈现的名字。
        
            ```js
              const 组件 = Vue.extend({
                name: '', // 在页面中显示的标签名
              })
            ```
        
    2. 关于组件标签:
          第一种写法：<school></school>
          第二种写法：<school/>
          备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
    
    3. 一个简写方式：
          const school = Vue.extend(options) 可简写为：const school = options
    - 例
      ```html
        <hello-world></hello-world>
        <hello-zxr></hello-zxr>
        <!-- ↑↑↑↑↑↑↑↑↑↑↑↑↑ -->
        <script>
          Vue.component('hello-world',hello)
          Vue.component('helloZxr',hello)
        </script>
      ```





