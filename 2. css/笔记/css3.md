# css3



## 动画属性

| isOk | 属性                      | 描述                                                         |
| :--: | ------------------------- | ------------------------------------------------------------ |
|  √   | @keyframes                | 定义一个动画,@keyframes定义的动画名称用来被animation-name所使用。 |
|  √   | animation                 | 复合属性。检索或设置对象所应用的动画特效。                   |
|  √   | animation-name            | 检索或设置对象所应用的动画名称 ,必须与规则@keyframes配合使用，因为动画名称由@keyframes定义 |
|  √   | animation-duration        | 检索或设置对象动画的持续时间                                 |
|  √   | animation-timing-function | 检索或设置对象动画的过渡类型                                 |
|  √   | animation-delay           | 检索或设置对象动画的延迟时间                                 |
|  √   | animation-iteration-count | 检索或设置对象动画的循环次数                                 |
|  √   | animation-direction       | 检索或设置对象动画在循环中是否反向运动                       |
|  √   | animation-play-state      | 检索或设置对象动画的状态                                     |



##  页面背景



| isOk | 属性                                                         | 描述                                                         |
| :--: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|  √   | [background-clip](https://www.runoob.com/cssref/css3-pr-background-clip.html) | 指定对象的背景图像向外裁剪的区域。                           |
|  √   | [background-origin](https://www.runoob.com/cssref/css3-pr-background-origin.html) | S设置或检索对象的背景图像计算background-position时的参考原点(位置)。 |
|  √   | [background-size](https://www.runoob.com/cssref/css3-pr-background-size.html) | 检索或设置对象的背景图像的尺寸大小。                         |

## 边框轮廓

| isOk | 属性                                                         | 描述                                                         |
| :--: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      | [border-bottom-left-radius](https://www.runoob.com/cssref/css3-pr-border-bottom-left-radius.html) | 设置或检索对象的左下角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数 |
|      | [border-bottom-right-radius](https://www.runoob.com/cssref/css3-pr-border-bottom-right-radius.html) | 设置或检索对象的右下角圆角边框。                             |
|      | [border-image](https://www.runoob.com/cssref/css3-pr-border-image.html) | 设置或检索对象的边框样式使用图像来填充。                     |
|      | [border-image-outset](https://www.runoob.com/cssref/css3-pr-border-image-outset.html) | 规定边框图像超过边框的量。                                   |
|      | [border-image-repeat](https://www.runoob.com/cssref/css3-pr-border-image-repeat.html) | 规定图像边框是否应该被重复（repeated）、拉伸（stretched）或铺满（rounded）。 |
|      | [border-image-slice](https://www.runoob.com/cssref/css3-pr-border-image-slice.html) | 规定图像边框的向内偏移。                                     |
|      | [border-image-source](https://www.runoob.com/cssref/css3-pr-border-image-source.html) | 规定要使用的图像，代替 border-style 属性中设置的边框样式。   |
|      | [border-image-width](https://www.runoob.com/cssref/css3-pr-border-image-width.html) | 规定图像边框的宽度。                                         |
|      | [border-radius](https://www.runoob.com/cssref/css3-pr-border-radius.html) | 设置或检索对象使用圆角边框。                                 |
|      | [border-top-left-radius](https://www.runoob.com/cssref/css3-pr-border-top-left-radius.html) | 定义左上角边框的形状。                                       |
|      | [border-top-right-radius](https://www.runoob.com/cssref/css3-pr-border-top-right-radius.html) | 定义右上角边框的形状。                                       |
|      | box-decoration-break                                         | 规定行内元素被折行                                           |
|      | [box-shadow](https://www.runoob.com/cssref/css3-pr-box-shadow.html) | 向方框添加一个或多个阴影。                                   |

## 盒子(Box) 属性

| isOk | 属性                                                         | 描述                                                        |
| :--: | :----------------------------------------------------------- | :---------------------------------------------------------- |
|      | [overflow-x](https://www.runoob.com/cssref/css3-pr-overflow-x.html) | 如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。 |
|      | [overflow-y](https://www.runoob.com/cssref/css3-pr-overflow-y.html) | 如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。 |
|      | [overflow-style](https://www.runoob.com/cssref/css3-pr-overflow-style.html) | 规定溢出元素的首选滚动方法。                                |
|      | [rotation](https://www.runoob.com/cssref/css3-pr-rotation.html) | 围绕由 rotation-point 属性定义的点对元素进行旋转。          |
|      | [rotation-point](https://www.runoob.com/cssref/css3-pr-rotation-point.html) | 定义距离上左边框边缘的偏移点。                              |

## 颜色(Color) 属性

| isOk | 属性                                                         | 描述                                       |
| :--: | :----------------------------------------------------------- | :----------------------------------------- |
|      | color-profile                                                | 允许使用源的颜色配置文件的默认以外的规范   |
|      | [opacity](https://www.runoob.com/cssref/css3-pr-opacity.html) | 设置一个元素的透明度级别                   |
|      | rendering-intent                                             | 允许超过默认颜色配置文件渲染意向的其他规范 |



## 弹性盒子模型（Flexible Box） 属性(新)

| isOk | 属性                                                         | 说明                                                         |
| :--: | :----------------------------------------------------------- | :----------------------------------------------------------- |
|      | [flex](https://www.runoob.com/cssref/css3-pr-flex.html)      | 复合属性。设置或检索弹性盒模型对象的子元素如何分配空间。     |
|      | [flex-grow](https://www.runoob.com/cssref/css3-pr-flex-grow.html) | 设置或检索弹性盒的扩展比率。                                 |
|      | [flex-shrink](https://www.runoob.com/cssref/css3-pr-flex-shrink.html) | 设置或检索弹性盒的收缩比率。                                 |
|      | [flex-basis](https://www.runoob.com/cssref/css3-pr-flex-basis.html) | 设置或检索弹性盒伸缩基准值。                                 |
|      | [flex-flow](https://www.runoob.com/cssref/css3-pr-flex-flow.html) | 复合属性。设置或检索弹性盒模型对象的子元素排列方式。         |
|      | [flex-direction](https://www.runoob.com/cssref/css3-pr-flex-direction.html) | 该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。 |
|      | [flex-wrap](https://www.runoob.com/cssref/css3-pr-flex-wrap.html) | 该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。 |
|      | [align-content](https://www.runoob.com/cssref/css3-pr-align-content.html) | 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。 |
|      | [align-items](https://www.runoob.com/cssref/css3-pr-align-items.html) | 定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。 |
|      | [align-self](https://www.runoob.com/cssref/css3-pr-align-self.html) | 定义flex子项单独在侧轴（纵轴）方向上的对齐方式。             |
|      | [justify-content](https://www.runoob.com/cssref/css3-pr-justify-content.html) | 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。       |
|      | [order](https://www.runoob.com/cssref/css3-pr-order.html)    | 设置或检索弹性盒模型对象的子元素出现的順序。                 |

## 弹性盒子模型（Flexible Box） 属性(旧)

| isOk | 属性                                                         | 说明                                                 |
| :--: | :----------------------------------------------------------- | :--------------------------------------------------- |
|      | [box-align](https://www.runoob.com/cssref/css3-pr-box-align.html) | 指定如何对齐一个框的子元素                           |
|      | [box-direction](https://www.runoob.com/cssref/css3-pr-box-direction.html) | 指定在哪个方向，显示一个框的子元素                   |
|      | [box-flex](https://www.runoob.com/cssref/css3-pr-box-flex.html) | 指定一个框的子元素是否是灵活的或固定的大小           |
|      | [box-flex-group](https://www.runoob.com/cssref/css3-pr-box-flex-group.html) | 指派灵活的元素到Flex组                               |
|      | [box-lines](https://www.runoob.com/cssref/css3-pr-box-lines.html) | 每当它在父框的空间运行时，是否指定将再上一个新的行列 |
|      | [box-ordinal-group](https://www.runoob.com/cssref/css3-pr-box-ordinal-group.html) | 指定一个框的子元素的显示顺序                         |
|      | [box-orient](https://www.runoob.com/cssref/css3-pr-box-orient.html) | 指定一个框的子元素是否在水平或垂直方向应铺设         |
|      | [box-pack](https://www.runoob.com/cssref/css3-pr-box-pack.html) | 指定横向盒在垂直框的水平位置和垂直位置               |

## 字体

| isOk | 属性                                                         | 说明                                                      |
| :--: | ------------------------------------------------------------ | --------------------------------------------------------- |
|      | [@font-face](https://www.runoob.com/cssref/css3-pr-font-face-rule.html) | 一个规则，允许网站下载并使用其他超过"Web- safe"字体的字体 |
|      | [font-size-adjust](https://www.runoob.com/cssref/css3-pr-font-size-adjust.html) | 为元素规定 aspect 值                                      |
|      | [font-stretch](https://www.runoob.com/cssref/css3-pr-font-stretch.html) | 收缩或拉伸当前的字体系列                                  |



## 媒体页面内容属性

| isOk | 属性                | 说明                                                       |
| :--: | :------------------ | :--------------------------------------------------------- |
|      | bookmark-label      | 指定书签的标签                                             |
|      | bookmark-level      | 指定了书签级别                                             |
|      | bookmark-target     | 指定了书签链接的目标                                       |
|      | float-offset        | 在相反的方向推动浮动元素，他们一直具有浮动                 |
|      | hyphenate-after     | 指定一个断字的单词断字字符后的最少字符数                   |
|      | hyphenate-before    | 指定一个断字的单词断字字符前的最少字符数                   |
|      | hyphenate-character | 指定了当一个断字发生时，要显示的字符串                     |
|      | hyphenate-lines     | 表示连续断字的行在元素的最大数目                           |
|      | hyphenate-resource  | 外部资源指定一个逗号分隔的列表，可以帮助确定浏览器的断字点 |
|      | hyphens             | 设置如何分割单词以改善该段的布局                           |
|      | image-resolution    | 指定了正确的图像分辨率                                     |
|      | marks               | 将crop and/or cross标志添加到文档                          |
|      | string-set          |                                                            |

## 网格（Grid） 属性

| isOk | 属性                                                         | 说明                   |
| :--: | :----------------------------------------------------------- | :--------------------- |
|      | [grid-columns](https://www.runoob.com/cssref/css3-pr-grid-columns.html) | 指定在网格中每列的宽度 |
|      | [grid-rows](https://www.runoob.com/cssref/css3-pr-grid-rows.html) | 指定在网格中每列的高度 |

## 超链接(Hyperlink) 属性

| isOk | 属性                                                         | 说明                                                       |
| :--: | :----------------------------------------------------------- | :--------------------------------------------------------- |
|      | [target](https://www.runoob.com/cssref/css3-pr-target.html)  | 简写属性设置target-name, target-new,和target-position属性  |
|      | [target-name](https://www.runoob.com/cssref/css3-pr-target-name.html) | 指定在何处打开链接（目标位置）                             |
|      | [target-new](https://www.runoob.com/cssref/css3-pr-target-new.html) | 指定是否有新的目标链接打开一个新窗口或在现有窗口打开新标签 |
|      | [target-position](https://www.runoob.com/cssref/css3-pr-target-position.html) | 指定应该放置新的目标链接的位置                             |

## 线框(Linebox) 属性

| isOk | 属性                       | 说明                                                         |
| :--: | :------------------------- | :----------------------------------------------------------- |
|      | alignment-adjust           | 允许更精确的元素的对齐方式                                   |
|      | alignment-baseline         | 其父级指定的内联级别的元素如何对齐                           |
|      | baseline-shift             | 允许重新定位相对于dominant-baseline的dominant-baseline       |
|      | dominant-baseline          | 指定scaled-baseline-table                                    |
|      | drop-initial-after-adjust  | 设置下拉的主要连接点的初始对齐点                             |
|      | drop-initial-after-align   | 校准行内的初始行的设置就是具有首字母的框使用初级连接点       |
|      | drop-initial-before-adjust | 设置下拉的辅助连接点的初始对齐点                             |
|      | drop-initial-before-align  | 校准行内的初始行的设置就是具有首字母的框使用辅助连接点       |
|      | drop-initial-size          | 控制局部的首字母下沉                                         |
|      | drop-initial-value         | 激活一个下拉式的初步效果                                     |
|      | inline-box-align           | 设置一个多行的内联块内的行具有前一个和后一个内联元素的对齐   |
|      | line-stacking              | 一个速记属性设置line-stacking-strategy, line-stacking-ruby,和line-stacking-shift属性 |
|      | line-stacking-ruby         | 设置包含Ruby注释元素的行对于块元素的堆叠方法                 |
|      | line-stacking-shift        | 设置base-shift行中块元素包含元素的堆叠方法                   |
|      | line-stacking-strategy     | 设置内部包含块元素的堆叠线框的堆叠方法                       |
|      | text-height                | 行内框的文本内容区域设置block-progression维数                |

## 字幕(Marquee) 属性

| isOk | 属性               | 说明                     |
| :--: | :----------------- | :----------------------- |
|      | marquee-direction  | 设置内容移动的方向       |
|      | marquee-play-count | 设置内容移动多少次       |
|      | marquee-speed      | 设置内容滚动的速度有多快 |
|      | marquee-style      | 设置内容移动的样式       |

## 多列(Multi-column) 属性

| isOk | 属性                                                         | 说明                                    |
| :--: | :----------------------------------------------------------- | :-------------------------------------- |
|      | [column-count](https://www.runoob.com/cssref/css3-pr-column-count.html) | 指定元素应该分为的列数                  |
|      | [column-fill](https://www.runoob.com/cssref/css3-pr-column-fill.html) | 指定如何填充列                          |
|      | [column-gap](https://www.runoob.com/cssref/css3-pr-column-gap.html) | 指定列之间的差距                        |
|      | [column-rule](https://www.runoob.com/cssref/css3-pr-column-rule.html) | 对于设置所有column-rule-*属性的简写属性 |
|      | [column-rule-color](https://www.runoob.com/cssref/css3-pr-column-rule-color.html) | 指定列之间的颜色规则                    |
|      | [column-rule-style](https://www.runoob.com/cssref/css3-pr-column-rule-style.html) | 指定列之间的样式规则                    |
|      | [column-rule-width](https://www.runoob.com/cssref/css3-pr-column-rule-width.html) | 指定列之间的宽度规则                    |
|      | [column-span](https://www.runoob.com/cssref/css3-pr-column-span.html) | 指定元素应该跨越多少列                  |
|      | [column-width](https://www.runoob.com/cssref/css3-pr-column-width.html) | 指定列的宽度                            |
|      | [columns](https://www.runoob.com/cssref/css3-pr-columns.html) | 缩写属性设置列宽和列数                  |

## 页面媒体(Paged Media) 属性

| isOk | 属性              | 说明                                                         |
| :--: | :---------------- | :----------------------------------------------------------- |
|      | fit               | 如果其宽度和高度属性都不是auto给出一个提示，如何大规模替换元素 |
|      | fit-position      | 判定方框内对象的对齐方式                                     |
|      | image-orientation | 指定用户代理适用于图像中的向右或顺时针方向的旋转             |
|      | page              | 指定一个元素应显示的页面的特定类型                           |
|      | size              | 指定含有BOX的页面内容的大小和方位                            |

## Ruby 属性

| isOk | 属性          | 说明                                                         |
| :--: | :------------ | :----------------------------------------------------------- |
|      | ruby-align    | 控制Ruby文本和Ruby基础内容相对彼此的文本对齐方式             |
|      | ruby-overhang | 当Ruby文本超过Ruby的基础宽，确定ruby文本是否允许局部悬置任意相邻的文本，除了自己的基础 |
|      | ruby-position | 它的base控制Ruby文本的位置                                   |
|      | ruby-span     | 控制annotation 元素的跨越行为                                |

## 语音（Speech） 属性

| isOk | 属性              | 说明                                                 |
| :--: | :---------------- | :--------------------------------------------------- |
|      | mark              | 缩写属性设置mark-before和mark-after属性              |
|      | mark-after        | 允许命名的标记连接到音频流                           |
|      | mark-before       | 允许命名的标记连接到音频流                           |
|      | phonemes          | 指定包含文本的相应元素中的一个音标发音               |
|      | rest              | 一个缩写属性设置rest-before和rest-after属性          |
|      | rest-after        | 一个元素的内容讲完之后，指定要休息一下或遵守韵律边界 |
|      | rest-before       | 一个元素的内容讲完之前，指定要休息一下或遵守韵律边界 |
|      | voice-balance     | 指定了左，右声道之间的平衡                           |
|      | voice-duration    | 指定应采取呈现所选元素的内容的长度                   |
|      | voice-pitch       | 指定平均说话的声音的音调（频率）                     |
|      | voice-pitch-range | 指定平均间距的变化                                   |
|      | voice-rate        | 控制语速                                             |
|      | voice-stress      | 指示着重力度                                         |
|      | voice-volume      | 语音合成是指波形输出幅度                             |

## 文本

| isOk | 属性                                                         | 说明                                                  |
| :--: | ------------------------------------------------------------ | ----------------------------------------------------- |
|      | [hanging-punctuation](https://www.runoob.com/cssref/css3-pr-hanging-punctuation.html) | 指定一个标点符号是否可能超出行框                      |
|      | [punctuation-trim](https://www.runoob.com/cssref/css3-pr-punctuation-trim.html) | 指定一个标点符号是否要去掉                            |
|      | [text-align-last](https://www.runoob.com/cssref/css3-pr-text-align-last.html) | 当 text-align 设置为 justify 时，最后一行的对齐方式。 |
|      | [text-justify](https://www.runoob.com/cssref/css3-pr-text-justify.html) | 当 text-align 设置为 justify 时指定分散对齐的方式。   |
|      | [text-outline](https://www.runoob.com/cssref/css3-pr-text-outline.html) | 设置文字的轮廓。                                      |
|      | [text-overflow](https://www.runoob.com/cssref/css3-pr-text-overflow.html) | 指定当文本溢出包含的元素，应该发生什么                |
|      | [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 为文本添加阴影                                        |
|      | [text-wrap](https://www.runoob.com/cssref/css3-pr-text-wrap.html) | 指定文本换行规则                                      |
|      | [word-break](https://www.runoob.com/cssref/css3-pr-word-break.html) | 指定非CJK文字的断行规则                               |
|      | [word-wrap](https://www.runoob.com/cssref/css3-pr-word-wrap.html) | 设置浏览器是否对过长的单词进行换行。                  |

## 2D/3D 转换属性

| isOk | 属性                                                         | 说明                                       |
| :--: | :----------------------------------------------------------- | :----------------------------------------- |
|      | [transform](https://www.runoob.com/cssref/css3-pr-transform.html) | 适用于2D或3D转换的元素                     |
|      | [transform-origin](https://www.runoob.com/cssref/css3-pr-transform-origin.html) | 允许您更改转化元素位置                     |
|      | [transform-style](https://www.runoob.com/cssref/css3-pr-transform-style.html) | 3D空间中的指定如何嵌套元素                 |
|      | [perspective](https://www.runoob.com/cssref/css3-pr-perspective.html) | 指定3D元素是如何查看透视图                 |
|      | [perspective-origin](https://www.runoob.com/cssref/css3-pr-perspective-origin.html) | 指定3D元素底部位置                         |
|      | [backface-visibility](https://www.runoob.com/cssref/css3-pr-backface-visibility.html) | 定义一个元素是否应该是可见的，不对着屏幕时 |

## 过渡（Transition） 属性

| isOk | 属性                                                         | 说明                                                         |
| ---- | :----------------------------------------------------------- | :----------------------------------------------------------- |
|      | [transition](https://www.runoob.com/cssref/css3-pr-transition.html) | 此属性是 transition-property、transition-duration、transition-timing-function、transition-delay 的简写形式。 |
|      | [transition-property](https://www.runoob.com/cssref/css3-pr-transition-property.html) | 设置用来进行过渡的 CSS 属性。                                |
|      | [transition-duration](https://www.runoob.com/cssref/css3-pr-transition-duration.html) | 设置过渡进行的时间长度。                                     |
|      | [transition-timing-function](https://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 设置过渡进行的时序函数。                                     |
|      | [transition-delay](https://www.runoob.com/cssref/css3-pr-transition-delay.html) | 指定过渡开始的时间。                                         |

## 用户外观(User-interface) 属性

| isOk | 属性                                                         | 说明                                     |
| :--: | :----------------------------------------------------------- | :--------------------------------------- |
|      | [appearance](https://www.runoob.com/cssref/css3-pr-appearance.html) | 定义元素的外观样式                       |
|      | [box-sizing](https://www.runoob.com/cssref/css3-pr-box-sizing.html) | 允许您为了适应区域以某种方式定义某些元素 |
|      | [icon](https://www.runoob.com/cssref/css3-pr-icon.html)      | 为元素指定图标                           |
|      | [nav-down](https://www.runoob.com/cssref/css3-pr-nav-down.html) | 指定用户按向下键时向下导航的位置         |
|      | [nav-index](https://www.runoob.com/cssref/css3-pr-nav-index.html) | 指定导航（tab）顺序。                    |
|      | [nav-left](https://www.runoob.com/cssref/css3-pr-nav-left.html) | 指定用户按向左键时向左导航的位置         |
|      | [nav-right](https://www.runoob.com/cssref/css3-pr-nav-right.html) | 指定用户按向右键时向右导航的位置         |
|      | [nav-up](https://www.runoob.com/cssref/css3-pr-nav-up.html)  | 指定用户按向上键时向上导航的位置a        |
|      | [outline-offset](https://www.runoob.com/cssref/css3-pr-outline-offset.html) | 设置轮廓框架在 border 边缘外的偏移       |
|      | [resize](https://www.runoob.com/cssref/css3-pr-resize.html)  | 定义元素是否可以改变大小                 |

