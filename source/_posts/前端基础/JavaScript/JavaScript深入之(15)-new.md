---
title: JavaScript深入之new操作符
date: 2021-08-23 19:51:06
updated: 2021-08-23 19:51:06
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, new
---

#### new 操作符

构造函数实例化通过 new 操作符初始化一个构造函数实例对象，在这个新的对象中为什么可以访问构造函数内的函数和变量？同时实例化之后的对象中的this为什么指向构造函数？

##### 自定义new函数

```javascript
function Test(name, age) {
    this.name = name;
    this.age = age;
		// return { name, age }
}

Test.prototype.getName = function() {
    console.log(this)
    return this.name;
}

Test.prototype.getAge = function() {
    return this.age;
}

Test.prototype.setName = function(name) {
    this.name = name;
}

Test.prototype.setAge = function(age) {
    this.age = age;
}

// const instance = new Test('zhanglimin', 26);
const instance = mockNew(Test, 'zhanglimin', 26)
console.log(instance.__proto__ === Test.prototype); // true

function mockNew(Con, ...args) {
    let obj = {}
        // 解释了static类型的方法不能通过this调用的原因
    Object.setPrototypeOf(obj, Con.prototype)
        // apply方法调用一个具有给定this值的函数
    let result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
}

```

由此可见 new操作符的实质是
1. 传建一个空对象
2. 将空对象中原型对象__proto__ 指向构造函数的原型(prototype)
3. 使用call 或者 apply 绑定函数内的this指向
4. 执行构造函数， 如果构造函数的返回值是对象就返回改值，如果不是就返回创建的空对象