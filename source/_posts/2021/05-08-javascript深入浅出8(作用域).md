---
title: javascript深入浅出8(作用域)
date: 2021-05-08 15:35:47
tags: JavaScript
categories: [JavaScript]
updated:
description: js中的作用域只有函数作用域和全局作用域
keywords: javascript
---

#### 作用域: (js中的作用域只有函数作用域和全局作用域)

<b>确定当前执行代码对标识符的访问权限</b>

- 函数的作用域: 函数产生一层函数作用域
```javascript
function foo(a) {
  var b = a * 10;

  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 10);
}

/**
 * 函数的作用域
 * 1, 全局window下foo
 * 2, foo下有a, b, bar
 * 3, bar下有c, 当需要查找b，a的值时在当前对象下不能找到会向上级foo下的作用域寻找
 */
foo(10);
```

- 模拟块级作用域
```javascript
function mockBlaockScope() {
  (function () {
    var a = 100;
    console.log(a); // 100
  })();
  console.log(a); // a is not defined
}
mockBlaockScope();
```

#### 面试题
1, 使用 es5 模拟块级作用域
```javascript
function mockScoptBlock() {
  (function () {
    var a = "这是块级作用于内的函数";
    console.log(a);
  })();

  console.log(a); // error, a is not defined
}
```

2, 解决循环输出的问题
```javascript
scopeFun();

function scopeFun() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
//  output: 5,5,5,5,5

// 解决方案: 使用自执行函数生成函数内的作用域
function scopeFun() {
  for (var i = 0; i < 5; i++) {
    (function (a) {
      setTimeout(function () {
        console.log(a);
      }, 1000);
    })(i);
  }
}
```