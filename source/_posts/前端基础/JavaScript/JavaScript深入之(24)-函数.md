---
title: JavaScript深入之函数
date: 2021-08-31 10:38:41
updated: 2021-08-31 10:38:41
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript
---

- 概述
  <hr style="margin: 5px 0px; background-image: none;     border-top: 1px solid #fff;"/>

  函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值

- 声明(Function Declaration)
  <hr style="margin: 5px 0px; background-image: none;     border-top: 1px solid #fff;"/>

  1.function 命令声明的代码区块，就是一个函数。function 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面


  <!--more-->

  ```javascript
  function print(param) {
    console.log(param);
  }
  ```

  2.函数表达式， 将匿名函数赋值给变量，这是这个匿名函数叫函数表达式

  ```javascript
  var functionVar = function (params) {
    console.log(params);
  };

    // 带有函数名的函数表达式
  var funtionWithName = function functionName(params) {
    console.log(typeof functionName);
  };

  /**
   * 上面代码在函数表达式中，加入了函数名functionName。这个functionName只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）
    * ReferenceError: functionName is not defined
    */
  functionName("这是参数有参数的函数表达式);
  ```

  3.Function 构造函数

  ```javascript
  var add = new Function("x", "y", " return x + y");

  // 等同于
  function add (x, y) {
    retuen x + u
  }
  ```

- 函数的重复声明
  如果同一个函数被多次声明， 后面的会覆盖前面的

  ```javascript
  function firstFunc() {
    console.log("这是第一个函数");
  }

  function firstFunc() {
    console.log("这是重复声明的函数， 这个函数会覆盖第一个函数");
  }

  /**
   * result => 这是重复声明的函数， 这个函数会覆盖第一个函数
   * 原因： js中的函数本身属于一个挂载到window对象上的一个属性值
   */
  firstFunc();
  ```

- 属性和方法
- 递归
- 作用域

  在 es5 中 JavaScript 只有两种作用域， 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在

  函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。

  ```javascript
  var a = "这是全局作用域的变量";

  function globalFun() {
    console.log(a);
  }

  /**
   * result => 这是全局作用域的变量
   *  在函数体内可以访问具有全局作用域的变量
   */
  globalFun();
  ```

  ```javascript
  function funVar() {
    var b = "这是函数体内定义的变量";
  }

  /**
   * ReferenceError: b is not defined
   * 函数内定义的变量不能再函数体之外访问
   */
  console.log(b);

  /*
   * 如果在函数体内存在跟全局变量相同的局部变量，局部变量会覆盖全部变量
   */
  var v = 1;
  function f() {
    var v = 2;
    console.log(v);
  }
  // 2
  f();
  // 1
  console.log(v);
  ```

  与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部

  ```javascript
  function foo(x) {
    if (x > 100) {
      var tmp = x - 100;
    }
  }

  // 等同于
  function foo(x) {
    var tmp;
    if (x > 100) {
      tmp = x - 100;
    }
  }
  ```

  函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关

  ```javascript
  var a = 1;
  // firstFun 函数的作用域是全局的
  var firstFun = function () {
    console.log(a);
  };

  function souncedFun() {
    var a = 2;
    firstFun();
  }
  /*
   * result => 1
   */
  souncedFun();
  ```

- 参数
- 闭包
  定义在函数体内的函数

  ```javascript
  function parentFun() {
    var a = 1;
    return function () {
      return a;
    };
  }

  /*
   * Uncaught ReferenceError: n is not defined
   */
  console.log(a);

  // 总结： 函数内部可以直接读取全局变量，但是函数外部无法读取函数内部声明的变量。

  /**
   * 改造之后的函数体
   */
  function parentFun() {
    var a = 1;
    return function () {
      return a;
    };
  }

  /**
   * result => 1
   */
  console.log(parentFun());

  // 防抖: 防抖是任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行，一般用于输入框实时搜索
  function debounce(fn, time) {
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, time);
    };
  }
  // 节流: 节流是规定函数在指定的时间间隔内只执行一次，一般用于scroll事件
  function throttle(fn, time) {
    let canRun = true;
    return function () {
      if (!canRun) {
        return;
      }
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;
      }, time);
    };
  }
  ```

- 立即调用函数
  在 Javascript 中，圆括号()是一种运算符，跟在函数名之后，表示调用该函数

