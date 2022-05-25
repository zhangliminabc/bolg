#### ES

1. async/await 和 promise的区别
   promise是ES6，async/await是ES7.
   async/await相对于promise来讲，写法更加优雅
   reject状态：
      1）promise错误可以通过catch来捕捉，建议尾部捕获错误，
      2）async/await既可以用.then又可以用try-catch捕捉

2. js加载的 defer 和 async的 区别
    defer: dom tree + css rule tree 渲染完成之后
    aysnc: 是异步加载，加载完成就会执行

3. 0.1 + 0.2 为啥不为0.3
4. js的继承有那些, 各自的优缺点
  
5. es6和es7新增的那些特性

6. 数组的方法
    splice / unshift / shift/ push / pop /reverse / slice/ reduce / map / some / every

7. 箭头函数和普通函数的区别

    1. 箭头函数没有自己的this指向， 它只会从自己作用域链上一层继承this
    2. 箭头函数不能作为构造函数
    3. 箭头函数没有自己的arguments对象
    4. 箭头函数没有prototype

8. js闭包
   闭包就是在函数内访问当前函数上下文中变量对象以外的变量

9. promise.all 和 promise.race
  
10. js的数据类型

  基本数据类型： null / undefined / string / number / boolean /
  引用数据类型： object
  symbol

11. js的原型和原型链
    js中所有的对象有隐士原型
    函数有prototype属性

12. 简述promise的原理

13. 如何理解异步
     任务完成不是连续的; 可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。

     异步的方式
      回调函数
      promise
      事件监听
      发布订阅

14. 原型链和作用域链的查找顺序

     作用域链是正对变量
     原型链是正对构造函数的实例对象的

15. JavaScript的数据类型
16. js中的 === 和 == 的区别

#### CSS

1. 什么是盒子模型
 分为标准盒模型和IE盒模型， 区别是IE盒模型的content = content + border + padding

2. flex：1是什么的缩写

3. 实现一个垂直水平居中
 flex / position + margin(已知宽度) / position + transfrom / table-cell  / grid

4. css的优先级算法
 !important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器

5. css的display属性
 block/ inline-block / flex / inline-flex / none

6. 什么是bfc

 BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素

7. CSS的伪类有哪些
8. h5的适配方案
 rem / flexlib
 1, rem
  2, postcss-pxtorem
  3, postcss-px-to-viewport: vh + vw
  4, flex + rem

9. rem/em/ px的区别

#### 浏览器

1. 浏览器敲入回车到渲染的原理
 a, 域名解析： DNS协议根据对应的域名解析找到对应的ip地址
  b, TCP的三次握手
  c, 浏览器拿到响应文件后开始解析，浏览器的解析

2. 浏览器渲染的原理
   dom tree + css rule tree = render tree

3. 浏览器的强缓存和协商缓存

 1, 304代表缓存有效
  2, 区别是：
  a, 强缓存在请求时不会向服务器端发送真实的请求任务， 因为在经历浏览器缓存的时候就命中了， 返回的状态码是200
  b, 协商缓存会向服务器发送真是的请求，而是否使用缓存则根据浏览器去判断， 如果命中缓存返回的状态码是304
 3, 强缓存：
  a, Cache-Control
  b, Expires
 4, 协商缓存
  a, Last-Modified和If-Modified-Since
  b, ETag和If-None-Match

4. 如何实现跨页通信
5. webwork
6. websockt
7. cookie 和 session
8. sessionStorage 和 localStorage
9. cookie 和 sessionStorage 的区别
10. 浏览器的事件循环

#### 网络

1. 浏览器的预捡请求（options)
2. 浏览器的跨域问题如何处理，什么叫跨域
   不同域之前的请求
a. jsonp
<!-- b. websocket: 允许跨域通信 -->
c. 服务端设置为 Access-Control-Allow-Origin: *
d. nginx反向代理

```nginx
 server {
  listen: 9090;
  server_name localhost;
  location ^~ /api {
        proxy_pass http://localhost:9871;
    }  
 }
```

e. cors(跨资源共享)
f. document.domain: 只适用于不同子域的框架间的交互。
g. 通过location.hash跨域

3. http请求状态码304
  
  命中协商缓存

4. axiou内部的封装
5. 在跨域情况下发起post请求能拿到数据吗

6. http协议的状态码

7. 什么叫同源策略
  两个url中的 协议/端口/域名相同

8. 什么叫跨域
    只要协议、域名、端口有任何一个不同，都被当作是不同的域

#### 框架

1. template的作用

2. v-if和v-show的区别

  v-if: 条件渲染, dom存在于内存中， 并没有真正的渲染，条件快中的子组件和事件监听被销毁和重建
  v-show: css的display去控制显示和隐藏
  区别：
  v-if适用于不频繁切换的场景
  v-show使用于频繁切换场景

3. data为啥是函数
  因为js中的对象是引用关系， 当组件复用的时候data就会指向同一块内存地址， 使用函数可以返回一份原有对象的拷贝

4. template和react的jsx的区别
5. 发布订阅和单例模式的区别

    发布订阅： 是建立一种1对多的一种关系
    单例： 全局仅有一个实例化对象（闭包）

6. vue中发布订阅的使用场景
    eventBus / 数据响应式

7. vue中的指令有哪些

8. vuerouter是如何获取路由上参数的

9. $router和$route的区别

10. router的路由模式
    hash / history / abstract

11. router的事件监听的api

    hash: url中的hash值只是路由的一个状态，当向服务端发送请求时hash部分不会被发送； hash值的改变都会增加一个历史记录，所以可以通过 hashchange来监听路由的变化

    history: 监听 popstate事件， pushstate/ replaceState不会触发事件

12. 路由钩子

    全局钩子： beforeEach  / afterEach
    路由独享： beforeEnter
    组件内守卫： beforeRouteEnter / beforeRouteUpdate / beforeRouteLeave

    完整的导航解析过程
    导航被触发。
      在失活的组件里调用 beforeRouteLeave 守卫。
      调用全局的 beforeEach 守卫。
      在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
      在路由配置里调用 beforeEnter。
      解析异步路由组件。
      在被激活的组件里调用 beforeRouteEnter。
      调用全局的 beforeResolve 守卫 (2.5+)。
      导航被确认。
      调用全局的 afterEach 钩子。
      触发 DOM 更新。
      调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

13. vue的组件通信有哪几种方式

    vuex:
    props:
    $emit:
    $parent / $child:
    provide / inject: 解决跨组件间的通信
    $attrs： 不背props所识别的
    $listeners: 将父组件中不包含native修饰的事件传递给内部组件
    eventbus：

14. v-model的实现
15. nexttick的原理以及使用场景
    原理： 异步降级 promise -> MutationObserver -> setImmediate -> setTimeout
    使用场景： 获取dom
    在created中获取dom

16. vue依赖收集的原理

17. vue中 diff算法

18. vue使用虚拟dom的目的

19. vue的生命周期
20. 父子组件之间的生命周期

  父beforecreate -> 父created -> 子beforeCreate ->子created -> 子mounted -> 父mounted

21. vuex的原理
22. vue中compute和watcher的区别

  computed: 依赖其他属性值，当其他属性值发生改变，下一次获取computed的时候才会重新计算对应的置

  watcher: 数据每次发生改变，都会触发

23. vuex是如何注入到vue中的
24. plugin 和 组件的区别
25. 开发自定义的plugin
26. vue.component 和 vue.extend 的区别
27. vue编译原理
28. vue的path算法

29. vue的双向数据绑定原理
     a. 深度递归遍历增加数据劫持
     b. 当对劫持数据进行访问的时会判断当前是否有watcher实例， 如果有会保存当前的watcher实例到dep中的subs(订阅者)
     c. 当对劫持数据进行设置值时会触发dep中的notify， 遍历dep中存储的sub执行sub的update方法（发布）

     b. 组件实例之后会调用render生成虚拟dom， 在render过程中对用到的数据会执行updatecomponted
     c. deptarget == render watcher
      render watcher
      computed watcher
      watch watcher

30. vuex的getter
31. vue虚拟dom的作用

  为了不必要的dom操作，优化性能
  数据改变 ->虚拟DOM(计算变更)-> 操作DOM -> 视图更新
32. v-for中的key的作用
      在进行计算dom变动的时候可以对同级元素可以更高效的计算出变动，对性能的优化

33. vue中的diff算法
      不同标签直接替换
      同级相同变量通过key计算变动
      __patch__函数
        接收两个入参，参数都是vnode
        先判断标签和key相同就认为是相同node，会执行pathVnode函数
           判断两个节点是否相同
           新节点如果有文本, 老节点text 不等于 新节点的text， 设置节点内容
           新节点没有文本可能会有children，
             新老节点都有child， 执行updatechild方法，
             新节点有child， 老节点没有child， 老节点有内容，会清空老节点内容，以新节点为基准遍历添加添加元素
             老节点有child， 新节点没有; 遍历移除老节点下的child
             老节点有文本， 清空老节点下的文本

             updatechild：首尾指针

34. vue的流程

#### 自动化构建

1. webpack的配置
2. 性能优化（虚拟滚动， webwork)
3. 直播断流的处理

#### 其他上

1. css的loader写一些函数
2. 首屏加载优化
3. 性能优： 火焰图
4. 图片的优化方式
  预加载
  赖加载
  滚动加载
5. jsbriage的封装
6. css-loader的作用
 css-loader 解释(interpret) @import 和 url()
7. 发布订阅和单例模式的区别
8. webview深层原理
9. nginx的正向代码
10. sql的内联和外联

#### codeing

1. 多次请求如何避免
2. 怎样从数值中找到小数点最多的小树
3. 数字转化成 [w, 千万， 百万]
4. 数组排序，求最大值最小值和平均值
5. 实现reduce(已掌握)
6. 实现一个 Promise.all
7. 防抖、节流
8. code 回文数
9. 写一个对数据的proxy代理
10. 写一个并行请求函数

知乎jd分析:

1. 扎实的前端基础， html, js, css, 浏览器相关知识
2. vue/ vuex/ vue-router
3. webpack
4. 算法/ 设计模式
5. hybrid
6. 移动端布局