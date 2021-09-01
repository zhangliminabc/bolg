---
title: JavaScript深入之继承
date: 2021-08-22 21:25:54
updated: 2021-08-22 21:25:54
tags: [JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, 继承
---

##### js的继承

<img src="../../../static/js继承.png" alt="">

###### 1.1 原型链继承

<p> 将父类的实例作为子类的原型</p>

```javascript

 Subtype.prototype = new SuperType();
 Subtype.prototype.constructor = Subtype

```

优点：
 父类方法可以复用

缺点：
  1, 父类的引用属性会被所有子类实例共享
  2, 子类构建父类实例时不能向父类传递参数

#### 构造函数式继承(经典继承)

<p> 将父类构造函数的内容复制给子类的构造函数</p>

``` javascript
 
 function SuperType() {
   this.color = [ 'red', 'green', 'yellow']
 }

 function SubType() {
  SuperType.call(this)
 }

 const instance = new SubType()
 instance.color.push('black')
 alert(instance.color) // ['red', 'green', 'yellow', block']

 const instance1 = new SubType()
 alert(instance1.color) // ['red', 'green', 'yellow']

```

优点：

1. 父类的方法可以被复用

2. 避免了引用类型的属性被所有实例共享

3. 子类构建实例时可以想父类传递参数

缺点：

每次创建实例都会创建一遍方法。

#### 组合继承（原型链继承和经典继承双剑合璧）

```javascript

 function SuperType() {
  this.name ='created'
  this.arr = [1,2,3]
 }

 SuperType.prototype.say = function() {
  console.log('this is parent')
 }

 function SubType() {
  SuperType.call(this)
 }

 SubType.prototype = new SuperType();
 SubType.prototype.constructor = SubType;
```

优点： 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

缺点： 组合继承最大的缺点是会调用两次父构造函数。

#### 原型式继承

<p>就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。</p>

```javascript

 function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
 }

```

#### 寄生式继承

<p> 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象</p>

```javascript

 function createAnother(original) {
   let clone =  Object.create(original);
   clone.sayHi = function () {
    alert('hi)
   }
   return clone;
 }

 let person = {
  name: 'Nicholas',
  friends: ['shelby', 'court', 'van']
 }

 var anotherPerson = createAnother(person)
 anotherPerson.sayHi()

```

#### 寄生组合继承

```javascript

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

 function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
 }

 function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
 }

 SuperType.prototype.sayName = function() {
  alert(this.name)
 }

 function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
 }

 inheritPrototype(SubType, SuperType)
```

优点： 保持原型链不变，正常使用instanceof 和 isPrototypeOf
