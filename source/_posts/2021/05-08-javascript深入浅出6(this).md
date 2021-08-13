---
title: javascript深入浅出6(this)
date: 2021-05-08 15:26:25
tags: JavaScript
categories: [JavaScript]
updated:
description: 详细介绍了js中的this问题， 区分箭头函数和普通函数下的this的区别
keywords: JavaScript, （this可以叫做上下文对象， 也就是用来指明执行上下文是在哪个上下文中被触发的对象）
---

[参考资源-阮一峰this讲解](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)
[参考资料-mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

- 普通函数的this指向函数运行时所在的环境

   ``` javascript
    (function () {
        console.log(this) // window
        console.log(this === window) // true
    })()
  ```

- 箭头函数指向函数所在的作用域

- js中this指向的情况
    1. 函数作为对象的属性
    2. <span style="color: red;">通过apply, bind等方法显示改变this的值</span>
    3. <span style="color: red;">通过new 关键词实例化函数, this指向初始化的函数</span>
    4. 自执行函数中的this指向window
    5. 函数作为对象的属性，但是不通过对象的调用， this指向window



- 手写模拟apply, call函数
    [参考资料](https://github.com/mqyqingfeng/Blog/issues/11)
    [call]('../../code/call.js)
    [apply]('../../code/apply.js)

```javascript

    /** apply(需要改变的this值， 参数数组)
     *  output: 返回函数执行的结果
     */
    function mockApply() {
        let [currentThis, params] = Array.from(arguments)
        currentThis.fn = this
        const result = currentThis.fn(...params)
        delete currentThis.fn
        return result
    }

    Function.prototype.mockCall = mockApply

    // 测试
    var obj1 = {
        a: 1,
    }

    var f = function (param1, param2) {
        console.log(param1) // 测试1
        console.log(param2) // ceshi12
        console.log(this.a) // 1
        return param1
    }
    f.mockCall(obj1, ['测试1', 'ceshi12'])
```


```javascript
    /**
     * 模拟化call函数
     * @returns 函数执行的结果
     */
    function mockCall() {
        const params = Array.from(arguments)
        const [ currentThis ]= params
        currentThis.fn = this
        const result = currentThis.fn(...params.slice(1))
        delete currentThis.fn
        return result
    }

    Function.prototype.mockCall = mockCall

    //  测试
    var getValue = function (paralist) {
        console.log(this.a) // 1
        console.log(paralist) // ['参数1', '参数2']
        return this.a
    }

    var obj = {
        a: 1,
        getValue: getValue
    }

    getValue.mockCall(obj, ['参数1', '参数2'])
```

```javascript
    /**
     *  @params0: this 对象
     *  @params1： 参数列表
     *  @return : Function
     */
    const a = {
        a: 'eydgeye',
        getValue: function (c, b) {
            console.log(c, b)
            console.log(arguments)
            console.log(Array.prototype.slice.call(arguments, 1))
            console.log(this.a)
        }
    };
    const newBindFun = a.getValue.bind(a, 12, 'teftdede')
    newBindFun()
```