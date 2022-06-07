---
title: css深入之实现一个垂直水平居中
date: 2022-06-01 22:35:20
updated: 2022-06-01 22:35:20
tags: [Css]
categories: [Css]
description:
keywords: css
---


#### 水平居中

##### 行内元素水平居中

```css
.box {
 text-align: center // 文本text、图像img、按钮、链接
}
```

##### 块级元素水平居中

###### 定宽块级元素：

###### 方案一：margin： 0 auto

```css
.box {
 margin: 0 auto
}
```

###### 方案二： position + margin 负一半

```css
.box{
	position: absolute;
	width: 100px;
	height: 100px;
	left: 50%;
	margin-left: -50px
}
```

###### 方案三： position + margin auto

```css

.box {
	position: absolute;
	left: 0px;
	right: 0px;
	margin: auto;
}
```


###### 不定宽块级元素：

###### 方案一： flex

```css
.box {
 display: flex;
 justify-content:center;
}
```

###### 方案二： inline-block: 子元素设置 inline-block， 父元素设置text-align： center

```css
.box{
 text-align: center;
}
.box > div {
  display:inline-block;
}
```

###### 方案三: 设置table： 设置display： table，然后设置margin： 0 auto

```css
.box {
 display: table;
 margin: 0 auto
}
```

###### 方案四： position + transform

```css
.box {
  position: absolute;
  transform: translateX(-50%)
}
```

#### 垂直居中

###### 单行文本: paddingTop = paddingBottom 或者 lineHeight = height

###### 多行文本：

###### 定宽高块级元素垂直居中：

###### 方案一： position + margin 负一半

```css
.box {
	position: absolute;
	width: 100px;
	height: 100px;
	top: 50%;
	margin-top: -50%;
}
```

###### 方案二： position + margin auto

```css

.box {
	position: absolute;
	width: 100px;
	height: 100px;
	top: 0px;
	bottom: 0px;
	margin: auto;
}
```

###### 不定宽高块级元素

###### 方案一： 父元素display：table， 子元素：table-cell 和 vertical-align：middle

```css
.boxParent {
	display: table;
}
.box {
	display: table-cell;
	vertical-align: middle;
}
```


###### 方案二： flex

```css
.box {
	display: flex;
	align-items: center;
}
```


### 垂直水平居中

###### 不定宽高

###### 方案一： flex

```css

.box {
	display: flex; 
	justify-content: center;
  align-items: center;
}

```

###### 方案二： table + textAlign + verticalAlign

```css
.boxParent {
	display: table;
}
.box {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}
```

#### 已知宽高：

###### 方案一： 绝对定位 + margin: auto

```css

.box {
	width:200px;
	height: 200px;
	background:green;

	position: absolute;
	left: 0;
	top: 0;
	right: 0px;
	bottom: 0px;
	margin: auto;
}

```

###### 方案二： 绝对定位 + 负 margin

```css
.box {
	position: absolute;
	width: 100px;
	height: 100px;
	left: 50%;
	top: 50%;
	margin-left: -50px;
	margin-right: -50px;
}
```

###### 方案三： absolute + transform

```css
.box {
	width: 100px;
	height: 100px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
```

###### 方案四： 利用css的calc方法

```css
.box {
	  width: 500px;
    height: 400px;
    margin-left: calc((100% - 500px) / 2);
    margin-top: calc((100% - 400px) / 2);
}