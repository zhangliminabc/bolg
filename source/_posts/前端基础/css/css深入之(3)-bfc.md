---
title: css深入之bfc
date: 2021-08-23 22:07:55
updated: 2021-08-23 22:07:55
tags: [前端基础, css]
categories: [CSS]
description:
keywords: CSS, BFC
---


#### block-level box

盒子模型: margin + padding + border + content

排列规则:

1. 块状元素排斥其他元素与其位于同一行
2. 块状元素具有流体特性(水平方向自动填满外部容器)

#### Formatting context

在页面中的一块渲染区域，并且有自己的渲染规则

#### bfc(Block formatting context): 决定了元素如何兑取内容进行布局以及和其他元素的关系和相互作用

简单理解是： BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素

#### bfc的布局规则

1. 内部的box会在垂直方向上一个接一个的排列
2. box在垂直方向上的距离由margin决定， 属于同一个BFC的两个相邻Box的margin会发生重叠
3. 每个元素的margin-box的左边， 与包含块border-box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠
5. 计算BFC的高度时，浮动元素也参与计算

#### 条件

1. HTML元素
2. float值不为none
3. overflow的值不为visible
4. display的值不为inline-block、 table-cell、table-caption
5. position的值为absolute 或者 fixed

#### 自适应的两栏布局

```html
 <style>
    body {
        width: 300px;
        position: relative;
    }
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
    .main {
        height: 200px;
        background: #fcc;
     overflow: hidden; // 触发bfc的生成，然后根据bfc的规则bfc区域不和浮动区域重叠
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>
```

#### 清除内部浮动

```html
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
    }
 
    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
				overflow: hidden; // bfc规则计算BFC的高度时，浮动元素也参与计算,
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

#### margin重叠

```html
<style>
    .wrap {
        overflow: hidden; // 通过触发生成bfc， 避免同一个bfc内相邻元素box会发生margin重叠,当兄弟盒子的外边距不一样时，将以最大的那个外边距为准。
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <div class="wrap">
        <p>Hehe</p>
    </div>
</body>
```