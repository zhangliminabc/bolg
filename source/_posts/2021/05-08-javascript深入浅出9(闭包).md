---
title: javascript深入浅出9(闭包)
date: 2021-05-08 15:40:19
tags: JavaScript
categories: [JavaScript]
updated:
description: js中的作用域只有全局和函数作用域，在某些特殊其情况下需要在函数之外获取函数内定义的一些变量和方法， 这就是闭包
keywords: javascript
---

##### 闭包
###### js中的作用域只有全局和函数作用域，在某些特殊其情况下需要在函数之外获取函数内定义的一些变量和方法
###### 通俗的解释是函数返回函数，我的理解是
###### 闭包就是能够读取其他函数内部变量的函数。由于在 Javascript 语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"

<b style="color:red;">所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。</b>

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

