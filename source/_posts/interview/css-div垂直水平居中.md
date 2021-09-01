---
title: CSS中div垂直水平居中方式
date: 2021-08-23 22:06:16
updated: 2021-08-23 22:06:16
tags: [interview, CSS]
categories: [CSS]
description:
keywords: CSS
---

#### flex 布局

```css
.div {
 display: flex;
 align-content: center
 align-items: center
 justify-content: center;
}
```

#### position + translate: 元素未知高度

实现原理：
父元素设置为：position: relative;
子元素设置为：position: absolute;
transform: translate(-50%,-50%);
距上50%，据左50%，然后减去元素自身宽度的一半距离就可以实现

```css
.div {
  position: absolute;
  left: 50%;
  top: 50%;
  translate(-50%,-50%);
}

```

#### table-cell

```css
.div {
  display: table-cell;            
    vertical-align: middle;
  text-align: center;        
}
```

#### position + margin: 已知宽度

实现原理：
父元素设置为：position: relative;
子元素设置为：position: absolute;
距上50%，据左50%，然后减去元素自身宽度的一半距离就可以实现

```css
.div {
  position: absolute;
  left: 50%;
  top: 50%;
   margin: -50px 0 0 -50px;        
}

```

#### position（元素已知宽度）（left，right，top，bottom为0，maigin：auto ）

```css
.div  {
 width: 100px;            
 height: 100px;            
 position: absolute;            
 top: 0;            
 bottom: 0;            
 left: 0;            
 right: 0;            
 margin: auto;    
}
```
