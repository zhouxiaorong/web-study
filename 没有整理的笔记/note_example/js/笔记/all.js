

/*
    数字的字面量
        注意点：
            1. 显示的时候都会以十进制显示
        1. 可以有三种进制：
            10进制: 普通的数字就是十进制
            8进制: 如果以0开头、或者以0o开头、或者以0O开头的都是八进制，八进制只能用0~7来表示
            16进制: 如果以0x开头的都是十六进制。

    Math.pow(底数,几次方)
        计算一个数的任意次根。
        说明：
            1. pow() 方法可返回 x 的 y 次幂的值。
            2. 如果结果是虚数或负数，则该方法将返回 NaN。
            3. 如果由于指数过大而引起浮点溢出，则该方法将返回 Infinity。
        可能导致错误的情况：
            如果底数 x 为负数并且指数 y 不是整数，将会导致 domain error 错误。
            如果底数 x 和指数 y 都是 0，可能会导致 domain error 错误，也可能没有；这跟库的实现有关。
            如果底数 x 是 0，指数 y 是负数，可能会导致 domain error 或 pole error 错误，也可能没有；这跟库的实现有关。
            如果返回值太大或者太小，将会导致 range error 错误。

    Math.sqrt(x)
        返回不同数字的平方根
        说明：
            1. x 必需。必须是大于等于 0 的数。
        返回值
            参数 x 的平方根。如果 x 小于 0，则返回 NaN。

    隐氏转换
        说明
            1. 没有写parseInt()、parseFloat()自己帮你转格式
            2. null、false 将被转为 0
            3. true 将被转为 1
            4. 不纯的字符串没法隐式转换
            5. undefined不能进行隐式转换
            6. 加法没有隐式转换，减法、乘法、除法有隐式转换
        例：
            console.log(3 + "8");	//38
            console.log(3 - "8");	//-5
            console.log(3 * "8");	//24
            console.log(3 / "8");	//0.375
            console.log(3 * null); //0
            console.log(3 * false); //0
            console.log(3 * true);	//3
            console.log(3 * "8天");	//NaN
            console.log(3 * undefined); //NaN
            console.log(3 + undefined);	//NaN	
            console.log(3 + null);		//3


    continue:
        终止本次循环，接着还执行后面的循环
　　　　跳过当次循环中剩下的语句，执行下一次循环。

    break:
        完全终止循环
        用于完全结束一个循环，跳出循环体执行循环后面的语句
        break只中断最内层循环，外层循环还会继续
    break label : 
        语法
            label:
                statement
        说明
            label语句可以在代码中添加标签，以便将来使用。定义的标签可以在将来由break或continue语句引用。加标签的语句一般都要与for语句等循环语句配合使用。
        示例
            例子1：
                var num=0;
                outter:                         //label语句，名字可自定义
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        if(i==5&&j==5){
                            break ;             //跳出当前循环，但会继续执行外循环
                        }
                        num++;
                    }
                }
                document.write(num);   //95
            例子2：
                var num=0;
                outter:
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        if(i==5&&j==5){
                            break outter;    //退出内部循环，指向outter，即外循环，同时退出外循环
                        }
                        num++;
                    }
                }
                document.write(num);   //55
            例子3：
                var num=0;
                outter:
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        if(i==5&&j==5){
                            continue;    //当i==5&&j==5时，内循环退出一次
                        }
                        num++;
                    }
                }
                document.write(num);     //99
            例子4：
                var num=0;
                outter:
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        if(i==5&&j==5){
                            continue outter;  //强制退出内部循环，执行外部循环，和 例子1 一样
                        }
                        num++;
                    }
                }
                document.write(num);   //95
 */
/* 运算符

    关系运算符：
        > 、 < 、>=  、 <= 、 == 、 != 、 === 、 !== 、 
        说明：
            1. ==表示相等，会帮你进行隐式转换
            2. ===表示全等，不仅仅比较数值是否相等，还比较类型是否相等
            3. != 和 !==

    逻辑运算符
        && 、 ! 、 ||
        说明
            1. 运算顺序是非、与、或

    赋值运算符
        += 、 -= 、 *= 、 /= 、 %= 、 i++ 、 ++i
        说明
            1. i++: 先使用i，然后把 i 加1
            1. ++i: 先把 i 加1，然后使用i

    三元运算符
        ? :
        例：
            console.log(1==1 ? 'a' : 'b');// a
    
 */
/* dom - 查找 HTML 元素
      document.getElementById(id)
          通过元素 id 来查找元素
      document.getElementsByTagName(name)
          通过标签名来查找元素
      document.getElementsByClassName(name)
          通过类名来查找元素
 */
/* dom - 改变 HTML 元素
      element.innerHTML = value
          改变元素的 inner HTML
          value：html内容
      element.attribute = value
          改变 HTML 元素的属性值
          value：属性值
      element.setAttribute(attribute, value)
          改变 HTML 元素的属性值
          attribute：属性名称
          value：属性值
      element.style.property = value
          改变 HTML 元素的样式
          property：样式名称
          value：新样式
 */
/* dom - 添加和删除元素
      element document.createElement(nodename)
          通过指定名称创建一个HTML元素
          nodename: 必须，String。创建元素的名称（节点名称）
          返回: 元素对象，创建的元素节点
      document.createTextNode(text)
          创建文本节点
          text: 文本节点的文本
      document.appendChild(node)
          向元素添加新的子节点，作为最后一个子节点。
          如果您需要创建包含文本的新段落，请记得添加到段落的文本的文本节点，然后向文档添加该段落。
          也可以使用 appendChild() 方法从一个元素向另一个元素中移动元素。
      document.removeChild(node)
          从元素中移除子节点。
          以 Node 对象返回被删除的节点，如果节点不存在则返回 null。
      document.replaceChild(newnode,oldnode)
          替换元素中的子节点。
          newnode: 必需。您希望插入的节点对象。
          oldnode: 必需。您希望删除的节点对象。
      document.write(text)
          写入 HTML 输出流
 */
/* dom - 添加事件处理程序
      element.onclick = function(){code}
          向 onclick 事件添加事件处理程序
 */
/* dom - 查找 HTML 对象
      document.anchors
          返回拥有 name 属性的所有 <a> 元素。	1
      document.applets	
          返回所有 <applet> 元素（HTML5 不建议使用）	1
      document.baseURI	
          返回文档的绝对基准 URI	3
      document.body	
          返回 <body> 元素	1
      document.cookie	
          返回文档的 cookie	1
      document.doctype	
          返回文档的 doctype	3
      document.documentElement	
          返回 <html> 元素	3
      document.documentMode	
          返回浏览器使用的模式	3
      document.documentURI	
          返回文档的 URI	3
      document.domain	
          返回文档服务器的域名	1
      document.domConfig	
          废弃。返回 DOM 配置	3
      document.embeds	
          返回所有 <embed> 元素	3
      document.forms	
          返回所有 <form> 元素	1
      
    yy
      document.title	
          返回 <title> 元素	1
      document.URL	
          返回文档的完整 URL	1

    yn
      document.scripts	
          返回所有 <script> 元素	3
      document.referrer	
          返回引用的 URI（链接文档）	1
      document.links	
          返回拥有 href 属性的所有 <area> 和 <a> 元素	1
      document.images	
          返回所有 <img> 元素	1
      document.inputEncoding	
          返回文档的编码（字符集）	3
      document.head	
          返回 <head> 元素	3
    nn
      document.strictErrorChecking	
          返回是否强制执行错误检查	3
      document.readyState	
          返回文档的（加载）状态	3
      document.lastModified	
          返回文档更新的日期和时间	3
      document.implementation	
          返回 DOM 实现	3

          
 */
/* element - HTML DOM 节点
在 HTML DOM （文档对象模型）中，每个部分都是节点：

文档本身是文档节点
所有 HTML 元素是元素节点
所有 HTML 属性是属性节点
HTML 元素内的文本是文本节点
注释是注释节点
  element.accessKey	设置或返回元素的快捷键。
  element.appendChild()	向元素添加新的子节点，作为最后一个子节点。
  element.attributes	返回元素属性的 NamedNodeMap。
  element.childNodes	返回元素子节点的 NodeList。
  element.className	设置或返回元素的 class 属性。
  element.clientHeight	返回元素的可见高度。
  element.clientWidth	返回元素的可见宽度。
  element.cloneNode()	克隆元素。
  element.compareDocumentPosition()	比较两个元素的文档位置。
  element.contentEditable	设置或返回元素的文本方向。
  element.dir	设置或返回元素的内容是否可编辑。
  element.firstChild	返回元素的首个子。
  element.getAttribute()	返回元素节点的指定属性值。
  element.getAttributeNode()	返回指定的属性节点。
  element.getElementsByTagName()	返回拥有指定标签名的所有子元素的集合。
  element.getFeature()	返回实现了指定特性的 API 的某个对象。
  element.getUserData()	返回关联元素上键的对象。
  element.hasAttribute()	如果元素拥有指定属性，则返回true，否则返回 false。
  element.hasAttributes()	如果元素拥有属性，则返回 true，否则返回 false。
  element.hasChildNodes()	如果元素拥有子节点，则返回 true，否则 false。
  element.id	设置或返回元素的 id。
  element.innerHTML	设置或返回元素的内容。
  element.insertBefore()	在指定的已有的子节点之前插入新节点。
  element.isContentEditable	设置或返回元素的内容。
  element.isDefaultNamespace()	如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
  element.isEqualNode()	检查两个元素是否相等。
  element.isSameNode()	检查两个元素是否是相同的节点。
  element.isSupported()	如果元素支持指定特性，则返回 true。
  element.lang	设置或返回元素的语言代码。
  element.lastChild	返回元素的最后一个子元素。
  element.namespaceURI	返回元素的 namespace URI。
  element.nextSibling	返回位于相同节点树层级的下一个节点。
  element.nodeName	返回元素的名称。
  element.nodeType	返回元素的节点类型。
  element.nodeValue	设置或返回元素值。
  element.normalize()	合并元素中相邻的文本节点，并移除空的文本节点。
  element.offsetHeight	返回元素的高度。
  element.offsetWidth	返回元素的宽度。
  element.offsetLeft	返回元素的水平偏移位置。
  element.offsetParent	返回元素的偏移容器。
  element.offsetTop	返回元素的垂直偏移位置。
  element.ownerDocument	返回元素的根元素（文档对象）。
  element.parentNode	返回元素的父节点。
  element.previousSibling	返回位于相同节点树层级的前一个元素。
  element.removeAttribute()	从元素中移除指定属性。
  element.removeAttributeNode()	移除指定的属性节点，并返回被移除的节点。
  element.removeChild()	从元素中移除子节点。
  element.replaceChild()	替换元素中的子节点。
  element.scrollHeight	返回元素的整体高度。
  element.scrollLeft	返回元素左边缘与视图之间的距离。
  element.scrollTop	返回元素上边缘与视图之间的距离。
  element.scrollWidth	返回元素的整体宽度。
  element.setAttribute()	把指定属性设置或更改为指定值。
  element.setAttributeNode()	设置或更改指定属性节点。
  element.setIdAttribute()	
  element.setIdAttributeNode()	
  element.setUserData()	把对象关联到元素上的键。
  element.style	设置或返回元素的 style 属性。
  element.tabIndex	设置或返回元素的 tab 键控制次序。
  element.tagName	返回元素的标签名。
  element.textContent	设置或返回节点及其后代的文本内容。
  element.title	设置或返回元素的 title 属性。
  element.toString()	把元素转换为字符串。
  nodelist.item()	返回 NodeList 中位于指定下标的节点。
  nodelist.length	返回 NodeList 中的节点数。
*/
/* Attribute - 
  Attr 对象
    在 HTML DOM 中，Attr 对象表示 HTML 属性。
    HTML 属性始终属于 HTML 元素。
  NamedNodeMap 对象
    在 HTML DOM 中，NamedNodeMap 对象表示元素属性节点的无序集合。

    NamedNodeMap 中的节点可通过名称或索引（数字）来访问。

    attr.isId	如果属性是 id 类型，则返回 true，否则返回 false。
    attr.name	返回属性的名称。
    attr.value	设置或返回属性的值。
    attr.specified	如果已指定属性，则返回 true，否则返回 false。
    nodemap.getNamedItem()	从 NamedNodeMap 返回指定的属性节点。
    nodemap.item()	返回 NamedNodeMap 中位于指定下标的节点。
    nodemap.length	返回 NamedNodeMap 中的节点数。
    nodemap.removeNamedItem()	移除指定的属性节点。
    nodemap.setNamedItem()	设置指定的属性节点（通过名称）。

  DOM 4 警告！
    在 W3C DOM Core 中，Attr (attribute) 对象从 Node 对象继承所有属性和方法。
    在 DOM 4 中，Attr 对象不再从 Node 继承。
    为了保证未来的代码安全，您应该避免在属性对象上使用节点对象的属性和方法：
    attr.appendChild()	属性没有子节点。
    attr.attributes	属性没有属性。
    attr.baseURI	使用 document.baseURI 代替。
    attr.childNodes	属性没有子节点。
    attr.cloneNode()	使用 attr.value 代替。
    attr.firstChild	属性没有子节点。
    attr.hasAttributes()	属性没有属性。
    attr.hasChildNodes	属性没有子节点。
    attr.insertBefore()	属性没有子节点。
    attr.isEqualNode()	没有意义。
    attr.isSameNode()	没有意义。
    attr.isSupported()	始终为 true。
    attr.lastChild	属性没有子节点。
    attr.nextSibling	属性没有同级节点。
    attr.nodeName	使用 attr.name 代替。
    attr.nodeType	始终为 2 (ATTRIBUTE_NODE)。
    attr.nodeValue	使用 attr.value 代替。
    attr.normalize()	属性无法被正常化。
    attr.ownerDocument	始终是您的 HTML 文档。
    attr.ownerElement	这是您用来访问该属性的 HTML 元素。
    attr.parentNode	这是您用来访问该属性的 HTML 元素。
    attr.previousSibling	属性没有同级节点。
    attr.removeChild	属性没有子节点。
    attr.replaceChild	属性没有子节点。
    attr.textContent	使用 attr.value 代替。
*/
/* event - 
    Event 对象
        Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

        事件通常与函数结合使用，函数不会在事件发生前被执行！

        事件句柄　(Event Handlers)
        HTML 4.0 的新特性之一是能够使 HTML 事件触发浏览器中的行为，比如当用户点击某个 HTML 元素时启动一段 JavaScript。下面是一个属性列表，可将之插入 HTML 标签以定义事件的行为。

    属性	此事件发生在何时...
    onabort	图像的加载被中断。
    onblur	元素失去焦点。
    onchange	域的内容被改变。
    onclick	当用户点击某个对象时调用的事件句柄。
    ondblclick	当用户双击某个对象时调用的事件句柄。
    onerror	在加载文档或图像时发生错误。
    onfocus	元素获得焦点。
    onkeydown	某个键盘按键被按下。
    onkeypress	某个键盘按键被按下并松开。
    onkeyup	某个键盘按键被松开。
    onload	一张页面或一幅图像完成加载。
    onmousedown	鼠标按钮被按下。
    onmousemove	鼠标被移动。
    onmouseout	鼠标从某元素移开。
    onmouseover	鼠标移到某元素之上。
    onmouseup	鼠标按键被松开。
    onreset	重置按钮被点击。
    onresize	窗口或框架被重新调整大小。
    onselect	文本被选中。
    onsubmit	确认按钮被点击。
    onunload	用户退出页面。
    鼠标 / 键盘属性
    属性	描述
    altKey	返回当事件被触发时，"ALT" 是否被按下。
    button	返回当事件被触发时，哪个鼠标按钮被点击。
    clientX	返回当事件被触发时，鼠标指针的水平坐标。
    clientY	返回当事件被触发时，鼠标指针的垂直坐标。
    ctrlKey	返回当事件被触发时，"CTRL" 键是否被按下。
    metaKey	返回当事件被触发时，"meta" 键是否被按下。
    relatedTarget	返回与事件的目标节点相关的节点。
    screenX	返回当某个事件被触发时，鼠标指针的水平坐标。
    screenY	返回当某个事件被触发时，鼠标指针的垂直坐标。
    shiftKey	返回当事件被触发时，"SHIFT" 键是否被按下。
    IE 属性
    除了上面的鼠标/事件属性，IE 浏览器还支持下面的属性：

    属性	描述
    cancelBubble	如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。
    fromElement	对于 mouseover 和 mouseout 事件，fromElement 引用移出鼠标的元素。
    keyCode	对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup 事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。
    offsetX,offsetY	发生事件的地点在事件源元素的坐标系统中的 x 坐标和 y 坐标。
    returnValue	如果设置了该属性，它的值比事件句柄的返回值优先级高。把这个属性设置为 fasle，可以取消发生事件的源元素的默认动作。
    srcElement	对于生成事件的 Window 对象、Document 对象或 Element 对象的引用。
    toElement	对于 mouseover 和 mouseout 事件，该属性引用移入鼠标的元素。
    x,y	事件发生的位置的 x 坐标和 y 坐标，它们相对于用CSS动态定位的最内层包容元素。
    标准 Event 属性
    下面列出了 2 级 DOM 事件标准定义的属性。

    属性	描述
    bubbles	返回布尔值，指示事件是否是起泡事件类型。
    cancelable	返回布尔值，指示事件是否可拥可取消的默认动作。
    currentTarget	返回其事件监听器触发该事件的元素。
    eventPhase	返回事件传播的当前阶段。
    target	返回触发此事件的元素（事件的目标节点）。
    timeStamp	返回事件生成的日期和时间。
    type	返回当前 Event 对象表示的事件的名称。
    标准 Event 方法
    下面列出了 2 级 DOM 事件标准定义的方法。IE 的事件模型不支持这些方法：

    方法	描述
    initEvent()	初始化新创建的 Event 对象的属性。
    preventDefault()	通知浏览器不要执行与事件关联的默认动作。
    stopPropagation()	不再派发事件。

*/















