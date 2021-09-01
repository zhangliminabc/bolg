---
title: JavaScript深入之闭包
date: 2021-08-23 13:43:03
updated: 2021-08-23 13:43:03
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, 闭包
---

###### 闭包就是能够读取其他函数内部变量的函数。由于在 Javascript 语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"

###### 使用场景

js中的作用域只有全局和函数作用域，在某些特殊其情况下需要在函数之外获取函数内定义的一些变量和方法

###### MDN对闭包的定义？

闭包是指那些能访问自由变量的函数

那什么是自由变量？
自由变量是指在函数中使用但是不是函数的参数也不是函数的局部变量的变量

由此可以看出闭包 = 函数 + 函数能够访问的自由变量

由此上面得出我对于闭包的理解：
闭包就是在函数内访问当前函数上下文中变量对象以外的变量

###### 如何理解闭包？

函数能够访问当前执行上下文中的变量对象以外的变量

在实践中使用场景：

1. 函数返回函数 (防抖、 节流)

<b style="color:red;">在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。</b>

```javascript
var name = "全局属性";
var object = {
  name: "这是对象中的值",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  },
};
console.log(object.getNameFunc()()); // undefined
```

```javascript
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  },
};

console.log(object.getNameFunc()()); // My Object
```