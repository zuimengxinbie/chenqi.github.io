(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{655:function(t,a,s){"use strict";s.r(a);var v=s(5),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",{attrs:{align:"center"}},[s("img",{attrs:{width:"500",src:"https://p19.qhimg.com/dmfd/2560_1440_/t01bd80ee8dc155c1e5.jpg"}})]),t._v(" "),s("blockquote",[s("p",[t._v("收集的一些优化方法，项目中要多尝试 🤔🤔🤔")])]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" "),s("strong",[t._v("前言")])]),t._v(" "),s("p",[t._v("移动互联网时代，用户对页面的打开速度越来越高，研究表明，普通用户期望且能够接受的页面加载时间在 3 秒以内。若页面的加载时间过慢，用户就会失去耐心而选择离开。")]),t._v(" "),s("p",[t._v("首屏作为直面用户的第一屏，其重要性不言而喻。优化用户体验更是我们前端开发非常需要关注的东西之一。")]),t._v(" "),s("p",[t._v("本文通过 8 道面试题，来聊聊浏览器渲染过程与性能优化。")]),t._v(" "),s("p",[t._v("我们首先带着这 8 个问题，来了解浏览器渲染过程，后面会给出题解。")]),t._v(" "),s("p",[t._v("1、为什么 Javascript 要是单线程的 ?")]),t._v(" "),s("p",[t._v("2、为什么 JS 阻塞页面加载 ?")]),t._v(" "),s("p",[t._v("3、CSS 加载会造成阻塞吗 ？")]),t._v(" "),s("p",[t._v("4、DOMContentLoaded 与 load 的区别 ?")]),t._v(" "),s("p",[t._v("5、什么是 CRP,即关键渲染路径(Critical Rendering Path)?\n如何优化 ?")]),t._v(" "),s("p",[t._v("6、defer 和 async 的区别 ?")]),t._v(" "),s("p",[t._v("7、谈谈浏览器的回流与重绘 ?")]),t._v(" "),s("p",[t._v("8、什么是渲染层合并 (Composite) ?")]),t._v(" "),s("h2",{attrs:{id:"进程-process-和线程-thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程-process-和线程-thread"}},[t._v("#")]),t._v(" "),s("strong",[t._v("进程 (process) 和线程 (thread)")])]),t._v(" "),s("p",[t._v("进程（process）和线程（thread）是操作系统的基本概念。")]),t._v(" "),s("p",[t._v("进程是 CPU 资源分配的最小单位（是能拥有资源和独立运行的最小单位）。")]),t._v(" "),s("p",[t._v("线程是 CPU 调度的最小单位（是建立在进程基础上的一次程序运行单位）。")]),t._v(" "),s("p",[t._v("现代操作系统都是可以同时运行多个任务的,比如:用浏览器上网的同时还可以听音乐。")]),t._v(" "),s("p",[s("code",[t._v("对于操作系统来说,一个任务就是一个进程")]),t._v(",比如打开一个浏览器就是启动了一个浏览器进程,打开一个 Word 就启动了一个 Word 进程。")]),t._v(" "),s("p",[t._v("有些进程同时不止做一件事,比如 Word,它同时可以进行打字、拼写检查、打印等事情。在一个进程内部,要同时做多件事,就需要同时运行多个“子任务”,我们把进程内的这些“子任务”称为线程。")]),t._v(" "),s("p",[t._v("由于每个进程至少要做一件事,所以一个进程至少有一个线程。系统会给每个进程分配独立的内存,因此进程有它独立的资源。同一进程内的各个线程之间共享该进程的内存空间（包括代码段,数据集,堆等）。")]),t._v(" "),s("h2",{attrs:{id:"浏览器的多进程架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的多进程架构"}},[t._v("#")]),t._v(" "),s("strong",[t._v("浏览器的多进程架构")])]),t._v(" "),s("p",[t._v("一个好的程序常常被划分为几个相互独立又彼此配合的模块,浏览器也是如此。")]),t._v(" "),s("p",[t._v("以 Chrome 为例,它由多个进程组成,每个进程都有自己核心的职责,它们相互配合完成浏览器的整体功能,")]),t._v(" "),s("p",[t._v("每个进程中又包含多个线程,一个进程内的多个线程也会协同工作,配合完成所在进程的职责。")]),t._v(" "),s("p",[t._v("Chrome 采用多进程架构,其顶层存在一个 Browser process 用以协调浏览器的其它进程。")]),t._v(" "),s("ul",[s("li",[t._v("优点")])]),t._v(" "),s("p",[t._v("由于默认 新开 一个 tab 页面 新建 一个进程,所以单个 tab 页面崩溃不会影响到整个浏览器。")]),t._v(" "),s("p",[t._v("同样,第三方插件崩溃也不会影响到整个浏览器。")]),t._v(" "),s("p",[t._v("多进程可以充分利用现代 CPU 多核的优势。")]),t._v(" "),s("ul",[s("li",[t._v("缺点")])]),t._v(" "),s("p",[t._v("系统为浏览器新开的进程分配内存、CPU 等资源,所以内存和 CPU 的资源消耗也会更大。")]),t._v(" "),s("p",[t._v("不过 Chrome 在内存释放方面做的不错,基本内存都是能很快释放掉给其他程序运行的。")]),t._v(" "),s("h2",{attrs:{id:"浏览器的主要进程和职责"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的主要进程和职责"}},[t._v("#")]),t._v(" "),s("strong",[t._v("浏览器的主要进程和职责")])]),t._v(" "),s("ul",[s("li",[t._v("主进程 Browser Process")])]),t._v(" "),s("p",[t._v("负责浏览器界面的显示与交互。各个页面的管理,创建和销毁其他进程。网络的资源管理、下载等。")]),t._v(" "),s("ul",[s("li",[t._v("第三方插件进程 Plugin Process")])]),t._v(" "),s("p",[t._v("每种类型的插件对应一个进程,仅当使用该插件时才创建。")]),t._v(" "),s("ul",[s("li",[t._v("GPU 进程 GPU Process")])]),t._v(" "),s("p",[t._v("最多只有一个,用于 3D 绘制等")]),t._v(" "),s("ul",[s("li",[t._v("渲染进程 Renderer Process")])]),t._v(" "),s("p",[t._v("称为浏览器渲染进程或浏览器内核,内部是多线程的。主要负责页面渲染,脚本执行,事件处理等。 (本文重点分析)")]),t._v(" "),s("h2",{attrs:{id:"渲染进程-浏览器内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程-浏览器内核"}},[t._v("#")]),t._v(" "),s("strong",[t._v("渲染进程 (浏览器内核)")])]),t._v(" "),s("p",[t._v("浏览器的渲染进程是多线程的,我们来看看它有哪些主要线程 :")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("GUI 渲染线程")])]),t._v(" "),s("ul",[s("li",[t._v("负责渲染浏览器界面,解析 HTML,CSS,构建 DOM 树和 RenderObject 树,布局和绘制等。")]),t._v(" "),s("li",[t._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。")]),t._v(" "),s("li",[t._v("注意,GUI 渲染线程与 JS 引擎线程是互斥的,当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了）,GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("JS 引擎线程")])]),t._v(" "),s("ul",[s("li",[t._v("Javascript 引擎,也称为 JS 内核,负责处理 Javascript 脚本程序。（例如 V8 引擎）")]),t._v(" "),s("li",[t._v("JS 引擎线程负责解析 Javascript 脚本,运行代码。")]),t._v(" "),s("li",[t._v("JS 引擎一直等待着任务队列中任务的到来,然后加以处理,一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序。")]),t._v(" "),s("li",[t._v("注意,GUI 渲染线程与 JS 引擎线程是互斥的,所以如果 JS 执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("事件触发线程")])]),t._v(" "),s("ul",[s("li",[t._v("归属于浏览器而不是 JS 引擎,用来控制事件循环（可以理解,JS 引擎自己都忙不过来,需要浏览器另开线程协助）")]),t._v(" "),s("li",[t._v("当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等）,会将对应任务添加到事件线程中")]),t._v(" "),s("li",[t._v("当对应的事件符合触发条件被触发时,该线程会把事件添加到待处理队列的队尾,等待 JS 引擎的处理")]),t._v(" "),s("li",[t._v("注意,由于 JS 的单线程关系,所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("定时触发器线程")])]),t._v(" "),s("ul",[s("li",[t._v("传说中的 setInterval 与 setTimeout 所在线程")]),t._v(" "),s("li",[t._v("浏览器定时计数器并不是由 JavaScript 引擎计数的,（因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）")]),t._v(" "),s("li",[t._v("因此通过单独线程来计时并触发定时（计时完毕后,添加到事件队列中,等待 JS 引擎空闲后执行）")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("异步 http 请求线程")])]),t._v(" "),s("ul",[s("li",[t._v("在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求")]),t._v(" "),s("li",[t._v("将检测到状态变更时,如果设置有回调函数,异步线程就产生状态变更事件,将这个回调再放入事件队列中。再由 JavaScript 引擎执行。")])])])]),t._v(" "),s("h2",{attrs:{id:"浏览器渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染流程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("浏览器渲染流程")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/7/16f7ee2d9a5667b3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),s("p",[t._v("1.解析 HTML 文件,构建 DOM 树,同时浏览器主进程负责下载 CSS 文件")]),t._v(" "),s("p",[t._v("2.CSS 文件下载完成,解析 CSS 文件成树形的数据结构,然后结合 DOM 树合并成 RenderObject 树")]),t._v(" "),s("p",[t._v("3.布局 RenderObject 树 （Layout/reflow）,负责 RenderObject 树中的元素的尺寸,位置等计算")]),t._v(" "),s("p",[t._v("4.绘制 RenderObject 树 （paint）,绘制页面的像素信息")]),t._v(" "),s("p",[t._v("5.浏览器主进程将默认的图层和复合图层交给 GPU 进程,GPU 进程再将各个图层合成（composite）,最后显示出页面")]),t._v(" "),s("h2",{attrs:{id:"题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" "),s("strong",[t._v("题解")])]),t._v(" "),s("h3",{attrs:{id:"_1-为什么-javascript-要是单线程的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-javascript-要是单线程的"}},[t._v("#")]),t._v(" 1. 为什么 Javascript 要是单线程的 ?")]),t._v(" "),s("p",[t._v("这是因为 Javascript 这门脚本语言诞生的使命所致!JavaScript 为处理页面中用户的交互,以及操作 DOM 树、CSS 样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。")]),t._v(" "),s("p",[t._v("如果 JavaScript 是多线程的方式来操作这些 UI DOM,则可能出现 UI 操作的冲突。")]),t._v(" "),s("p",[t._v("如果 Javascript 是多线程的话,在多线程的交互下,处于 UI 中的 DOM 节点就可能成为一个临界资源,")]),t._v(" "),s("p",[t._v("假设存在两个线程同时操作一个 DOM,一个负责修改一个负责删除,那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果。")]),t._v(" "),s("p",[t._v("当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性,Javascript 在最初就选择了单线程执行。")]),t._v(" "),s("h3",{attrs:{id:"_2-为什么-js-阻塞页面加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么-js-阻塞页面加载"}},[t._v("#")]),t._v(" 2. 为什么 JS 阻塞页面加载 ?")]),t._v(" "),s("p",[t._v("由于 JavaScript 是可操纵 DOM 的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。")]),t._v(" "),s("p",[t._v("因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。")]),t._v(" "),s("p",[t._v("当 JavaScript 引擎执行时 GUI 线程会被挂起,GUI 更新会被保存在一个队列中等到引擎线程空闲时立即被执行。")]),t._v(" "),s("p",[t._v("当浏览器在执行 JavaScript 程序的时候,GUI 渲染线程会被保存在一个队列中,直到 JS 程序执行完成,才会接着执行。")]),t._v(" "),s("p",[t._v("因此如果 JS 执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞的感觉。")]),t._v(" "),s("h3",{attrs:{id:"_3-css-加载会造成阻塞吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-加载会造成阻塞吗"}},[t._v("#")]),t._v(" 3. css 加载会造成阻塞吗 ？")]),t._v(" "),s("p",[t._v("由上面浏览器渲染流程我们可以看出 :")]),t._v(" "),s("p",[t._v("DOM 和 CSSOM 通常是并行构建的,所以 CSS 加载不会阻塞 DOM 的解析。")]),t._v(" "),s("p",[t._v("然而,由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的,")]),t._v(" "),s("p",[t._v("所以他必须等待到 CSSOM Tree 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染。")]),t._v(" "),s("p",[t._v("因此,CSS 加载会阻塞 Dom 的渲染。")]),t._v(" "),s("h3",{attrs:{id:"_4-domcontentloaded-与-load-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-domcontentloaded-与-load-的区别"}},[t._v("#")]),t._v(" 4. DOMContentLoaded 与 load 的区别 ?")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当 DOMContentLoaded 事件触发时,仅当 DOM 解析完成后,不包括样式表,图片。")])]),t._v(" "),s("li",[s("p",[t._v("当 onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。")])])]),t._v(" "),s("h3",{attrs:{id:"_5-什么是-crp-即关键渲染路径-critical-rendering-path-如何优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-什么是-crp-即关键渲染路径-critical-rendering-path-如何优化"}},[t._v("#")]),t._v(" 5. 什么是 CRP,即关键渲染路径(Critical Rendering Path)? 如何优化 ?")]),t._v(" "),s("p",[t._v("关键渲染路径是浏览器将 HTML CSS JavaScript 转换为在屏幕上呈现的像素内容所经历的一系列步骤。也就是我们上面说的浏览器渲染流程。")]),t._v(" "),s("p",[t._v("为尽快完成首次渲染,我们需要最大限度减小以下三种可变因素:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("关键资源的数量: 可能阻止网页首次渲染的资源。")])]),t._v(" "),s("li",[s("p",[t._v("关键路径长度: 获取所有关键资源所需的往返次数或总时间。")])]),t._v(" "),s("li",[s("p",[t._v("关键字节: 实现网页首次渲染所需的总字节数,等同于所有关键资源传送文件大小的总和。")])]),t._v(" "),s("li",[s("p",[t._v("优化 DOM")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("删除不必要的代码和注释包括空格,尽量做到最小化文件。")])]),t._v(" "),s("li",[s("p",[t._v("可以利用 GZIP 压缩文件。")])]),t._v(" "),s("li",[s("p",[t._v("结合 HTTP 缓存文件。")])])])]),t._v(" "),s("li",[s("p",[t._v("优化 CSSOM\n缩小、压缩以及缓存同样重要,对于 CSSOM 我们前面重点提过了它会阻止页面呈现,因此我们可以从这方面考虑去优化。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("减少关键 CSS 元素数量")])]),t._v(" "),s("li",[s("p",[t._v("当我们声明样式表时,请密切关注媒体查询的类型,它们极大地影响了 CRP 的性能 。")])])])]),t._v(" "),s("li",[s("p",[t._v("优化 JavaScript\n当浏览器遇到 script 标记时,会阻止解析器继续操作,直到 CSSOM 构建完毕,JavaScript 才会运行并继续完成 DOM 构建过程。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("async: 当我们在 script 标记添加 async 属性以后,浏览器遇到这个 script 标记时会继续解析 DOM,同时脚本也不会被 CSSOM 阻止,即不会阻止 CRP。")])]),t._v(" "),s("li",[s("p",[t._v("defer: 与 async 的区别在于,脚本需要等到文档解析后（ DOMContentLoaded 事件前）执行,而 async 允许脚本在文档解析时位于后台运行（两者下载的过程不会阻塞 DOM,但执行会）。")])]),t._v(" "),s("li",[s("p",[t._v("当我们的脚本不会修改 DOM 或 CSSOM 时,推荐使用 async 。")])]),t._v(" "),s("li",[s("p",[t._v("预加载 —— preload & prefetch 。")])]),t._v(" "),s("li",[s("p",[t._v("DNS 预解析 —— dns-prefetch 。")])])])])]),t._v(" "),s("h3",{attrs:{id:"_6-defer-和-async-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-defer-和-async-的区别"}},[t._v("#")]),t._v(" 6. defer 和 async 的区别 ?")]),t._v(" "),s("p",[t._v("当浏览器碰到 script 脚本的时候 :")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("没有 defer 或 async,浏览器会立即加载并执行指定的脚本")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("有 async,加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script defer src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myscript.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("有 defer,加载后续文档元素的过程将和 script.js 的加载并行进行（异步）,但是 script.js 的执行要在所有元素解析完成之后,DOMContentLoaded 事件触发之前完成。")]),t._v(" "),s("p",[t._v("从实用角度来说,首先把所有脚本都丢到 "),t._v(" 之前是最佳实践,因为对于旧浏览器来说这是唯一的优化选择,此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。")]),t._v(" "),s("p",[t._v("结论：")]),t._v(" "),s("p",[t._v("1、defer 和 async 在网络读取（下载）这块儿是一样的,都是异步的（相较于 HTML 解析）")]),t._v(" "),s("p",[t._v("2、它俩的差别在于脚本下载完之后何时执行,显然 defer 是最接近我们对于应用脚本加载和执行的要求的")]),t._v(" "),s("p",[t._v("3、关于 defer,此图未尽之处在于它是按照加载顺序执行脚本的,这一点要善加利用")]),t._v(" "),s("p",[t._v("4、async 则是一个乱序执行的主,反正对它来说脚本的加载和执行是紧紧挨着的,所以不管你声明的顺序如何,只要它加载完了就会立刻执行")]),t._v(" "),s("p",[t._v("5、仔细想想,async 对于应用脚本的用处不大,因为它完全不考虑依赖（哪怕是最低级的顺序执行）,不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的")]),t._v(" "),s("h3",{attrs:{id:"_7-谈谈浏览器的回流与重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-谈谈浏览器的回流与重绘"}},[t._v("#")]),t._v(" "),s("strong",[t._v("7. 谈谈浏览器的回流与重绘")])]),t._v(" "),s("p",[t._v("回流必将引起重绘,重绘不一定会引起回流。")]),t._v(" "),s("h4",{attrs:{id:"回流-reflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" 回流(Reflow)")]),t._v(" "),s("p",[t._v("当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时,浏览器重新渲染部分或全部文档的过程称为回流。")]),t._v(" "),s("p",[t._v("会导致回流的操作：")]),t._v(" "),s("p",[t._v("页面首次渲染")]),t._v(" "),s("p",[t._v("浏览器窗口大小发生改变")]),t._v(" "),s("p",[t._v("元素尺寸或位置发生改变元素内容变化（文字数量或图片大小等等）")]),t._v(" "),s("p",[t._v("元素字体大小变化")]),t._v(" "),s("p",[t._v("添加或者删除可见的 DOM 元素")]),t._v(" "),s("p",[t._v("激活 CSS 伪类（例如：:hover）")]),t._v(" "),s("p",[t._v("查询某些属性或调用某些方法")]),t._v(" "),s("p",[t._v("一些常用且会导致回流的属性和方法:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("clientWidth、clientHeight、clientTop、clientLeft\noffsetWidth、offsetHeight、offsetTop、offsetLeft\nscrollWidth、scrollHeight、scrollTop、scrollLeft\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollIntoView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、scrollIntoViewIfNeeded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h4",{attrs:{id:"重绘-repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘(Repaint)")]),t._v(" "),s("p",[t._v("当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等）,浏览器会将新样式赋予给元素并重新绘制它,这个过程称为重绘。")]),t._v(" "),s("h4",{attrs:{id:"性能影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能影响"}},[t._v("#")]),t._v(" 性能影响")]),t._v(" "),s("p",[t._v("回流比重绘的代价要更高。")]),t._v(" "),s("p",[t._v("有时即使仅仅回流一个单一的元素,它的父元素以及任何跟随它的元素也会产生回流。")]),t._v(" "),s("h4",{attrs:{id:"如何避免"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何避免"}},[t._v("#")]),t._v(" 如何避免")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("CSS")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("避免使用 table 布局。")])]),t._v(" "),s("li",[s("p",[t._v("尽可能在 DOM 树的最末端改变 class。")])]),t._v(" "),s("li",[s("p",[t._v("避免设置多层内联样式。")])]),t._v(" "),s("li",[s("p",[t._v("将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。")])]),t._v(" "),s("li",[s("p",[t._v("避免使用 CSS 表达式（例如：calc()）。")])])])]),t._v(" "),s("li",[s("p",[t._v("Javascript")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("避免频繁操作样式,最好一次性重写 style 属性,或者将样式列表定义为 class 并一次性更改 class 属性。")])]),t._v(" "),s("li",[s("p",[t._v("避免频繁操作 DOM,创建一个 documentFragment,在它上面应用所有 DOM 操作,最后再把它添加到文档中。")])]),t._v(" "),s("li",[s("p",[t._v("也可以先为元素设置 display: none,操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。")])]),t._v(" "),s("li",[s("p",[t._v("避免频繁读取会引发回流/重绘的属性,如果确实需要多次使用,就用一个变量缓存起来。")])]),t._v(" "),s("li",[s("p",[t._v("对具有复杂动画的元素使用绝对定位,使它脱离文档流,否则会引起父元素及后续元素频繁回流。")])])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);