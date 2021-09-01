---
title: JavaScript深入之apply和call函数
date: 2021-08-23 15:58:30
updated: 2021-08-23 15:58:30
tags: [前端基础,JavaScript]
categories: [JavaScript]
description:
keywords: 前端基础, JavaScript
---

apply 和 call

相同点: 都能够改变函数执行时的上下文

不同点：

call: 接收的是参数列表
apply: 接收的是参数数组 或者类数组

1. 模拟call函数

```javascript

Function.prototype.mockCall = function() {
    const self = this
    const args = Array.from(arguments)

    const [curThis] = args
    curThis.fn = self

    const result = curThis.fn(...args.slice(1))
    delete curThis.fn
    return result
}

//  测试
var getValue = function(paralist, params) {
    console.log(this.a) // 1
    console.log(paralist) // ['参数1', '参数2']
    console.log(params) // 这是第二个参数
    return this.a
}

var obj = {
    a: 1,
}

getValue.mockCall(obj, ['参数1', '参数2'], '这是是第二个参数')

```

2. 模拟apply函数

```javascript
Function.prototype.mockApply = function() {
    const self = this
    const [curThis, params] = Array.from(arguments)
    curThis.fn = self
    const result = curThis.fn(...params)
    delete curThis.fn
    return result
}


// 测试
var obj1 = {
    a: 1,
}

var f = function(param1, param2) {
    console.log(param1) // 测试1
    console.log(param2) // ceshi12
    console.log(this.a) // 1
    return param1
}
f.mockApply(obj1, ['测试1', 'ceshi12'])

```