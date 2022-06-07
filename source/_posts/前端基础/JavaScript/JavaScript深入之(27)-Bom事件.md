---
title: 测试文件
date: 2022-06-01 21:48:55
updated: 2022-06-01 21:48:55
tags: [JavaScript]
categories: [JavaScript]
description:
keywords:
---

### 事件冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序

```html
	<form onclick="alert('form')">FORM
		<div onclick="alert('div')">DIV
			<p onclick="alert('p')">P</p>
		</div>
	</form>
```

当我们点击 p 标签上的 onclick 事件时会首选运行 p 标签上的 click事件，然后是外部的
p -> div -> form

#### 那怎么阻止事件冒泡那？

event.stopPropagation(): 阻止事件冒泡，这是方法是停止事件向上传播点击了 p 标签之前，p标签以外的点击事件不会被执行

event.stopImmediatePropagation(): 可以用于停止事件冒泡，并阻止当前元素上的处理程序


### 事件捕获

BOM 事件经过 事件捕获 -> 目标阶段 -> 冒泡阶段


### 事件委托 / 事件代理

利用事件冒泡原理，根据 target 判断是否是目标节点

 优点：
      1. 减少内存消耗和动态绑定事件


