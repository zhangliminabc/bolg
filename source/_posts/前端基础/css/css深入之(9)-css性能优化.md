---
title: CSS深入之性能优化
date: 2021-08-23 22:11:21
updated: 2021-08-23 22:11:21
tags: [前端基础, CSS]
categories: [CSS]
description:
keywords: CSS
---

#### css性能优化的方式

1. 合并css文件, 如果页面加载10个1kb的css文件，也比加载一个100kb的css快
2. 减少css的嵌套，最好不要嵌套三层以上
3. 不要在id选择器下面进行嵌套，id选择器本就是层级最高
4. 建立公共样式，吧相同样式抽取出来
5. gzip压缩
6. 避免过分的重排
7. css动画