---
title: JavaScript深入之super
date: 2021-08-23 19:51:32
updated: 2021-08-23 19:51:32
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, super
---

#### super: 用于访问和调用一个对象的父对象上的函数

##### Object.getPrototypeOf / Object.setPrototypeOf: 返回的是对象的隐士的原型对象 __proto__

##### Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__


接下来我们看看ES6中super的调用

```javascript

/**
 *  ES6代码
 */
class A {
    constructor() {}
}

class B extends A {
    constructor() {
        super()
    }
}

```

我们再来看看通过babel编译ES6为Es5的代码

```javascript

/**
 * babel编译es6中的 class/ extends/super 为 es5
 */
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}


function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        console.log(Super === A) // true
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else { result = Super.apply(this, arguments); }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); return true; } catch (e) { return false; }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ?
        Object.getPrototypeOf :
        function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); };
    return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let A = function A() {
    "use strict";
    _classCallCheck(this, A);
};

let B = /*#__PURE__*/ function(_A) {
    "use strict";

    _inherits(B, _A);
    var _super = _createSuper(B);

    function B() {
        _classCallCheck(this, B);
        // 参照JavaScript深入之继承中的寄生组合式继承，这句代码有没有很熟悉
        return _super.call(this);
    }

    return B;
}(A)

const instance = new B();

```

最后我们自己实现一个Super函数

```javascript

/**
 * Reflect的用法 
 */

function Test(name, age) {
    this.name = name;
    this.age = age;
}

function Parent() {}
const newTarget = Reflect.construct(Test, ['张利民', 26]);
console.log(
    newTarget.__proto__.constructor === Test,
    newTarget.__proto__ === Test.prototype,
    newTarget instanceof Test); // true, true, true

const newTarget1 = Reflect.construct(Test, ['张利民', 26], Parent);
console.log(
    newTarget1.__proto__.constructor === Parent,
    newTarget1.__proto__ === Parent.prototype,
    newTarget1 instanceof Parent); // true, true, true


/**
 * 模拟super函数
 * @param {*} Test 
 * @returns 
 */
function mockSuper(Test) {
    return function _createSuper() {
        const Super = Object.getPrototypeOf(Test)
        let result = null
        const newTarget = Object.getPrototypeOf(this).constructor
        if (typeof Reflect !== 'undefined') {
            // const result = new newTarget(arguments)
            result = Reflect.construct(Super, arguments, newTarget)
        }
        return result
    }
}

```