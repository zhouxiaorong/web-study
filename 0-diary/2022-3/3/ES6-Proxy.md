# ES6 Proxy
  > Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。  
  > Proxy不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。

## 目录
  - [定义](#定义)

  - [基本用法说明](#基本用法说明)

  - [this问题](#this问题)

  - [Proxy.revocable()：返回一个可取消的*Proxy实例*](#proxyrevocable返回一个可取消的proxy实例)

  - [Proxy handler 拦截](#handler)

  - [this问题](#this问题)

  - [实例：Web服务的客户端](#实例web服务的客户端)


## 定义
  ```js
    var target = {}
    var handler = {
      get: function (target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver);
      },
      set: function (target, propKey, value, receiver) {
        return Reflect.set(target, propKey, value, receiver);
      }
    }
    var proxy = new Proxy(target, handler);
  ```


  [⬆️ 返回顶部](#目录)
  
## 基本用法说明
  - 添加、读取属性
    ```js
      let target = {
        name: 'Tom',
        age: 24
      }
      let handler = {
        get: function (target, key) {
          console.log('getting ' + key);
          return target[key]; // 不是target.key
        },
        set: function (target, key, value) {
          console.log('setting ' + key);
          target[key] = value;
        }
      }
      let proxy = new Proxy(target, handler);
      console.log(proxy.name);// Tom(实际执行 handler.get)
      proxy.name = 'zxr'; // 实际执行 handler.set handler.get
      console.log(proxy.name);// zxr(值已改变；实际执行 handler.get)
    ```
  - `target`可以为空对象
    ```js
      let targetEpt = {}
      let handler = {
        get: function (target, key) {
          console.log('getting ' + key);
          return target[key]; // 不是target.key
        },
        set: function (target, key, value) {
          console.log('setting ' + key);
          target[key] = value;
        }
      }
      let proxyEpt = new Proxy(targetEpt, handler)
      console.log(proxyEpt.name);// undefined (调用 get 方法，此时目标对象为空，没有 name 属性)
      proxyEpt.name = 'zxr';
      console.log(proxyEpt.name);// zxr
    ```
  - `handler`对象也可以为空（相当于不设置拦截操作，直接访问目标对象）
    ```js
      let targetEmpty = {}
      let proxyEmpty = new Proxy(targetEmpty,{})
      proxyEmpty.name = "zxr"
      console.log(proxyEmpty.name); // zxr 
    ```
  - 目标对象与代理对象会互相影响（通过构造函数新建实例时其实是对目标对象进行了浅拷贝）
    ```js
      let targetEmpty = {
        name: 'zxr'
      }
      let proxyEmpty = new Proxy(targetEmpty, {})
      proxyEmpty.name = "Mia";
      console.log(proxyEmpty.name);// Mia
      console.log(targetEmpty);// { name: 'Mia' }
    ```


  [⬆️ 返回顶部](#目录)
  
## this问题
  > 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
  > 主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。

  - Proxy不做任何拦截时，Proxy、target执行方法会返回不一样的结果（*Proxy*代理*target*之后，*target*方法内部的指向*Proxy*，而不是*target*）
    ```js
      const target = {
        m: function () {
          console.log(this === proxy);
        }
      };
      const proxy = new Proxy(target, {});
      target.m() // false
      proxy.m()  // true
    ```
  - 由于 this 指向的变化，导致 Proxy 无法代理目标对象。
    ```js
      const _name = new WeakMap();

      class Person {
        constructor(name) {
          _name.set(this, name);
        }
        get name() {
          return _name.get(this);
        }
      }

      // 目标对象 jane 的 name 属性，实际保存在外部WeakMap对象_name上面，通过this键区分。
      const jane = new Person('Jane');
      jane.name // 'Jane'

      // 由于通过 proxy.name 访问时， this 指向 proxy ，导致无法取到值，所以返回 undefined。
      const proxy = new Proxy(jane, {});
      proxy.name // undefined
    ```
  - 原生对象this问题
    - 有些原生对象的内部属性，只有通过正确的this才能拿到，所以Proxy也无法代理这些原生对象的属性。
      ```js
        const target = new Date();
        const handler = {};
        const proxy = new Proxy(target, handler);

        // getDate()方法只能在Date对象实例上面拿到，如果this不是Date对象实例就会报错。
        proxy.getDate(); // TypeError: this is not a Date object.
      ```
    - this绑定原始对象
      ```js
        const target = new Date('2015-01-01');
        const handler = {
          get(target, prop) {
            if (prop === 'getDate') {
              return target.getDate.bind(target);
            }
            return Reflect.get(target, prop);
          }
        };
        const proxy = new Proxy(target, handler);

        proxy.getDate() // 1
      ```
  - Proxy拦截函数内部的this，指向的是handler对象。 
    ```js
      const handler = {
        get: function (target, key, receiver) {
          console.log('handler get', ' this === handler:' + (this === handler));
          return 'Hello, ' + key;
        },
        set: function (target, key, value) {
          console.log('handler set', ' this === handler:' + (this === handler));
          target[key] = value;
          return true;
        }
      };
      const proxy = new Proxy({}, handler);

      // 输出: handler get  this === handler:true
      // 输出: Hello, foo
      console.log(proxy.foo);

      // 输出: handler set  this === handler:true
      proxy.foo = 1
    ```


  [⬆️ 返回顶部](#目录)
  
## `Proxy.revocable()`:返回一个可取消的*Proxy*实例
- `Proxy.revocable()`：返回一个可取消的*Proxy*实例
  - 功能 
    - Proxy.revocable()方法返回一个对象，该对象的*proxy*属性是**Proxy实例**，*revoke*属性是**一个函数，可以取消Proxy实例**。
  - 使用场景: 目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问
  - 例
    ```js
      let target = {};
      let handler = {};
      let {proxy, revoke} = Proxy.revocable(target, handler);

      console.log(proxy.foo); // undefined
      proxy.foo = 123;
      console.log(proxy.foo); // 123

      // 当执行revoke函数之后，再访问Proxy实例，就会抛出一个错误
      revoke();
      // console.log(proxy); // TypeError: Cannot read property 'Symbol(nodejs.util.inspect.custom)' of null
      console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
    ```




  [⬆️ 返回顶部](#目录)
  
## handler
### `get(target, propKey, receiver)`:拦截对象属性的读取，比如*proxy.foo*和*proxy[propKey]*  
  
  - 用于*target*对象上*propKey*的读取操作。
    ```js
      let exam ={
        name: "zxr",
        age: 24
      }
      let proxy = new Proxy(exam, {
      get(target, propKey, receiver) {
        console.log('Getting ' + propKey);
        return target[propKey];
      }
      })
      console.log(proxy.name);
      // Getting name
      // "zxr"
    ```
  
  - `get`方法可以继承。
    ```js
      let proxy = new Proxy({}, {
        get(target, propKey, receiver) {
            // 实现私有属性读取保护
            if(propKey[0] === '_'){
                throw new Erro(`Invalid attempt to get private     "${propKey}"`);
            }
            console.log('Getting ' + propKey);
            return target[propKey];
        }
      });
      let obj = Object.create(proxy);
      console.log(obj.name);// Getting name
    ```

  [⬆️ 返回顶部](#目录)
  
### `set(target, propKey, value, receiver)`:拦截对象属性的设置，返回一个布尔值，比如*proxy.foo = v*或*proxy[propKey] = v*
 
  - 如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用。
  
  - 用于拦截 `target` 对象上的 `propKey` 的赋值操作。
    ```js
      let handler = {
        set: function(obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                    throw new RangeError('The age seems invalid');
                }
            }
            // 对于满足条件的 age 属性以及其他属性，直接保存
            obj[prop] = value;
        }
      };
      let proxy= new Proxy({}, handler)
      proxy.age = 100;
      console.log(proxy.age)// 输出: 100
      proxy.age = 'oppps' // 报错: TypeError: The age is not an integer
      proxy.age = 300     // 报错: RangeError: The age seems invalid
    ```
  
  - receiver: 表示原始操作行为所在对象，一般是 Proxy 实例本身
    ```js
      const handler = {
        set: function(obj, prop, value, receiver) {
            obj[prop] = receiver;
        }
      };
      const proxy = new Proxy({}, handler);
      proxy.name= 'Tom';
      proxy.name=== proxy // true

      const exam = {}
      Object.setPrototypeOf(exam, proxy)
      exam.name = "Tom"
      exam.name === exam // true
    ```
  
  - 严格模式下，set代理如果没有返回true，就会报错。

  [⬆️ 返回顶部](#目录)
  
### `construct(target, args, newTarget)`:拦截 *Proxy* 实例作为构造函数调用的操作，比如*new proxy(...args)`
  
  - 用于拦截 *new* 命令。返回值必须为对象。
    ```js
      let handler = {
          construct: function (target, args, newTarget) {
              console.log('handle construct')
              return Reflect.construct(target, args, newTarget)  
          }
      }
      class Exam { 
          constructor (name) {  
            console.log('Exam construct')
            this.name = name 
          }
      }
      let ExamProxy = new Proxy(Exam, handler)
      let proxyObj = new ExamProxy('zxr')
      console.log(proxyObj)
      // handle construct
      // Exam construct
      // exam {name: "zxr"}
    ```

  [⬆️ 返回顶部](#目录)
  
### `apply(target, ctx, args)`:拦截*Proxy*实例作为函数调用的操作，比如*proxy(...args)*、*proxy.call(object, ...args)*、*proxy.apply(...)*
 
  - 用于拦截函数的*调用*、*call*和*reply*操作。
  - `target`: 表示目标对象
  - `ctx`: 表示目标对象上下文 
  - `args`: 表示目标对象的参数数组。
  
  - 例
    ```js
      function sub(a, b){
          return a - b;
      }
      let handler = {
          apply: function(target, ctx, args){
              console.log('handle apply');
              return Reflect.apply(...arguments);
          }
      }
      let proxy = new Proxy(sub, handler)
      proxy(2, 1) 
      // handle apply
      // 1
    ```

  [⬆️ 返回顶部](#目录)
  
### `has(target, propKey)`:拦截*propKey in proxy*的操作，返回一个布尔值。
  
  - 用于拦截 *HasProperty* 操作；即在判断 *target* 对象是否存在 *propKey* 属性时，会被这个方法拦截
  
  - 此方法不判断一个属性是对象自身的属性，还是继承的属性
    ```js
      let  handler = {
          has: function(target, propKey){
              console.log("handle has");
              return ;
          }
      }
      let exam = {name: "Tom"}
      let proxy = new Proxy(exam, handler)
      console.log('name' in proxy);
      // handle has
      // true
    ```
  
  - 此方法不拦截 for ... in 循环。 
    ```js
      let  handler = {
          has: function(target, propKey){
              console.log("handle has");
              return propKey in target;
          }
      }
      let exam = {name: "Tom", age: 16}
      let proxy = new Proxy(exam, handler)
      for (p in proxy) {
        console.log(p);
      }
      // name
      // age
    ```

  [⬆️ 返回顶部](#目录)
  
### `deleteProperty(target, propKey)`:拦截*delete proxy[propKey]*的操作，返回一个布尔值。
 
  - 目标对象自身的不可配置（configurable）的属性，不能被`deleteProperty`方法删除，否则报错。
  
  - 返回值没有任何意义，必须要在*deleteProperty*拦截方法里再添加一个`delete target[propKey];`操作才能删除属性
    ```js
      var target = {
        name: 'zxr',
        age: 18
      }
      let handler = {
        deleteProperty: function (target, propKey) {
          console.log('handler deleteProperty:', propKey);
          if (propKey != 'name') {
            delete target[propKey];
          }
          return true;
        }
      }
      let proxy = new Proxy(target, handler);
      console.log(proxy); // { name: 'zxr', age: 18 }
      delete proxy.name; // handler deleteProperty: name
      console.log(proxy); // { name: 'zxr', age: 18 }
      delete proxy.age; // handler deleteProperty: age
      console.log(proxy); // { name: 'zxr' }
    ```
  
  - 如果这个方法**抛出错误**，`propKey`属性就无法被 `delete` 命令删除。
    ```js
      var target = {
        name: 'zxr',
        _age: 18
      }
      let handler = {
        deleteProperty: function (target, propKey) {
          console.log('handler deleteProperty:', propKey);
            if (propKey[0] === '_') {
              throw new Error(`Invalid attempt to delete private "${propKey}" property`);
            }
            return false;
        }
      }
      let proxy = new Proxy(target, handler);
      console.log(proxy); // { name: 'zxr', _age: 18 }
      delete proxy.name; // handler deleteProperty: name
      console.log(proxy); // { _age: 18 }
      delete proxy._age; // handler deleteProperty: _age
      console.log(proxy); // Error: Invalid attempt to delete private "_age" property
    ```

  [⬆️ 返回顶部](#目录)
  
### `defineProperty(target, propKey, propDesc)`:拦截*Object.defineProperty(proxy, propKey, propDesc)*、*Object.defineProperties(proxy, propDescs)*，返回一个布尔值。
 
  - 若目标对象不可扩展，增加目标对象上不存在的属性会报错；若属性不可写或不可配置，则不能改变这些属性  。
 
  - `defineProperty`中若不添加属性,则属性不会被添加到目标对象中  
    ```js
      let handler = {
        defineProperty: function (target, propKey, propDesc) {
          console.log("handle defineProperty");
          return true;
        }
      }
      let target = {}
      let proxy = new Proxy(target, handler)
      proxy.name = "zxr"; // handle defineProperty
      console.log(target); // {}
    ```


  - `defineProperty`返回值； 直接赋值：没有任何意义  Object.defineProperty：`return false`时会报错  
    ```js
      let handler = {
        defineProperty: function (target, propKey, propDesc) {
          console.log("handle defineProperty");
          target[propKey] = propDesc.value;
          return false;
        }
      }
      let target = {}
      let proxy = new Proxy(target, handler)
      proxy.name = "zxr"; // handle defineProperty
      console.log(target); // { name: 'zxr' }
      // handle defineProperty
      // TypeError: 'defineProperty' on proxy: trap returned falsish for property 'name'
      Object.defineProperty(proxy, "name", { value: "zxr" })
      console.log(target);
    ```
  
  - `defineProperty`和`set`同时存在时；直接赋值：不会被`defineProperty`拦截  Object.defineProperty：会被`defineProperty`拦截  
    ```js
      let handler = {
        set: function(obj, prop, value) {
          console.log("handle set");
            obj[prop] = value;
        },
        defineProperty: function (target, propKey, propDesc) {
          console.log("handle defineProperty");
          target[propKey] = propDesc.value;
          return true;
        }
      }
      let target = {}
      let proxy = new Proxy(target, handler)
      proxy.name = "zxr"; // handle set
      console.log(target); // { name: 'zxr' }
      Object.defineProperty(proxy, "age", { value: "18" }) // handle defineProperty
      console.log(target); // { name: 'zxr', age: '18' }
    ```
 
  - 注意
    - 如果目标对象不可扩展（non-extensible），则defineProperty()不能增加目标对象上不存在的属性，否则会报错。
    - 如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty()方法不得改变这两个设置。

  [⬆️ 返回顶部](#目录)
  
### `ownKeys(target)`：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果包括目标对象自身的可遍历属性。

  [⬆️ 返回顶部](#目录)
  
### `getOwnPropertyDescriptor(target, propKey)`：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

  [⬆️ 返回顶部](#目录)
  
### `preventExtensions(target)`：拦截Object.preventExtensions(proxy)，返回一个布尔值。

  [⬆️ 返回顶部](#目录)
  
### `getPrototypeOf(target)`：拦截Object.getPrototypeOf(proxy)，返回一个对象。

  [⬆️ 返回顶部](#目录)
  
### `isExtensible(target)`：拦截Object.isExtensible(proxy)，返回一个布尔值。

  [⬆️ 返回顶部](#目录)
  
### `setPrototypeOf(target, proto)`：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

  [⬆️ 返回顶部](#目录)
  
## 实例：Web服务的客户端

  [⬆️ 返回顶部](#目录)
  