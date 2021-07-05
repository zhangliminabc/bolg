---
title: 重学js值(3)-super
date: 2021-07-02 16:56:08
tags: [JavaScript]
categories: [JavaScript]
updated:
description:
keywords: javascript, class, super
---

####  super: 用于访问和调用一个对象的父对象上的函数

##### Object.getPrototypeOf / Object.setPrototypeOf: 返回的是对象的隐士的原型对象 __proto__
##### Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 

#### babel编译super

```javascript
	
	function _getPrototypeOf(o) {
		_getPrototypeOf = Object.setPrototypeOf ?
			Object.getPrototypeOf :
			function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
			};
		return _getPrototypeOf(o);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return self;
	}

	function _possibleConstructorReturn(self, call) {
		if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
			return call;
		}
		return _assertThisInitialized(self);
	}

	function SuperMethod(subClass) {
		return  function  _createSuperInternal(subClass) {
			let result = null
			// 这两步参考extends
			const super = _getPrototypeOf(subClass)
			const newTarget =  _getPrototypeOf(this).constructor
			/** Reflect.constructor(super, constructor, newTarget) 相当于 =  
				var obj2 = Object.create(newTarget.prototype);
				super.apply(obj2, args);	
			*/
			result = Reflect.constructor(super, arguments, newTarget)
			return _possibleConstructorReturn(this, result) 
		}
	}
```