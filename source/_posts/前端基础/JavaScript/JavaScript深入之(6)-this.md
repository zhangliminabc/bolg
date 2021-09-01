---
title: JavaScript深入之this
date: 2021-08-23 11:19:52
updated: 2021-08-23 11:19:52
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, this
---


##### this

this可以叫做上下文对象, 也就是用来指明执行上下文是在那个上下文中被触发的对象

###### 普通函数的this指向函数运行时所在的环境

   ``` javascript
    (function () {
        console.log(this) // window
        console.log(this === window) // true
    })()

  ```

###### js中this指向的情况
1. 函数作为对象的属性
2. <span style="color: red;">通过apply, bind等方法显示改变this的值</span>
3. <span style="color: red;">通过new 关键词实例化函数, this指向初始化的函数</span>
4. 自执行函数中的this指向window
5. 函数作为对象的属性，但是不通过对象的调用， this指向window

###### 箭头函数

先看看 箭头函数通过babel转码为es5是什么样的....

```javascript

// 转码之前
function Demo () {
    let test = '测试'   
    const a = () => {
        console.log(this)
    }
}

// 通过babel转码之后
function Demo() {
 // 箭头函数的this指向
  var _this = this;
  let test = '测试';
  const a = function () {
    console.log(_this);
  };
}

```

所以通过上面可以看出： 箭头函数的this指向当前箭头函数所在的上下文中

###### 总结：箭头函数和普通函数的区别？

1. this指向： 箭头函数没有自己的this指向， 它只会从自己作用域链上一层继承this
2. 构造函数: 箭头函数不能作为构造函数, 箭头函数没有原型
3. 箭头函数没有自己的arguments对象
4. 因为没有自己的this指向，所以不能调用 call / apply方法改变内部的this指向


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
