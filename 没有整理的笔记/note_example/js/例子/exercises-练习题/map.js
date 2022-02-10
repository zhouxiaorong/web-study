
{
  /** 
   * 题
   * 1. https://blog.csdn.net/qq_36381242/article/details/100146841
   */
  var question = {
    iq_1(){ //  得到一个有7个1的数组
        Console.log(Array(7).fill(1));//得到一个有7个空位的数组，用fill方法将之都填为1
    },
    iq_2(){// 解释以下 unshift() 方法
        // ！！！ 在数组的开头添加新元素，并返回数组的新长度
    },
    ip_3(){// 用JavaScript实现数组合并的方法（要求去重）
        let a = [1,2,3,4,5];
        let b = [3,4,5,6,7,8];
        let c = a.concat(b);
        
        var d = c.reduce((prev, cur) => {
            if(!prev.includes(cur)){// !prev.includes(cur) || prev.indexOf(cur) < 0
                return prev.concat(cur)
              }else{
                return prev
              }
        }, [])
        
        console.log(d);
    },
    ip_4(){// 如何将一个值附加到数组中
        var a = [1,2,3,4];
        a.push(5);//从后面添加新数组
        console.log(a);// [ 1, 2, 3, 4, 5 ]
        var b = a.concat(6);//合并数组，返回新数组
        console.log(b);//[ 1, 2, 3, 4, 5, 6 ]
  
        //附加题 从前面添加
        a.unshift(0);
        console.log(a);// [ 0, 1, 2, 3, 4, 5 ]
    },
    ip_5(){// 已知var numArr=[3,6,2,4,1,5],完成以下两个操作
        // ①实现数组的倒序排列，输出[5,1,4,2,6,3]
        {
            var numArr=[3,6,2,4,1,5];
            numArr.reverse();
            console.log(numArr);
        }
  
        // ②实现数组的降序排列,输出[6,5,4,3,2,1]
        {
            var numArr=[3,6,2,4,1,5];
            numArr.sort().reverse();
            console.log(numArr);
        }
  
  
    },
    ip_6(){// JS里的函数参数arguments是数组吗？
  
    },
    ip_7(){// 将下面两个数组合并，并且删除第二个元素
        var arr1=['a','b','c'];
        var arr2=['d','e','f'];
        var arr3 = arr1.concat(arr2);
        arr3.splice(1,1);
        console.log(arr3);
    },
    ip_8(){// 数组有几种创建方式
        var a = [];//使用字面量的方式 最常用
        var b = new Array();// 使用数组构造函数
        var c = Array();// 使用数组表达式
    },
    ip_9(){// 如何删除数组成员
        var arr = [1,2,3,4,5,6];
        console.log(arr.shift());// 1 删除并返回第一个元素
        console.log(arr.pop());// 6 删除并返回最后一个元素
        console.log(arr.splice(1,2));// [3,4] 删除从索引1处开始的2位数据，返回删除的数据
        console.log(arr);// [2,5] 
    },
    ip_10(){// 用什么方法来判断一个对象的数据类型？如何判断数组？
        var arr = [1,'a',{},[]];
  
        //循环判断每个数据的对象类型，可以准确的检测值类型（也叫原始类型或者基本类型）
        arr.forEach(item => {
            console.log(typeof item);
        })
        // number
        // string
        // object
        // object
  
        //如何判断数组（用instanceOf()判断是不是数组）
        console.log(arr instanceof Array);// true
        console.log(arr instanceof Object);// true
        console.log(arr.constructor == Array );// true
        console.log(arr.constructor == Object );// false
  
    },
    ip_11(){// 讲一下手写数组快速排序的步骤
        var arr = [1,3,45,324,2,4,6];
        arr.sort((a,b) => a-b);
        console.log(arr);// [1,  2,   3, 4, 6, 45, 324]
        arr.reverse();
        console.log(arr);//[324, 45, 6, 4, 3,  2, 1]
  
  //         在数据集合中找一个基准点
  // 建立两个数组分别存储左边和右边的数组
  // 利用递归,进行下一个的比较
  // function quicklySort(arr){
  // 				if(!arr instanceof Array){
  // 					return ;
  // 				}
  // 				//少于一个成员直接返回
  // 				if(arr.length<=1){
  // 					return arr;
  // 				}
  // 				//获取中间数的索引值
  // 				var num = Math.floor(arr.length/2);
  // 				//获取中间数值
  // 				var value = arr.splice(num,1);
  // 				var left=[];//小于中间数的数组
  // 				var right=[];//大于中间数的数组
        
  // 				for(var i=0;i<arr.length;i++){
  // 					if(arr[i]<value){
  // 						left.push(arr[i]);
  // 					}else{
  // 						right.push(arr[i]);
  // 					}
  // 				}
  // 				//将左右两边的容器递归比较,并将结果与中间值拼接在一起
  // 				return quicklySort(left).concat(value,quicklySort(right));
  // 			}
    },
    ip_12(){// ['1','2','3'].map(parseInt)的执行结果是多少？
        console.log(['1','2','3'].map(parseInt));// [ 1, NaN, NaN ]
  //         分析：parseInt(val,radix)需要两个参数；radix表示解析时用的基数（进制）；
  
  // map(item,index,array) 对应的radix不合法导致解析失败
    },
    ip_13(){// 输出什么？
        //push:添加并返回新长度
        function addToList(item, list) {
            return list.push(item);
        }
           
        const result = addToList("apple", ["banana"]);
        console.log(result);// 2
    },
    ip_14(){// 输出什么
        const myLifeSummedUp = ["☕", "?", "?", "?"]
        
        for (let item in myLifeSummedUp) {
          console.log(item)
        }
        // 0
        // 1
        // 2
        // 3
        
        for (let item of myLifeSummedUp) {
          console.log(item)
        }
        // ☕
        // ?
        // ?
        // ?
    },
    ip_15(){// 输出什么？
        let newList = [1, 2, 3].push(4);
        console.log(newList);// 4
        // console.log(newList.push(5))// Error 因为push返回的是数组的长度 4 number类型没有push方法
    },
  }
  question.ip_15();
}


{
    // var arr = new Array(7).fill(1);
    // console.log(arr);
    // var arr2 =  Array(7).fill(1);
    // console.log(arr2);
}

{
    // // 在数组开头添加新元素，并返回数组的新长度
    // // 删除数组第一个数据，并返回被删除的数据 shift
    // // 删除数组最后一个数据，并返回被删除的数据 pop
    // var a = [1,2,3,4];
    // console.log(a.unshift(6));// 5
    // console.log(a);//[6,1,2,3,4]
}

{
    // var a = [1,2,3,4,8];
    // var b = [3,4,5,6,7];
    // var c = a.concat(b);
    // var d = c.reduce((prev,curr) => {
    //     if(prev.includes(curr)){
    //         return prev;
    //     }else{
    //         return prev.concat(curr);
    //     }
    // }, []);
    // console.log(c);//[1,2,3,4,8,3,4,5,6,7]
    // console.log(d);//[1,2,3,4,8,5,6,7]
    // d.sort();
    // console.log(d);//[1,2,3,4,5,6,7,8]
    // d.reverse();
    // console.log(d);//[8,7,6,5,4,3,2,1]
}

{
    // var a = [1,2,3,4];
    // a.push(5);
    // console.log(a);//[1,2,3,4,5]
    // var b = a.concat(6);
    // console.log(a);//[1,2,3,4,5]
    // console.log(b);//[1,2,3,4,5,6]
}

{
    // var arr = [6,4,3,2,1,7,5,3,4,6,7,8,0];
    // //倒序排列
    // arr.reverse();
    // console.log(arr);

    // //降序排列
    // arr.sort().reverse();
    // console.log(arr);
}

{// x
    // JS里的函数参数arguments是数组吗？
}

{// x
    // // 将下面两个数组合并，并且删除第二个元素
    // var a = [1,2,3];
    // var b  = [4,5,6];
    // var c = a.concat(b);
    // c.splice(1,1);
    // console.log(c);//[1,3,4,5,6]
}

{
    // var a = [];
    // var b = new Array();
    // var c = Array();
}

{// x
    // var a = [1,2,3,4,5];
    // console.log(a.pop());// 5
    // console.log(a);//[1,2,3,4]
    // console.log(a.shift());// 1
    // console.log(a);//[2,3,4]
    // console.log(a.splice(1,2,9,8,7,6));//2 -> [3,4]
    // console.log(a);//[2,9,8,7,6]
    // console.log(a.splice(1,2,9,8,7,6));//5 -> [9,8]
    // console.log(a);//[2,9,8,7,6,7,6]
}

{// x
    //判断数据类型
    // console.log(typeof 3);// number
    // console.log(typeof 'd');// string
    // console.log(typeof new Date());//object
    // console.log(typeof new Array());//object
    // console.log(typeof {});//object
    // var a = [1,2];
    // console.log(a.constructor == Array);//true
    // console.log(a.constructor == Object);//false
}

{// x
    // 讲一下手写数组快速排序的步骤
}
{// x
    // ['1','2','3'].map(parseInt)的执行结果是多少
}

{
    // var a = [];
    // console.log(a.constructor);// Array
    // var b = {};
    // console.log(b.constructor);// Object
    // var c = "c";
    // console.log(c.constructor);// String
    // var d = 42;
    // console.log(d.constructor);// Number
    // var e = new Date()
    // console.log(e.constructor);// Date
    // var f = true;
    // console.log(f.constructor);// Boolean
    // var g = function(){}
    // console.log(g.constructor);// Function
    // var h = new Set();
    // console.log(h.constructor);// Set
    // var i = new Map();
    // console.log(i.constructor);// Map
    
}
var s = new Set();[2, 3 , 5 , 4 , 5 , 2 , 2] .forEach(x => s.add(x)) ;
console.log(s.toJSON());
