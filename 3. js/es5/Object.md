# Object 

## Object.assign()

  - 语法  
    Object.assign(target, ...sources)
  - 参数  
    target: 目标对象。  
    sources: 一个或多个源对象  
    返回值: 目标对象。  
  - 功能说明
    - 用于将所有可枚举属性的值从一个或多个源对象分配到目标对象
  - 注意事项
    - 合并具有相同属性的对象时，如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
      ```js
        let obj1 = { a: 1, b: 2 }
        let obj2 = { b: 3, c: 4 }
        let obj3 = Object.assign(obj1, obj2);
        console.log(obj1); // { a: 1, b: 3, c: 4 }
        console.log(obj2); // { b: 3, c: 4 }
        console.log(obj3); // { a: 1, b: 3, c: 4 }
      ```
    - 继承属性和不可枚举属性是不能拷贝的
      ```js
        const obj = Object.create({foo: 1}, { // foo 是个继承属性。
            bar: {
                value: 2  // bar 是个不可枚举属性。
            },
            baz: {
                value: 3,
                enumerable: true  // baz 是个自身可枚举属性。
            }
        });

        const copy = Object.assign({}, obj);
        console.log(copy); // { baz: 3 }
      ```
    - 原始类型会被包装为对象
      ```js
        const v1 = "abc";
        const v2 = true;
        const v3 = 10;
        const v4 = Symbol("foo")

        const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
        // 原始类型会被包装，null 和 undefined 会被忽略。
        // 注意，只有字符串的包装对象才可能有自身可枚举属性。
        console.log(obj); // { "0": "a", "1": "b", "2": "c" }
      ```
    - 异常会打断后续拷贝任务
      ```js
        // target 的 foo 属性是个只读属性。
        const target = Object.defineProperty({}, "foo", {
          value: 1,
          writable: false
        });
        try {
          // TypeError: "foo" is read-only （注意这个异常是在拷贝第二个源对象的第二个属性时发生的。）
          Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4}); 
        } catch (e) {
          console.log(e);
        }
        console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
        console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
        console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
        console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
        console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
      ```
  - 例
    - 复制一个对象
      ```js
        const obj = { a: 1 };
        const copy = Object.assign({}, obj);
        console.log(copy); // { a: 1 }
      ```
    - 合并对象
      ```js
        let obj1 = { a: 1, b: 2 }
        let obj2 = { c: 3, d: 4 }
        let obj3 = Object.assign(obj1, obj2);
        console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }
        console.log(obj2); // { b: 3, c: 4 }
        console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
        console.log(obj1 == obj3); // true
      ```
  

  [⬆️ 返回顶部](#目录)

## Object.create()
  - 语法  
    Object.create(proto，[propertiesObject])
  - 参数  
    *proto*: 新创建对象的原型对象。
    *propertiesObject*: 可选。需要传入一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数。如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。
    *返回值*:   一个新对象，带着指定的原型对象和属性。
  - 功能说明
    - 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
  - 注意事项
    - 如果proto参数不是 null 或非原始包装对象，则抛出一个 TypeError 异常。
  - 例

  [⬆️ 返回顶部](#目录)

## Object.defineProperties()
  - 语法  
    Object.defineProperties(obj, props)
  - 参数  
    **: 
    - *obj*: 要定义或修改属性的对象
    - *props*: 要新增或修改的属性对象集合。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符
      - *value*: 与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。默认为 **undefined**
      - *configurable*: 表示能否通过delete删除此属性，能否修改属性的特性，或能否修改把属性修改为访问器属性；默认为 **false**;
      - *enumerable*: 表示该属性是否可枚举；即是否可以通过**for-in**循环或**Object.keys()**返回属性
      - *writable*: 表示能否修改属性的值；默认为 **false**; 
    - *get*: 默认为 undefined；作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
    
    - *set*: 默认为 undefined；作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。

    - *返回值*: 被传递给函数的对象

  - 功能说明
    - 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
  - 注意事项
    - 当Object.defineProperties()方法同时定义或修改多个属性的时候，如果发生错误，那么发生错误之前定义或修改的属性还是会生效，而发出错误所在行及之后的属性不会生效。

  - 例
    - 同时定义多个属性
      ```js
        var obj = Object.defineProperties({}, {
          x: { value: 1, writable: true, enumerable: true, configurable: true }, 
          y: { value: 1, writable: true, enumerable: false, configurable: false }, 
          r: { enumerable: true, configurable: true, 
              get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              }
            }
        });
        console.log(obj.x); // 1
        console.log(obj.y); // 1
        console.log(obj.r); // 1.4142135623730951
      ```
    - 当出现冲突的时候，错误后续的属性不生效，错误发生前的属性生效
      ```js
        let obj = {}
        try {
          // 首先定义一个不可配置的属性a
          Object.defineProperty(obj, 'a', {value: '1', writable: false})
          // 新增属性b和c，同时修改已有属性a
          Object.defineProperties(obj, {
            b: { value: '2', writable: true },
            a: { value: '3', writable: true },// 这里会触发TypeError，因为a已经是不可配置的属性，无法重新配置
            c: { value: '4', writable: true }
          })
        } catch (e) {
          console.log(e); // TypeError: Cannot redefine property: a
        } finally {
          console.log(obj.a); // 1
          console.log(obj.b); // 2
          console.log(obj.c); // undefined
        }
      ```


  [⬆️ 返回顶部](#目录)

## Object.defineProperty()

  - 语法  
    Object.defineProperty(obj, prop, descriptor)
  - 参数  
    - *obj*: 要定义或修改属性的对象
    - *prop*: 属性字符串名
    - *descriptor*: 属性描述符对象
      - *value*: 属性对应的值。可以是任意有效的JavaScript值。默认为undefined。
      - *configurable*: 可配置性。当该特性为true时，属性描述符可以被修改，属性可以被删除。默认为false。
      - *enumerable*: 可枚举性。当该特性为true时，属性可以出现在对象的枚举属性中。默认为false。
      - *writable*: 可写性。当该特性为true时，属性的值可以被赋值运算符改变。默认为false。
      - *get*: 一个给属性提供getter的方法。如果没有getter则默认为undefined，属性将不可读。
      - *set*: 一个给属性提供setter的方法。如果没有setter则默认为undefined，属性将不可以修改。
    - 属性描述符: 对象的属性的属性描述符主要有两种形式
      1. 数据描述符: 是一个具有值的属性。键值：value、configurable、enumerable、writable
      2. 存取描述符: 是由getter和setter函数描述的属性。键值：configurable、enumerable、get、set
    - 返回值：被传递给函数的对象
  - 功能说明
    - 如果一个属性描述符不具有value、writable、set和get的任意一个关键字，则认为是一个数据描述符。
  - 与通过表达式直接创建的数据属性对比
    - 通过Object.defineProperty()方法定义的数据属性，如果没有指定writable、enumerable、configurable特性，则这三个特性默认为false。
    - 通过表达式直接创建的属性，默认是数据属性，且writable、enumerable、configurable特性，则这三个特性默认为true。
  - 例
    - 定义一个数据属性（通过表达式直接创建、通过Object.defineProperty()方法定义）
      ```js
        // 通过Object.defineProperty()方法定义
        var obj = Object.defineProperty({}, 'a', {
          value: 1
        });
        console.log(Object.getOwnPropertyDescriptor(obj, 'a')); // { value: 1, writable: false, enumerable: false, configurable: false }

        // 通过表达式直接创建
        obj.b = 2;
        console.log(Object.getOwnPropertyDescriptor(obj, 'b')); // { value: 2, writable: true, enumerable: true, configurable: true }
      ```
    - 定义一个存取属性
      ```js
        var obj = { x: 1 };
        // 通过Object.defineProperty()方法定义的存取属性，如果没有指定enumerable、configurable特性，则这两个特性默认为false。
        Object.defineProperty(obj, 'a', {
            get: function () { return this.x;},
            set: function (val) { this.x = val;}
        });
        Object.getOwnPropertyDescriptor(obj, 'a'); // {get: ƒ, set: ƒ, enumerable: false, configurable: false}
        
      ```

  [⬆️ 返回顶部](#目录)

## 
  - 语法  
    
  - 参数  
    **: 
  - 功能说明
    - 
  - 注意事项
    - 
  - 例
    - 
      ```


  [⬆️ 返回顶部](#目录)
