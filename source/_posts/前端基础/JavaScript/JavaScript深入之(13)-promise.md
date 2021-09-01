---
title: JavaScript深入之promise
date: 2021-08-23 19:50:01
updated: 2021-08-23 19:50:01
tags: [前端基础, JavaScript]
categories: [JavaScript]
description:
keywords: JavaScript, promise
---


##### promise流程梳理

```flow
st=>start: promise初始化(初始化内部状态/需要返回的值/hanler回调函数)
op=>operation: 初始化成功
cond=>condition: Yes or no
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```
