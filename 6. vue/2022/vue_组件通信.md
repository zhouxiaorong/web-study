# 组件间通信

## 目录
  - [父传子：props](#父传子：props)

## 父传子：props
  > 参数可以是数组或对象
  > 是单向下行绑定（父级 prop 的更新会向下流动到子组件中，但是反过来则不行）
  > 
  - 语法
    ```js
      new Vue({
        props: Array<string> | Object
      })
    ```
  - 对象参数说明
    - type
      - *String*、*Number*、*Boolean*、*Array*、*Object*、*Date*、*Function*、*Symbol*、任何自定义构造函数
      - 可以是由多个类型组成的数组
      - 会检查一个 prop 是否是给定的类型，否则抛出警告
    - default
      - 为该prop指定默认值；如果该 prop 没有被传入，则换做用这个值
      - 对象或数组的默认值必须从一个工厂函数返回。
    - required：Boolean
      - 定义该 prop 是否是必填项
      - 在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出
    - validator：Function
      - 自定义验证函数会将该 prop 的值作为唯一的参数代入。
      - 在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。
  - 说明
    - 对象允许配置高级选项，如类型检测、自定义验证和设置默认值
    - 当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。
    -  prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
  - 注意事项
    - 对大小写不敏感，浏览器会把所有大写字符解释为小写字符。
    - 当使用时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名(如果你使用字符串模板，那么这个限制就不存在了)
      ```html
        <div last-name="zhou"></div>
        <script>
          new Vue({
            props: ['lastName']
          })
        </script>
      ```
    - 每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值（不可以在子组件内部改变prop值）
    - 对象和数组类型的值是通过*引用*传入的，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态
  - 例
    - 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
      ```js
        new Vue({
          props: {
            propA: Number,
          }
        })
      ```
    - 多个可能的类型
      ```js
        new Vue({
          props: {
            propB: [String, Number],
          }
        })
      ```
    - 自定义构造函数
      ```js
        function Person (firstName, lastName) {
          this.firstName = firstName
          this.lastName = lastName
        }
        new Vue({
          props: {
            propA: Person
          }
        })
      ```
    - 必填的字符串
      ```js
        new Vue({
          props: {
            propC: {
              type: String,
              required: true
            },
          }
        })
      ```
    - 带有默认值的数字
      ```js
        new Vue({
          props: {
            propB: [String, Number],
              propD: {
                type: Number,
                default: 100
              },
          }
        })
      ```
    - 带有默认值的对象
      ```js
        new Vue({
          props: {
            propA: {
              type: Object,
              // 对象或数组默认值必须从一个工厂函数获取
              default: function () {
                return { message: 'hello' }
              }
            },
          }
        })
      ```
    - 自定义验证函数
      ```js
        new Vue({
          props: {
            propF: {
              validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
              }
            }
          }
        })
      ```
    - prop需要作为一个本地的data数据使用时
      ```js
        new Vue({
          props:[pname],
          data(){
            return {
              name: this.pname
            }
          }
        })
      ```
    - prop值需要计算改变时
      ```js
        new Vue({
          props: ['name'],
          computed: {
            fName(){
              return this.name.subString(0,1);
            }
          }
        })
      ```
  - 传递参数案例
    ```html
      <!-- 传入一个静态的值 -->
      <child-component title="zxr"></child-component>

      <!-- 通过 v-bind 动态赋值 -->
      <child-component :title="name"></child-component>

      <!-- 动态赋予一个复杂表达式的值 -->
      <child-component title="fName+' - '+lName"></child-component>

      <!-- 传入一个数字：即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue这是一个 JavaScript 表达式而不是一个字符串。-->-->
      <!-- 不用绑定形式传入表达式形式，默认传入的都是字符串 -->
      <child-component :age="43"></child-component>

      <!-- 传入一个布尔值: 静态的false也需要传入表达式形式 -->
      <child-component :is-published="false"></child-component>

      <!-- 传入一个数组 静态的也需要传入表达式形式 -->
      <child-component :ids="[2,4,22,55]"></child-component>

      <!-- 传入一个对象: 静态的也需要传入表达式形式 -->
      <child-component 
            v-bind:author="{
              name: 'Veronica',
              company: 'Veridian Dynamics'
            }"
      ></child-component>

    ``` 


## 子传父：自定义事件

## 全局事件总线

## 消息订阅和发布：pubsub-js