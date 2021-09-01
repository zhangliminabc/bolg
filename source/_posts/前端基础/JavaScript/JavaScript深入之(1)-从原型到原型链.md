---
title: JavaScript深入之从原型到原型链
date: 2021-08-22 17:06:00
tags: [前端基础, JavaScript]
categories: [JavaScript]
updated:
description:
keywords: JavaScript, 原型, 原型链
---

#### JavaScript之原型到原型链

##### 彻底理解原型、 原型链、构造函数的区别

###### 原型: prototype

每个函数都有一个prototype属性

```javascript
 
 function Person() {

 }

 Person.prototype.name = 'John';

 const p1 = new Person();
 const p2 = new person();

 console.log(p1.name) // John
 console.log(p2.name) // John

```

函数的prototype属性指向一个对象，该对象指向创建构造函数实例的原型, 该对象中包含指向构造函数的执政constructor和原型__proto__属性

在上述例子中：

```javascript
 p1.__proto__ === Person.prototype // true
 p2.__proto__ === Person.prototype // true
```

###### __proto__

每个对象(除null以外)都有__proto__属性, 该属性会指向该对象的原型

###### constructor： 每个原型都有一个constructor属性，指向该关联的函数

总结：__proto__ 、 prototype、 constructor三者之间的关系：

prototype: 函数才有，指向该构造函数创建的实例的原型

__proto__: 每个对象都有, 指向构造函数的原型

constructor: 指向关联的构造函数

###### 实例和原型

当读取实例的属性时，如果找不到就会到与对象的原型中去查找

###### 如何理解原型链

1. 首先每个对象都有原型属性，从当前对象中读取属性找不到时就会从当前对象中的原型中去找，这样一层一层形成的查找关系就叫原型链