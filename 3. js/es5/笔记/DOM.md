# DOM
  > DOM是JS操控HTML和CSS的桥梁

## 目录
  - [DOM基本概念](#DOM基本概念)
  - [节点访问和位置关系](#节点访问和位置关系)
    - [访问元素节点](#访问元素节点)
    - [节点的关系](#节点的关系)
  - [节点操作](#节点操作)
    - [节点的创建](#节点的创建)
    - [节点的移除](#节点的移除)
    - [节点的克隆](#节点的克隆)
  - [DOM事件](#DOM事件)
    - [事件监听](#事件监听)
    - [事件传播](#事件传播)
    - [事件对象](#事件对象)
    - [事件委托](#事件委托)
  - [动画](#动画)
    - [实现动画](#实现动画)
    - [动画效果开发](#动画效果开发)

## DOM基本概念
  > DOM(Documet Object Model, 文档对象模型)是JavaScript操作HTML文档的接口，使文档操作变得非常优雅、简便
  > 特点：将文档表示为节点树
  - nodeType常用属性值
    - 节点的nodeType属性可以显示这个节点具体的类型
    - 1: 元素节点，例如`<p>`和`<div>`
    - 3: 文字节点
    - 8: 注释节点
    - 9: document节点
    - 10: DTD节点
  - 认识document对象
    > document对象是DOM中最重要的东西，几乎所有DOM的功能都封装在了document对象中
    > document对象也表示整个HTML文档，它是DOM节点树的根
    > document对象的nodeType属性值是9

## 节点访问（方法）
  - 访问元素节点
    > 所谓‘访问’元素节点，就是指‘得到’、‘获取’页面上的元素节点
    > 对节点进行操作，第一步就是要得到它
    > 访问元素节点主要依靠document对象
  - 访问元素节点的常用方法
    - document.getElementById()
      - 功能: 通过元素节点的id得到元素
      - 兼容性: IE6
      - 注意事项: 
        * 如果页面上有相同id的元素，则只能得到第一个
        * 不管元素藏得位置有多深，都能通过id把它找到
      - 延迟运行: 
        - 在测试DOM代码时，通过JS一定要写到HTML节点的后面，否则JS无法找到相应HTML节点
        - 可以使用window.onload = function(){}事件，使页面加载完毕后，再执行指定的代码
      - 例
        ```html
        <div id="box">盒子</div>
        <div id="para">段落</div>
        ```
        ```js
          var box = document.getElementById('box');
          var para = document.getElementById('para');
        ```
    - document.getElementsByTagName(tagName)
      - 功能说明: 
        - tagName: 必须。你需要获取的元素标签名。
        - 通过标签名得到元素数组
        - 返回带有指定标签名的对象的集合
        - 返回元素的顺序是它们在文档中的顺序
        - 如果把特殊字符串 "*" 传递给 getElementsByTagName() 方法，它将返回文档中所有元素的列表，元素排列的顺序就是它们在文档中的顺序。
      - 兼容性: IE6
      - 注意事项: 
        * 即使页面上只有一个指定标签名的节点，也将得到长度为1的数组
        * 传递给 getElementsByTagName() 方法的字符串可以不区分大小写
        * 任何一个节点元素都可以调用getElementsByTagName()方法，从而得到其内部的某种类的元素节点
      - 例
        ```html
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        ```
        ```js
        var ps = document.getElementsByTagName('p');
        alert(ps.length);
        ```
    - document.getElementsByClassName(className)
      - 功能说明: 
        - 通过类名得到节点元素数组
        - className: 必须。你需要获取的元素类名。
      - 兼容性: IE9
      - 注意
        * 某个节点元素也可以调用方法getElementsByClassName()，从而得到其内部的某类名的元素节点
      - 例
        ```html
        <div class="spec">盒子</div>
        <div>盒子</div>
        <div class="spec">盒子</div>
        <div class="spec">盒子</div>
        <div class="spec">盒子</div>
        ```
        ```js
        var speec_divs = document.getElementsByClassName('spec');
        ```
    - document.querySelector(name)
      - 功能: 
        * 通过选择器得到元素
        * 必须
          - 指定一个或多个匹配元素的 CSS 选择器。
          - 可以使用它们的 id, 类, 类型, 属性, 属性值等来选取元素。
          - 对于多个选择器，使用逗号隔开，返回一个匹配的元素。
      - 兼容性: 
        - IE8部分兼容，IE9完全兼容
        - 从 开始兼容，但IE8 从 开始支持IE9 CSS3的选择器，如 、`:nth-child()` `:[src^='dog']`等
      - 注意点: 
        * 只能得到页面上一个元素
        * 如果有多个元素符合条件，则只能得到第一个元素
        * 
      - 例
        ```html
        <div class="spec">盒子</div>
        <div>盒子</div>
        <div class="spec">盒子</div>
        <div class="spec">盒子</div>
        <div class="spec">盒子</div>
        ```
        ```js
        // 获取文档中第一个<p>元素
        var p = document.querySelector('p');
        // 获取文档中class="example"的第一个元素
        var example = document.querySelector(".example");
        // 获取文档中 class="example" 的第一个 <p> 元素:
        var p_example = document.querySelector("p.example");
        // 获取文档中有 "target" 属性的第一个 <a> 元素：
        document.querySelector("a[target]");
        // 为文档的第一个 <h2> 元素添加背景颜色（h2元素位于h3元素之前）：
        document.querySelector("h2, h3").style.backgroundColor = "red";
        // <h3> 元素将会被设置指定的背景颜色。（h3元素位于h2元素之前）：
        document.querySelector("h2, h3").style.backgroundColor = "red";
        ```
    - document.querySelectorAll(selectors);
      - 功能说明: 
        - selectors: 必须；指定一个或多个匹配 CSS 选择器的元素。多个选择器使用逗号(,)分隔。
        - 通过选择器得到元素数组
        - 即使页面上只有一个符合选择器的节点，也将得到长度为1的数组
      - 兼容性: IE8部分兼容，IE9完全兼容
      - 例
        ```js
        // 获取文档中所有 class="example" 的 <p> 元素
        var x = document.querySelectorAll("p.example"); 
        
        // 设置 class="example" 的第一个 <p> 元素的背景颜色
        x[0].style.backgroundColor = "red";
        ```

## 节点关系（方法）
  * 注意事项
    > 文本节点也履节点  
    > 在标准的 规范中，空白文本节点也应该算作节点W3C ，但是在IE8及以前的浏览器中会有一定的兼容问题，它们不把空文本节点当做节点
  * 排除文本节点的干扰 从IE9开始支持一些“只考虑元素节点”的属性
    |关系            |考虑所有节点        |只考虑元素节点|  
    |  ----          | ----             | ----  |
    |父节点           |parentNode         |同|
    |子节点           |childNodes        |children|   
    |第一个子节点     |firstChild         |firstElementChild|
    |最后一个子节点   |lastChild          |lastElementChild|
    |前一个兄弟节点   |previousSibling    |previousElementSibling|
    |后一个兄弟节点   |nextSibling        |nextElementSibling|

  - 返回元素的父节点
      - 定义
        - paretNode element.parentNode()
      - 说明
        - `parentNode`属性以`Node`对象的形式返回指定节点的父节点。
        - 如果指定节点没有父节点，则返回 null。
      - 例
        ```js
        document.getElementById("item1").parentNode;
        ```
  - 返回元素的一个子节点的数组
    - NodeList element.childNodes()
      - 返回包含被选节点的子节点的 NodeList
      - 返回所有的节点，包括文本节点、注释节点
      - 如果选定的节点没有子节点，则该属性返回不包含节点的NodeList。
      - 如需循环子节点列表，使用`nextSibling`属性，要比使用父对象的`childNodes`列表效率更高。
    - HTMLCollection element.children()
      - 返回元素的子元素的集合
      - 只返回元素节点
      - 根据子元素在元素中出现的先后顺序进行排序
      - 使用 `HTMLCollection`对象的 `length`属性获取子元素的数量，然后使用序列号(index，起始值为0)访问每个子元素。
  - 第一个子节点
    - node element.firstChild()
      - 返回被选节点的第一个子节点
      - 如果选定的节点没有子节点，则该属性返回 NULL。
      - 例
        ```js
          document.getElementById("myList").lastChild;
        ```
    - node element.firstElementChild() 
      - 只读属性
      - 返回指定元素的第一个子元素（忽略文本和注释节点）。
  - 最后一个子节点
    - node element.lastChild()
      - 返回被选节点的最后一个子节点（包含文本节点、注释节点、元素节点）
      - 如果选定的节点没有子节点，则该属性返回 NULL。
    - node element.lastElementChild() 
      - 只读属性
      - 返回指定元素的最后一个子元素（忽略文本和注释节点）。
  - 前一个兄弟节点
    - node element.previousSibling()
      - 返回某个元素紧接之前的节点（包括元素节点、文本节点、注释节点）
      - 返回节点以节点对象返回。
      - 如果没有此节点，那么该属性返回 null。
    - node node.previousElementSibling()
      - 只读属性
      - 返回指定元素的前一个兄弟元素（元素节点，不包括文本节点、注释节点）
      - 如果没有前一个兄弟元素则返回 null。
  - 后一个兄弟节点
    - node element.nextSibling()
      - 返回某个元素紧接之后元素（包括元素节点、文本节点、注释节点）
      - 返回节点以节点对象返回。
      - 如果没有此节点，那么该属性返回 null。
    - node node.nextElementSibling()
      - 只读属性
      - 返回指定元素的后一个兄弟元素（元素节点，不包括文本节点、注释节点）
      - 如果没有前一个兄弟元素则返回 null。



## 节点操作
### 改变元素节点中的内容
  - innerHTML: 该属性能以HTML语法设置节点中的内容
  - innerText: 该属性只能以纯文本的形式设置节点中的内容
### 改变节点中的样式
  - element.style.attributeName = attributeValue;
    - attributeName: css属性名；要写成‘驼峰’形式
    - attributeValue: css属性值；字符串形式
    - 例
      ```js
      elemet.style.backgroundColor = 'red';
      // css属性值要设置成完整形式
      elemet.style.backgroundImage = 'url(images/1.jpg)';
      // 注意写单位
      elemet.style.fontSize = '32px';
      ```
### 元素节点的HTML属性
  - element.attributeName = attributeValue;
    - attributeName: 节点属性名；如src、href等
    - attributeValue: 节点属性值；
    - 例
      ```js
      elemet.style.src = 'images/1.jpg';
      ```
  - setAttribute
    - 设置属性
    - 例
      ```js
      elemet.setAttribute('data-n', 10);
      ```
  - getAttribute
    - 读取属性
    - 例
      ```js
      var value = elemet.getAttribute('data-n');
      ```
### 节点的创建、插入
  - 创建节点
    - 定义
      - document.createElement(tagName) 
    - 说明 
      - 用于创建一个指定tagname的HTML元素
      - tagName: 必须，元素标签名
    - 注意
      - 新创建出的节点并没有被挂载到DOM树上
      - 必须使用`appendChild()`或者`insertBefore()`方法将孤儿节点插入到DOM树上
    - 例
      ```js
      var oDiv = document.createElement('div');
      ```
  - 为元素添加一个新的子元素
    - 定义
      - element.appendChild(node);
    - 说明
      - node: 必须。你要添加的节点对象。
      - 向节点的子节点列表的末尾添加新的子节点
    - 注意
      - 如果文档树中已经存在了 newchild，它将从文档树中删除，然后重新插入它的新位置。
      - 如果 newchild 是 DocumentFragment 节点，则不会直接插入它，而是把它的子节点按序插入当前节点的 childNodes[] 数组的末尾。
      - 可以使用 appendChild() 方法移除元素到另外一个元素。
    - 例
      ```js
        var node=document.getElementById("myList2").lastChild;
        document.getElementById("myList1").appendChild(node);
      ```
  - 现有的子元素之前插入一个新的子元素
    - 定义
      - element.insertBefore(newItem,existingItem);
    - 说明 
      - newnode: 必须；要插入的节点对象
      - existingnode: 必须；要添加新的节点前的子节点。
      - 在已有的子节点前插入一个新的子节点。
    - 注意 
      - 如果你想创建一个新的文本列表项，在 LI 元素后你应该添加元素的文本节点，然后在列表中添加 LI元素。
      - 可以使用 insertBefore 方法来 插入/移除 已存在的元素。
    - 例 
      ```js
        // 移动某个列表项到另一个列表项：
        var node=document.getElementById("myList2").lastChild;
        var list=document.getElementById("myList1");
        list.insertBefore(node,list.childNodes[0]);

        // 同一个列表中，改变列表项的顺序：
        var list=document.getElementById("myList");
        var node=list.getElementsByTagName("li");
        list.insertBefore(node[3],node[1]);
      ```
### 节点的移除
  - element.removeChild(node)
  - 说明 
    - node: 必须；要删除的子节点
    - 删除一个子元素
    - 节点不能主动删除自己，必须由父节点 
    - 如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。
  - 例
    ```js
    // 从子节点列表中删除某个节点:
    var list=document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
    ```
### 节点的克隆
  - 定义
    - node.cloneNode(deep)
  - 说明
    - 拷贝所有属性和值
    - 创建指定的节点的精确拷贝
    - 该方法将复制并返回调用它的节点的副本。
    - deep: 
      - true: 将递归复制当前节点的所有子孙节点 
      - 其他: 只复制当前节点
  - 例
    ```js
    // 拷贝一个列表项到另外一个列表：
    var node=document.getElementById("myList2").lastChild.cloneNode(true);
    document.getElementById("myList1").appendChild(node);
    ```
## DOM事件  
### 事件监听
### 事件传播
### 事件对象
### 事件委托

## 动画
### 实现动画
  - 定时器和延时器
  - 使用定时器实现动画
  - JS和CSS3结合实现动画

### 动画效果开发





