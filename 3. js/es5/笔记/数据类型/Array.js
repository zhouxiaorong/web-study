/************** 数组原型方法 **************/
{
  /** 注意点
   * 1. 所有数组实例上的方法，参数是从索引`start`到索引`end`的，都是包含`start`不包含`end`的（顾头不顾尾）
   */

  /** 不会改变原数组
   * 获取数组信息
        length() 获取或设置数组的长度
   * 判断数据是否存在
        find((value, index, obj) => {}){// 先遍历数组，一旦参数函数返回true，就停止查找，返回当前项 item
        includes(searchElement, fromIndex)// 判断数组中有没有某一个元素 确定数组是否包含某个元素 boolean
        every(item,index,array => {})// 检测数组所有元素是否全都符合指定条件 boolean
        some(item,index,array => {})// 检测数组中的元素是否有满足指定条件的 boolean
   * 查找元素索引
        findIndex((value, index, obj) => {}){// 先遍历数组，一旦参数函数返回true，就停止查找返回当前项的索引
        indexOf(value, index){// 返回数组中指定值第一次出现时的索引
        lastIndexOf(value, index){// 返回数组中指定值最后一次出现的索引
   * 转换为字符串
        join(separator)// 指定分隔符将数组合并成字符，separator: 分隔符
        toLocaleString()// 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
        toString()// 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
   * 组合多个数组
        concat(...items) 组合多个数组
   * 截取数组
        slice(start, end)// 截取数组的一部分，返回一个新数组
   * 数组的每个调用回调函数后，返回新数组
        map((value, index, array) => {})// ie9+  对数组的每个元素调用已定义的回调函数，并返回包含结果的数组。
   * 循环等
        keys() 遍历每一项索引的接口，使用for of遍历
        values() 返回数组中的值的iterable
        entries()// 返回数组中每个项的键、值对的iterable
        forEach()// 对数组中的每个元素执行指定的操作
   * 过滤
        filter((a,b) => { return boolean})// 过滤数组，根据返回值去过滤原数组   true留下当前项，false不留下当前项
        reduce((prev, cur, index, arr) => {}, init)// 迭代 为数组中的所有元素调用指定的回调函数
        reduceRight(){// 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积结果，并在下次调用回调函数时作为参数提供。
   */
  function compute() {
    /** 迭代  接收一个函数作为累加器，数组中的每个值（升序，从左到右）开始缩减，最终计算为一个值
     * @syntax reduce((total, cur, index, arr) => {}, init)
     * @param callbackfn 为数组中的所有元素调用指定的回调函数
     * @param total 初始值（init / 原数组的第一个元素）或者上一次调用回调计算后的返回值
     * @param cur 当前元素
     * @param index 当前元素的索引
     * @param arr 原数组
     * @param init 传递给函数用作累积的初始值。
     * @result 计算结果
     * 说明
     *    1. 未设置`init`初始值时，默认把原数组第一个元素当作初始值，回调函数从索引`1`开始循环计算
     *    2. 如果指定了`init`初始值，回调函数从索引`0`开始循环计算
     *    3. 回调函数的返回值是累加的结果，在下次调用回调函数时作为参数`total`的值提供
     */
    var reduce = () => {
      var arr = [1, 2, 3, 4, 5, 6]
      // 求和（没有设置初始值，初始值默认为数组的第一个数`1`，循环从第二个数`2`开始循环）
      console.log(arr.reduce((total, cur) => total + cur)) // 21
      // 求和（有设置初始值，循环从第一个数`1`开始循环）
      console.log(arr.reduce((total, cur) => total + cur, 0)); // 21
      
      // 对象里的属性计算价格（必须设置初始值，因为不设置初始值时默认数组第一位元素是初始值，而这里数组第一位数不是`number`类型，计算会报错）
      var arr2 = [{price: 33, count: 2},{price:45, count: 2},{price: 45, count: 1},{price: 54, count: 2}]
      console.log(arr2.reduce((a, b, c, d) => {
        return a + b.price * b.count
      }, 0));
      

      // 在除第一个元素外的元素前加指定分隔符合并成字符串
      var arr3 = ['aa', 'bb', 'cc', 'dd'];
      // 默认第一个元素为初始值，从第二个元素开始循环计算，不必判断下标
      console.log(arr3.reduce((a, b, c, d) => a + ' | ' + b));
      // 有初始值，从第一个元素开始循环计算，必须判断下标
      console.log(arr3.reduce((a, b, c, d) => {
        return a + ( c == 0 ? b : ' | ' + b)
      }, ''));
      
      // 计算数组中每个元素出现的次数
      let arr5 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
      console.log(arr5.reduce((pre, cur)=>{
        if(cur in pre){
            pre[cur]++
        }else{
            pre[cur] = 1 
        }
        return pre
      }, {})); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
      
      // 数组去重
      let arr6 = [1,2,3,4,4,1];
      console.log(arr6.reduce((pre, cur) => !pre.includes(cur) ? pre.concat(cur) : pre,[])); // [1, 2, 3, 4]
      
      // 将二维数组转化为一维
      let arr7 = [[0, 1], [2, 3], [4, 5]]
      console.log(arr7.reduce((pre, cur) => pre.concat(cur))); // [0, 1, 2, 3, 4, 5]
      
      // 将多维数组转化为一维
      let arr4 = [[0, 1], [2, 3], [4,[5,6,7]]]
      const newArr3 = function(arr4){
          return arr4.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr3(cur):cur),[])
      }
      console.log(newArr3(arr4)); //[0, 1, 2, 3, 4, 5, 6, 7]
    }
    // reduce()

    /** 迭代  接收一个函数作为累加器，数组中的每个值（降序，从右到左）开始缩减，最终计算为一个值
     * @syntax reduceRight((total, cur, index, arr) => {}, init)
     * @param callbackfn 为数组中的所有元素调用指定的回调函数
     * @param total 初始值（init / 原数组的第一个元素）或者上一次调用回调计算后的返回值
     * @param cur 当前元素
     * @param index 当前元素的索引
     * @param arr 原数组
     * @param init 传递给函数用作累积的初始值。
     * @result 计算结果
     * 说明
     *    1. 未设置`init`初始值时，默认把原数组第一个元素当作初始值，回调函数从索引`1`开始循环计算
     *    2. 如果指定了`init`初始值，回调函数从索引`0`开始循环计算
     *    3. 回调函数的返回值是累加的结果，在下次调用回调函数时作为参数`total`的值提供
     */
    var reduceRight = () => {
      var arr = [0,1,2,3,4];
      console.log(arr.reduceRight((total, cur) => total + cur));// 10
      console.log(arr.reduceRight((total, cur) => total + cur, 6));// 16
    }
    // reduceRight()

    /** ES6: 返回数组中第一个符合条件的元素的值
     *  value find((value, index, obj) => {})
     *  @param function(cur, index, arr) 必需。数组每个元素需要执行的函数
     *  @param cur 必需。当前元素
     *  @param index 可选。当前元素的索引值
     *  @param arr 可选。当前元素所属的数组对象
     *  @param thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
     *  @result 函数第一次返回`true`的元素 / undefined
     *  说明
     *    1. 先按升序遍历数组，一旦参数函数返回`true`，就停止查找，返回当前元素
     *    3. 如果没有符合条件的元素（所有元素都返回`false`，则返回`undefined`。
     */
    var find = () => {
      var arr = ['中国', {}, '1', 2, 3, 4];
      // 查找数组中第一个数字的值
      let a = arr.find(item => typeof item === 'number');
      console.log(a);// 2
      // 查找数组中第一个字符串的值
      console.log(arr.find(item => typeof item === 'string')); // 中国
      // 查找数组中第一个数组的值
      console.log(arr.find(item => typeof item === 'array'));// undefined

      // 不会改变原数组
      console.log(arr); // ['中国', {}, '1', 2, 3, 4];
    }
    // find()

    /** ES6 判断数组中有没有某一个元素
     *  boolean includes(search, index)
     *  @param search 要搜索的元素
     *  @param index 开始查找的位置索引
     *  @result boolean, true: 有, false: 没有
     *  说明
     *    1. `search`未设置时，默认搜索空值`undefined`
     *    2. `index`未设置时，默认从所有元素中查找判断
     */
    var includes = () => {
      var arr = ['a', 'b', 'c', 'a', 'b', 'c',];
      // `index`未设置时，默认搜索所有元素
      console.log(arr.includes('a'))// true
      // 从索引`2`开始查找判断
      console.log(arr.includes('a', 2))// true
      // 从索引`4`开始查找判断
      console.log(arr.includes('a', 4))// false
      // 从所有元素中搜索元素`d`
      console.log(arr.includes('d'))// false
      // 查找空值时可以不设置搜索元素
      console.log(arr.includes());// true
      // 查找空值时可以设置`undefined`
      console.log(arr.includes(undefined));// true

      // 不会改变原数组
      console.log(arr); // ['a', 'b', 'c', 'a', 'b', 'c',]
    }
    // includes()
    
    /** ES6 检测数组所有元素是否全都符合指定条件
     *  boolean every(item,index,array => {})
     *  @param function(cur, index, arr) 必需。数组每个元素需要执行的函数
     *  @param cur 必需。当前元素
     *  @param index 可选。当前元素的索引值
     *  @param arr 可选。当前元素所属的数组对象
     *  @result boolean，true: 全都符合条件，false: 有不符合条件的元素
     * 说明
     *    1. 如果所有元素都满足条件，则返回 true
     *    2. 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
     *    3. 不会对空数组进行检测
     *    4. 不会改变原始数组
     *    5. 使用指定函数检测数组中的所有元素
     */
    var every = () => {
      var arr1 = [1, 2, 3];
      // 判断数组中的元素是否都是`number`类型
      console.log(arr1.every(item => typeof item === 'number'));// true
      // 判断数组中的元素是否都是`3`
      console.log(arr1.every(item => item == 3));// false

      var arr2 = Array(9).fill(3)
      // 判断数组中的元素是否都是`3`
      console.log(arr2.every(item => item == 3));// true

      // 不会改变原数组
      console.log(arr); // [1, 2, 3]
    }
    // every()

    /** ES6 检测数组中的元素是否有满足指定条件的
     *  boolean some(item,index,array => {}) 
     *  @param function(cur, index, arr) 必需。数组每个元素需要执行的函数
     *  @param cur 必需。当前元素
     *  @param index 可选。当前元素的索引值
     *  @param arr 可选。当前元素所属的数组对象
     *  @result boolean，true: 有符合条件的元素，false: 没有符合条件的元素
     *  说明
     *    1. 如果有一个元素满足条件，则表达式返回`true` , 剩余的元素不会再执行检测。
     *    2. 如果没有满足条件的元素，则返回false。
     *    3. 不会对空数组进行检测。
     *    4. 不会改变原始数组。
     */
    var some = () => {
      var arr = [1,2,3,'a','b'];
      // 判断数组中是否包含元素`3`
      console.log(arr.some(item => item == 3));// true
      // 判断数组中是否包含元素`3`
      console.log(arr.some(item => item == 6));// false
      // 判断数组中是否包含`number`类型元素
      console.log(arr.some(item => typeof item === 'number'));// true
      // 判断数组中是否包含`string`类型元素
      console.log(arr.some(item => typeof item === 'string'));// true

      // 不会改变原数组
      console.log(arr); // [ 1, 2, 3, 'a', 'b' ] 
    }
    // some()

    /** ES5 获取或设置数组的长度
     *  number length() 
     */
    var length = () => {
      let arr = [1,2,3,4,5,6,7,8];
      console.log(arr.length);// 8

      // 不会改变原数组
      console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
    }
    // length()
    
    /** ES6 number findIndex((value, index, obj) => {}) 
     * 按升序为数组的每个元素调用谓词一次，直到找到谓词返回true的元素为止。如果找到这样的元素，findIndex会立即返回该元素索引。否则，findIndex返回-1
     */
    /** ES6 查找第一个符合条件的元素的索引
     *  number findIndex((value, index, obj) => {}) 
     *  @param function(cur, index, arr) 必需。数组每个元素需要执行的函数
     *  @param cur 必需。当前元素
     *  @param index 可选。当前元素的索引值
     *  @param arr 可选。当前元素所属的数组对象
     *  @result 符合条件的元素的索引值
     *  说明
     *    1. 先遍历数组，一旦参数函数返回true，就停止查找返回当前项的索引
     *    2. 如果没有符合条件的元素，返回`-1`
     */
    var findIndex = () => {
      var arr = ['中国', {}, '1', 2, 3, 4];
      // 查找第一个`numer`类型元素的索引
      console.log(arr.findIndex(item => typeof item === 'number'));// 3
      // 查找第一个`array`类型元素的索引
      console.log(arr.findIndex(item => typeof item === 'array')); // -1

      // 不会改变原数组
      console.log(arr); // [ '中国', {}, '1', 2, 3, 4 ]
    }
    // findIndex()
        
    /** ES5 返回数组中指定值第一次出现时的索引
     *  number indexOf(search, index) 
     *  @param  search 要在数组中定位的值
     *  @param  index 开始搜索的数组索引
     *  说明
     *    1. 如果未设置`index`，则搜索从数组中的第一个索引开始
     *    2. 搜索从第一个/`index`元素开始，到最后一个元素结束
     */
    var indexOf = () => {
      var arr = [11,22,33,44,11,22,33,44];
      console.log(arr.indexOf(33));// 2
      console.log(arr.indexOf(33,3));// 6

      // 不会改变原数组
      console.log(arr); // [11, 22, 33, 44, 11, 22, 33, 44]
    }
    // indexOf()

    /** ES5 返回数组中指定值第一次出现时的索引
     *  number lastIndexOf(search, index) 
     *  @param  search 要在数组中定位的值
     *  @param  index 结束搜索的数组索引
     *  说明
     *    1. 如果未设置`index`，则搜索到最后一个元素结束
     *    2. 搜索从`index`/最后一个元素开始，到第一个元素结束
     */
    var lastIndexOf = () => {
      var arr = [11,22,33,44,11,22,33,44];
      console.log(arr.lastIndexOf(33));// 6
      console.log(arr.lastIndexOf(33, 3));// 2
      console.log(arr.lastIndexOf(33, arr.length));// 6
    }
    // lastIndexOf()

    /** ES5 指定分隔符将数组合并成字符
     *  string join(separator)
     *  @param separator 用于将结果字符串中的一个数组元素与下一个数组元素分隔开的字符串。如果省略，数组元素用逗号分隔
     */
    var join = () => {
      var ary = ['a', 'b', 'c'];
      console.log(ary.join('_')); // a_b_c
      console.log(ary.join()); // a,b,c
      console.log(ary);// ['a', 'b', 'c']
    }
    // join()

    /** ES5 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
     *  string toString() 
     */
    var toString = () => {
      var ary = [1,2,3];
      console.log(ary.toString()); // 1,2,3
      
      var num = 123456;
      console.log(num.toString());// 123456
      var date = new Date();
      console.log(date.toString());// Wed May 12 2021 00:10:11 GMT+0800 (GMT+08:00)
    }
    // toString()

    /** 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
     * string toLocaleString()
     */
    var toLocaleString = () => {
      var ary = [1,2,3];
      console.log(ary.toLocaleString());// 1,2,3
      
      var num = 123456;
      console.log(num.toLocaleString());// 123,456
      var date = new Date();
      console.log(date.toLocaleString());// 2021-5-12 0:11:52
    }
    // toLocaleString()

    /** ES6 遍历每一项索引的接口，使用for of遍历
     *
     */
    var keys = () => {
      var ary = ['a', 'b', 'c'];
      for(let key of ary.keys()){
        console.log(key);
      }
      //0
      //1
      //2
    }
    // keys()
    
    /** ES6 返回数组中的值的iterable
     *
     */
    var values = () => {
      var ary = ['a', 'b', 'c'];
      for(let value of ary.values()){
          console.log(value);
      }
      // a
      // b
      // c
      for(let value of ary){
          console.log(value);
      }
      // a
      // b
      // c
    }
    // values()

    /** ES6 返回数组中每个项的键、值对的iterable 
     *
     */
    var entries = () => {
      /**
       * 遍历接口 可以遍历到索引和每一项，每一次遍历得到一个数组[索引，当前项]
       * 一般可以通过数组的解构赋值获取到遍历的结果
       */
      var ary = ['a', 'b', 'c'];
      for(let [key, value] of ary.entries()){
          console.log(key+'_'+value);
      }
      // 0_a
      // 1_b
      // 2_c
    }
    // entries()

    /** ES6 对数组中的每个元素执行指定的操作
     *
     */
    var forEach = () => {
      var ary = ['a', 'b', 'c'];
      ary.forEach((value, index, array) => {
          // array: a,b,c
          console.log(index+'_'+value);
      });
      // 0_a
      // 1_b
      // 2_c
    }
    // forEach()
    
    /** ES5: 组合多个数组（返回一个新数组）
     *  Array arrayObject.concat(items,items, ...,items)
     * @param items Array/其他项: 必须，要添加到数组末尾的数据（数组对象/具体的值，任意多个）
     * @result 返回一个新的数组，该数组是通过把所有 items 参数添加到 arrayObject 中生成的
     * 说明
     *    1. concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
     *    2. 不修改任何现有数组
     *    3. 数组对象和具体的值可以同时存在
     *    4. 如果是多维数组，只把最外层的数组拆开，其他的内层数组不变
     */
     var concat = () => {
      var ary1 = [1, 2]
      var ary2 = [3, 4]
      var ary3 = [5, 6, [7, 8]]
      var ary4 = ary1.concat(ary2, ary3, 9)
      console.log(ary1) //[1, 2]
      console.log(ary2) //[3, 4]
      console.log(ary3) //[5, 6,[7, 8]]
      console.log(ary4) //[1, 2, 3, 4, 5, 6,[7, 8], 9]
    }
    // concat()

    /** ES5: 截取数组的一部分（切片，返回一个新数组）
     * Array arrayObject.slice(start, end)
     * @param start number: 数组指定部分的起始索引
     * @param end number: 数组指定部分的结束索引
     * @result 返回一个新的数组，包含从 `start` 到 `end` （不包括该元素）的 arrayObject 中的元素。
     * 说明
     *    1. 截取数组时，不包括索引`end`处的元素
     *    2. 如果`start`未定义，则默认起始索引为`0`
     *    3. 如果`end`未定义，则默认结束索引为数组的末尾
     *    4. `start`起始索引比数组长度大时，返回空数组
     *    5. `end`结束索引比数组长度大时，截取到数组的末尾
     *    6. 可以用`负数`索引来指示距`数组结尾`的偏移量`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
     */
    var slice = () => {
      var ary1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      console.log(ary1.slice(1, 3)) //[1, 2]
      console.log(ary1.slice()) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      console.log(ary1.slice(1)) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
      console.log(ary1.slice(20)) //[]
      console.log(ary1.slice(1, 20)) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
      console.log(ary1.slice(-3, -1)) //[7, 8]
    }
    // slice()

    /** 过滤，返回满足回调函数中指定条件的数组元素
     * Array arrayObject.filter(function(currentValue, index, array), thisValue)
     * @param function(currentValue, index, arr) 必须，数组中的每个元素都会执行这个函数
     * @param currentValue	函数参数，必须。当前元素的值
     * @param index	函数参数，可选。当前元素的索引值
     * @param arr	函数参数，可选。当前元素属于的数组对象
     * @param thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
     * @result 返回一个新的数组，包含了符合条件的所有元素。如果没有符合条件的元素则返回空数组。
     * 说明
     *    1. 不会对空数组进行检测
     *    2. 不会改变原始数组
     *    3. 根据回调函数返回值去过滤原数组，`true`留下当前项，`false`不留下当前项
     */
    var filter = () => {
      var arr = [16, 18, 33, 20, 16, 18, 33]
      var age = 18

      // 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
      console.log(arr.filter((value) => value >= age)) //[18, 33, 20, 24]
      console.log(
        arr.filter(function (value) {
          return value >= this
        }, age)
      ) //[18, 33, 20, 24]

      // 数组去重
      console.log(
        arr.filter((value, index, arr) => arr.indexOf(value) === index)
      ) //[16, 18, 33, 20]
      // 得到所有偶数
      console.log(arr.filter((value) => value % 2 === 0)) //[16, 18, 20, 16, 18]
      // 得到所有偶数并去重
      console.log(
        arr.filter(
          (value, index, arr) => value % 2 === 0 && arr.indexOf(value) === index
        )
      ) //[16, 18, 20]

      var ary1 = ['中国', 1, 2, 3, '中国']
      // 只留下数值类型数据
      console.log(ary1.filter((item) => typeof item === 'number')) //[1, 2, 3]
      //过滤掉 '中国'
      console.log(ary1.filter((item) => item != '中国')) //[1, 2, 3]
    }
    // filter()

    /** ie9+ 通过指定函数处理数组的每个元素，并返回处理后的数组
     * Array arrayObject.map(function(currentValue, index, array), thisValue)
     * @param function(currentValue, index, arr) 必须，数组中的每个元素都会执行这个函数
     * @param currentValue	函数参数，必须。当前元素的值
     * @param index	函数参数，可选。当前元素的索引值
     * @param arr	函数参数，可选。当前元素属于的数组对象
     * @param thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
     * @result 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
     * 说明
     *    1. 不修改任何现有数组
     *    1. 按照原始数组元素顺序依次处理元素
     *    2. 不会对空数组进行检测
     *    3. 不会改变原始数组
     */
    var map = () => {
      var arr = [4, 9, 16, 25, 36]
      // 返回一个数组，原始数组中每个元素都 * 10
      console.log(arr.map((item) => item * 10)) //[40, 90, 160, 250, 360]
      // 返回一个数组，数组中元素为原始数组的平方根
      console.log(arr.map(Math.sqrt)) //[2, 3, 4, 5, 6]
      console.log(arr) //[4, 9, 16, 25, 36]
      console.log(arr.map((v) => [v, v * 2])) //[[4, 8],[9, 18],[16, 32],[25, 50],[36, 72]]
    }
    // map()

    /** ES6 （IE不支持）以递回方式将指定深度的子阵列重新串接成为一新的阵列
     * Array arrayObject.flat(depth)
     * @param depth 最大递归深度，默认`1`
     * @result 返回一个新数组，其中所有子数组元素递归地连接到指定的深度。
     * 说明
     *    1. 递归深度默认`1`
     *    2. 函数会自动清除阵列中空的元素
     */
    var flat = () => {
      var arr = [1, 2, , , [3, 4, [5, 6, [7, 8]]]]
      // 递归深度默认`1`
      console.log(arr.flat()) //[1, 2, 3, 4,[5, 6,[7, 8]]]
      // 设置递归深度为`2`
      console.log(arr.flat(2)) //[1, 2, 3, 4, 5, 6,[7, 8]]
      // 函数会自动清除阵列中空的元素
      console.log(arr.flat(3)) //[1, 2, 3, 4, 5, 6, 7, 8]
    }
    // flat()

    /** ES6 （IE不支持）首先使用映射函数映射每个元素，然后将结果压缩成一个新数组
     * Array arrayObject.flatMap(value, index, array)
     * @param value 当前元素的值
     * @param index 当前元素的索引值
     * @param array 当前元素的数组对象
     * 说明
     *  1, 会忽略空的元素
     *  1. 它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
     */
    var flatMap = () => {
      var arr = [4, 9, 16]
      // 返回一个数组，原始数组中每个元素都 * 10
      console.log(arr.flatMap((v) => v * 2)) //[8, 18, 32]
      // 返回一个数组，数组中元素为原始数组的平方根
      console.log(arr.flatMap(Math.sqrt)) //[2, 3, 4]
      // 相当于执行`map()`方法然后对返回值组成的数组执行`flat()`方法
      console.log(arr.flatMap((v) => [v, v * 2])) //[4, 8, 9, 18, 16, 32]
      console.log(arr.map((v) => [v, v * 2]).flat(2)) //[4, 8, 9, 18, 16, 32]

      // 将原数组以空格拆分成新数组
      let arr1 = ["it's Sunny in", '', 'California']
      console.log(arr1.flatMap((x) => x.split(' '))) //["it's","Sunny","in", "", "California"]
    }
    // flatMap()
  }
  compute()

  /** 会改变原数组
   * 添加
        unshift(...items)// 在数组的开头插入新元素，并返回数组的新长度
        push(...items){// 向数组追加新元素，并返回数组的新长度
   * 删除
        shift()// 从数组中删除并返回第一个元素
        pop()// 从数组中删除并返回最后一个元素
   * 删除并添加
        splice(start, deleteCount, ...items)// 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素
   * 填充
        fill(value, start, end){// 按照指定字符填充数组，将数组的每一项都变成指定字符
   * 从原数组复制替换
        copyWithin(number, start, end){// 从原数组中读取内容，替换数组指定位置的内容
   * 反转
        reverse()// 反转数组中的元素
   * 排序
        sort((a, b) => a - b)// 对数组进行排序 
   */
  function update() {
    /** 按照指定字符填充数组，将数组的每一项都变成指定字符，返回``
     * arrayObject arrayObject.fill(value, start, end)
     * @param value 填充数组部分的值
     * @param start 开始填充数组的索引，默认值为`0`
     * @param end 索引以停止在处填充数组，默认值为数组的末尾
     * @return 在用`value`填充由`start`和`end`标识的节之后返回`this`对象
     * 说明
     *    1. 填充数组时，不包括索引`end`处的元素
     *    2. 如果`start`未定义，则默认起始索引为`0`
     *    3. 如果`end`未定义，则默认结束索引为数组的末尾
     *    4. `start`起始索引比数组长度大时，数组不作填充
     *    5. `end`结束索引比数组长度大时，填充到数组的末尾
     *    1. 可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
     */
    var fill = () => {
      let arr = [1, 2, 3, 4, 5, 6]

      // 填充数组时，不包括索引`end`处的元素
      console.log(arr.fill(11, 1, 4)) // [ 1, 11, 11, 11, 5, 6]
      // 会改变原数组
      console.log(arr) // [ 1, 11, 11, 11, 5, 6]

      // 如果`start`未定义，则默认起始索引为`0`
      console.log([1, 2, 3, 4, 5, 6].fill(11)) //[ 11, 11, 11, 11, 11, 11]

      // 如果`end`未定义，则默认结束索引为数组的末尾
      console.log([1, 2, 3, 4, 5, 6].fill(11, 2)) //[ 1, 2, 11, 11, 11, 11]

      // `start`起始索引比数组长度大时，数组不作填充
      console.log([1, 2, 3, 4, 5, 6].fill(11, 45, 6)) //[ 1, 2, 3, 4, 5, 6]

      // `end`结束索引比数组长度大时，填充到数组的末尾
      console.log([1, 2, 3, 4, 5, 6].fill(11, 1, 55)) //[ 1, 11, 11, 11, 11, 11]

      // 可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
      console.log([1, 2, 3, 4, 5, 6].fill(11, -4, -1)) //[ 1, 2, 11, 11, 11, 6]
    }
    // fill()

    /** 在数组的开头插入新元素，并返回数组的新长度
     * arrayObject.length arrayObject.unshift(...items)
     * @param items 要在数组开头插入的元素
     * @result 数组的新长度
     */
    var unshift = () => {
      let arr = [1, 2, 3, 4, 5, 6]

      // 在数组的开头插入新元素
      console.log(arr.unshift(11, 22, [33, 44])) // 9

      // 会改变原数组
      console.log(arr) // [11, 22, [ 33, 44 ], 1, 2, 3, 4, 5, 6]
    }
    // unshift()

    /** 向数组追加新元素，并返回数组的新长度
     * arrayObject.length arrayObject.push(...items)
     * @param items 要在数组末尾插入的元素
     * @result 数组的新长度
     */
    var push = () => {
      let arr = [1, 2, 3, 4, 5, 6]

      // 在数组的末尾插入新元素
      console.log(arr.push(11, 22, [33, 44])) // 9

      // 会改变原数组
      console.log(arr) // [1, 2, 3, 4, 5, 6, 11, 22, [ 33, 44 ]]
    }
    // push()

    /** 从原数组中读取内容，替换数组指定位置的内容
     * arrayObject arrayObject.copyWithin(number, start, end) 改变原数组
     * @param target- 替换的目标起始位置
     * @param start- 查找的起始位置
     * @param end- 查找的结束位置
     * @result 替换后的数组
     * 说明
     *    1. 若未指定 `end`,则此对象的长度将用作其默认值
     *    2. 原数组长度保持不变，（查出的）如有超出部分自动截取掉
     *    3. 可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
     *    4. 调用copyWithin方法后数组值更改为替换后的数据
     */
    var copyWithin = () => {
      let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
      // 从索引`2`开始替换，替换成原数组从索引`2`到`4(不包括4)`的数据
      console.log(arr1.copyWithin(4, 2, 5)) // [1, 2, 3, 4, 3, 4, 5, 8]
      // 会改变原数组
      console.log(arr1) // [1, 2, 3, 4, 3, 4, 5, 8]

      // 若未指定 `end`，则此对象的长度将用作其默认值
      let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
      console.log(arr2.copyWithin(3, 2)) // [1, 2, 3, 3, 4, 5, 6, 7]

      // 原数组长度保持不变，（查出的）如有超出部分自动截取掉
      let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
      console.log(arr3.copyWithin(3, 2, 20)) // [1, 2, 3, 3, 4, 5, 6, 7]

      // 可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
      let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
      console.log(arr4.copyWithin(-6, -2)) // [1, 2, 7, 8, 5, 6, 7, 8]
    }
    // copyWithin()

    /** 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素
     * deleteItem arrayObject.splice(start, deleteCount, ...items): []
     * @param start 数组中从零开始移除元素的位置
     * @param deleteCount 要删除的元素数
     * @param items 要在数组中插入的元素
     * @result 已删除的元素
     * 说明
     *    1. `start`可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
     *    2. 若未指定 `deleteCount`,则此对象的长度将用作其默认值
     *    3. `deleteCount`值为`0`或负数时，不删除元素
     */
    var splice = () => {
      // 删除元素
      let arr1 = [1, 2, 3, 4, 5, 6]
      console.log(arr1.splice(2, 3)) // [3, 4, 5]
      // 会改变原数组
      console.log(arr1) // [1, 2, 6]

      // 在删除的位置插入的元素
      let arr2 = [1, 2, 3, 4, 5, 6]
      console.log(arr2.splice(2, 3, 'a', 'b', ['c', 'd'])) // [3, 4, 5]
      console.log(arr2) // [1, 2, 'a', 'b', ['c', 'd'], 6]

      // 若未指定 `deleteCount`,则此对象的长度将用作其默认值
      let arr3 = [1, 2, 3, 4, 5, 6]
      console.log(arr3.splice(2)) // [3, 4, 5, 6]
      console.log(arr3) // [1, 2]

      // `start`可以用`负数`索引来指示距`数组结尾`的偏移量，`数组长度len + start/end`（例：`-1`表示数组中倒数第`1`个元素）
      let arr4 = [1, 2, 3, 4, 5, 6]
      console.log(arr4.splice(-3)) // [4, 5, 6]
      console.log(arr4) // [1, 2, 3]

      // `deleteCount`值为`0`或负数时，不删除元素
      let arr5 = [1, 2, 3, 4, 5, 6]
      console.log(arr5.splice(1, -10, -1)) // []
      console.log(arr5) // [1, -1. 2, 3, 4, 5, 6]
    }
    // splice()

    /** 从数组中删除并返回被删除的第一个元素
     * deleteItem arrayObject.shift()
     * @result 被删除的第一个元素
     * 说明
     *    1. 如果数组为空，则返回`undefined`，并且不修改数组
     */
    var shift = () => {
      let arr1 = [1, 2, 3, 4, 5, 6]
      // 删除第一个元素
      console.log(arr1.shift()) // 1

      // 会改变原数组
      console.log(arr1) // [2, 3, 4, 5, 6]

      let arr2 = []
      // 如果数组为空，则返回`undefined`，并且不修改数组
      console.log(arr2.shift()) // undefined
      console.log(arr2) // []
    }
    // shift()

    /** 从数组中删除并返回被删除的最后一个元素
     * deleteItem arrayObject.pop()
     * @result 被删除的最后一个元素
     * 说明
     *    1. 如果数组为空，则返回`undefined`，并且不修改数组
     */
    var pop = () => {
      let arr1 = [1, 2, 3, 4, 5, 6]
      // 删除最后一个元素
      console.log(arr1.pop()) // 6

      // 会改变原数组
      console.log(arr1) // [1, 2, 3, 4, 5]

      let arr2 = []
      // 如果数组为空，则返回`undefined`，并且不修改数组
      console.log(arr2.pop()) // undefined
      console.log(arr2) // []
    }
    // pop()

    /** 反转数组中的元素
     *  arrayObject arrayObject.reverse()
     * @result 反转后的数组
     */
    var reverse = () => {
      let arr = [1, 2, 3, 4, 5, 6]
      console.log(arr.reverse()) // [6, 5, 4, 3, 2, 1]

      // 会改变原数组
      console.log(arr) // [6, 5, 4, 3, 2, 1]
    }
    // reverse()

    /** 对数组进行排序
     * arrayObject.sort((a, b) => number): []
     */
    var sort = () => {
      // 数字排序默认不是按大小排序的
      var arr = [11, 2, 22, 1]
      console.log(arr.sort()) // [1, 11, 2, 22]

      // 会改变原数组
      console.log(arr) // [1, 11, 2, 22]

      // 数字 升序/降序 排序
      var arr2 = [11, 2, 22, 1]
      console.log(arr2.sort((a, b) => a - b)) // [1, 2, 11, 22]
      console.log(arr2.sort((a, b) => b - a)) // [22, 11, 2, 1]

      // 字母 升序/降序 排序
      var arr3 = ['c', 'a', 'b', 'ac', 'aa']
      console.log(arr3.sort()) // ['a', 'aa', 'ac', 'b', 'c']
      console.log(arr3.reverse()) // ['c', 'b', 'ac', 'aa', 'a']
    }
    // sort()
  }
  update()
}
