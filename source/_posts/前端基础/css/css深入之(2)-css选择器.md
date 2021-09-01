---
title: CSS深入之css选择器
date: 2021-08-23 22:06:58
updated: 2021-08-23 22:06:58
tags: [前端基础, CSS]
categories: [CSS]
description:
keywords: CSS
---

#### CSS选择器的类型

1. 通用选择器： *
2. 元素选择器： elementName
3. 类选择器： .className
4. id选择器： # idName
5. 属性选择器： input[type="text"]
6. 子类选择器： div > li
7. 一般兄弟元素： div ~ span
8. 紧邻兄弟元素： div + span
9. 后代组合： div span
10. 伪类

#### css的优先级算法

1. !important
2. css内联样式： 权值为 1000
3. id选择器： 权重为100
4. 类选择器 / 伪类 / 属性选择器： 权重为10
5. 代表元素选择器 / 伪元素选择器: 权重为1

!important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器

应用规则：

1. 行内样式覆盖外部样式， 但是会被！import覆盖
2. 同一个元素，两个权重不同， 权值高的css规则生效
3. 同一元素同一权重, 以后面出现的选择器为最后规则
