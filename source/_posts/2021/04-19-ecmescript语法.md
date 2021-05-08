---
title: ECMAScript语法
date: 2021-04-19 16:27:57
tags: [ECMAScript]
categories: ECMAScript
updated:
description:
keywords: javaScript语法
---

1. if语句
```javascript
/**
 * if (condition) statement1 esle statement2
 *  condition: 可以为任意的表达式，而且对这个值的求职结果不一定是布尔值。js自动会对condition的值调用boolean方法去转* 为布尔值
 * 如果condition为true就在执行statement1, 否则就执行statement2语句。这个两个语句可以是一句代码，也可以是个代码块
 */

if (i < 25) {
  console.log(i);
} else {
  console.log("fyrgfyr");
}
```
2. do-while 语句: 是一种后测试语句(只有在循环体的中的代码执行完之后才会测试出口条件, 循环体至少执行一次)

  ```javascript
  /**
   * do{statement} whild(expressiong)
   */
  var i = 0;
  do {
    i++;
  } while (i > 5);
  ```

3. while 语句: 前测试循环语句(循环体可一次都不执行)

  ```javascript
  /**
   *  while(expression) statement
   */
   var i = 0
   while( i< = 10 ) {
     i++
  }
  ```

4. for 语句: 前测试循环语句（有执行循环之前初始化变量和定义循环后要执行的代码的能力）
    ```javascript
    // for(initalnition; expressiong; loop-expressiong) statement
    var count = 10;
    for (var i = 0; i <= count; i++) {
    console.log(i);
    }
  ```

5. forin 语句: 是一种精准的迭代语句，用来枚举对象的属性
  ```javascript
  // for(property in expression) statement
  for (pro in window) {
    console.log(pro);
  }
  ```

6. break 和 continue 语句: 用于在循环中精确的控制代码的执行

  - break: 会立即退出循环, 强制执行循环语句后面的语句
  - countinue: 会立即退出循环, 但是退出循环之后会从循环的顶部立即执行

  ```javascript
  var num = 0;
  for (var i = 0; i < 10; i++) {
    if (i % 5 === 0) {
      break;
    }
    num++;
  }
  console.log(num); // 4
  ```

7. switch 语句: 在比较时是采用全等操作符，因此不会发生类型装换
  ```javascript
    /**
    * 如果表达式等于这个值，则执行后面的语句
    * switch(express)
    * case value: statement
    *   break;
    * case value: statement
    *   break;
    * default: statement
    */
  ```