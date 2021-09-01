---
title: 脚本加载方式
date: 2021-08-26 17:34:09
updated: 2021-08-26 17:34:09
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: script属性， defer, async, javascript
---


### JS脚本加载，defer和async的区别

在html页面使用js通常有两种方式：

1. 内联js
2. 外联脚本

今天主要看一下使用外联脚本模式下defer 和 async 的 区别

##### defer: 立即加载但是延迟执行并且是有一定的顺序（效果更加类似于将脚本放在body元素之后的效果）

##### async: 异步加载不能保证执行的顺序