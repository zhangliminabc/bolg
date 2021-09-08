---
title: JavaScript深入之instanceof原理
date: 2021-08-23 15:02:43
updated: 2021-08-23 15:02:43
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: 前端基础, JavaScript, instanceof, typeof
---

#### instanceof: 用于判断引用类型中的数据类型

其实现原理是判断数据能否在其原型上找到对应的值

``` javascript
/**
 * 模拟实现instanceof
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function mockInstanceof(left, right) {
    const pro = right.prototype
    let lefePro = left.__proto__

    while (true) {
        if (left === null || left === undefined)
            return false
        if (pro === lefePro)
            return true
        left = left.__proto__
    }
}

```

###### instanceof 和 typeof 的区别？

typeof： 用于除null以外的基础类型值的数据判断, 
instanceof： 用于引用类型值的判断

###### 除了使用instanceof判断引用类型还有什么其他方式吗?

###### Object.prototype.toString.call

###### constructor: 属性易变，不可信赖，为了规范，在重写对象原型时一般都需要重新给constructor赋值，以保证实例对象的类型不被改写