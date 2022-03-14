# 自定义指令
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
