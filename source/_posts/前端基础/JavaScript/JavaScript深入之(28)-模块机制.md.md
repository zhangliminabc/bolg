---
title: JavaScript深入之-模块机制
date: 2022-07-02 17:52:38
updated: 2022-07-02 17:52:38
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords:
---

##### 提供一种将JavaScript程序拆分可按需导入的单独模块机制

#### 为什么使用模块化？

全局变量的命名冲突，良好的模块化是代码复用和工程解耦的关键

###### CommonJs

CommonJs的一个模块就是一个脚本文件，通过执行该文件来加载模块，CommonJs规范规定每个模块内部，module变量代表当前模块，这个变量是一个对象，它的exports属性是对外的接口

```js
var myModule = require('./module')
myModule.sayHello()

// module.js
module.exports.sayHello = function () {
	console.log('hello')
}

// 如果这样写
module.exports = sayHello
// 则需要改成这样调用
var sayHello = require('module')
sayHello()
```


require 命令第一次加载该脚本时就会执行整个脚本，然后在内存中生成一个对象（模块可以被多次加载，但是在第一次加载时才会运行，结果会被缓存）

```
{
	id: '...',
	exports: {....},
	loaded: true
	....
}

```

CommonJS 模块的特点

- 所有代码都运行在模块作用域，不会污染全局作用域
- 独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交接
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载就直接读取缓存结果要想让模块再次运行就必须清楚缓存

- 模块的加载顺序按照其在代码中出现的顺序


AMD : Asynchronous Module Definition(异步定义模块)

采用异步加载，模块的加载不影响后面后面语句的运行，所有依赖这个模块的语句都定义在一个回调函数中，等加载完成函数会被执行

```js
// id: 模块名称
// dependencies: 模块所需要依赖的数组
// factory: 模块初始化要执行的函数或者对象，如果为函数它应该只执行一次，如果是对象此对象应为模块的输出值
define(id, dependencies, factory)
```

