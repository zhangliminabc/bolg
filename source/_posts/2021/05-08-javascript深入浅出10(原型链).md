---
title: javascript深入浅出10(原型链)
date: 2021-05-08 15:45:28
tags: JavaScript
categories: [JavaScript]
updated:
description: js的原型链
keywords: javascript
---

##### js 分为函数对象和普通对象
- <b>每个对象都有**proto**属性，prototype 属性只有函数对象才有</b>
- <b>属性*proto*是一个对象，有 constructor 和*proto*属性</b>
- <b>原型对象 prototype 有一个默认的 constructor，记录是由那个构造函数创建的</b>
- <b>实例(instance)都包含一个指向原型对象的内部指针(**proto**)</b>

```javascript
function Father() {
  this.property = true;
}
Father.prototype.getFatherValue = function () {
  return this.property;
};

/* output:
 * { getFatherValue: function,
 *   constructor: Father(){},
 *   __proto__: Object
 * }
 */
console.log(Father.prototype);

// 规则三： 原型对象prototype有一个默认的constructor，记录是由那个构造函数创建的
console.log(Father.prototype.constructor === Father); // true

const f1 = new Father();

/*output:
 * {
 *   constructor: Father(){},
 *   __proto__: Object
 * }
 */
console.log(f1.__proto__);
console.log(f1 instanceof Father); // true
```

##### js 查找规则
- <b>如果试图在对象或者实例上查找某个属性，回先从对象内部查找;</b>
- <b>当查不到的时候，会在该对象的原型中去查找</b>

<b style="color:red;">查找对象属性时形成的链式查找叫做原型链（实例和原型的关系）</b>

##### 面试题

1, new 操作符内部做了什么

  <ul style="color: red;">
    <li>创建一个空对象</li>
    <li>将空对象的__proto__属性指向实例函数的原型对象(prototype)</li>
    <li>使用call绑定函数内的this指向</li>
    <li>返回空对象</li>
  </ul>

```javascript
function createdNew(fun1) {
  // 创建一个空对象
  const obj = {};
  obj.__proto__ = fun1.prototype;
  fun1.call(obj);
  return obj;
}

function Father() {
  this.a = "这是父类";
}

const instance1 = createdNew(Father);
console.log(instance1 instanceof Father1); // true
```

2, 写一个继承函数

- 组合继承

  - 问题：

    调用了两次父类构造函数(一次为 Son 函数内， 一次为初始化子类实例时), 造成了不必要的消耗

```javascript
function Parent(name) {
  this.color = ["red", "blue", "black"];
  this.name = name;
}

Parent.prototype.sayColor = function () {
  console.log(this.color.join("-"));
};

function Son(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Son.prototype = Parent.prototype;

Son.prototype.sayAge = function () {
  console.log(this.age);
};

const instanceSon = new Son("zhanglimin", 25);

// 原型链的查找是根据__proto__一层层向上查找
console.log(instanceSon.sayAge); // Function
console.log(Parent.prototype.sayAge); // Function
console.log(Son.age); // undefined
console.log(Parent.sayColor); // undefined
```

- 原型继承: 借助原型可以基于已有的对象创建新对象

  - 问题:
    对于引用类型的值在实例中数据共享

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const person = {
  type: ["yellow", "white", "black"],
};

const p1 = object(person);
console.log(p1.type); // ["yellow", "white", "black"]

p1.type.push("test");

const p2 = object(person);
console.log(p2.type); // ["yellow", "white", "black", test]
```

- 组合继承

```javascript
function extend(subClass, parentClass) {
  function createdObjec(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  }
  // 返回一个对象，使对象的__proto__ 指向需要继承的原型
  const prototype = createdObjec(parentClass.prototype);
  // constructor指向子类，因为js原型中的规则为constructor指向由谁创建
  prototype.constructor = subClass;
  // 改变子类的原型对象的指向
  subClass.prototype = prototype;
}

function parentClass() {
  this.a = "这是父类";
}

parentClass.prototype.syaHello = function () {
  console.log(this.a);
};

function subClass() {
  this.b = "这是子类";
}

subClass.prototype.saySub = function () {
  console.log(this.b);
};

extend(subClass, parentClass);

const subInstance = new subClass();
console.log(subInstance.syaHello); // function
console.log(subInstance.saySub); // undefined
```

3, 怎么理解原型链: 查找属性时会优先在当前的对象中查找，当查找不到的之后会在对于的原型上查找




#### 知识补充
  [call函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

#### 封装：属性和方法的封装
  1, 闭包
  2, 对象


#### 继承

- 原型式继承

原型链实现继承的问题： 数据属性共享， 不能向父类传参

```javascript
//原型链
function SuperType() {
  this.colors = ["res", "blue", "green"];
}

function SubType() {}

SubType.prototype = new SuperType();
var instance = new SubType();
instance.colors.push("black");

console.log(instance.colors); //["res", "blue", "green", "black"]

var instance1 = new SubType();
console.log(instance1.colors); //["res", "blue", "green", "black"]
// instanceof: 确定实例和原型的关系
console.log(instance1 instanceof SubType); //true
```

- 构造函数式继承

问题: 不能继承父类原型链上的方法

```javascript
function SuperClass () {
  this.colors = ["res", "blue", "green"]
}

SuperClass.prototype.getColors = function () {
  return this.colors
}

function SubClass() {
  SuperClass.call(this)
}

var instance = new SubClass()
console.log(instance instanceof SuperClass) // false
console.log(instance.getColors()) // TypeError: instance.getColors is not a function 
```

- 组合继承

父类函数执行两次

``` javascript
function SuperClass(id) {
  this.id = id;
  this.colors = ['red', 'block'];
}

SuperClass.prototype.getColors = function () {
  return this.colors;
};

function SubClass(id) {
  SuperClass.call(this, id);
}

SubClass.prototype = new SuperClass();

var instan1 = new SubClass(11);
instan1.colors.push('test1');
console.log(instan1.colors); // [ 'red', 'block', 'test1' ]

var instan2 = new SubClass(12);
console.log(instan2.colors, '属性'); // [ 'red', 'block' ] 属性
console.log(instan2.getColors()); // [ 'red', 'block' ]

```


- 寄生式继承

```javascript
function inheritPropotype(ParentClass) {
  function f() {}
  f.prototype = ParentClass;
  return new f();
}

function ParentClass() {
  this.colors = [];
}

ParentClass.prototype.setColors = function (colorName) {
  this.colors.push(colorName);
};

ParentClass.prototype.getColors = function () {
  return this.colors;
};

function SubInstance() {
  ParentClass.call(this);
}

function Extends(parent, sub) {
  const p = inheritPropotype(parent.prototype);
  p.construcor = sub;
  sub.prototype = p;
}

Extends(ParentClass, SubInstance);
var sub1 = new SubInstance();
sub1.setColors('red');
console.log(sub1.getColors());

const sub2 = new SubInstance();
sub2.setColors('block');
console.log(sub2.getColors());
```

#### 多态： 同一种方法多种调用方式
js中函数参数可以通过arguments获取

```javascript
function Polymorphism() {
  const argsLen = arguments.length;
  if (argsLen <= 2) {
    console.log(arguments[0] + arguments[1]);
  }
}
Polymorphism(10, 11);

```
