{ // 组件
    
  { // 
    /* 基础
      代码：
          Vue.component('组件名', ...)
      说明：
          1. prop: 接收参数
          2. template: 模板
      例：
          <div id="root">
            <com-item v-for="(item, index) of items" :key="index" :item="item"></com-item>
          </div>
          <script>
            Vue.component('com-item',{
              props: ['item'],
              template: '<li>{{item}}</li>'
            })
            var vm = new Vue({
              el: '#root',
              data: {
                items: ['香蕉','菠萝蜜','芒果','橙子','橘子','枇杷']
              }
            })
          </script>
    */
  }
  { // 1. 全局注册子组件
    // 代码: 
        Vue.component('组件名', {  
          data: function(){ return { 
            // ...
            } },
          //  ... 选项
        })
    /* 
      组件名:
          1. 使用 kebab-case (短横线分隔 - )
              => my-component-name
              1. 当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 <my-component-name>
          2. 使用 PascalCase (首字母大写命名) 
              => MyComponentName
              1. 当使用 PascalCase (首字母大写命名) 定义一个组件时，在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的。
              2. 直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。
      data:
          1. 子组件中的 data 必须使用函数返回
      说明:
          1. 用 Vue.component() 注册的子组件是全局的
          2. 全局注册的子组件在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中
              3. 全局注册的子组件在各自内部可以相互使用
      */
  }
  { // 2. 局部注册子组件
      // 代码:
          var ComponentA = { /* ... */ }
          new Vue({
            el: '#root',
            components: {
              '子组件名': ComponentA
            }
          })
    /* 
      说明:
        1. 局部注册的子组件,必须在 components 选项中定义,其中, property 就是其自定义子组件的名字,该 property 对应的值就是这个组件的选项对象
        2. 局部注册的组件在其子组件中不可用,
        3. 要在一个局部组件 A 中使用另一个局部组件 B ,则需要在局部组件 A 的 components 选项中定义 局部组件 B,
          例:
    */
            var ComponentA = { /* ... */ }
            var ComponentB = {
              components: {
                'component-a': ComponentA
              },
              /* ... */
            }
  }
  { // 3. 模块系统
    { // 3.1 在模块系统中局部注册组件
      代码:
        import ComponentA from './ComponentA'
        import ComponentC from './ComponentC'

        export default {
          components: {
            ComponentA,
            ComponentC
          },
          /* ... */
        }
      
      // 说明:
        // 1. 导入每个你想使用的组件
        // 2. 在 components 选项中定义
    }
    { // 3.2 基础组件的自动化全局注册
      代码:
          //为方便起见，全局注册所有基本组件，因为它们将会非常频繁地使用。组件使用，他们文件名的 PascalCased 版本。
          import Vue from 'vue'

          const requireComponent = require.context(
            //在当前目录中查找文件（其组件目录的相对路径）
            '.',
            //是否查询其子目录
            false,
            // 匹配基础组件文件名的正则表达式（仅包含以“ _base-”开头的.vue文件）
            /_base-[\w-]+\.vue$/
          )

          //对于每个匹配的文件名...
          requireComponent.keys().forEach((fileName) => {
            //获取组件配置
            const componentConfig = requireComponent(fileName)
            //获取组件名称的 PascalCase 命名（获取和目录深度无关的文件名）
            const componentName = fileName
              //从开头删除“ ./_”
              .replace(/^\.\/_/, '')
              //从末尾删除文件扩展名
              .replace(/\.\w+$/, '')
              // 用 - 分隔
              .split('-')
              // 大写
              .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
              // 使用指定字符串连接
              .join('')

            //全局注册组件
            Vue.component(
                componentName, 
                // 如果这个组件选项是通过 `export default` 导出的，
                // 那么就会优先使用 `.default`，
                // 否则回退到使用模块的根。
                componentConfig.default || componentConfig)
          })

      说明:
        // 1. 全局注册的行为必须在根 Vue 实例 (通过 new Vue); 创建之前发生
        // 2. 使用 require.context 只全局注册这些非常通用的基础组件
      基础组件:
        // 组件只是包裹了一个输入框或按钮之类相对通用的元素,称为基础组件,它们会在各个组件中被频繁的用到
    }
  }
}

{ // 基础
  { // 1.1 文本插值: {{  }}
    /* 
      代码:　
          {{ message }}
      说明： 
          在 html 中插入 data 中的 message 数据
      例子：
          <div id="root">
            <div>{{ message }}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world'
              }
            })
          </script>
    */
  }
  { // 1.2 指令 - 双向绑定: v-model=""
    /* 
      代码：
          v-model="message"
      说明：
          1. 双向绑定 message 数据（一个变化另一个也会变化）
      例：
          <div id="root">
            <input type="text" v-model="message">
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world'
              }
            })
          </script>
    */
  }
  { // 1.3 指令 - 添加事件监听器: v-on:click="" || @click=""
    /* 
      代码：
          v-on:click="方法名" || @click="方法名""
      说明：
          1. methods: { 方法名: function(){ ... } }
              自定义方法，实例方法
          2. methods: { 方法名 () { ... }}
              es6 写法
          3. @click="" 是 v-on:click="" 的缩写
          4. v-on: 添加一个事件监听器，通过它调用在 Vue 实例中定义的方法
      例：
          <div id="root">
            <button v-on:click="btnClick">点击</button>
            <button @click="btnClick2">点击</button>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              methods: {
                btnClick: function() {
                  console.log('btnClick');
                },
                btnClick2 () {
                  console.log('btnClick2');
                }
              }
            })
          </script>
    */
  }
  { // 1.4 指令 - 绑定元素: v-bind:title="" :title=""
    /* 
      代码：
          v-bind:title="message"
      说明：
          1. :属性名="" 是 v-bind:属性名="" 的缩写
          2. 指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute
      例：
          <div id="root">
            // 将这个元素节点的 title 属性和 Vue 实例的 message 数据保持一致
            <div v-bind:title="message"></div>
            <div :title="message"></div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world'
              }
            })
          </script>
    */
  }
  { // 1.5 条件 - v-if, v-else-if, v-else
    /* 
      代码：
          <p v-if="type === 0">显示 if 中的数据</p>
          <p v-else-if="type === 1">显示 elseif 中的数据</p>
          <p v-else>显示 else 中的数据</p>
      说明：
          1. 条件展示： v-if="" \ v-elseif="" \ v-else=""
      例：
          <div id="root">
            <p v-if="type === 0">显示 v-if 中的数据</p>
            <p v-else-if="type === 1">显示 v-else-if 中的数据</p>
            <p v-else>显示 v-else 中的数据</p>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                type: 
              }
            })
          </script>
    */
  }
  { // 1.6 循环: v-for
    /* 
      代码：
          <li v-for="item in items">{{ item.text }</li>
          <li v-for="item of items">{{ item.text }</li>
      说明：
          1. 用于绑定 数组/对象 的数据来渲染一个项目列表
      例：
          <div id="root">
            <ul>
              <li v-for="(item, index) of items" :key="item.id">
                {{index}} - {{ item.text }}
              </li>
            </ul>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                items: [
                  {id:1, text:'html'},
                  {id:2, text:'css'},
                  {id:3, text:'js'}
                ],
              }
            })
          </script>
    */
  }
  { // 1.7 显示 v-show
    /* 
      代码：
          <p v-show="show">显示 else 中的数据</p>
      说明：
          1. 条件渲染： v-show=""
      例：
          <div id="root">
            <p v-show="show">显示 else 中的数据</p>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                type: '0',
                show: true
              }
            })
          </script>
    */
  }
}

{ // Vue 实例
  { // 1.1 文本插值: {{  }}
    /* 
      代码:　
          {{ message }}
      说明： 
          1. 将数据解释为普通文本输出
          2. 无论何时，绑定的数据对象上 msg property 发生了改变，插值处的内容都会更新。
          3. 如果使用了 v-once 指令，只能一次性插值，当数据改变时，插值处的内容不会更新。
      例子：
          <div id="root">
            <!-- 在 html 中插入 data 中的 message 数据 -->
            <div>{{ message }}</div>
            <div v-once>{{ message }}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world'
              }
            })
          </script>
    */
  }
  { // v-once
    /* 
      代码：
          <div v-once></div>
      说明：
          1. 不需要表达式
          2. 插值只执行一次，当数据改变时，插值处的内容不会更新（之后重新渲染时，元素/组件及其所有的子节点将被视为静态内容并跳过）
          3. 
      优点：
          1. 
      例：
          <div id="root">
            <div v-once>{{message}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world'
              }
            })
          </script>
    */
  }
  { // v-html
    /* 
      代码：
          <div v-html="message" ></div>
      说明：
          1. 将数据解释为 innerHTML 输出
          2. 内容按普通 HTML 插入，不会作为 Vue 模板进行编译
          3. 不能使用 v-html 来复合局部模板（因为 Vue 不是基于字符串的模板引擎）
      注意点：
          1. 在网站上动态渲染任意 HTML 容易导致 XSS攻击
          2. 只在可信内容上使用 v-html
          3. v-html 永不用在用户提交的内容上
      例：
          <div id="root">
            <div v-html="message" ></div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: '<h2>hello world</h2>'
              }
            })
          </script>
    */
  }
  { // v-bind
    /* 
      代码：
          <div :id="message"></div>
          <div v-bind:id="message"></div>
      说明：
          1. 动态绑定一个或多个属性
          2. 缩写  v-bind:  ->  :
          3. 对于布尔值，它们只要存在值就为 true，当为null/undefined/false时，值为false
      例：
          <div id="root">
            <div :title="id">{{id}}</div>
            <!-- 布尔值例子，为null，不被渲染 -->
            <div v-bind:disabled="isButtonDisabled"></div>
            <div v-bind="{id: id, msg: message}">{{message}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                id: '0001',
                message: '标题',
                isButtonDisabled: null// 
              }
            })
          </script>
    */
  }
  { // 使用 js 表达式 {{ 表达式 }}
    /* 
      代码：
          {{num + 1}}
          {{num === 1 ? 'yes' : 'no'}}
          {{ message.split('').reverse().join('') }}
          <div :id="'list-' + id"></div>
      说明：
          1. 每个绑定只能包含单个表达式
          2. 不能是语句或流程控制语句
          3. 不能在模板表达式中试图访问用户定义的全局变量。
      例：
          <div id="root">
            <div>{{num+1}}</div>
            <div>{{num === 1 ? 'yes' : 'no'}}</div>
            <div>{{ message.split('').reverse().join('') }}</div>
            <div :id="'list-' + num">{{message}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                num: 0,
                message: 'hello world'
              }
            })
            setInterval(() => {
              vm.num++;
              vm.message="hello world" + vm.num;
            }, 500);
          </script>
    */
  }
  { // 动态参数 2.6.0+
    /* 
      代码：
          <a v-bind:[attributeName]="url"> ... </a>
          <a v-on:[eventName]="doSomething"> ... </a>
      说明：
          1. attributeName: 被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用
          2. 动态参数为字符串类型，任何其它非字符串类型的值都将会触发一个警告
          3. 异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定
          4. 不能使用空格、引号，会触发编译警告
          5. 参数不能有大写字符（浏览器会全部强制转为小写）
      例：
          <div id="root">
            <div :[attr_1]="message">{{message}} - 1</div>
            <div :[attr_1+3]="message">{{message}} - 2</div>
            <div :[attr_1+3]="message">{{message}} - 3</div>
            <div :[getattrname]="message">{{message}} - 4</div>
            <div @[clickname]="click">{{num}} - 5</div>
            <div v-bind="{[attr_1]: message}">{{message}} - 6</div>

            <div :[attrName]="message">{{message}} - 8</div>
            
            <div :[attr_1 + 3]="message">{{message}} - 7</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world',
                attr_1: 'title',
                attr_2: null,
                attrName: 'id',
                clickname: 'click',
                num: 0
              },
              computed: {
                getattrname: function() {
                  return this.attr_1 + 'name'
                }
              },
              methods: {
                click () {
                  this.num++
                }
              }
            })
          </script>
    */
  }
  { // 缩写
    /* 
      代码：
          v-bind: -> :
            例 
              <a v-bind:href="url">...</a>
                -> <a :href="url">...</a>
          v-on: -> @
            例
              <a v-on:click="doSomething">...</a>
                -> <a @click="doSomething">...</a>
    */
  }
}
{ // 计算属性和侦听器
  { // 1. 计算属性
    /* 
      代码：
          computed: { ... }
      说明：
          1. 只有当 计算属性 中使用的 property 值发生改变时，才会重新求值
          2. 计算属性默认只有 getter 函数, 使用方法： vm.property 
      计算属性的 setter
      例：
          <div id="root">
            <div>{fullName}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                firstName: 'zhou',
                lastName: 'xiaoxiao'
              },
              computed: {
                fullName () {
                  return this.firstName + ' ' + this.lastName
                }
              }
            })
          </script>
    */
  }
  { // 2. 计算属性 与 方法 比较
    /* 
      说明：
          方法：每当触发重新渲染时，调用方法将总会再次执行函数
          计算属性：基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值
      例：
          <div id="root">
            <div>{{message}}</div>
            <div>{{cFullName}}</div>
            <div>{{mFullName()}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                message: 'hello world',
                firstName: 'zhou',
                lastName: 'xiaoxiao',
                num: 0
              },
              computed: {
                cFullName () {
                  console.log('computed.cFullName()');
                  return this.firstName + ' ' + this.lastName
                }
              },
              methods: {
                mFullName () {
                  console.log('methods.mFullName()');
                  return this.firstName + ' ' + this.lastName
                }
              }
            })
            setInterval(() => {
              vm.num++
              vm.message = '早上好' + vm.num;
            }, 1000);
          </script>
    */
  }
  { // 3. 与 侦听属性 比较
    /* 
      说明：
          计算属性：简洁，一个就够了
          侦听属性：
            1. 初次渲染时不会被调用
            2. 比较繁琐，需要去侦听每个用到的 property
      例：
          <div id="root">
            <div>侦听器：{{fullName}}</div>
            <div>计算属性：{{cFullName}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                firstName: 'zhou',
                lastName: 'xiaoxiao',
                fullName: ''
              },
              computed: {
                cFullName () {
                  console.log('computed.cFullName()');
                  return this.firstName + ' ' + this.lastName
                }
              },
              watch: {
                firstName (newval, oldval) {
                  console.log('watch.firstName()');
                  this.fullName = newval + ' ' + this.lastName;
                },
                lastName (newval, oldval) {
                  console.log('watch.lastName()');
                  this.fullName = this.firstName + ' ' + newval;
                }
              }
            })
            setTimeout(() => {
              vm.firstName = 'xi';
              vm.lastName = 'dada';
            }, 3000);
          </script>
    */
  }
  { // 4. 计算属性的 setter
    /* 
      代码：
          computed: {
            full: {
              get: function(){
                ...
                return ...;
              }, 
              set: function(value){
                ...
              }
            }
          }
          vm.full = '新的值';
      例：
          <div id="root">
            <div>{{firstName}}</div>
            <div>{{lastName}}</div>
            <div>{{fullName}}</div>
          </div>
          <script>
            var vm = new Vue({
              el: '#root',
              data: {
                firstName: 'zhou',
                lastName: 'xiaoxiao'
              },
              computed: {
                fullName : {
                  get () {
                    return this.firstName + ' ' + this.lastName;
                  },
                  set (value) {
                    var names = value.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length -1]
                  }
                }
              }
            })
            setTimeout(() => {
              vm.fullName = 'xiao huahua'
            }, 3000);
          </script>
    */
  }
  { // 5. 侦听器
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
}
{
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
  { // 
    /* 
      代码：
          
      说明：
          1. 
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
}

{ // 暂时未统计
  { // 修饰符
    /* 
      代码：
          .prevent 
            -> <form v-on:submit.prevent="onSubmit">...</form>
            -> 告诉 v-on 指令对于触发的事件调用 event.preventDefault()

      说明：
          1. 修饰符 (modifier) 是以半角句号 . 指明的特殊后缀
          2. 修饰符用于指出一个指令应该以特殊方式绑定

      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }

}

{ // 
  /* 
    代码：
        
    说明：
        1. 
    例：
        <div id="root">

        </div>
        <script>
          var vm = new Vue({
            el: '#root'
          })
        </script>
  */
}

{ // es6

  /* 
    1. { ComponentA }
      在 ES2015+ 中，在对象中放一个类似 ComponentA 的变量名其实是 ComponentA: ComponentA 的缩写，即这个变量名同时是
        1.用在模板中的自定义元素的名称
        2.包含了这个组件选项的变量名
   */
}

{ // 动画
  
  { // 过渡 transition
    /* 
      代码：
          
      说明：
          1. 封装组件，可以给任何元素和组件添加进入/离开过渡
      数据处理过程：
        1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
        2.如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
        3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
      例：
          <div id="root">
  
          </div>
          <script>
            var vm = new Vue({
              el: '#root'
            })
          </script>
    */
  }
}

/* 



魂牵梦萦fdsfdsaf


*/