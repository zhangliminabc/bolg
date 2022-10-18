---
title: instanceof 操作符
date: 2022-07-07 16:26:06
updated: 2022-07-07 16:26:06
tags: [TypeScript]
categories: [TypeScript]
description:
keywords:
---

### instanceof: 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上

```ts

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998)

```

