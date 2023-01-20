# 前端开发

## 科技树

- HTML
- CSS
	- 基础：语法、布局、构件样式应用等
	- 进阶：预处理（Sass、Stylus、Less 等）
	- 高阶：框架（Bootstrap、Element UI、Antd 等）、优化（Styled-Component、CSS Modules等）
- JavaScript
	- 基础：原生语法、数据类型、函数、对象、JSON等
	- 进阶：异步（Ajax等）、JQuery、设计模式
	- 高阶：框架（React、Vue、Angular 等）、ts
- 服务器端编程：PHP、Nodejs、Ruby等
- 构建工具：webpack、Vite等
- 管理工具：
	- 版本管理：Git
	- 软件包管理：npm/npx、yarn、pnpm
- 数据管理：
	- 数据库：MySQL/PostgreSQL、MongoDB/CouchDB、Redis等
	- 数据可视化：ECharts、AntV等
- 性能优化：RAIL模型、骨架屏、懒加载预加载、防抖节流等
- 其他场域：
	- 桌面端：Electron
	- 移动端：React Native等
	- 小程序

## 细节注意

1. 命名规则建议：文件夹和文件名使用**小写**，用**短横线**来分隔。如：my-file.html。
2. 文件引用规则：
  - 若引用的目标文件与 HTML 文件**同级**，只需直接使用文件名。如：`my-image.jpg`
  - 要引用**子目录**中的文件，请在路径前面写上目录名，再加上一个正斜杠。如：`subdirectory/my-image.jpg`
  - 若引用的目标文件位于 HTML 文件的**上级**，需要加上两个点。如：若 `index.html` 在 `test-site` 的一个子文件夹内，而 `my-image.jpg` 在 `test-site` 内，你可以使用`../my-image.jpg` 从 `index.html` 引用 `my-image.jpg`
  - 以上方法可以随意组合
3. 文件路径书写建议：使用**正斜杠（/）**。（尽管 Windows 的文件系统使用反斜杠而不是正斜杠）

## 本地测试服务器设置

>一般情况下，只需要在浏览器中直接打开本地示例即可。
>但某些示例若以本地文件方式打开可能不会运行，可能原因如下：
>- 具有异步请求：安全限制。——> 可使用Python的相关模块，如下所示。
>- 具有服务端代码：需要部署服务端来解释代码并提供结果。——> 需搭建对应的本地服务端。

使用 Python 的 `SimpleHTTPServer` 模块。
```
# 进入示例所在目录启动服务器 (Python 版本为 3.x)
python -m http.server
```
默认情况下会启用本地 Web 服务器的 8000 端口来运行，但也可更换其他端口。
```
# 变更服务端口 (以 7800 端口为例)
python -m http.server 7800
```

## 学习网址推荐

[MDN：Web开发文档](https://developer.mozilla.org/zh-CN/)<br>
[C语言编程网：Web前端](http://c.biancheng.net/)

## 参考链接

[知乎：前端开发书籍推荐与学习路线（2022年全新推荐）](https://zhuanlan.zhihu.com/p/115110546)<br>
[知乎：前端学习路线（很长，建议收藏）](https://zhuanlan.zhihu.com/p/164701269)
