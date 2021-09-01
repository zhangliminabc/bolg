---
title: 测试文件
date: 2021-08-23 22:09:18
updated: 2021-08-23 22:09:18
tags: [前端基础, CSS]
categories: [CSS]
description:
keywords:
---


[参考资料](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

#### 基本概念

##### 容器和项目: 采用玩个布局的区域成为容器; 容器内部采用网格定位的子元素称为项目(item)

```html
<!-- 最外层的div为容器，内存的是哪个div元素是项目 -->
 <div class="container">
  <div> <p>1</p> </div>
  <div><p>2</p> </div>
  <div><p>3</p> </div>
 </div>
```

##### 行和列： 容器里面的水平区域成为行(row), 垂直区域成为列(column)

##### 单元格： 行和列的交叉区域成为单元格(cell)

正常情况下: n行和m列会产生 n * m 个单元格，比如3行3列会产生9个单元格

##### 网格线： 划分网格的线成为网格线

正常情况下： n行有n+1根水平网格线； m列有m+1根垂直网格线

#### 容器属性： 定义在容器上面成为容器属性； 定义在项目上面成为项目属性

##### 容器属性

1. display: grid; 指定一个容器采用网格布局

```css
 div {
  display: grid;
 }
```

默认情况下，容器元素都是块级元素，但是也可以设置为行内元素

```css
  div {
   display: inline-grid;
  }
```

<p style="color:red;"> 设置为网格布局以后，容器子元素的 float， display： inline-block； display： table-cell， vertical-align 和 column-*设置都将失效

2. grid-template-columns, grid-template-rows 属性

容器制定了网格布局以后，接着就要划分行和列

grid-template-columns : 定义每一列列宽
grid-template-rows: 定义每一行的行高

```css
 .container {
  display: grid;
  grid-template-columns: 100px 100px 100px; // 还可以使用百分比
  grid-template-rows: 100px 100px 100px
 }

```

上面代码指定了一个三行三列的网格，列宽和行高都是100px;

- 2-1: repeat(): 接收两个参数，第一个参数是重复的次数， 第二个参数是所要重复的值

 重复写同样的值非常码放，尤其网格很多时

  ```css
   .container {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repear(3, 33.33%);
   }
  ```

- auto-fill: 自动填充

 有时，单元格的大小是固定的，但是容器的大小不确定，如果希望每一行（或每一列）容纳尽可能多的单元格这时可以使用auto-fill关键字表示自动填充

 ```css
 .container { 
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px)
 }

 ```

- 2-2: fr: 表示比例关系

```css
 .container {
  display: grid;
  grid-template-columns:1fr 1fr;
 }
```

fr 可以与绝对长度的单位结合使用，这时会非常方便

```css
 .container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr; // 第一列的宽度为150像素， 第二列的宽度是第三列的一半
 }
```

- 2-3: minmax(): 产生一个长度范围，表示长度就在这个范围之中，它接收两个参数，分别为最大值和最小值

```css
 grid-template-columns: 1fr 1fr minmax(100px, 1fr) // 表示列宽不小于100px，不大于1fr
```

- 2-4: auto: 表示由浏览器自己决定长度

```css
 grid-template-columns: 100px auto 100px; // 第二列的宽度基本上等于该列单元格的最大宽度
```

- 2-5: 网格线的名称: 使用方括号指定每一根网格线的名字，方便引用

 ```css
 .container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  gird-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
 }
 ```

3. grid-row-gap: 行与行之间的间隔(行间距)
4. grid-colunm-gap: 列与列之间的间隔(列间距)

```css

 .container {
  grid-row-gap: 20px;
  grid-colunm-gap: 20px;
 }

```

5. grid-gap: 是行间距和列间距的合并简写形式（如果省略第二个值，浏览器认为第二个值等于第一个值）

6. grid-template-areas: 一个区域由单个或者多个单元格组成

 ```css
  .container {
   display: grid;
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px 10px 100px;
   grid-template-areas: 'a b c' 'd e f' 'g h i'; // 上面代码先划分出9个单元格，然后将其定名为a到i的九个区域， 分别对应这9个单元格
   // 如果某些区域不需要利用，则使用 “点”（.） 表示
   // grid-template-areas: 'a . c' 'd . f' 'g . i' 
  }
 ```

7. grid-auto-flow: 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格， 先行后列（即先填满第一行在开始放入第二行

 取值： row | column  // 想行后列或者先列后行

8. justity-items: 设置单元格内容的水平位置， align-items: 单元格的内容的垂直位置

 ```css
  .container {
   justity-items: start | end | center | stretch
   align-items: start | end | center | stretch
  }
 ```

 place-items: 是 align-items和justity-items属性的合并简写形式

 ```css
  .container {
   place-items: center center //（如果省略第二个值，浏览器默认与第一个值相等）
  }
 ```

9. justify-content： 整个内容区域在容器里面的水平位置; align-items: 整个内容区域的垂直位置

```css
 .container {
  justiyy-content: start | end | center | stretch | space-around | space-between | space-evenly
  align-conetent: start | end | center | stretch | space-around | space-between | space-evenly
 }
```

place-content： 是这两个值的简称

10. grid-auto-columns 和 grid-auto-rows: 浏览器自动创建多余的网格的列宽和行高，写法与 grid-template-columns和grid-template-rows相同.

  如果不指定这两个属性，浏览器完全根据单元格内容的大小决定新增的网格的列宽和行高

  使用场景： 只有3列，但是某一个项目指定在第5行

11. grid-template

  grid-template: 是 grid-template-columns 、 grid-template-rows、 grid-template-areas这三个属性的合并简写形式

12. grid

  grid是 grid-template-rows 、 grid-template-columns、 grid-template-areas、 grid-auto-rows、 grid-auto-columns、 grid-auto-flow这6个属性的合并简写形式

##### 项目属性

1. 定位单元格位置

 ```css

  // 1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。
  .item-1 {
   grid-column-start: 2;
   grid-column-end: 4
  }

 ```

 grid-column-start: 单元格的开始网格线
 grid-column-end: 单元格结束网格线
 grid-row-start: 单元格行的开始网格线位置
 grid-row-end: 单元格行的结束网格线位置

 span: 表示"跨越"，即左右边框（上下边框）之间跨越多少个网格

 ```css
  .item-1 {
  grid-column-start: span 2;
 }
 
```

2. grid-column 属性， grid-row 属性

 grid-column: 是 grid-column-start 和 grid-column-end的合并简写形式

 grid-row: 是grid-row-start 和 grid-row-end的合并简写形式

 ```css
  .item {
    grid-column: 2 / 6;
    grid-row: 1 / 3;
  }
 ```

3. grid-area: 指定项目放在哪一个区域

```css
 .item-1 {
  grid-areas: e; // 1号项目位于e区域
  // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
 }
```

4. justify-self / align-self / place-self

 justify-self: 单元格内容的水平位置

 align-self: 单元格内容的垂直位置

 place-self: <align-self> <justify-self>;
