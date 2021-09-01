---
title: JavaScript深入之bind模拟实现
date: 2021-08-23 15:05:43
updated: 2021-08-23 15:05:43
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: 前端基础, JavaScript, bind
---

##### bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数

###### bind函数的特点

1. 返回一个函数
2. 可以传入参数


```javascript

	Function.prototype.customBind = function() {
    var self = this;
    var context = Array.from(arguments)[0]
        // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}

var a = {
    b: 1
}

var b = 4

function getb() {
    console.log(this.b)
}

const c = getb.customBind(a)
c() // 1

```

