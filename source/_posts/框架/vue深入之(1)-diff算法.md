---
title: vue深入之diff算法
date: 2021-08-27 11:48:21
updated: 2021-08-27 11:48:21
tags: [框架, vue]
categories: [vue]
description:
keywords: vue, diff算法
---

 

```flow
st=>start: diff算法
op=>operation: 形参 oldVnode, newVnode

op2=>operation: oldVnode的标签是否为undefined

con1=>condition: 标签和key值是否相同(sameVnode)

op3=>operation: pathVnode
con2=>condition: oldVnode === newVnode yes or no?

con3=>condition: newVnode是否有text？
con4=>condition: oldVnode.text !== newVnode.text ?
op6=>operation: removeOldVnodeChildren(删除老节点下的子元素) / setTextContent(elm, newVnode.text)(以新节点为基准更新text值)

op7=>operation: 新vnode无内容，有children

con5=>condition: 新vnode有子节点， 老vnode也有子节点
op8=>operation: updateChildren

con6=>condition: 新vnode有子节点； 老oldVNode没有无子节点
op9=>operation: addVnodes以新节点为基准添加子节点到对应的元素中

con7=>condition: 老的vnode有子节点, 新vnode没有子节点
op10=>operation: removeVnodes遍历老节点下的子节点移除

con8=>condition: 老vnode有内容
op11=>operation: setTextContent

p4=>operation: 基于newVnode创建元素插入

end=>end: 结束

st->op->con1

con1(yes)->op3->con2
con1(no)->op4

con2(yes)->end
con2(no)->con3

con3(yes)->con4
con3(no)->op7->con5

con4(yes)->op6->end
con4(no)->end

con5(yes)->op8
con5(no)->con6

con6(yes)->op9
con6(no)->con7

con7(yes)->op10
con7(no)->con8

con8(yes)->op11
con8(no)->end

```

#### 虚拟dom的作用？
为了不必要的dom操作，优化性能

数据改变 ->虚拟DOM(计算变更)-> 操作DOM -> 视图更新

#### v-for中的key的作用？

在进行计算dom变动的时候可以对同级元素可以更高效的计算出变动，对性能的优化

#### 简述diff过程(不同标签直接替换 / 同级相同标签通过key计算变动)

1. 接收两个入参，参数都是vnode
2. 先判断标签和key相同就认为是相同node，会执行pathVnode函数
3. 判断两个节点是否相同
4. 新节点如果有文本, 老节点text 不等于 新节点的text， 设置节点内容
5. 新节点没有文本可能会有children，
6. 新老节点都有child， 执行updatechild方法，
7. 新节点有child， 老节点没有child， 老节点有内容，会清空老节点内容，以新节点为基准遍历添加添加元素
8. 老节点有child， 新节点没有; 遍历移除老节点下的child
9. 老节点有文本， 清空老节点下的文本
10. updatechild：首尾指针
