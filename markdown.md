# 

## 标题
### 使用 = 和 - 标记一级和二级标题
  = 和 - 标记语法格式如下：

我展示的是一级标题
=================

我展示的是二级标题
-----------------
### 使用 # 号标记
  使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 段落
  - 段落的换行是使用两个以上空格加上回车  

## 字体
  *斜体文本*
  _斜体文本_
  **粗体文本**
  __粗体文本__
  ***粗斜体文本***
  ___粗斜体文本___

## 分隔线
  ***

  * * *

  *****

  - - -

  ----------

## 删除线
 - 在文字的两端加上两个波浪线 `~~` 即可，实例如下：  
  ~~BAIDU.COM~~  
  
## 下划线
 - 下划线可以通过 HTML 的 `<u>` 标签来实现：  
  <u>带下划线文本</u>

## 脚注
  创建脚注格式类似这样[^RUNOOB]。  

  [^RUNOOB]: -- 学的不仅是技术，更是梦想！！！

## 列表
  * 第一项
  * 第二项
  * 第三项

  + 第一项
  + 第二项
  + 第三项


  - 第一项
  - 第二项
  - 第三项
  
  1. 第一项
  2. 第二项
  3. 第三项

## 区块
  - Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：
    > 最外层
    > > 第一层嵌套
    > > > 第二层嵌套
  - 区块中使用列表
    > 区块中使用列表
    > 1. 第一项
    > 2. 第二项
    > + 第一项
    > + 第二项
    > + 第三项
  - 列表中使用区块
    * 第一项
      > 菜鸟教程
      > 学的不仅是技术更是梦想
    * 第二项

## 代码
  - 如果是段落上的一个函数或片段的代码可以用反引号把它包起来（``），例如：  
    `printf()` 函数
  - 也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：
      ```javascript
      $(document).ready(function () {
          alert('RUNOOB');
      });
      ```
  
## 链接
  - [链接名称](链接地址)  
    这是一个链接: [菜鸟教程](https://www.runoob.com)  
  - <链接地址>  
    直接使用链接: <https://www.runoob.com>
  - 高级链接
    这个链接用 1 作为网址变量 [Google][1]  
    这个链接用 runoob 作为网址变量 [Runoob][runoob]  
    然后在文档的结尾为变量赋值（网址）  
      [1]: http://www.google.com/  
      [runoob]: http://www.runoob.com/


## 表格
  | 左对齐 | 右对齐 | 居中对齐 |
  | :-----| ----: | :----: |
  | 单元格 | 单元格 | 单元格 |
  | 单元格 | 单元格 | 单元格 |

## 
1、横向流程图源码格式：

```mermaid
graph LR
A[方形] -->B(圆角)
    B --> C{条件a}
    C -->|a=1| D[结果1]
    C -->|a=2| E[结果2]
    F[横向流程图]
```
2、竖向流程图源码格式：

```mermaid
graph TD
A[方形] --> B(圆角)
    B --> C{条件a}
    C --> |a=1| D[结果1]
    C --> |a=2| E[结果2]
    F[竖向流程图]
```
3、标准流程图源码格式：

```flow
st=>start: 开始框
op=>operation: 处理框
cond=>condition: 判断框(是或否?)
sub1=>subroutine: 子流程
io=>inputoutput: 输入输出框
e=>end: 结束框
st->op->cond
cond(yes)->io->e
cond(no)->sub1(right)->op
```
4、标准流程图源码格式（横向）：

```flow
st=>start: 开始框
op=>operation: 处理框
cond=>condition: 判断框(是或否?)
sub1=>subroutine: 子流程
io=>inputoutput: 输入输出框
e=>end: 结束框
st(right)->op(right)->cond
cond(yes)->io(bottom)->e
cond(no)->sub1(right)->op
```
5、UML时序图源码样例：

```sequence
对象A->对象B: 对象B你好吗?（请求）
Note right of 对象B: 对象B的描述
Note left of 对象A: 对象A的描述(提示)
对象B-->对象A: 我很好(响应)
对象A->对象B: 你真的好吗？
```
6、UML时序图源码复杂样例：

```sequence
Title: 标题：复杂使用
对象A->对象B: 对象B你好吗?（请求）
Note right of 对象B: 对象B的描述
Note left of 对象A: 对象A的描述(提示)
对象B-->对象A: 我很好(响应)
对象B->小三: 你好吗
小三-->>对象A: 对象B找我了
对象A->对象B: 你真的好吗？
Note over 小三,对象B: 我们是朋友
participant C
Note right of C: 没人陪我玩
```
7、UML标准时序图样例：

```mermaid
%% 时序图例子,-> 直线，-->虚线，->>实线箭头
  sequenceDiagram
    participant 张三
    participant 李四
    张三->王五: 王五你好吗？
    loop 健康检查
        王五->王五: 与疾病战斗
    end
    Note right of 王五: 合理 食物 <br/>看医生...
    李四-->>张三: 很好!
    王五->李四: 你怎么样?
    李四-->王五: 很好!
```
8、甘特图样例：

```mermaid
%% 语法示例
        gantt
        dateFormat  YYYY-MM-DD
        title 软件开发甘特图
        section 设计
        需求                      :done,    des1, 2014-01-06,2014-01-08
        原型                      :active,  des2, 2014-01-09, 3d
        UI设计                     :         des3, after des2, 5d
    未来任务                     :         des4, after des3, 5d
        section 开发
        学习准备理解需求                      :crit, done, 2014-01-06,24h
        设计框架                             :crit, done, after des2, 2d
        开发                                 :crit, active, 3d
        未来任务                              :crit, 5d
        耍                                   :2d
        section 测试
        功能测试                              :active, a1, after des3, 3d
        压力测试                               :after a1  , 20h
        测试报告                               : 48h
```

##

##
