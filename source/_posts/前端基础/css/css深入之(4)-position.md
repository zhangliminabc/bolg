---
title: CSS深入之position定位
date: 2021-08-23 22:08:50
updated: 2021-08-23 22:08:50
tags: [前端基础, CSS]
categories: [CSS]
description:
keywords: CSS
---

#### position中的值有哪些

1. static: 元素默认定位方式
2. relative:相对于正常文档流中的位置定位
3. absolute: 相对于父元素中定位方式不为 static 元素定位
4. fixed： 相对于窗口定位
5. sticky： 它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起1​​0像素）为止，此后它就变得固定了