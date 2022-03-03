
class _array {
    a_1(){
        console.log(new Array(3));// [<3 empty item> ]
        console.log(new Array(3).fill(1));// [ 1, 1, 1 ]
    }
    apply(){
      
    }
    of(){
      {
        console.log(Array.of(1, 2));
        // [ 1, 2 ]
      }
      {
        var Array_of = function() {
          return slice.call(arguments);
        };
        console.log(Array_of('a', 'b', 'c'))
        // [ 'a', 'b', 'c' ]
      }
    }
    /* 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
      Array.from(arrayLike[, mapFn[, thisArg]])
      arrayLike: 想要转换成数组的伪数组对象或可迭代对象。
      mapFn: 可选，如果指定了该参数，新数组中的每个元素会执行该回调函数。
      thisArg: 可选，执行回调函数 mapFn 时 this 对象。

       Array.from(obj, mapFn, thisArg) 相当于 Array.from(obj).map(mapFn, thisArg)
    */
    from(){
      {// 从 String 生成数组
        console.log(Array.from('foo'));
        // expected output: Array ["f", "o", "o"]
      }
      {// 从 Set 生成数组
        const set = new Set(['foo', 'bar', 'baz', 'foo']);
        Array.from(set);
        // [ "foo", "bar", "baz" ]
      }
      {// 从 Map 生成数组
        const map = new Map([[1, 2], [2, 4], [4, 8]]);
        Array.from(map);
        // [[1, 2], [2, 4], [4, 8]]
  
        const mapper = new Map([['1', 'a'], ['2', 'b']]);
        Array.from(mapper.values());
        // ['a', 'b'];
  
        Array.from(mapper.keys());
        // ['1', '2'];
      }
      {// 从类数组对象（arguments）生成数组
        function f() {
          return Array.from(arguments);
        }
        f(1, 2, 3);
        // [ 1, 2, 3 ]
      }
      {// 在 Array.from 中使用箭头函数
        // 使用 arrow 函数作为 map 函数来操作元素
        console.log(Array.from([1, 2, 3], x => x * 2));
        // [2, 4, 6]
        
        // 创建长度为 5 的数组，并以索引填充值
        console.log(Array.from({length: 5}, (v, i) => i + 1));
        // [ 1, 2, 3, 4, 5 ]
      }
      {// 数组去重合并
        function combine(){ 
            let arr = [].concat.apply([], arguments);  //没有去重的新数组 
            return Array.from(new Set(arr));
        } 

        var m = [1, 2, 2], n = [2,3,3]; 
        console.log(combine(m,n)); 
        // [ 1, 2, 3 ]
      }
    }
}

var _a = new _array();


/** 数组原型方法
 *  注意点
        1. 所有数组实例上的方法，参数是从索引n到索引m的，都是包含n不包含m的（顾头不顾尾）
    concat
    遍历数组的方法，参数是一个函数，这个函数的this是window,我们可以通过第二个参数改变函数中的this（reduce、reductRight中的函数不可以改this）

    返回新数组
        组合多个数组
            concat(...items){// 组合两个或三个数组
        截取数组
            slice(start, end)// 截取数组的一部分，返回一个新数组
        数组的每个调用回调函数后，返回新数组
            map((value, index, array) => {})// ie9+  对数组的每个元素调用已定义的回调函数，并返回包含结果的数组。
        过滤
            filter((a,b) => { return boolean})// 过滤数组，根据返回值去过滤原数组   true留下当前项，false不留下当前项
            reduce((prev, cur, index, arr) => {}, init)// 迭代 为数组中的所有元素调用指定的回调函数
            reduceRight(){// 按降序为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积结果，并在下次调用回调函数时作为参数提供。
    
    改变原数组
        添加
            unshift(...items)// 在数组的开头插入新元素，并返回数组的新长度
            push(...items){// 向数组追加新元素，并返回数组的新长度
        删除
            shift()// 从数组中删除并返回第一个元素
            pop()// 从数组中删除并返回最后一个元素
        删除并添加
            splice(start, deleteCount, ...items)// 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素
        从原数组复制替换
            copyWithin(number, start, end){// 从原数组中读取内容，替换数组指定位置的内容
        填充
            fill(value, start, end){// 按照指定字符填充数组，将数组的每一项都变成指定字符
        反转
            reverse()// 反转数组中的元素
        排序
            sort((a, b) => a - b)// 对数组进行排序

    从原数组查找
        数据是否存在
            find((value, index, obj) => {}){// 先遍历数组，一旦参数函数返回true，就停止查找，返回当前项 item
            includes(searchElement, fromIndex)// 判断数组中有没有某一个元素 确定数组是否包含某个元素 boolean
            every(item,index,array => {})// 检测数组所有元素是否全都符合指定条件 boolean
            some(item,index,array => {})// 检测数组中的元素是否有满足指定条件的 boolean
        索引
            findIndex((value, index, obj) => {}){// 先遍历数组，一旦参数函数返回true，就停止查找返回当前项的索引
            indexOf(value, index){// 返回数组中指定值第一次出现时的索引
            lastIndexOf(value, index){// 返回数组中指定值最后一次出现的索引
    
    循环等
        entries()// 返回数组中每个项的键、值对的iterable
        forEach()// 对数组中的每个元素执行指定的操作

    转换为字符串
        join(separator)// 指定分隔符将数组合并成字符，separator: 分隔符
        toLocaleString()// 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
        toString()// 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）
    
 */
/* 返回新数组 */
class _array_pro_new {
  /** ES5 Array concat(items) 组合多个数组
     * items: 要添加到原数组结尾的其他项
     * 1. 返回新数组
     */
  concat(){
    var ary1 = [1,2,3];
    var ary2 = [4,5,6];
    var ary3 = [7,8,9]
    var ary4 = ary1.concat(ary2,ary3);
    console.log(ary4);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  /** ES5 Array slice(start, end): 截取数组的一部分，返回一个新数组
     * @param start-数组指定部分的开头
     * @param end-数组指定部分的结尾。这不包括索引“end”处的元素
     */
  slice(){
    let arr = ['a',  , 'b'];
    console.log(arr.slice(1, 2));// [ <1 empty item> ]
    console.log(arr.slice(1, 3));// [ <1 empty item>, 'b' ]
    console.log(ary);// ['a',  , 'b']
  }
  /** ES5 Array filter((item, index) => {})  过滤数组，根据返回值去过滤原数组   true留下当前项，false不留下当前项
   * 返回满足回调函数中指定条件的数组元素
   * 1. 原数组不变，返回一个新的数组 
   * 2. 如果返回 true 就留下当前项，返回 false 不留下当前项
   */
  filter(){
    var ary1 = ['中国',1,2,3,'中国'];
    // 只留下数值类型数据
    var ary2 = ary1.filter(function(item, index){
        console.log(this);
        //如果返回true就留下当前项，返回false不留下当前项
        return typeof item === 'number';
    })
    console.log(ary1);// [ '中国', 1, 2, 3, '中国' ]
    console.log(ary2);// [ 1, 2, 3 ]
    
    //过滤掉 '中国'
    var ary3 = ary1.filter(function(item, index){
        return item == '中国';
    })
    console.log(ary3);// [ '中国', '中国' ]

    {
        //遍历数组的方法，参数是一个函数，这个函数的this是window,我们可以通过第二个参数改变函数中的this
        var ary1 = ['中国',1,2,3,'中国'];
        // 只留下数值类型数据
        var rel = ary1.filter(function(item, index){
            console.log(this);
            //如果返回true就留下当前项，返回false不留下当前项
            return typeof item === 'number';
        }, ary1)
        console.log(rel);// [ 1, 2, 3 ]
    }
    
  }
  /** ES6 Array map((value, index, array) => {}) ie9+ 对数组的每个元素调用已定义的回调函数，并返回包含结果的数组。
   * 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
   * 按照原始数组元素顺序依次处理元素。
   * 不会对空数组进行检测
   * 不会改变原始数组
   */
  map(){
    var ary = [1,2,3];
    console.log(ary.map(item => item * 10));// [ 10, 20, 30 ]
    console.log(ary);// [ 10, 20, 30 ]
  }
  /** ES6 Array flat(flat) （IE不支持）以递回方式将特定深度的子阵列重新串接成为一新的阵列
   * depth 可选，指定巢状阵列展开的深度。默认值为1
   */
  flat(){
      {
          var arr1 = [1, 2, [3, 4]];
          console.log(arr1.flat()); // [1, 2, 3, 4]
          
          var arr2 = [1, 2, [3, 4, [5, 6]]];
          console.log(arr2.flat());// [1, 2, 3, 4, [5, 6]]
          
          var arr3 = [1, 2, [3, 4, [5, 6]]];
          console.log(arr3.flat(2));// [1, 2, 3, 4, 5, 6]
      }

      // flat()函数会自动清除阵列中空的元素
      {
          var arr4 = [1, 2, , 4, 5];
          console.log(arr4.flat());// [1, 2, 4, 5]
      }
  }
  /** ES6 Array flatMap(item, index, array) （IE不支持）首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
   * 它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
   */
  flatMap(){
      var arr = [1, 2, 3, 4];
      console.log(arr.flatMap(x => x * 2));// [2, 4, 6, 8]
      console.log(arr.flatMap(x => [x * 2]));// [2, 4, 6, 8]
      console.log(arr.flatMap(x => [[x * 2]]));// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

      // 将原数组以空格拆分成新数组
      let arr1 = ["it's Sunny in", "", "California"];
      console.log(arr1.flatMap(x => x.split(" ")));// ["it's","Sunny","in", "", "California"]
  }
}
/* 改变原数组
        填充
            fill(value, start, end){// 按照指定字符填充数组，将数组的每一项都变成指定字符
        添加
            unshift(...items)// 在数组的开头插入新元素，并返回数组的新长度
            push(...items){// 向数组追加新元素，并返回数组的新长度
        从原数组复制替换
            copyWithin(number, start, end){// 从原数组中读取内容，替换数组指定位置的内容
        删除并添加
            splice(start, deleteCount, ...items)// 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素
        删除
            shift()// 从数组中删除并返回第一个元素
            pop()// 从数组中删除并返回最后一个元素
        返回
            reverse()// 反转数组中的元素
        排序
            sort((a, b) => a - b)// 对数组进行排序 */
class _array_pro_update {
  /** fill(value, start, end) 改变原数组
   * 在用值填充由start和end标识的节之后返回this对象
   * @param value-要用其填充数组节的值
   * @param start-开始填充数组的索引。如果start为负，则将其视为length+start，其中length是数组的长度。
   * @param end-停止在处填充数组的索引。如果结束为负，则将其视为长度+结束。
   */
  fill(){// 按照指定字符填充数组，将数组的每一项都变成指定字符
      let ary1 = [1, 2, 3, 4, 5, 6];
      console.log(ary1.fill(9));// [9, 9, 9, 9, 9, 9]
      console.log(ary1.fill(3, 2));// [9, 9, 3, 3, 3, 3]
      console.log(ary1.fill(6, 2, 4));// [9, 9, 6, 6, 3, 3]
  }
  /** unshift(...items: string[]): number
   * @param items-要在数组开头插入的元素。
   */
  unshift(){// 在数组的开头插入新元素，并返回数组的新长度
      var ary = ['a', 'b', 'c'];
      console.log(ary.unshift('d', 'e'));// 5
      console.log(ary);// ['d', 'e', 'a', 'b', 'c']
  }
  /** push(...items: string[]): number
   * @param items-数组的新元素。
   * number-数组的新长度
   */
  push(){// 向数组追加新元素，并返回数组的新长度
      var ary = ['a', 'b', 'c'];
      console.log(ary.push('d', 'e'));// 5
      console.log(ary);// [ 'a', 'b', 'c', 'd', 'e' ]
  }
  /** copyWithin(number, start, end) 改变原数组
   * @param target- 替换的目标起始位置
   * @param start- 查找的起始位置，
   * @param end- 查找的结束位置，
   * 
   *  注意点：
   *      1. 若未指定 end,则此对象的长度将用作其默认值
   *      2. 原数组长度保持不变，（查出的）如有超出部分自动截取掉
   *      3. 如果填的参数为负，则将其视为length+参数
   *      4. 调用copyWithin方法后数组值更改为替换后的数据
   */
  copyWithin(){// 从原数组中读取内容，替换数组指定位置的内容
     let ary1 = [1, 2, 3, 4, 5, 6, 7, 8];
      // 从索引4开始替换，替换成原数组从索引2到4(不包括4)的数据，后面7、8保持不变
      console.log(ary1.copyWithin(4,2,4));// [1, 2, 3, 4, 3, 4, 7, 8]
      console.log(ary1);// [1, 2, 3, 4, 3, 4, 7, 8] 【调用 copyWithin 方法后数组更改为替换后的数据】
      console.log(ary1.copyWithin(3,2));// [1, 2, 3, 3, 4, 3, 4, 7] 【查找的结束位置end默认到末尾】
  }
  /** splice(start, deleteCount, ...items): []
   * @param start-数组中从零开始移除元素的位置
   * @param deleteCount-要删除的元素数
   * @param items-要在数组中插入的元素。
   */
  splice(){// 从数组中删除元素，并在必要时在其位置插入新元素，返回已删除的元素
      var ary = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      console.log(ary.splice(2,3));// ['c', 'd', 'e']
      console.log(ary);// ['a', 'b', 'f', 'g']
      console.log(ary.splice(2,1,'3','4'));// ['f']
      console.log(ary);// ['a', 'b', '3', '4', 'g']
  }
  shift(){// 从数组中删除并返回第一个元素
      var ary = ['a', 'b', 'c'];
      console.log(ary.shift());// a
      console.log(ary);// ['b', 'c']
  }
  pop(){// 从数组中删除并返回最后一个元素
      var ary = ['a', 'b', 'c'];
      console.log(ary.pop());// c
      console.log(ary);// ['a', 'b']
  }
  reverse(){// 反转数组中的元素
      var ary = ['a', 'b', 'c'];
      console.log(ary.reverse());// ['c', 'b', 'a']
  }
  /** sort(compareFn:(a, b) => number): []
   * @param compareFn-用于确定元素顺序的函数。如果第一个参数小于第二个参数，则返回负值；如果它们相等，则返回零；否则返回正值。如果省略，则按ASCII字符升序对元素进行排序。
   */
  sort(){// 对数组进行排序
      console.log([11,2,22,1].sort());// [1, 11, 2, 22]
      console.log([11,2,22,1].sort((a, b) => a - b));// [1, 2, 11, 22]
      console.log(['c','a','b'].sort());// ['a', 'b', 'c']
  }
}
/* 从原数组查找 */
class _array_pro_lookup {
  /** ES6 * reduce((prev, cur, index, arr) => {}, init) 迭代 为数组中的所有元素调用指定的回调函数
  * prev: 上一次调用回调时的返回值，或者初始值 init;
  * cur: 当前正在处理的数组元素
  * index: 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
  * arr: 原数组
  * init: 初始值
  * 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累积结果，并在下次调用回调函数时作为参数提供。
  */
  reduce(){
    var  arr = [1, 2, 3, 4];
    console.log( arr.reduce((x,y)=>x+y) ); //求和，10
    console.log(arr.reduce((x, y) => x * y)); //求乘积，24
  
    {
      // var arr = [1,2,3];
      // console.log(arr.reduce((a, b, c, d) => {
      //   console.log(a + ' - ' + b + ' - ' + c + ' - ' + d);
      //   return a + b
      // }));
      // console.log('-----------------------------------------------');
      // console.log(arr.reduce((a, b, c, d) => {
      //   console.log(a + ' - ' + b + ' - ' + c + ' - ' + d);
      //   return a + b;
      // }, 0));

      // var arr2 = [{price: 33, count: 2},{price:45, count: 2},{price: 45, count: 1},{price: 54, count: 2}]
      // console.log(arr2.reduce((a, b, c, d) => {
      //   console.log(a + ' - ' + JSON.stringify(b) + ' - ' + c);
      //   return a + b.price * b.count
      // }, 0));

      // var arr = ['aa', 'bb', 'cc', 'dd'];
      // console.log(arr.reduce((a, b, c, d) => a + ' | ' + b));
      // console.log('-----------------------------------------------');
      // console.log(arr.reduce((a, b, c, d) => {
      //   return a + ( c == 0 ? b : ' | ' + b)
      // }, ''));

      
    }

    // 计算数组中每个元素出现的次数
    {
        let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
        let nameNum = names.reduce((pre,cur)=>{
            if(cur in pre){
                pre[cur]++
            }else{
                pre[cur] = 1 
            }
            return pre
        },{})
        console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}   
    }
    // 数组去重
    {
        let arr2 = [1,2,3,4,4,1];
        let newArr = arr2.reduce((pre,cur)=>{
            if(!pre.includes(cur)){
              return pre.concat(cur)
            }else{
              return pre
            }
        },[]);
        console.log(newArr);// [1, 2, 3, 4]
    }
    // 将二维数组转化为一维
    {
        let arr3 = [[0, 1], [2, 3], [4, 5]]
        let newArr2 = arr3.reduce((pre,cur)=>{
            return pre.concat(cur)
        },[])
        console.log(newArr2); // [0, 1, 2, 3, 4, 5]
    }
    // 将多维数组转化为一维
    {
        let arr4 = [[0, 1], [2, 3], [4,[5,6,7]]]
        const newArr3 = function(arr4){
            return arr4.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr3(cur):cur),[])
        }
        console.log(newArr3(arr4)); //[0, 1, 2, 3, 4, 5, 6, 7]
    }
    // 对象里的属性求和
    {
        var result = [{subject: 'math',score: 10},{subject: 'chinese',score: 20},{subject: 'english',score: 30}];
        var sum = result.reduce(function(prev, cur) {
            return cur.score + prev;
        }, 0);
        console.log(sum) //60
    }
  }
  /** ES6 * reduce((prev, cur, index, arr) => {}, init) 迭代 按降序为数组中的所有元素调用指定的回调函数。
    * 回调函数的返回值是累积结果，并在下次调用回调函数时作为参数提供。
    */
  reduceRight(){
      {
          var arr = [0,1,2,3,4];
          var rel = arr.reduceRight(function (preValue,curValue,index,array) {
              return preValue + curValue;
          }); 
          console.log(rel);// 10
          rel = arr.reduceRight(function (preValue,curValue,index,array) {
              return preValue + curValue;
          }, 6); 
          console.log(rel);// 16
      }
  }
  /** ES6 value find((value, index, obj) => {})  先遍历数组，一旦参数函数返回true，就停止查找，返回当前项 item
   * 返回数组中谓词为true且未定义的第一个元素的值。
   * 按升序为数组的每个元素调用谓词一次，直到找到谓词返回true的元素为止。如果找到这样的元素，find立即返回该元素值。否则，find返回未定义。
   */
  find(){
      var ary = ['中国', {}, '1', 2, 3, 4];
      let a = ary.find(item => typeof item === 'number');
      console.log(a);// 2
      let b = ary.find(item => typeof item === 'array')
      console.log(b);// undefined
  }
  /** ES6 boolean includes(searchElement, fromIndex) 判断数组中有没有某一个元素 确定数组是否包含某个元素，并根据需要返回true或false。
   * @param search 要搜索的元素
   * @param fromIndex—开始查找的位置索引
   */
  includes(){
      var ary = ['a', 'b', 'c', 'a', 'b', 'c',,,];
      console.log(ary.includes('a'))// true
      console.log(ary.includes('a', 2))// true
      console.log(ary.includes('a', 4))// false
      console.log(ary.includes('d'))// false
      console.log(arr.includes());// true
      console.log(arr.includes(undefined));// true

      
      var ary = ['中国', {}, '1', 2, 3, 4];
      let a = ary.find(item => typeof item === 'number');
      console.log(a);// 2
      let b = ary.find(item => typeof item === 'array')
      console.log(b);// undefined
  }
  /** ES6 boolean every(item,index,array => {}) 检测数组所有元素是否全都符合指定条件
   *  使用指定函数检测数组中的所有元素：
   *  如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
   *  如果所有元素都满足条件，则返回 true
   *  不会对空数组进行检测
   *  不会改变原始数组
   */
  every(){
      var ary = [1,2,3];
      console.log([3].every(item => item == 3));// true
      console.log(ary.every(item => item == 3));// false
      console.log(ary.fill(3));// [3, 3, 3]
      console.log(ary.every(item => item == 3));// true
      console.log(ary.every(item => typeof item === 'number'));// true
  }
  /** ES6 boolean some(item,index,array => {}) 检测数组中的元素是否有满足指定条件的
   * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
   * 如果没有满足条件的元素，则返回false。
   * 不会对空数组进行检测。
   * 不会改变原始数组。
   */
  some(){
      var ary = [1,2,3,'a','b'];
      console.log([].some(item => item == 3));// false
      console.log(ary.some(item => item == 3));// true
      console.log(ary.some(item => typeof item === 'number'));// true
  }
  /* ES5 number length() 获取或设置数组的长度 */
  length(){
    let ary = [1,2,3,4,5,6,7,8];
    console.log(ary.length);// 8
  }
  /** ES6 number findIndex((value, index, obj) => {}) 先遍历数组，一旦参数函数返回true，就停止查找返回当前项的索引
   * 返回数组中谓词为true的第一个元素的索引，否则返回-1。
   * 按升序为数组的每个元素调用谓词一次，直到找到谓词返回true的元素为止。如果找到这样的元素，findIndex会立即返回该元素索引。否则，findIndex返回-1
   */
  findIndex(){
      var ary = ['中国', {}, '1', 2, 3, 4];
      let a = ary.findIndex(item => typeof item === 'number');
      console.log(a);// 3
      let b = ary.findIndex(item => typeof item === 'array');
      console.log(b);// -1
  }
  /** ES5 number indexOf(searchElement, fromIndex) 返回数组中指定值第一次出现时的索引
   * searchElement-要在数组中定位的值。
   * fromIndex-开始搜索的数组索引。如果省略fromIndex，则搜索从数组中的最后一个索引开始。
   */
  indexOf(){
      var ary = [11,22,33,44,11,22,33,44];
      console.log(ary.indexOf(33));// 2
      console.log(ary.indexOf(33,3));// 6
  }
  /** ES5 number lastIndexOf(searchElement, fromIndex) 返回数组中指定值最后一次出现的索引
   * searchElement-要在数组中定位的值。
   * fromIndex-开始搜索的数组索引。如果省略fromIndex，则搜索从数组中的最后一个索引开始。
   */
  lastIndexOf(){
      var ary = [1,2,3,4,1,2,3,4];
      console.log(ary.lastIndexOf(3));// 6
      console.log(ary.lastIndexOf(3,3));// 2
  }
  /** ES5 string join(separator:string) 指定分隔符将数组合并成字符
   *  @param separator-用于将结果字符串中的一个数组元素与下一个数组元素分隔开的字符串。如果省略，数组元素用逗号分隔
   */
  join(){
      var ary = ['a', 'b', 'c'];
      console.log(ary.join('_'));// a_b_c
      console.log(ary);// ['a', 'b', 'c']
  }
  /* ES5 string toString() 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）*/
  toString(){
      var ary = [1,2,3];
      console.log(ary.toString());
      
      {
          var num = 123456;
          console.log(num.toString());//123456
          var date = new Date();
          console.log(date.toString());//Sat Apr 25 2020 16:17:56 GMT+0800 (GMT+08:00)
      }
  }
  /* string toLocaleString() 以逗号分隔把数组转换为字符串，并返回结果（不改变原数组）*/
  toLocaleString(){// 
      var ary = [1,2,3];
      console.log(ary.toLocaleString());// 1,2,3

      {
          var num = 123456;
          console.log(num.toLocaleString());//123,456
          var date = new Date();
          console.log(date.toLocaleString());//2020-4-25 16:17:56
      }
  }
  /* ES6 遍历每一项索引的接口，使用for of遍历 */
  keys(){
      var ary = ['a', 'b', 'c'];
      for(let key of ary.keys()){
          console.log(key);
      }
      //0
      //1
      //2
  }
  /* ES6 返回数组中的值的iterable */
  values(){
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
  /* ES6 返回数组中每个项的键、值对的iterable */
  entries(){
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
  // ES6 constructor: ƒ Array()
  forEach(){// 对数组中的每个元素执行指定的操作
      var ary = ['a', 'b', 'c'];
      ary.forEach((value, index, array) => {
          // array: a,b,c
          console.log(index+'_'+value);
      });
      // 0_a
      // 1_b
      // 2_c
  }
}
var _apl = new _array_pro_lookup();
// _apl.reduce();

/* 案例 */
class _case {
  /* 判断一个数组中某一个位置是不是空位 (in: 判断数组索引位置上有没有值) 
   * 数组的空位： 数组的某个索引位置没有任何值（undefined 不是空位）
   */
  isAmpty() {
    var arr = [3,undefined,'a',,,];
    console.log(arr.length);//五个空位的数组
    console.log(0 in arr);// true
    console.log(1 in arr);// true
    console.log(2 in arr);// true
    console.log(3 in arr);// false
    console.log('a' in arr);// false
    console.log(undefined in arr);// false
  }
  /* 判断数组中是否有空位 */
  isThereAnyBlank() {
    function isAmpty(arr){
      for(var a in arr){
        console.log(a);
        return false;
      }
      return true;
    }
    
    console.log(undefined in ['a', , 'c']);// false
    console.log(undefined in ['a', undefined, 'c']);// false
    console.log(undefined in ['a', '', 'c']);// false
    console.log(undefined in ['a', 'b', 'c']);// false
  }
}
var _c = new _case();
// _c.isAmpty();

/* 比较 */
class _compare {
  /****************************** 空位 start ******************************************/
  // 遍历
  each() {
    let arr = ['a', 'b', 'c', , , , 'g'];
    // 在ES5中数组方法对空位的处理不一致，一般直接路过空位
    {
      // // for in : 0 1 2 6
      // for(var a in arr){
      //   console.log(a);
      // }
  
      // // : a-0  b-1  c-2  g-6
      // arr.forEach(function(a, b){
      //   console.log(a + '-' + b);
      // })

      // // 0: 0-a  1-b  2-c  6-g
      // arr.filter((item, index) => console.log(index +'-'+ item));
    }
    // 在ES6中的方法将空位处理为undefined，
    {
      // // for of : a  b  c  undefined  undefined  undefined  g
      // for(var a of arr){
      //   console.log(a);
      // }
  
      // // : 0  1  2  3  4  5  6
      // for(var a of arr.keys()){
      //   console.log(a);
      // }
  
      // // :  a  b  c  undefined  undefined  undefined  g
      // for(var a of arr.values()){
      //   console.log(a);
      // }
  
      // // : 0-a  1-b  2-c  3-undefined  4-undefined  5-undefined  6-g
      // for(var [a, b] of arr.entries()){
      //   console.log(a + '-' + b);
      // }

      // // :  a  b  c  undefined  undefined  undefined  g
      // arr.find(item => console.log(item));
    }
    // ES6 方法中的例外
    {
      // // : a  b  c  g
      // arr.map(item => console.log(item))

      // // : a  b  c  g
      // arr.flatMap(item => console.log(item))

      // // : a-b  undefined-c  undefined-g
      // arr.reduce((prev, cur, index, arr) => {
      //   console.log(prev + '-' + cur);
      // })

      // // : g-c  undefined-b  undefined-a
      // arr.reduceRight((prev, cur, index, arr) => {
      //   console.log(prev + '-' + cur);
      // })
    }
  }
  concat() {// 组合多个数组
    let arr = ['a', , , , , 'b'];
    let arr2 = ['c', undefined, 'd'];
    console.log(arr.concat(arr2));// [ 'a', <4 empty items>, 'b', 'c', undefined, 'd' ]
  }
  slice() {// 截取数组的一部分，返回一个新数组
    let arr = ['a',  , 'b'];
    console.log(arr.slice(1, 2));// [ <1 empty item> ]
    console.log(arr.slice(1, 3));// [ <1 empty item>, 'b' ]
  }
  sort() {// 对数组进行排序
    var arr = [3,5,6,3,,, 3, 2]
    console.log(arr.sort());// [ 2, 3, 3, 3, 5, 6, <2 empty items> ]
  }
  includes() {// 判断数组中有没有某一个元素
    let arr = ['a', 'b', 'c',,,,,'g'];
    console.log(arr.includes());// true
    console.log(arr.includes(undefined));// true
  }
  every() {
    let arr1 = [,];
    console.log(arr1.every(item => item == undefined));// true
    console.log(arr1.every(item => item === undefined));// true
    console.log(arr1.some(item => item == undefined));// false
    console.log(arr1.some(item => item === undefined));// false

    let arr2 = [,undefined];
    console.log(arr2.every(item => item == undefined));// true
    console.log(arr2.every(item => item === undefined));// true
    console.log(arr2.some(item => item == undefined));// true
    console.log(arr2.some(item => item === undefined));// true
  }
  /****************************** 空位 end ******************************************/
}
var _c = new _compare();
// _c.every();

/* 面试题 */
class interview {
  // 创建数组
  i_1() {
    console.log(Array(5));// 5个空位的数组
    console.log(new Array(2));// [ <2 empty items> ]
    console.log(Array.of(2));// [ 2 ]
    console.log(Array.from('23'));// [ '2', '3' ]
  }
  // 得到一个有 7 个 1 的数组
  i_2() {
    console.log(Array(7).fill(1));
  }
  // 数组去重
  i_3(){
    // ES5
    function Char(arr){
      var a = []
      for(var i = 0; i < arr.length; i++){
          if(a.indexOf(arr[i])==-1){
              a.push(arr[i])
          }
      }
      return a;
    }
    // ES6
    function noRepeat(arr){
      return arr.reduce((prev, cur) => {
        if(!prev.includes(cur)){
          prev.push(cur);
        }
        return prev;
      }, [])
    }
    function news(a, b){ return Array(a).fill(b)}
    var arr = Array.from('abfb2i4yr2qruewahgrfaweghfhjksdagfjksdafkjdhsadagfjksdasfb2i4yr2qruewahgrfaweghfhjksdagfjksdafkjdhsafkhls')
    var time_1 = new Date().getTime();
    noRepeat(arr);
    var time_2 = new Date().getTime();
    Char(arr);
    var time_3 = new Date().getTime();
    console.log((time_3 - time_2) + '-' + (time_2 - time_1));
  }
  // 查找数组中与目标相等的元素的下标
  i_4(){
    function findAllTarget(arr, target) {
      var result=[];
      for(var i=0;i<arr.length;i++){
          if(arr[i]===target){
              result.push(i);//假如一个数组中有多个与目标相等的对象，所以要用数组存起来
          }
      }
      return result;
    }
    function equal(arr, a){
      var res = [];
      if(arr.indexOf(a) >= 0){
        arr.forEach(function(item, index){
          if(a === item){
            res.push(index);
          }
        })
      }
      return res;
    }
    var arr = [2,3,5,546,7,43,342,666,65,666,888,1,23,5,4,665,,657,8];
    console.log(equal(arr, 666));
    console.log(findAllTarget(arr, 666));
  }
  // 查找数组中重复的元素
  i_5(){
    function findRepeatTarget(arr) {
      //先给数组排序，然后如果后一个与前一个相等且未保存，则保存
      var a =[], b=[];
      a = arr.sort();
      for(var i in a){
          if(a[i] == a[i-1] && b.indexOf(a[i])==-1) {
              b.push(a[i]);
          }
      }
      return b;
    }
    function repeat(arr){
      var res = [];
      arr.forEach(function(item, index){
        arr.includes(item, index+1) && !res.includes(item) && res.push(item);
      })
      return res;
    }
    var arr = [2,3,5,546,7,43,342,666,65,666,888,1,8,5,4,665,,657,8];
    console.log(findRepeatTarget(arr));// [ 5, 666, 8 ]
    console.log(repeat(arr));// [ 5, 666, 8 ]
  }
  // 随机打乱一个数组 
  i_6(){}
  // 求数组元素 min 和 max 值
  i_7(){
    function findMin(num){
      var a = num[0];
      for(var i =0;i<num.length;i++){
          if(a > num[i]){
              a = num[i]
          }
      }
      return a
    }
    
    function findMax(num){
        var a = num[0];
        for(var i =0;i<num.length;i++){
            if(a < num[i]){
                a = num[i]
            }
        }
        return a
    }
    function min(arr){arr.sort();return arr[0]}
    function max(arr){arr.sort();return arr[arr.length-1]}
    var arr = [2,3,5,546,7,43,342,666,65,666,888,1,8,5,4,665,657,8];
    console.log(min(arr));// 1
    console.log(max(arr));// 888
  }
}
var _i = new interview();
// _i.i_7();

var password = 'A3b@C2dEF';
var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');
if (!pwdRegex.test(password)) {
  alert('您的密码复杂度太低（密码中必须包含大小写字母、数字、特殊字符），请及时修改密码！');
}

  // console.log(new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}').test('11w1er!aS'))
  // console.log(new RegExp('(?=.*[0-9]).{8,}').test('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'))
  