---
title: css深入之css的单位
date: 2021-08-26 17:48:45
updated: 2021-08-26 17:48:45
tags: [前端基础, CSS]
categories: [CSS]
description:
keywords: rem, px, em, vh, vw, %, vmin, vmax
---

#### css中有哪些单位？，各单位之间有什么不同？

之前对这块只是也是一知半解，今天彻底来捋捋

1. px: 固定像素，

2. em: 相对单位，相对于自身的fontsize或者父元素的fontsize值计算
  缺点: 使用时需要知道相对元素的字体大小

3. rem: 相对于根元素字体大小进行布局

分辨率: 设备尺寸 * 像素密度

物理像素： 分辨率大小

设备独立像素： 视觉窗口大小

设备像素比： 物理像素和设备像素之间的关系

设备像素比 = 物理像素 / 设备像素

```javascript

 /*
 * 将可视区域宽度分为10分，每一份占比width / 10
 */

 function adportRem() {
  const width = document.documentElement.clientWidth;
  return width / 10 + 'px'
 }

	// 或者
 (function (doc, win) {
  const docEl = win.document.documentElement;
  const resiezeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const refreshRem = function () {
      const clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
      console.log(clientWidth)
      if (!clientWidth) return;
      let fz;
      const width = clientWidth;
      fz = 16 * width / 375;
      docEl.style.fontSize = fz + 'px';//这样每一份也是16px,即1rem=16px
    };
  if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false);
    doc.addEventListener('DOMContentLoaded', refreshRem, false);
    refreshRem();
 })(document, window);

```

1. vw/vh: 视图宽度的1/100, 视图高度的1/100

``` javascript
  const viewPortHeight = 900
  const vh = 900 * 1/100
```

```javascript
  const viewPortWidth = 1/ 100 
  const vw  = 750 * 1/100
```

##### 问题

1. rem和px的区别？
 rem: 是一种弹性布局, 相对于根元素的字体大小
 px: 是相对长度单位，相对物是屏幕分辨率

2. 移动端适配有那几种方案？
meta-viewport: 动态设置缩放比例
rem：动态设置rem的值
媒体查询

3. 怎样解决1px的问题？
设备像素比(dpr)为2的话, 设置border： 0.5px
box-shadow: box-shadow: inset 0px -1px 1px -1px #c8c7cc;
伪类 + transform 实现
