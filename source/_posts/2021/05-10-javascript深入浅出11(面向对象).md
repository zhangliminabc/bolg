---
title: javascript深入浅出11(面向对象)
date: 2021-05-10 20:00:09
tags: JavaScript
categories: [JavaScript]
updated:
description:  JavaScript深入浅出面向对象，剖析了js为什么说是面向对象，并从封装、继承、多态三方面来解释js的面向对象
keywords: javascriptj
---

#### 1. 对象属性

_数据属性:_
configurable: 能否通过 delete 删除属性从而重新定义属性，默认值 true
enumerable: 是否可以通过 forin 循环， 默认值 true
writable: 能否修改属性的值， 默认值 true
value： 获取修改属性的值。 默认值 undifined
Object.defineProperty( 属性所在的对象， 需要修改的属性名， 描述符对象)

_访问器属性：_
configurable: 能否通过 delete 删除属性从而重新定义属性，默认值 true
enumerable: 是否可以通过 forin 循环， 默认值 true
get: 获取属性值， 默认值 undifined
set：设置属性值。 默认值 undifined
访问器属性不能直接定义， 只能通过 Object.defineProperty 来定义
Object.defineProperties(target， {})

#### hasOwnProperty: 检测属性是否存在于实例中

#### hasPrototypeProperty: 检测对象中是否在原型中存在给定的属性
#### in操作符: 检测对象中是否存在给定的属性值

#### isPrototypeOf: 对象之前是否存在存在某种关系
#### getPrototypeof: 获取对象的的隐式原型，即对象的__proto__属性

#### Object.getOwnPropertypeNames: 得到所有的实例属性，无论它是否可枚举


```javascript
// 最新的定义访问器属性的方法
var book = {
  year: 2004,
  editor: 1
};
Object.defineProperty(book, "year", {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    this._year = newValue + 1;
  }
});
book.year = 2005;
console.log(book.year); //2006

// 旧版的定义访问器属性的方法
var book = {
  year: 2004,
  editor: 1
};
book.__defineGetter__("year", function() {
  return this.year;
});
book.__defineSetter__("year", function(newValue) {
  this.year = newValue + 1;
});
book.year = 2005;
console.log(book.year); //2006
```

#### 2. 创建对象
```javascript
// 构造函数
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}
var person1 = new Person("校长", 10, "softarea");
var person2 = new Person("Greg", 20, "doctor");
console.log(person2.constructor == Person); // true

function Person() {}
Person.prototype.name = "nicholas";
Person.prototype.age = 30;
Person.prototype.job = "teacher";
Person.prototype.sayName = function() {
  console.log(this.name);
};

var person1 = new Person("校长", 10, "softarea");
var person2 = new Person("Greg", 20, "doctor");
console.log(Person.prototype.constructor); //Person

// isPrototypeOf： 验证对象之间是否存在关系
console.log(Person.prototype.isPrototypeOf(person2)); //true
//hasOwnProperty: 验证对象属性是存在于实例中还是原型中
console.log(person2.hasOwnProperty("name")); //false
```
