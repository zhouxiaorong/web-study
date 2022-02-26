
/************************************************************* 垃圾收集 start *************************************************************/
// 日常中的某些情况下垃圾收集器无法回收无用变量，导致的一个结果就是——内存使用率不断增高，以下为对应的情况以及处理方法。
 
/** 1.对象相互引用会导致引用计数始终为2，所以用完对象后应将引用设为null */
{
  let element = document.getElementById("test");
  let myObject = new Object();
  myObject.element = element;
  element.someObject = myObject;
  
  //....用完后需要加如下代码
  myObject.element = null;
  element.someObject = null;
}

/** 2.当数据不再有用时，需要通过将值设为null来解除引用，该做法适用于大多数全局变量和全局对象属性 */
{
  function createPerson(name){
      let localPerson = new Object();
      localPerson.name = name;
      return localPerson
  }
  
  let globalPerson = createPerson("test")
  
  //...用完后手动解除
  globalPerson = null
}

/** 关于与闭包相关的内存泄漏如下 */
var assignHandler = {
  before: function(){
    let element = document.getElementById("test");
    element.onclick = function(){
      alert(element.id)    
    }          
  },
  //以上会导致element的引用数无法被回收，更改如下
  after: function(){
    let element = document.getElementById("test");
    let id = element.id;
    element.onclick = function(){
      alert(id)
    }          
    element = null;  
  }
}
/************************************************************* 垃圾收集 end *************************************************************/

/************************************************************* 事件委托 start *************************************************************/
/* 
  在js中，添加到页面上的事件处理程序数量会直接关系到页面整体运行运行性能。导致这一问题的原因是多方面的。
  首先函数都是对象，都会占用内存；内存中对象越多，性能就越差。
  其次，必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。以下为对应的情况以及处理方法
*/

/* 1.同类型的事件处理函数过多时，应该结合为一个 */
{
  // //html代码
  // <ul id="myLinks">
  //     <li id="goSomeWhere">Go somewhere</li>
  //     <li id="sayHi">Say hi</hi>
  // </ul>
  var myLinksClick = {
    //分别加上事件处理-JS代码
    before: function(){
      let item1 = document.getElementById("goSomeWhere");
      let item2 = document.getElementById("sayHi");
      EventUtil.addHandler(item1, "click", function(event){
        console.log("goSomeWhere")  
      });
      EventUtil.addHandler(item2, "click", function(event){
        console.log("sayHi");  
      });
    }, 
    //改善点即将click事件结合在一起
    after: function(){
      let list = document.getElementById("myLinks")
      EventUtil.addHandler(list, "click", function(event){
        event = EventUtil.getEvent(event);
        let target = EventUtil.getTarget(event);
        
        switch(target.id){
          case "goSomeWhere":
            console.log("goSomeWhere");
            break;
        case "sayHi":
            console.log("sayHi");    
            break;            
        }     
      });
    }
  }
}

/* 2.
  内存留有过时不用的“空事件处理程序”也是造成性能问题的主因，两种情况下会造成该问题。运用 removeChild() 和 replaceChild() 方法去除节点时；
  在使用 innerHTML 替换页面某一部分时，如果带有事件处理程序的元素被 innerHTML 删除了，那么原有事件处理函数极有可能无法被回收
*/
{
  //例子中 id 为 myBtn 的点击事件变为了空事件处理程序
  /* <div id="myDiv">
      <input type="button" value="Click Me" id="myBtn">
  </div> */
  var event_click = {
    before: function(){
      let btn = document.getElementById("myBtn");
      btn.onclick = function(){
        document.getElementById("myDiv").innerHTML = "xxxx";  
      };
    }, 
    //改善点即需要手工移除事件处理程序
    after: function(){
      let btn = document.getElementById("myBtn");
      btn.onclick = function(){
        btn.onclick = null;
        document.getElementById("myDiv").innerHTML = "xxxx";  
      };
    }
  }
}
/************************************************************* 事件委托 end *************************************************************/

/************************************************************* 注意作用域 start *************************************************************/
// 关于作用域链，我们明白访问全局变量会比访问局部变量要慢

/* 1.若某处循环使用全局变量时，我们可以略做修改 */
{
  //假设有多个 img 标签的内容，循环中引用了多次 document 全局变量
  var updateUI = {
    before: function(){
      let imgs = document.getElementsByTagName("img")
      for (let i = 0, len = imgs.length; i < len; ++i){
        imgs[i].title = document.title + " image " + i  
      }    
      let msg = document.getElementById("msg");
      msg.innerHTML = "Update";   
    }, 
    after: function(){
      let doc = document
      let imgs = doc.getElementsByTagName("img")
      for (let i = 0, len = imgs.length; i < len; ++i){
        imgs[i].title = doc.title + " image " + i 
      }    
      let msg = doc.getElementById("msg");
      msg.innerHTML = "Update";    
    }
  }
}

/* 2.尽量少用 with，因为 with 会增加其中执行代码的作用域链的长度 */
/************************************************************* 注意作用域 end *************************************************************/

/************************************************************* 选择正确方法 start *************************************************************/
/* 1.遇到有多次属性查询的场合，可以考虑是否能做优化 */
{
  var test = {
    //这里总共做了6次属性查询，其中 window.location.href.substring 与 window.location.href.indexOf 分别为3次
    before: function(){  
      let query = window.location.href.subsring(window.location.href.indexOf("?"))
    }, 
    //改善, 第一次访问时复杂度会是O(n),但该版本只有4次属性查询，相对于原始版本节省了33%
    after: function(){  
      let url = window.location.href;
      let query = url.substring(url.indexOf("?"));
    }
  }
}

/* 2.循环优化，这里其实用后测试循环代替前测试循环会更好，不过本地不采用，例子如下 */
{
  var test = {
    //原有复杂度为O(n)
    before: function(){  
      for (let i = 0; i < values.length; ++i){
        process(values[i]);  
      }
    }, 
    //更改后复杂度为O(1)
    after: function(){  
      for (let i = values.length - 1; i >= 0; --i){
        process(values[i])  
      }
    }
  }
}

/* 3.最小化语句数相关 */
{
  // 进行多个声明时，我们可以进行组合
  var compose = {
    before: function(){  
      let count = 5;
      let color = "blue";
      let values = [1, 2, 3];
    }, 
    after: function(){  
      let count = 5,
          color = "blue",
          values = [1, 2, 3]
    }
  }
  // 插入迭代值时
  var compose = {
    before: function(){  
      let name = values[i];
      i++;
    }, 
    after: function(){  
      let name = values[i++]
    }
  }
  // 使用数组和对象字面量时
  var compose = {
    before: function(){  
      let values = new Array();
      values[0] = 123;
      values[1] = 456;
      values[2] = 789;
      
      let person = new Object();
      person.name = "Eric";
      person.age = 20;
    }, 
    after: function(){  
      let values = [123, 456, 789]
      let person = {
        name: "Eric",
        age:20,    
      }
    }
  }
}
/* 4.
  创建 DOM 节点最好使用 innerHTML 方法，因为 innerHTML 设置值时，后台会创建 HTML 解析器，然后使用内部的 DOM 调用来创建 DOM 结构，而非基于 JS 的 DOM 调用。
  调用一次 innerHTML，就会进行一次现场刷新，循环插入 DOM 结构时，应注意尽量调用少次数的 innerHTML
*/
{
  var updateUI = {
    //错误方法，做了很多次现场刷新
    before: function(){
      let list = document.getElementById("myList"),
          i;
      for (i = 0; i < 10; ++i){
        list.innerHTML = html += "<li>Item " + i + "</li>"  
      }
    }, 
    //正确方法，尽管在字符串连接上有性能损失，但却只做了一次现场刷新
    after: function(){
      let list = document.getElementById("myList"),
          html = "",
          i;
      for (i = 0; i < 10; ++i){
        html += "<li>Item " + i + "</li>"  
      }
      list.innerHTML = html
    }
  }
}
/* 5.
  其他如有多个 if-else 语句时，应尽可能转为 Switch 语句；
  用 appendChild() 插入元素时，应采用自上而下插入；
  面向对象编程时，应合理释放内存，设 object 为 null. 
*/
/************************************************************* 选择正确方法 end *************************************************************/

/* 
  避免全局查找
  在一个函数中会用到全局对象存储为局部变量来减少全局查找，因为访问局部变量的速度要比访问全局变量的速度更快些
*/
{
  //当我要使用当前页面地址和主机域名
  function before(){
    alert(window.location.href + window.location.host);
  }
  //最好的方式是如下这样  先用一个简单变量保存起来
  function after(){
    var location = window.location;
    alert(location.href + location.host);
  }
}
/* 
  定时器
  如果针对的是不断运行的代码，不应该使用 setTimeout ，而应该是用 setInterval ，
  因为 setTimeout 每一次都会初始化一个定时器，而 setInterval 只会在开始的时候初始化一个定时器
 */
{
  function before(){
    var timeoutTimes = 0;
    function timeout() {
        timeoutTimes++;
        if (timeoutTimes < 10) {
            setTimeout(timeout, 10);
        }
    }
    timeout();
  }
  //可以替换为：
  function after(){
    var intervalTimes = 0;
    function interval() {
        intervalTimes++;
        if (intervalTimes >= 10) {
            clearInterval(interv);
        }
    }
    var interv = setInterval(interval, 10);  
  }   
}

/* 
  字符串连接如果要连接多个字符串，应该少使用+=
*/
{
  function before(){
    s+=a;
    
    s+=b;
    
    s+=c;
    
  }
  function after(){
    s+=a + b + c;
  }
  // 而如果是收集字符串，比如多次对同一个字符串进行+=操作的话，最好使用一个缓存，使用JavaScript数组来收集，最后使用join方法连接起来
  var buf = [];
  for (var i = 0; i < 100; i++) {
      buf.push(i.toString());
  }
  var all = buf.join("");
}










  function before(){
  }
  function after(){
  }

var updateUI = {
  before: function(){  
  }, 
  after: function(){  
  }
}

var EventUtil={
  /**
   * 添加事件
   * @param {*} element 
   * @param {*} type 事件名称
   * @param {*} handler 当事件发生时运行的函数
   */
  addHandler:function(element, type, handler){
     if(element.addEventListener){//使用DOM2级方法添加事件
        element.addEventListener(type, handler, false);
     }else if(element.attachEvent){//使用IE方法添加事件
        element.attachEvent("on"+type, handler);
     }else{//使用DOM0级方法添加事件
        element["on"+type] = handler;
     }
  }, 
  /**
   * 取消事件
   * @param {*} element 
   * @param {*} type 事件名称
   * @param {*} handler 当事件发生时运行的函数
   */
  removeHandler:function(element, type, handler){
     if(element.removeEventListener){
        element.removeEventListener(type, handler, false);
     }else if(element.detachEvent){
        element.edtachEvent("on"+type, handler);
     }else{
        element["on"+type] = null;
     }
  },
  /** 使用这个方法跨浏览器取得event对象 */
  getEvent:function(event){
     return event ? event : window.event;
  },
  /** 返回事件的实际目标  */
  getTarget:function(event){
     return event.target || event.srcElement;
  },
  /** 阻止事件的默认行为 */
  preventDefault:function(event){
     if(event.preventDefault){
        event.preventDefault();
     }else{
        event.returnValue = false;
     }
  },
  /* 立即停止事件在DOM中的传播 */
  stopPropagation:function(event){
    //避免触发注册在document.body上面的事件处理程序
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble=true;
    }
  },
  /* 获取mouseover和mouseout相关元素 */
  getRelatedTarget:function(event){
     if(event.relatedTarget){
        return event.relatedTarget;
     }else if(event.toElement){      //兼容IE8-
        return event.toElement;
     }else if(event.formElement){
        return event.formElement;
     }else{
        return null;
     }
  },
  /* 获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个 */
  getButton:function(event){
     if(document.implementation.hasFeature("MouseEvents","2.0")){
        return event.button;
     }else{
        switch(event.button){   //将IE模型下的button属性映射为DOM模型下的button属性
           case 0:
           case 1:
           case 3:
           case 5:
           case 7:
              return 0;  //按下的是鼠标主按钮（一般是左键）
           case 2:
           case 6:
              return 2;  //按下的是中间的鼠标按钮
           case 4:
              return 1;  //鼠标次按钮（一般是右键）
        }
     }
  },
  /* 获取表示鼠标滚轮滚动方向的数值 */
  getWheelDelta:function(event){
     if(event.wheelDelta){
        return event.wheelDelta;
     }else{
        return -event.detail*40;
     }
  },
  /* 以跨浏览器取得相同的字符编码，需在keypress事件中使用 */
  getCharCode:function(event){
     if(typeof event.charCode=="number"){
        return event.charCode;
     }else{
        return event.keyCode;
     }
  }
};