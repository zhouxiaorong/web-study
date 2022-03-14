# vue 模板语法

## 目录
  - [插件语法](#插件语法)

  - [样式绑定](#样式绑定)
    - [class样式](#class样式)
    - [style样式](#style样式)
    
  - [指令语法](#指令语法)

    

## 插件语法
  - 语法
    
    ```html
    <div>{{msg}}</div>
    ```
    
  - 功能说明
    - 用于<i style="color:rgb(255,100,0);font-size:16px;">解析标签体内容</i>。
    - <span style="font-size:18px;color:rgb(0,150,255)">msg</span>: js表达式，且可以直接读取到 ***data*** 中的所有属性。

  - 例
    ```html
    <div id="root">
    	<p>{{ name }}</p
    	<p>{{ number + 1 }}</p>
    	<p>{{ ok ? 'YES' : 'NO' }}</p>
    	<p>{{ name.split('').reverse().join('') }}</p>
    </div>
      <script>
        new Vue({
          el: '#root',
          data: {
            name: 'zxr',
            number: 0,
            ok: true
          }
        })
      </script>
    
      <!-- 渲染为： -->
      <div id="root">zxr</div>
    ```

​	[⬆️ 返回顶部](#目录)

------



## 样式绑定
### class样式
  - 语法
    ```html
      <div :class="字符串/对象/数组"></div>
    ```
    
  - 说明
    
    - 绑定class名称样式
    - **<span style="font-size:16px;color:rgb(0,150,255)">字符串</span>**: 
      - 适用于<i style="color: rgb(255,100,0)">类名不确定</i>，要动态获取时
      - 绑定的字符串数据值为class类名
    - **<span style="font-size:16px;color:rgb(0,150,255)">数组</span>**: 
      - 适用于要<i style="color: rgb(255,100,0)">绑定多个样式，个数不确定，名字也不确定</i>
      - 数组值为class列表
    - **<span style="font-size:16px;color:rgb(0,150,255)">对象</span>** 
      - 适用于要<i style="color: rgb(255,100,0)">绑多个样式，个数确定，名字也确定，但不确定用不用</i>
      - 对象的 *key* 值为 *class类名*
      - 对象的 *value* 值为 *boolean* 类型数据
      - 渲染结果取决于 *value* 值；true: 添加该class   false: 不添加
    
  - 例
    - 当值为字符串时
      ```html
      <div id="div1" :class="mood"></div>
      <script>
        new Vue({
          data: {
            mood:'normal',
          }
        })
        </script>
        
        <!-- 渲染为： -->
        <div id="div1" class="normal"></div>
      ```
      
    - 当值为数组时
      ```html
      <div id="div1" :class="classArr"></div>
      <!-- 在数组语法中使用三元表达式 -->
      <div id="div2" v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
      <!-- 在数组语法中使用对象语法： -->
      <div id="div3" v-bind:class="[{ active: isActive }, errorClass]"></div>
      <script>
        new Vue({
          data: {
            classArr:['sty1','sty2','sty3'],
            isActive: true,
            activeClass: 'active',
            errorClass: 'text-danger'
          }
        })
        </script>
      
        <!-- 渲染为： -->
        <div id="div1" class="sty1 sty2 sty3"></div>
        <div id="div2" class="active text-danger"></div>
        <div id="div3" class="active text-danger"></div>
      ```
      
    - 当值为对象时
      ```html
      <div id="div3" :class="classObj"></div>
      
      <script>
        new Vue({
          data: {
            classObj:{
              sty1:true,
              sty2:false,
              'sty-3':true,
            },
          }
        })
        </script>
        
        <!-- 渲染为： -->
        <div id="div3" class="sty1 sty-3"></div>
      ```
      
    - 绑定计算属性

      ```html
      <div id="div3" :class="classObject"></div>
      
      <script>
        new Vue({
          data: {
            isActive: true,
            error: null
          },
          computed: {
            classObject: function () {
              return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
              }
            }
          }
        })
        </script>
        
        <!-- 渲染为： -->
        <div id="div3" class="active"></div>
      ```

    - 在组件上绑定class

      ```html
      <!-- 使用组件：绑定class -->
      <my-component class="baz boo"></my-component>
      <!-- 使用组件：绑定带数据的 class：-->
      <my-component v-bind:class="{ active: true }"></my-component>
      
      <script>
      // 声明一个组件
      Vue.component('my-component', {
        template: '<p class="foo bar active">Hi</p>'
      })
      </script>
        
      <!-- 渲染为： -->
      <p class="foo bar baz boo">Hi</p>
      <p class="foo bar active">Hi</p>
      ```

​		[⬆️ 返回顶部](#目录)

------



### style样式

  - 语法
    ```html
      <div :style="{fontSize: 动态值(js表达式)}"></div>
      <div :style="[样式对象]"></div>
    ```
    
  - 说明
    - 绑定内联样式
    - css属性名可以用**驼峰式 **或**短横线分隔** (记得用引号括起来) 来命名
    - 可以使用<i style="color: rgb(0,150,255)">对象</i>写法、<i style="color: rgb(0,150,255)">数组</i>写法
    - 对象语法常常结合返回对象的计算属性使用
    - 自动添加前缀：当 `v-bind:style` 使用需要添加***浏览器引擎前缀***的 CSS属性 时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。
    - 多重值：对象写法时，支持值为多个值的数组（常用于提供多个带前缀的值），只会渲染数组中最后一个被浏览器支持的值
    
  - 例
    
    - 绑定样式***对象***
      ```html
      <div v-bind:style="styleObj"></div>
      <div :style="{color: activeColor, fontSize: fontSize + 'px' }"></div>
      
        <script>
          new Vue({
            data: {
              styleObj:{
                fontSize: '40px',
                color:'red',
              },
              activeColor: 'blue',
              fontSize: 30
            }
          })
        </script>
      
      <!-- 渲染为： -->
      <div style="fontSize:40px;color:red;"></div>
      <div style="color: blue;fontSize: 30px"></div>
      ```
      
    - 绑定样式***数组***
      ```html
        <div :style="styleArr"></div>
        <div :style="[obj1,obj2]"></div>
      
        <script>
          new Vue({
            data: {
              styleArr:[
                {
                  fontSize: '40px'
                },
                {
                  color:'blue',
                }
              ],
              obj1: {
              	fontSize: '30px'
              },
              obj2: {
                  color:'red',
              }
            }
          })
        </script>
      
      <!-- 渲染为： -->
      <div style="fontSize:40px;color:blue;"></div>
      <div style="fontSize:30px;color:red;"></div>
      ```
      
    - 多重值（对象中值为数组类型）
    
      ```html
      <!-- 为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值 -->
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
      
      <!-- 只会渲染数组中最后一个被浏览器支持的值 -->
      <!-- 当浏览器支持不带浏览器前缀的flexbox时, 渲染为： -->
      <div style="display:flex;"></div>
      ```

​		[⬆️ 返回顶部](#目录)

------



## 指令语法

  - 语法
    - `v-????`等: Vue中有很多的指令，且形式都是：v-???
    
  - 功能说明
    
    - 指令是带有 `v-` 前缀的特殊属性
    - 指令属性的值预期是**<span style="font-size:16px;color:rgb(0,150,255)">单个 JavaScript 表达式</span>** (`v-for` 是例外情况)。
    - 用于<i style="color: rgb(255,100,0);">解析标签</i>（包括：标签属性、标签体内容、绑定事件.....）。
    - 当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
    
  - 修饰符 
    
    - 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
    
        ```html
        <!-- `.prevent` 修饰符告诉 `v-on` 指令阻止调用默认事件 -->
        <form v-on:submit.prevent="onSubmit">...</form>
        ```
    
  - 参数
    
    
    - 静态参数
    
      ```html
      <div id="root">
        <!-- 一些指令能够接收一个“参数”，在指令名称之后以冒号表示 -->
        <!-- vname: 参数，告知 v-bind 指令将该元素的 vname 属性与表达式 name 的值绑定。 -->
        <div v-bind:vname="name" :vage="age"></div>
        <!-- 用于监听 DOM 事件； click: 参数，是监听的事件名 -->
        <a v-on:click="doSomething">...</a>
      </div>
      ```
      
    - 动态参数2.6.0+
    
      
      - 当**动态参数**值为 `null` 时，会被显性地用于移除绑定；
      - 当**动态参数**值为任何其它非字符串类型的值时，都将会触发一个警告
      - 在**动态参数表达式**中，不可以使用空格、引号，这些在 HTML attribute 名里是无效的
      - 在**动态参数表达式**中，可以用计算属性
      - 键名不可以使用大写字符，浏览器会把 attribute 名全部强制转为小写
      
      ```html
      <div id="root">
        <!-- 使用方括号括起来的 JavaScript 表达式作为一个指令的参数 -->
        <a v-bind:[attributeName]="url"> ... </a>
        <!-- 使用动态参数为一个动态的事件名绑定处理函数 -->
        <a v-on:[eventName]="doSomething"> ... </a>
      </div>
      <script>
      new Vue({
        data: {
          attributeName: 'href',
          url: 'http://xxx',
          eventName: 'click'
        }
      })
      </script>
      
      <!-- 渲染为： -->
      <a href="http://xxx"> ... </a>
      <a @click="doSomething"> ... </a>
      ```

- 缩写

    - v-bind

        ```html
        <!-- 完整语法 -->
        <a v-bind:href="url">...</a>
        
        <!-- 缩写 -->
        <a :href="url">...</a>
        
        <!-- 动态参数的缩写 (2.6.0+) -->
        <a :[key]="url"> ... </a>
        ```

    - v-on

        ```html
        <!-- 完整语法 -->
        <a v-on:click="doSomething">...</a>
        
        <!-- 缩写 -->
        <a @click="doSomething">...</a>
        
        <!-- 动态参数的缩写 (2.6.0+) -->
        <a @[event]="doSomething"> ... </a>
        ```

​	[⬆️ 返回顶部](#目录)

​			





