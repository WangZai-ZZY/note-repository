# HTML、CSS 和 JavaScript

## HTML 初步

> **H**yper**T**ext **M**arkup **L**anguage，即超文本标记语言，用于结构化 Web 网页及其内容。

### 初识
<br>

#### 元素详解

```html
<p> My cat is <strong>very</strong> grumpy </p>
<img src="images/firefox-icon.png" alt="My test image">
```

元素主要有如下几个部分：

- 开始标签：<元素名称>，表示元素从这里开始或开始起作用。
- 结束标签：</元素名称>,表示元素的结尾。
- 属性：元素的一些额外信息，不会显示在内容中。
  - 在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符
  - 属性的名称，并接上一个等号
  - 由引号所包围的属性值
- 内容：元素的内容，被开始标签与结束标签包围。

空元素不含任何内容，也没有结束标签，只具有开始标签和属性。

嵌套元素时将一个元素置于其他元素之中，应注意必须保证元素嵌套次序正确。

#### 文档详解

```html
<!DOCTYPE html>
<html>
    <head>
        <meta chartset="utf-8">
        <title>My test page</title>
    </head>
    <body>
        <img src="images/firefox-icon.png" alt="My test image">
    </body>
</html>
```

其中：

- `<!DOCTYPE html>`：文档类型。现如今作用有限，仅用于保证文档正常读取。
- `<html></html>`：`<html>`元素。包含整个页面的内容，也称为根元素。
- `<head></head>`：`<head>`元素。对用户不可见，其中包含面向搜索引擎的搜索关键字、页面描述、CSS样式表和字符编码声明等内容。
- `<meta charset="utf-8">`：指定文档使用 UTF-8 字符编码。
- `<title></title>`：`<title>`元素。设置页面标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
- `<body></body>`：`<body>`元素。包含期望让用户在访问页面时看到的内容，包括文本、图像、视频、游戏、可播放音轨等其他内容。

### 常用元素
<br>

#### 标题

用于指定内容的标题和子标题。共包括六个级别，`<h1>`-`<h6>`，一般最多用到 3-4 级。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
```

> **注意：**不要使用标题元素来加大、加粗字体，因为标题对于无障碍访问和搜索引擎优化等问题非常有意义。应保持页面结构清晰，标题整洁，不要发生标题级别跳跃。

#### 段落

用于指定常规的文本内容。

```html
<p> 这是一个段落 </p>
```

#### 列表

分为`ol`有序列表和`ul`无序列表，且列表的每个项目用一个列表项目元素`li`包围。

```html
<ul>
    <li>Apple Safari</li>
    <li>Google Chrome</li>
    <li>Microsoft Edge</li>
    <li>Mozilla FireFox</li>
</ul>
```

#### 链接

植入链接需要使用`<a>`元素标签，"a"是"anchor"（锚）的缩写。

```html
<a href="https://www.shinotak.com/">无闻沙洲</a>
```

> **备注**：`href`表示超文本引用（**h**ypertext **ref**erence）。

## CSS 初步

> **C**ascading **S**tyle **S**heet，即层叠样式表，用于对网页内容进行设计、布局或添加动画等行为。

### 初识
<br>

#### 规则集详解

```css
p, li, h1 {
    color: red;
}
```

上述结构被称为**规则集**，各部分释义如下：

- 选择器（Selector）
  - 选择一个或多个需要添加样式的 HTML 元素，并将其置于规则集开始，即`p, li, h1 {}`。
- 声明（Declaration）
  - 用于指定添加样式元素的属性，即`color: red;`。
- 属性（Properties）
  - 改变 HTML 元素样式的途径。本例中，`color`即为`<p>`元素的属性。
- 属性的值（Property value）
  - 从指定属性的众多外观中选择一个值，即`red`为`color`众多属性值中的一个。

> **注意**：
>
> - 每个规则集（除了选择器的部分）都应该包含在成对的大括号`{}`中。
> - 在每个声明里要用冒号`:`将属性与属性值分隔开。
> - 在每个规则集里要用分号`;`将各个声明分隔开。

#### 常用选择器类型

上述例子只介绍了**元素选择器**，实际上选择操作可以更加具体。

| 选择器名称                    | 选择的内容                                                   | 示例                                                         |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 元素选择器（标签/类型选择器） | 所有指定为该类型的 HTML 元素                                 | `p`选择了`<p>`                                               |
| ID 选择器                     | 指定为特定 ID 的元素（在单一页面中，每个 ID 唯一确定一个元素） | `#my-id`选择了`<p id="my-id">`                               |
| 类选择器                      | 指定为特定类的元素（在单一页面中，每个类可以指定多个实例）   | `.my-class`选择了`<p class="my-class">`和`<a class="my-class">` |
| 属性选择器                    | 指定为拥有特定属性的元素                                     | `img[src]`选择了`<img src="myimage.png">`而不是`<img>`       |
| 伪（Pseudo）类选择器          | 指定为在特定状态下的特定元素（如鼠标指针悬停）               | `a:hover`仅在鼠标指针悬停在链接上时选择`<a>`                 |

> **备注**：更多类型可参阅 MDN 文档之[ CSS 选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)。

#### 布局配置：“一切皆盒子”

页面里大部分 HTML 元素都可以被看作若干层叠的盒子，而 CSS 的工作便是对这些盒子展开的。

  <img src="https://picgo-1308019232.cos.ap-beijing.myqcloud.com/NoteRepository/202301201123039.png" alt="嵌套的布局，从外到内依次是 margin、border 和 padding" style="zoom:67%;" />

如图所示，每个占据页面空间的块都有如下属性：

- `padding`：内边距，围绕着内容的空间。
- `border`：边框，紧接着内边距的线。
- `margin`：外边距，围绕着元素外部的空间。

### 示例
<br>

#### 全局样式之字体与文本

```html
<!-- 将如下 <link> 元素添加入 HTML 文件头（<head></head>）中 -->
<!-- 该代码将为当前网页下载 Open Sans 字体，以使自定义 CSS 中可以对 HTML 元素应用该字体 -->

<link href="https://fonts.font.im/css?family=Open+Sans" rel="stylesheet" type="text/css">
```

```css
/* 为整个页面设定全局字体和字号 */
html {
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
}
/* 对文档内其他元素进行设置（设置字号，将标题居中显示，并为正文设置行高和字间距） */
h1 {
    font-size: 60px;
    text-align: center;
}
p, li {
    font-size: 16px;
    line-height: 2;  /* line-height 后面可以跟不同的参数，如果是数字，就是当前字体大小乘上数字 */
    letter-spacing: 1px;
}
```

> **注意**：
>
> - 中文字体文件较大，不适合直接用于 Web Font。
> - CSS 注释写法为`/*`与`*/`，且不可嵌套。

#### 文档体格式设置

```css
body {
    width: 600px;
    margin: 0 auto;
    background-color: #FF9500;
    padding: 0 20px 20px 20px;
    border: 5px solid black;
}
```

内容解析：

- `width: 600px`：设置文档体的页面宽度，固定为600像素。
- `margin: 0 auto`：设置外边框的位置。第一个值表示上下，第二个值对应左右；`auto`是指在水平方向上左右对称。
- `background-color: #FF9500`：设置文档体的背景颜色。
- `padding: 0 20px 20px 20px`：设置内边距的位置，使内容四周存在留白，值以上、右、下、左的顺序排列。
- `border: 5px solid black`：设置 body 的边框为5像素的黑色实线。

## JavaScript 初步

> 为网页提供动态交互功能的脚本语言。

### 初识
<br>

#### 