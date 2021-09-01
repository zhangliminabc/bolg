---
title: JavaScript深入之作用域
date: 2021-08-23 11:42:44
updated: 2021-08-23 11:42:44
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, scopeChain, scope, 作用域链, 作用域
---

###### 作用域

函数的作用域在函数定义的时候就被定义了

函数的内部有一个[[scope]]属性，当函数创建时，就会保存所有父变量对象到 = 你可以理解 [[scope]] 就是所有父变量对象的层级链

```javascript

function foo() {
 function bar() {}
}

// 函数创建时：
foo.[[scope]] = [globalContext.VO]

bar.[[scope]] = [fooContext.AO,  globalContext.VO]

// 函数激活时: 就会将活动对象添加到作用链的前端。
Scope = [AO].concat([[Scope]]);
```

```javascript
 var scope = 'global scope'
 function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();


// 1.第一步: checkscope 函数被创建，保存作用域链到 内部属性[[scope]]
checkscope.[[scope]] = [
 globalContext.VO
]

//2. 第三步: 用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }，
    Scope: checkscope.[[scope]],
}

// 3. 第三步: checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
checkscopeContext = {
    Scope: checkscope.[[scope]],
}

// 4. 第四步： 将活动对象压入 checkscope 作用域链顶端
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}

// 5. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈
ECStack = [
    checkscopeContext,
    globalContext
];

// 6. 函数执行完毕， 吧checkscopeContext从执行上下文栈中删除
ECStack = [
 globalContext 
]

```

##### 作用域链

当查找变量时，会从当前上下文中的变量对象中查找，如果找不到就会从父级的执行上下文的变量对象中查找，这样由多个执行上下文中的变量对象构成的链表就叫作用域链
