---
title: javascript深入浅出三(语法)
date: 2021-05-08 14:48:26
tags: JavaScript
categories: [JavaScript]
updated:
description: 介绍了js的基础语法，包含js的基础语法、操作符(算数、关系、逻辑、一元操作符)、 数据类型(null、undefined、string、boolean、number、object)
keywords: javascript
---

####  js基础语法
    1. 区分大小写: js 中的变量标识符区分大小写，也就意味这 test/Test 是两个不同的变量
    2. 标识符: js 中的标识符是指函数名、变量名、参数名等
        a. 第一个字符必须是字符、下划线、美元符号
        b. 其他字符可以是字母、数字、下划线、美元符号
        c. 关键字不能作为标识符
    3. 注释: 单行注释和多行注释
    4.  语句: 语句以;结尾
            - 虽然分号不是必须的，但是加上也会在某些情况下增加代码的性能
    5. 变量是松散类型，松散类型可以保存任何类型的数据

```javascript
    var message; // 定义变量但未初始化，默认值为undifined
    /*
    1.区分大小写, a 和A 是两个不同的变量。改变其中一个值不会影响另一个变量的值
    */
    var a = "1";
    var A = "1";
    console.log(a == A); //true
```

#### 标识符的声明方式( let/ const/ var)
   1, let、const、var三者之间的区别
           相同点：
           不同点：
               1. var有全局和函数作用域, let和const是块级作用域
               2. var可以先使用后声明， let和const不可以，let和const会生成暂时性死区，不在在初始化
   2. var对应同名标识符的处理规则？
      <span style="color:red;">这是因为对于同名的变量声明，Javascript采用的是忽略原则，后声明的会被忽略。对于同名的函数声明，Javascript采用的是覆盖原则，先声明的会被覆盖。对于同名的函数声明和变量声明，采用的是忽略原则，为了确保函数能够被引用到，在提升时函数声明会提升到变量声明之前，变量声明会被忽略，但是变量赋值以后会被覆盖</span> 
#### js变量提升
   js 中的变量可以先使用后声明，这一现叫做变量提升， 提升后的变量返回undefined
     ```javaScript
        var a // 声明一个变量，可选初始化一个值
        let A // 声明一个块级作用， 可选初始化一个值
        const c // 声明一个块作用域的只读常量
    ```
    为什么var会发生变量的提升？
        js分为编译和执行，js引擎在编译阶段会收集所有的变量并绑定到当前所有在的作用域，而变量的赋值操作在执行阶段执行，所以才会出现变量的提升
#### js 操作符

- 算数操作符
    1. 前置型操作符(前置型递增递减): 执行前置递增或者递减，变量的值都是在被求值以前改变的, 返回的是自增减一之后的值

        ```javascript
        var age = 10;
        var anotherAge = ++age + 1;
        console.log(age); // output: 10
        console.log(anotherAge); // output: 11
        ```
    2. 后置操作符(后置型递增递减): 执行递增递减操作是在包它们的语句被求值之后执行， 返回没有自增减之后的值

        ```javascript
        var age1 = 10;
        age1++; // 如果没有对age求值话age1还是10
        console.log(age1); // output: 11

        var num1 = 2;
        var num2 = 20;
        var num3 = num1-- + num2; // 22
        var num4 = num1 + num2; // 21
        ```

    3. 一元负值/ 一元正值操作符: <span style="color:red;">以一个+ 放到数值之前，不会对数值有任何影响, 对于非数值应用一元加减操作符，该操作符会像 Number 函数一样对值转型</span>  
         a. 对于布尔值转成 0|1
         b. 对于字符串，会按照一定的规则解析
         c. 对于对象，会调用 valueof/tostring 方法
         
- 逻辑操作符
    1. <span style="color: red;">逻辑非(!): 用于任何类型的值, 在应用的时候会存在类型的转换</span>

            对象 -> false
            空字符串 -> true
            非空字符串 -> false
            数值 0 -> true
            任意非空 0 -> false
            null -> true
            NaN -> true
            undefined -> true

    2. <span style="color: red;">逻辑与(||): 当条件满足为真时返回第一个条件为真的值</span>

            如果第一个操作符是对象，则直接返回第一个操作符
            如果第一个操作符的求值结果为 false， 则返回第二个操作符的值
            如果两个操作符都是对象，则返回第一个操作符
            如果两个操作符都是 null， 则返回 null
            如果连个操作符都是 NaN, 则返回 NaN
            如果两个操作符都是 undefined， 则返回 undefined

        ```javascript
        var a = { a: 1 };
        var b = false;
        var c = { c: 1 };

        a || c; // output: a

        b || c; // output: c

        var found = true;
        var result = found || someUndefinedVar; // true

        found = false;
        result = found || someUndefinedVar; // error
        ```

    3. <span style="color: red;">逻辑与(&&): 短路操作符, 当遇到为false的条件时返回false, 当第一个条件为true， 则返回第二个值</span>

            如果第一个操作符是对象，则返回第二个操作符
            如果第二个操作符是对象，则只有在第一个操作符返回 true 的情况下才会返回此对象
            两个操作符都是对象，则返回第二个操作符
            如果有一个操作符是 null，则返回 null
            如果有一个操作符是 nan， 则返回 nan
            如果有一个操作符是 undefined, 则返回 undefined

        ```javascript
        var a = { a: 1 };
        var b = { b: 1 };
        var c = true;

        a && b; // output: b

        a && NaN; // output: NaN

        a && undefined; // output: undefined

        a && true; // output: true

        var founed = true;
        var result = founed && someUndefinedVar; // errro:  someUndefinedVar 未定义
        console.log(result); // 这句代码不会执行

        found = false;
        result = founed && someUndefinedVar; // 不会报错
        console.log(result); // output: false
        ```

    4. <span style="color: red;">乘法操作符: 如果参与运算的值不是数值型就会使用 Number()函数自动转成数值，然后参与计算</span>

            如果有一个值是 NaN, 则返回 NaN
            如果是 infinity \* 0， 则返回 infinity
            如果是 infinity 与非 0 数值想剩，则返回 infinity 或者 -infinity
            如果操作值都是数值，则参与正常的计算，如果超过了 js 的最大限制则返回 infinity 或者 -infinity
            如果值不为 number 类型则会调用 number()函数转换为数值，在应用上面的规则

- 关系操作符

    1. <span style="color: red;">instanceof:检测某个对象是不是另一个对象的实例</span>

        ```javascript
            function Parent() {}
            console.log(Parent.prototype) // {constructor: function Parent(){}, __proto__: Object}
            // 理解instanceof 只需要理解下面这句话
            Parent.prototype.__proto__ === Object.prototype
        ```

- 一元操作符

    1. <span style="color: red;">typeof操作符: 判断一个标识符属于哪种数据类型</span>

        ```javascript
            // typeof 操作符返回值的类型有： "number"、"string"、"boolean"、"object"、"function" 和 "undefined"

            typeof 123 // Number
            typeof 'dede' // string
            typeof !!'0' // boolean
            typeof {} // object
            typeof new Function() // function
            typeof a // undefined
        ```

#### js中的数据类型
- <span style="color: red;"> 基本数据类型: undefined、 null、 string、 boolean、 number</span>
- <span style="color: red;">引用数据类型: object</span>

#### js中的typeof类型检测函数
- typeof(类型监测)

```javascript
/*
 * undefined: 这个值未定义
 * boolean: 布尔类型
 * string: 字符串
 * number: 数字
 * object: objetc 或者 null
 * function: 函数
 */
var message = "这是测试";
typeof message === "string"; // true
typeof message === "boolean"; // false
typeof message === "number"; // false
typeof message === "object"; // false
typeof message === "function"; // false
typeof message === "undefined"; //false
```

#### 1, Undefined类型： Undefined类型只有一即undefined， 在声明变量但未赋值的情况下，变量的值为undefined

```javascript
/* 使用场景：
 * 1. 变量声明但没赋值
 * 2. 调用函数时该传入的参数没传
 * 3. 函数没有返回值时默认返回undefined
 * 4. 对象中属性值没有赋值
 */
```

####  2, Null类型: null是JavaScript中的关键字； Null类型只有一个即null， null表示空对象指针, 变量的值将来是用来保存对象最好设置为null
```javascript
 /* 使用场景：
 *  1. 定义的变量在将来用来保存对象
 *  2. 在一个数据不再使用的时候，我们最好将其值设置为null来释放其引用，以便垃圾回收下一次对其回收
 *  3. 作为对象原型链的终端
 */
Object.getPrototypeOf(Object.prototype); // null
```
####  3,Boolean: 布尔类型，该类型只有两个值true 和 false，要将一个值转换为boolean类型的值需要用到Boolean转换

| 数据类型| 转换为true的值 | 转换为false的值 |
| ---- | ---- | ---- |
| Boolean | true  |  false |
| String  | 任何非空字符串 |  ""(空字符串) |
| Number  | 任何非零数字值(包括无穷大) | 0和NaN |
| Object  | 任何对象 | null |
| Undefined | false | Undefined |


```javascript
 /* 转换规则：
 * 1. 字符串： 任意非空类型的字符串->true, 空类型的字符串->false
 * 2. number: 任何非0数字,包括正(负)的无穷大-> true,
 * 3. object: 任何对象->true
 * 4. undefined: undefined ->false
 * 5, null: null -> false
 */
Boolean(null); // false
Boolean(undefined); // false
Boolean(-0.4774); // true
Boolean({}); // true
Boolean(""); // false
```

#### 4, number: 数字类型， 对应数学中的有理数，在计算机中有-定的精度限制， NaN/ infinity/ -infinity

  - NaN: 非数值，即本来应该要返回数值操作但是未返回数值的情况， 任何涉及NaN的操作都会返回NaN,其次NaN与任何值都不相等包括NaN本身
    <span style="color:red;"> isNaN函数用来判断一个是否是NaN,j接受任意类型的值，该函数会尝将值转换为数字型，任何不能被转换的值该函数都会返回true</span>

| 数据类型 | Number  | parseInt  | parseFloat |
| ---- | ---- | ---- | ---- |
| Number | 简单的传入和返回 |简单的传入和返回 | 简单的传入和返回 |
| String | 字符串为空 -> 0; 字符串包含十六进制 -> 转换为十六进制的值; 字符串包含数字 -> 十进制的数 | 忽略字符串前面的空格，找到第一个非空字符，如果找不到数字字符返回NaN; 如果找到字符是数字就会继续解析第二个字符，直到字符不是数字为止 | 忽略字符前面的空格, 从第一个字符开始解析; 解析遇到第一个无效的浮点数字字符或者 字符串最后为止
| Boolean | true -> 1; false -> 0 |  NaN | NaN |
| Null | 0 | NaN | NaN |
| Undefined | 0 | NaN | NaN |
| Object | 调用对象的valueOf方法按照上述规则转换，如果转结果为NaN则会调用对象的toString方法，然后按照上面的规则再次转换 |  NaN | NaN |
| Symbol | /  | / | / |

```javascript
/** 转换规则
 * 1. boolean: true -> 1, false -> 0
 * 2. number: 简单的传入和返回
 * 3. null: null -> 0
 * 4. undefined: undefined -> 0
 * 5. 字符串: 字符串为空 -> 0; 字符串包含十六进制 -> 转换为十六进制的值; 字符串包含数字 -> 十进制的数值
 * 6. object: 对象 -> valueOf方法按照上述规则转换
 */

Number("hello wrod"); // NaN
Number(" "); // 0
Number("000011"); // 11
Number(true); // 1

/**
 *  parseInt: 忽略字符串前面的空格，找到第一个非空字符串，如果第一个字符不是数* 字或者负号返回NaN; 如果第一个字符是数字就会继续解析第二个字符，直到字符不是* 数字为止
 */
parseInt("1266rhfur"); // 1266
parseInt("rufgrfr"); // NaN

/**
 * parseFloat: 从第一个字符开始解析; 解析遇到第一个无效的浮点数字字符或者* 字符串最后为止
 */
parseFloat("23.38434.8484"); // 23.38434
parseFloat("frfr"); // NaN
```


Question: 
  -  为什么 0.2 + 0.1 == 0.3 为false
        ```javascript
            0.1 + 0.2 == 0.3 // false
            0.05 + 0.25 == 0.3 // true
        ```
        answer: 
        机器只识别二进制，所以将小数转为二进制数之后可能有精度丢失的问题
        [参考资料](https://zhuanlan.zhihu.com/p/159075016)

####  5, string: 字符串一旦创就不可变，如果需要改变其值需要销毁原有的值, 然后在用一个包含新值得字符串去填充该变量

| 数据类型 | toString |
| ---- | ---- |
| null | error |
| Undefined | error |
| Number | 返回相应值的字符串形式 |
| Boolean | 返回相应值得字符串形式 | 
| String | 返回相应值得字符串形式 | 

```javascript
/** 将一个值转为字符串
 *  toString方法
 *  number、boolean、Object、 string都有toString方式, 多数情况下调用toString方法不用传* 参数， 但是对于number类型可以传一个参数代表返回的进制, 一般情况下是以十进制返回
 */
var message = 11;
message.toString(); // '11'

var num = 10;
num.toString(16); // 'a'

/**
 * 在不知道转换的值的类型时可以使用String方法转成string类型，然后调用tostring方法
 */
var a = null;
String(a).toString(); // null
```
####  6, Object: 一组数据和功能的集合, object 是所有它的实例基础
  - 每一个对象都有几个属性:
    1. constructor: 保存用于创建当前对象的函数
    2. hasOwnProperty(propertyName) : 检查给定的属性是否存在当前实例上而不是原型上
    3. valueOf: 返回字符串，通常与toString方法返回值相同
    4. tostring: 返回对象的字符串标识

####  7, Symbol: symbol是es6引入的，每个symbol函数返回的都是一个唯一的值类型
  - 解决问题： 对象中的属性名都是字符串容易造成冲突

总结：
1, undefined和null的区别
    a， undefined表示变量未声明或者声明未赋值； null表示什么都没有
    b， js会将未赋值的变量默认值设为undefined； js不会将变量设置为null
    c， undefined使用typeof返回值是undefined; null类型返回object

2, instanceof 和 typeof 的区别？
    <span style="color: red;">typeof 用于判断标识符的类型， 但是不能判断对象的类型， 比如data， 数组,对于typeof来讲都是返回object， instanceof用于判断对象是否属于某一个对象的实例， 原型上的相等</span>



#### javascript 语句

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