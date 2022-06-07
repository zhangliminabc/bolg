---
title: css深入之H5适配方案
date: 2021-08-23 22:09:43
updated: 2021-08-23 22:09:43
tags: [前端基础, CSS]
categories: [ CSS]
description:
keywords:
---

###### 设备像素比 = 物理像素 / 设备独立像素

###### 1px边框问题

原因： css中1px是逻辑像素，导致逻辑像素根据设备像素比去映射到设备上就为 2px或者3px，由于每个设备的屏幕尺寸不一样，就导致每个物理像素渲染出来的大小也不同

解决方案:

```css
div {
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}
``


###### viewport： 用于显示网页部分的区域

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-sacle=1, maximum-scale=1" >
```

| 属性 | 含义 | 取值
| ---- | ---- | ----
| width | 定义视口的宽度，以像素为单位 | 正整数 或者 设备宽度 device-width
| height | 定义视口的高度，以像素为单位 | 正整数 或者 设备高度 device-height
| initial-scale | 定义网页初始缩放值 | 整数或者小数， 小数位缩小，反之放大
| maximum-scale | 定义缩放最大值 | 整数 或者 小数
| minimum-scale | 定义缩放最小值 | 整数 或者 小数
| user-scalable	 | 定义用户是否可以缩放 | yes or no


###### 适配方案

###### 方案一： rem， rem是以HTML元素的fontSize为比例

```css
html {
	font-size: 16px;
}
.box {
	width: 10rem; // 10 * 16
}
```

怎么设计html元素的fontsize值？

 ```javaScript
 var deviceWidth = document.documentElement.clientWidth;
 deviceWidth = deviceWidth < 320 ? 320 : deviceWidth > 640 ? 640 : deviceWidth;
 document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
 ```

搭配postcss-pxtorem将自动将px值转化为rem值

```javaScript
module.export = {
	lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue : 16, //（数字，函数） 根元素字体大小
            unitPrecision: 5, //（数字）允许REM单位增长的十进制数字
            replace: true, // （布尔值）替换包含rems的规则，而不添加后备
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px
            minPixelValue: 0, // （数字）设置要替换的最小像素值
            selectorBlackList  : [], // 忽略转换正则匹配项
            propList   : ['*'], // 可以从px转换为rem的属性，匹配正则
            exclude: /node_modules/i // （字符串，正则表达式，函数）要忽略并保留为px的文件路径
          }),
        ]
      }
    }
  }
}
```

```js
docEl.style.fontSize = 10 * (clientWidth  / 750)  + 'px'
// docEl => 是 元素html
// clientWidth => 是当前窗口的宽度
// 750 => 是 设计稿的宽度
```

###### 方案二： vw / vh, 将页面分为100份， 1vw = device-width / 100

搭配 postcss-px-to-viewport 将自动将px值专为你 vw/ vh

```javaScript
module.exports = {
 plugins: {
  autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
	'postcss-px-to-viewport': {
		unitToConvert: 'px', // 要转化的单位
		viewportWidth: 750, // UI设计稿的宽度
		unitPrecision: 6, // 转换后的精度，即小数点位数
		propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
		viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
		fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
		selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
		minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
		mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
		replace: true, // 是否转换后直接更换属性值
		exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
		landscape: false, // 是否处理横屏情况
	},
},
}

export const calcCssValue = value => `${(value / 375) * 100}vw`
```

###### 方案三： 百分比布局


在 css 中，我们可以使用百分比来实现布局，但是需要特定宽度时，这个百分比的计算对开发者来说并不友好，且元素百分比参考的对象为父元素，元素嵌套较深时会有问题


###### 方案四： 响应式布局

```css

body {
  background-color: yellow;
}
/* 针对大屏产品 ipad pro */
@media screen and (min-width: 1024px) {
    body {
      background-color: blue;
    }
}
```

###### 方案五：flex + rem 
