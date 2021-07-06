---
title: 重学js值(2)-extends
date: 2021-07-02 12:11:58
tags: JavaScript
categories: [JavaScriptj]
updated:
description:
keywords: javascript, class, extends
---

##### Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 

#### 先搞定清楚 prototype 和 __proto__之间的区别

##### 区别：

	a, 拥有属性的对象不同

__proto__: 在js中， 万物皆为对象，对象具有__proto__属性，可称为隐式原型； 一个对象的隐式原型指向该对象的构造函数的原型（js的对象）

prototype: 函数这个特殊对象所特有的属性（原型属性）（函数）

	b,  指向不同

1，__proto__ 指向它的构造函数的原型对象（prototype ）

2，该原型对象也有一个自己的隐式原型( __proto__ ) 和 constructor; 
	constructor: 指向构造函数
	__proto__: 指向它的构造函数的原型对象

```javascript

	function Test() {}

	Test.__proto__ === Function.prototype // true
	Test.prototype.constructor === Test // true
	Test.prototype.__proto__ === Object.prototype // true
```

#### extends做了什么？？
	extends在实现继承方面，本质上也是原型链继承,该方法实现了两步原型链继承

		1）子类的__proto__属性，表示构造函数的继承，总是指向父类。（把子类构造函数(Child)的原型(__proto__)指向了父类构造函数(Parent)）
		2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

#### 自定义实现extends

```javascript
	 function customExtends(subClass, superClass) {
		 // 创建以constructor对象为基准的__proto__ == superClass.prototype
		subClass.prototype = Object.create(superClass && superClass.prototype, {
        	constructor: { 
					value: subClass,
					writable: true,
					configurable: true 
				},
    	})
		// 2. 将子类的隐式原型设置为父类
		subClass.__proto__ = p;
	 }
```


#### babel编译extends

```javascript

	function _inherits(subClass, superClass) {
		if (typeof superClass !== 'function' && superClass !== null) {
			throw new Error('Super expression must either be null or a function ')
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				writable: true,
				configureable: true
			}
		})
		if (superClass) {
			_setPrototypeOf(subClass, superClass)
		}
	}

	function _setPrototypeOf(subClass, superClass) {
		_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o}
		// subClass.__proto__ = superClass
		return _setPrototypeOf(subClass, superClass)
	}

```