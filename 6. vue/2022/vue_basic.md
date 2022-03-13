# vue

## 目录

## 一些说明
### 重点注意事项
  - 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。最好写成普通函数，这样this的指向才是vm 或 组件实例对象
  - 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。
### 关于数组
  - 数组，直接赋值时不会监听，dom中值不会更改
  - 可以使用push()、pop()、shift()、unshift()、splice()、sort()、reverse()这些方法更改数组数据
  - 可以使用Vue.set() 或 vm.$set()更改数组数据
### 其他说明
  - MVVM模型
    1. M：模型(Model) ：data中的数据
    2. V：视图(View) ：模板代码
    3. VM：视图模型(ViewModel)：Vue实例
  - 数据代理
    > 数据代理就是通过一个对象代理对另一个对象中属性的操作（读/写）
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


## Vue.config
  - productionTip
    - false: 阻止 vue 在启动时生成生产提示。
      ```js
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
      ```
  - keyCodes
    ```js
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
    ```

## 模板语法
### 插件语法
  - 语法
    - `{{xxx}}`: xxx是js表达式，且可以直接读取到data中的所有属性。
  - 功能
    - 用于解析标签体内容。
  - 例
    ```html
      <div id="root">{{ name }}</div>
      new Vue({
        el: '#root',
        data: {
          name: 'zxr'
        }
      })
    ```

### 指令语法
  - 语法
    - `v-????`等: Vue中有很多的指令，且形式都是：v-???
  - 功能说明
    - 用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
  - 例
    ```html
      <div id="root">
        <div v-bind:vname="name" :vage="age"></div>
      </div>
      <script>
        new Vue({
          el: '#root',
          data: {
            name: 'zxr',
            age: 19
          }
        })
      </script>
    ```

### 绑定样式
  - class样式
    - 语法
      ```html
        <div :class="字符串/对象/数组"></div>
      ```
    - 说明
      - 字符串: 适用于类名不确定，要动态获取
      - 数组: 适用于要绑定多个样式，个数不确定，名字也不确定
      - 对象: 适用于要绑多个样式，个数确定，名字也确定，但不确定用不用
    - 例
      ```html
        <div :class="mood"></div>
        <div :class="classArr"></div>
        <div :class="classObj"></div>
      
        <script>
          new Vue({
            data: {
              mood:'normal',
              classArr:['sty1','sty2','sty3'],
              classObj:{
                sty1:false,
                sty2:false,
              },
            }
          })
        </script>
      ```
  - style样式
    - 语法
      ```html
        <div :style="{fontSize: 动态值}"></div>
        <div :style="[样式对象]"></div>
      ```
    - 说明
      - 可以使用对象写法、数组写法
    - 例
      - 对象写法
        ```html
          <div :style="styleObj"></div>
        
          <script>
            new Vue({
              data: {
                styleObj:{
                  fontSize: '40px',
                  color:'red',
                },
              }
            })
          </script>
        ```
      - 数组写法
        ```html
          <div :style="styleArr"></div>
        
          <script>
            new Vue({
              data: {
                styleArr:[
                  {
                    fontSize: '40px',
                    color:'blue',
                  },
                  {
                    backgroundColor:'gray'
                  }
                ]
              }
            })
          </script>
        ```

## 内置指令

### v-bind:

> 单向绑定解析表达式，可简写为 :xxx

  - 语法
    - `v-bind:xxx="解析表达式"`
    - 简写: `:xxx="解析表达式"`
  - 功能说明
    - 数据单向绑定；数据只能从data流向页面
  - 注意事项
  - 例
    ```html
      <div id="root">
        <div v-bind:vname="name" :vage="age"></div>
      </div>
      <script>
        new Vue({
          el: '#root',
          data: {
            name: 'zxr',
            age: 19
          }
        })
      </script>
    ```

### v-model:

  > 双向数据绑定

  - 语法
    - `v-model:xxx="解析表达式"`
    - `v-model:value="解析表达式"`可以简写成: `v-model="解析表达式"`
  - 功能说明
    - 双向数据绑定；数据不仅能从data流向页面，还可以从页面流向data。
    - v-model只能应用在表单类元素（输入类元素）上（如：input、select等）
    - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
  - v-model的三个修饰符：
    - lazy：失去焦点再收集数据
    - number：输入字符串转为有效的数字
    - trim：输入首尾空格过滤
  - 表单数据
    - 说明
      - **type="text"**: v-model收集的是value值，用户输入的就是value值。
      - **type="radio"**: v-model收集的是value值，且要给标签配置value值
      - **type="checkbox"**: 
        - 没有配置value属性时，那么收集的是布尔值（checked；勾选 or 未勾选）
        - v-model的初始值是非数组时，那么收集的就是checked（勾选 or 未勾选，是布尔值）
        - v-model的初始值是数组，那么收集的的就是value组成的数组
    - 例
      ```html
        <!-- 绑定value值，并将该值的首尾空格过滤 -->
        <input type="text" v-model.trim="name">
        
        <!-- 绑定value值，并将该值转为数字 -->
        <input type="number" v-model.number="age">
        
        <!-- 单选，必须给标签配置value值 -->
        男<input type="radio" name="sex" v-model="sex" value="male">
        女<input type="radio" name="sex" v-model="sex" value="female">
      
        <!-- 多选，必须给每个选项配置value值 -->
        学习<input type="checkbox" v-model="hobby" value="study">
        打游戏<input type="checkbox" v-model="hobby" value="game">
        吃饭<input type="checkbox" v-model="hobby" value="eat">
      
        
        <!-- 选择器，必须给每个选择配置value值 -->
        <select v-model="city">
          <option value="">请选择校区</option>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="shenzhen">深圳</option>
          <option value="wuhan">武汉</option>
        </select>
      
        <script>
          new Vue({
            data: {
              name:'',
              age:18,
              sex:'female',
              hobby:[],//不为数组时，收集的是布尔值
              city:'beijing',
            }
          })
        </script>
      ```
  - 例
    - 简单数据双向数据绑定：
      ```html
        <div id="root">
          <input type="text" v-model="name"><br/>
        </div>
        <script>
          new Vue({
            el: '#root',
            data: {
              name: 'zxr'
            }
          })
        </script>
      ```

### v-on：

> 绑定事件监听, 可简写为@

  - 语法
    ```html
      <div v-on:事件名="js表达式">
      <!-- 简写 -->
      <div @事件名="js表达式">
    ```
  - 功能说明
    - 绑定事件监听, 可简写为@
    - 修饰符可以连续写
  - 事件修饰符：
    1. prevent：常用；阻止默认事件
      - 比如a标签的自动跳转事件
    2. stop：常用；阻止事件冒泡
      - 父子都绑定事件时，如果不用`.stop`修饰符阻止，两个都会被调用
    3. once：常用；事件只触发一次
    4. capture：使用事件的捕获模式；
    5. self：只有*event.target*是当前操作的元素时才触发事件；
    6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
  - 事件
    - 点击事件
      ```html
        <div id="root">
          <!-- @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参； -->
          <button @click="showInfo1">点我提示信息1（不传参）</button>
          <button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
        </div>
        <script>
          new Vue({
            el: '#root',
            methods: {
              showInfo1(event){
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！')
              },
              showInfo2(event,number){
                console.log(event,number)
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！！')
              }
            }
          })
        </script>
      ```
    - 按键事件
      - Vue中常用的按键别名
        - 回车 => enter
        - 删除 => delete (捕获“删除”和“退格”键)
        - 退出 => esc
        - 空格 => space
        - 换行 => tab (特殊，必须配合keydown去使用)
        - 上 => up
        - 下 => down
        - 左 => left
        - 右 => right
      - 自定义按键别名
        - `Vue.config.keyCodes.自定义键名 = 键码`
      - 系统修饰键（用法特殊）：ctrl、alt、shift、meta
        1. 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
        2. 配合keydown使用：正常触发事件。
      - 说明
        - Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
      - 例
        ```html
          <div id="root">
            <!-- enter -->
            <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo">
            <!-- ctrl + enter -->
            <input type="text" placeholder="按下回车提示输入" @keydown.ctrl.enter="showInfo">
            <!-- 自定义按键别名 -->
            <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
          </div>
          <script>
            Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
            new Vue({
              el: '#root',
              methods: {
                showInfo(e){
                  console.log(e.target.value)
                }
              }
            })
          </script>
        ```

### v-for：

> 遍历数组/对象/字符串

  - 遍历数组/对象/字符串
  
  - 语法
    - `v-for="item in xxx" `
    - `v-for="(item, index) in xxx" ` 
  - 说明
    - 用于展示列表数据
    - 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
  - 注意事项
    - 使用*v-for*遍历时,必须给每个结构都打个唯一标识<span style="color:red">:key="yyy"</span>(在父级下的子孙级中,保证key值唯一)
    - 使用*v-for*时，如果不用 *:key* ,<span style="color:blue">默认key值为idnex值</span>
    - 最好不要用index值，使用input等输入框时会出错
  - 例
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

### v-if,v-else-if,v-else：
  > 条件渲染（动态控制节点是否存存在）
  - 语法
    ```js
      <div v-if="表达式"></div>
      <div v-else-if="表达式"></div>
      <div v-else="表达式"></div>
    ```
  - 说明
    - 适用于切换频率较低的场景
    - 不展示的DOM元素直接被移除，元素无法获取到
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

### v-show：
  > 条件渲染 (动态控制节点是否展示)
  - 语法
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

### v-text
  - 语法
    - `v-text="表达式"`
  - 作用
    - 向其所在的节点中渲染文本内容。
  - 与插值语法的区别
    - v-text会替换掉节点中的内容，{{xx}}则不会
  - 例
    ```html
      <div id="root">
        <div>你好，{{name}}</div>
        <div v-text="name"></div>
        <div v-text="str"></div>
      </div>
      <script>
        new Vue({
          el:'#root',
          data:{
            name:'zxr',
            str:'<h3>你好啊！</h3>'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      
      <div id="root">
        <div>你好，zxr</div>
        <div>zxr</div>
        <div>&lt;h3&gt;你好啊！&lt;/h3&gt;</div>
      </div>
    ```

### v-html
  - 语法
    - `v-html="表达式"`
  - 作用
    - 向其所在的节点中渲染*html结构*。
  - 与插值语法的区别
    - *v-html*会替换掉节点中的内容，{{xx}}则不会
  - 注意事项
    - *v-html*存在性问题;
      1. 在网站上动态渲染任意HTML是非常危险的,容易导致XSS攻击
      2. 一定要在可信的内容上使用*v-html*,永不要用在用户提交的内容上
  - 例
    ```html
      <div id="root">
        <div>你好，{{name}}</div>
        <div v-html="name"></div>
        <div v-html="str"></div>
      </div>
      <script>
        new Vue({
          el:'#root',
          data:{
            name:'zxr',
            str:'<h3>你好啊！</h3>'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      
      <div id="root">
        <div>你好，zxr</div>
        <div>zxr</div>
        <div><h3>你好啊！</h3></div>
      </div>
    ```

### v-cloak
  - 语法
    - `v-cloak`
  - 说明
    - 没有值
    - 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
    - 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
  - 例
    ```html
      <style>
        [v-cloak]{
          display:none;
        }
      </style>
      <div id="root">
        <h2 v-cloak>{{name}}</h2>
      </div>
			<script type="text/javascript" src="/vue.js"></script>
    
      <script type="text/javascript">
        new Vue({
          el:'#root',
          data:{
            name:'zxr'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    
      // JS阻塞未加载时,不显示模板数据(隐藏),等加载完,会删除v-cloak属性
    ```
    ```js
    ```
    ```js
    ```

### v-once
  - 语法
    - `v-once`
  - 说明
    - 属性,没有值
    - *v-once*所在节点在初次动态渲染后，就视为静态内容了。
    - 以后数据的改变不会引起*v-once*所在结构的更新，可以用于优化性能。
  - 例
    ```js
			<h2 v-once>初始化的n值是:{{n}}</h2>
    ```

### v-pre
  - 语法
    - `v-pre`
  - 说明
    - 属性,没有值
    - 会跳过其所在节点的编译过程,不会解析。
		- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
  - 例
    ```js
      <div v-pre>{{name}}</div>
    
      ↓↓↓↓↓↓↓↓↓↓↓
      // vue不会解析它了
      <div v-pre>{{name}}</div>
    ```



## 选项
### el
  > 用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
  - 语法
    ```js
      new Vue({
        el: '#root'
      })
    ```
  - 说明
    - 也可以先创建Vue实例，之后再通过`vm.$mount('#root')`指定el的值
    ```html
      <div id="root">{{ name }}</div>
      <script>
        new Vue({
        })
        Vue.$mount('#root');
      </script>
    ```

### template  
  - 语法
    ```js
      new Vue({
        template: `模板语法`
      })
    ```
  - 说明
    - 一个字符串模板作为 Vue 实例的标识使用。模板将会替换挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
    - 如果 Vue 选项中包含渲染函数，该模板将被忽略。


### data
  > 用于存储数据，数据供el所指定的容器去使用，
  - 语法
    - 对象式：data 的第一种写法
      ```js
        new Vue({
          data(){
            // ...
          }
        })
      ```
    - 函数式：data 的第二种写法
      ```js
        new Vue({
          data(){
            return {
              // ...
            }
          }
        })
      ```
  - 说明
    - data中的this指向Vue实例对象
    - 定义组件时，data必须写成函数式 →→→ 会报错；也需要避免组件被复用时，数据存在引用关系（一个改变，都改变了）
    - data中所有的属性，最后都出现在了vm身上
    - vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。
  - 数据代理
    - 通过vm对象来代理data对象中属性的操作（读/写）
    - 好处: 更加方便的操作data中的数据
    - 原理
      1. 通过Object.defineProperty()把data对象中所有属性添加到vm上。
      2. 为每一个添加到vm上的属性，都指定一个getter/setter。
      3. 在getter/setter内部去操作（读/写）data中对应的属性。
  - 例
    - 数组，直接赋值时不会监听，dom中值不会更改
      ```js
			const vm = new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				methods: {
					updateMei(){
						// this.persons[0].name = '张三' //奏效
						// this.persons[0].age = 50 //奏效
						// this.persons[0].sex = '男' //奏效
						// this.persons[0] = {id:'001',name:'李四',age:50,sex:'男'} //不奏效
						this.persons.splice(0,1,{id:'001',name:'王五',age:50,sex:'男'})//奏效
					}
				}
			}) 
      ```

### methods
  - 注意事项
    - methods中配置的函数，不要用箭头函数！否则this就不是vm了；
    - methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；


### computed
  - 语法
    ```js
      new Vue({
        computed: {
          // 简写
          xx(){
            // return ....;
          },
          xxx(){
            // 当有人读取时,get会被调用，返回值为xxx的值
            get(){
              // return ....;
            },
            // 当xxx被修改时会被调用
            set(value){
            }
          }
        }
      })
    ```
  - 功能说明
    - 要用的属性不存在，要通过已有属性计算得来。
    - 计算属性最终会出现在vm上，直接读取使用即可
    - 原理：底层借助了 *Objcet.defineproperty* 方法提供的*getter*和*setter*。
    - get函数会在**初次读取时**和**所依赖的数据改变时**调用执行
    - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
  - 与*methods*相比优势
    - 内部有缓存机制（复用），效率更高，调试方便。
  - 例
    ```html
      <div id="root">
        <div>{{ fName }}</div>
        <div>{{ fullName }}</div>
      </div>
    
      <script>
        new Vue({
          el: '#root',
          data: {
            fName: 'z',
            lName: 'xr'
          },
          computed: {
            fName(){
              return this.fName+'-'+this.lName;
            },
            fullName(){
              get(){
                return this.fName+'-'+this.lName;
              },
              set(value){
                const arr = value.split('-')
                this.fName = arr[0]
                this.lName = arr[1]
              }
            }
          }
        })
      </script>
    ```

### watch,$watch
  - 语法
    - 第一种写法: 
      ```js
        var vm = new Vue({
          watch: {
            xx: {
            immediate:true, // true: 初始化时handler会被调用 false: 默认，不会被调用
            deep:true, // 监听对象内部值的变化
            // 当xx发生改变时会被调用 newValue: 新的值  oldValue: 旧的值，初始化调用时为 undefined
            handler(newValue,oldValue){
              console.log('isHot被修改了',newValue,oldValue)
            }
            }
          }
        })
      ```
    - 第二种写法
      ```js
        vm.$watch('isHot',{
          immediate:true, //初始化时让handler调用一下
          //handler什么时候调用？当isHot发生改变时。
          handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
          }
        })
      ```
    - 简写
      ```js
        vm.$watch('xx',(newValue,oldValue)=>{
          console.log('xx被修改了',newValue,oldValue,this)
        }) 
      ```
  - 参数
    - *immediate*: true: 初始化时handler会被调用 false: 默认，不会被调用
    - *deep*: true: 监听对象内部值的变化 false: 默认，不监听
  - 深度监视：
    1. Vue中的watch默认不监测对象内部值的改变（一层）。
    2. 配置deep:true可以监测对象内部值改变（多层）。
  - 功能说明
    - 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
    - 监视的属性必须存在，才能进行监视！！
  - 注意事项
    - Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
    - 使用watch时根据数据的具体结构，决定是否采用深度监视。
  - **computed** 和 **watch** 之间的区别
    1. computed能完成的功能，watch都可以完成。
    2. watch能完成的功能，computed不一定能完成
    3. watch可以进行异步操作；computed不可以
    4. 
    5. 


### filters
  > 过滤器
  - 语法
    - 注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
    - 使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
    - `xx | 过滤器名(参数)`
    - 全局过滤器
      ```js
        Vue.filter('过滤器名',function(value){
          return value.slice(0,4)
        })
      ```
    - 局部过滤器
      ```js
        new Vue({
          filters:{
            // 第一个value值固定，参数从第二个开始传入
            过滤器名(value,str='默认值'){
              // console.log('@',value)
              return dayjs(value).format(str)
            }
          }
        })
      ```
  - 功能说明
    - 对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
    - 过滤器也可以接收额外参数、多个过滤器也可以串联
    - 并没有改变原本的数据, 是产生新的对应的数据
  - 例
    ```html
			<!-- 过滤器 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>

      <script>
            
        //全局过滤器
        Vue.filter('mySlice',function(value){
          return value.slice(0,4)
        })
    
        //局部过滤器
        new Vue({
          filters:{
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
              // console.log('@',value)
              return dayjs(value).format(str)
            }
          }
        })
      </script>
    ```



### render

### renderError

### propsData

### parent
### mixins
    - Vue.mixin();
### extends
### provide / inject

### name
### delimiters
### functional
### model
### inheritAttrs
### comments

### directives
  > 自定义指令
  - [自定义指令](#自定义指令)

### components
  > 局部注册组件
  - [组件](#组件)

### props
  > 用于接收来自父组件的数据
  - [组件间通信，父传子](vue_组件通信.md#父传子：props)


## 生命周期
  > 又名：生命周期回调函数、生命周期函数、生命周期钩子。是Vue在关键时刻帮我们调用的一些特殊名称的函数。
  - 说明
    - 生命周期函数的名字是不可更改的
    - 生命周期函数中的*this*指向*vm*或*组件实例对象*
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

### beforeCreate
  > 什么都没有；数据监测、数据代理创建之前调用；
  > 此时this不是指向vue

### created
  > 数据监测、数据代理已创建；可以通过vue访问data中的数据、methods中的方法

### beforeMount
  > 挂载之前；已完成模板解析，生成虚拟DOM(内存中)；  
  > vue会解析模板，生成虚拟DOM放在vue.$el中，然后转为真实DOM插入到页面；之后如果有更新，会拿虚拟DOM比较，更新
  - 页面呈现的是未经vue编译的DOM模板结构
  - 此时对DOM的操作，最终都不奏效（DOM会在mounted之前被虚拟DOM替换）

### mounted
  > 常用, 挂载完毕；Vue完成模板的解析并把初始的真实DOM元素放入页面
  - 页面呈现的是经过Vue编译过的DOM
  - 可以在此进行开启定时器、发送网络请求、订阅消息、绑定自定义事件等初始化操作

### beforeUpdate
  > 更新之前调用
  - 页面和vue中的数据不同步（vue中的数据是新的，但页面中的数据还是旧的）

### updated
  > 更新之后；  
  > vue会根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即完成了Model→View的更新
  - 页面和vue中的数据已同步（vue中的数据是新的，页面中的数据也是新的）

### beforeDestroy
  > 常用；执行销毁之前；可在此处理后事
  - 此时vue中的data、methods、指令等都处于可用状态
  - 可在此函数中关闭定时器、取消订阅消息、解绑自定义事件等收尾操作
  - 在此操作数据不会触发更新流程（vue中的数据会改变，但页面不会变了）
  - 定时器不关闭会导致vue已销毁，但定时器还在执行的结果

### destroyed
  > 销毁之后  
  - 销毁后借助Vue开发者工具看不到任何信息。
  - 销毁后自定义事件会失效，但原生DOM事件依然有效。（之前生成的DOM还在页面中，只是之后vue不会再有操作了）

###  

## 组件
### 基本使用法
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
### 注意点
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






## 自定义指令
  - 语法
    1. 局部指令
      - `new Vue({ directives:{指令名:配置对象} })` 或`new Vue({directives{指令名:回调函数}	})`
      ```js
        new Vue({
          directives:{
            //函数型: 指令与元素成功绑定时（一上来）; 或者指令所在的模板被重新解析时都会被调用 
            aaa(element,binding){
              console.log(this) // window
            },
            // 对象型
            bbb:{
              //指令与元素成功 绑定时（一上来）
              bind(element,binding){
              },
              //指令所在元素被插入页面时
              inserted(element,binding){
              },
              //指令所在的模板被重新解析时
              update(element,binding){
              }
            }
          }
        });
      ```
    2. 全局指令
      - `Vue.directive(指令名,配置对象)` 或 `Vue.directive(指令名,回调函数)`
      ```js
        //函数型: 指令与元素成功绑定时（一上来）; 或者指令所在的模板被重新解析时都会被调用 
        Vue.directive('ccc',function(element,binding){
        })
        // 对象型
        Vue.directive('ccc',{
          //指令与元素成功绑定时（一上来）
          bind(element,binding){
          },
          //指令所在元素被插入页面时
          inserted(element,binding){
          },
          //指令所在的模板被重新解析时
          update(element,binding){
          }
        })
      ```
  - 配置对象中的回调
    - *bind*：指令与元素成功绑定时调用。
    - *inserted*：指令所在元素被插入页面时调用。
    - *update*：指令所在模板结构被重新解析时调用。
  - 注意事项
    - Vue不维护自定义指令里的 *this*,自定义指令中 *this* 指向 ***window***
    - 指令定义时不加v-，但使用时要加v-；
    - 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。
  - 例
    - 指令为多个单词时
      ```js
        new Vue({
          directives:{
            'aa-bbb'(element,binding){
            },
            // 对象型
            'bb-aaa':{
              bind(element,binding){
              },
              inserted(element,binding){
              },
              update(element,binding){
              }
            }
          }
        });
      ```
      ```html
        <div v-aa-bbb=""></div>
        <div v-bb-aaa=""></div>
      ```
