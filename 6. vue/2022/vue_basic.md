# vue

## 目录

## 
  - js表达式: 一个表达式会产生一个值，可以放在任何一个需要值的地方：
   1. a
   2. a+b
   3. demo(1)
   4. x === y ? 'a' : 'b'
  - js代码（语句）
  

## 条件渲染
  - v-show
    - 写法
      - v-show="表达式"
    - 说明
      - 适用于切换频率较低的场景
      - 不展示的DOM元素未被移除,仅仅是使用样式隐藏掉
        ```js
          <div v-show="false"></div>
              ↓
          <div style="display:none"></div>
        ```
    - 例
      - 使用表达式
        ```js
          <div v-show="1 === 1"></div>
              ↓
          <div></div>
        ```
  - v-if
    - 写法
      1. v-if="表达式"
      2. v-else-if="表达式"
      3. v-else="表达式"
    - 说明
      - 适用于切换频率较低的场景
      - 不展示的DOM元素直接被移除
      ```js
        <div v-if="1 == 1">111</div>
            ↓
        <!----------- ->
      ```
      - v-if可以和v-else-if\v-else一起使用,但要求结构不能被打断
    - 例
      - 用一组时,前端达成条件了,不会判断后面了
        ```js
          <div v-if="3 > 1">111</div>
          <div v-else-if="3 > 2">222</div>
              ↓
          <div>111</div>
        ```
      - 用一组时,不允许被打断,打断后面的无效,会报错
        ```js
          <div v-if="3 > 6">111</div>
          <div>222</div>
          <div v-else-if="3 > 2">333</div>
              ↓
          <div>222</div>
        ```
      - 一直用单个`v-if`时,每个都会单独判断显示
        ```js
          <div v-if="3 > 1">111</div>
          <div v-if="3 > 2">222</div>
              ↓
          <div>111</div>
          <div>222</div>
        ```
      - 有多个需要相同条件,但又不想在外面套一层破坏结构时可以和template一起配合使用
        ```js
          <template v-if="1===1">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </template>
              ↓
          <p>1</p>
          <p>2</p>
          <p>3</p>
        ```
  - 注意点
    - 使用v-if时,元素可能无法获取到(被移除)
    - 使用v-show时,元素一定可以获取到(只是被display隐藏)

## 列表渲染
### v-for指令
  - 语法
    - `v-for="item in xxx" `
    - `v-for="(item, index) in xxx" ` 
  - 说明
    - 用于展示列表数据
    - 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
    - 使用*v-for*遍历时,必须给每个结构都打个唯一标识`:key="yyy"`(在父级下的子孙级中,保证key值唯一)
  - 例1
    - 遍历数组
      ```html
        <ul>
          <li v-for="(item,index) in persons" :key="index">{{index}}-{{item.name}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-张三
        1-李四
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            persons: [
              {id:1,name="张三"},
              {id:1,name="李四"}
            ]
          }
        })
      ```
    - 遍历对象
      ```html
        <ul>
          <li v-for="(value,key) in person" :key="key">{{key}}-{{value}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        name-zxr
        age-18
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            person: {
              name: 'zxr',
              age: 18
            }
          }
        })
      ```
    - 遍历字符串
      ```html
        <ul>
          <li v-for="(char,index) in name" :key="index">{{index}}-{{char}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-z
        1-x
        2-4
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            name: 'zxr'
          }
        })
      ```
    - 遍历指定次数
      ```html
        <ul>
          <li v-for="(number,index) in 3" :key="index">{{index}}-{{number}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-1
        1-2
        2-3
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            name: 'zxr'
          }
        })
      ```
  

### :key
  - 语法
    - `:key="yyy"`
  - 说明
    - 给节点一个唯一标识，相当于人类社会中的身份证号
    - key是vue内部在用的  
    - 如果不写key，key值默认为'index' 
  1. 虚拟DOM中key的作用：
    > key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
    >随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
          
  2. 对比规则：
    1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
      ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
      ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

    2. 旧虚拟DOM中未找到与新虚拟DOM相同的key:
      创建新的真实DOM，随后渲染到到页面。
              
  3. 用index作为key可能会引发的问题：
    1. 若对数据进行逆序添加、逆序删除等破坏顺序操作:
        会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    2. 如果结构中还包含输入类的DOM：
            会产生错误DOM更新 ==> 界面有问题。

  4. 开发中如何选择key?:
    1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
    2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
      使用index作为key是没有问题的。

### Vue监视数据的原理：
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