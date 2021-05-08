---
title: javascript深入浅出二-js词法分析
date: 2021-05-08 11:06:27
tags: JavaScript
categories: [JavaScript]
updated:
description: JavaScript深入浅出二， 深度剖析js的词法环境; 之所以叫词法环境，是因为它是和源程序的结构对应，就是和你所写的那些源码的文字的结构对应，你写代码的时候这个环境就定了（写代码的时候决定)
keywords: javascript
---


#### 词法环境
##### 之所以叫词法环境，是因为它是和源程序的结构对应，就是和你所写的那些源码的文字的结构对应，你写代码的时候这个环境就定了（写代码的时候决定）
###### 分类
    - 全局词法环境
    - 函数词法环境
    - with词法环境
    - catch词法环境
<img src="https://user-gold-cdn.xitu.io/2018/12/3/1677429807aea76d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"/>


 伪代码

```javascript

    function LexicalEnvironment() {
        this.EnvironmentRecord =  new EnvironmentRecord()// 自己的词法环境
        this.outer = undefined // 外部的词法环境的引用
    }

    function EnvironmentRecord() {
        this.bindings = new Map()
    }

    EnvironmentRecord.prototype.rigister = function(name) {
        this.bindings.set(name, undefined)
    }

    EnvironmentRecord.prototype.init = function(name, value) {
        this.bindings[name] = value
    }

    EnvironmentRecord.prototype.getValue = function(name) {
        return this.bindings[name]
    }
```

