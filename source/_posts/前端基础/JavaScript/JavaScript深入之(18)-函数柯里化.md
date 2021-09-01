---
title: 函数柯里化
date: 2021-08-26 15:37:15
updated: 2021-08-26 15:37:15
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, 函数柯里化
---

##### 什么是函数柯里化？

只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数（多参数函数转化成一系列使用一个参数的函数的技术）

```javascript
function curry(fn, ...args) {
    const params = Array.prototype.slice.call(arguments, 1);
    if (params.length >= fn.length) {
        return fn(...args)
    } else {
        return (args) => curry(fn, ...params, args)
    }
}


function add1(x, y, z) {
    console.log(x, y, z) // 1,2,3
    return x + y + z
}

console.log(curry(add1, 1)(2)(3)) // 6

```

##### 为什么要函数柯里化？

参数复用： 利用闭包内存中记录上一个函数的参数
提前返回： 避免部分逻辑重复执行
延迟执行： 每次调用之后并不是真正的执行