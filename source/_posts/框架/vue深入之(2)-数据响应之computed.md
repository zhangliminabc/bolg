---
title: vue深入之computed源码
date: 2021-09-01 15:44:39
updated: 2021-09-01 15:44:39
tags: [框架, vue]
categories: [vue]
description:
keywords: vue, computed源码
---

```flow
st=>start: initComputed
op1=>operation: 遍历computed中的属性值列表
op1-1=>operation: 判断是否是服务器端渲染
cond1=>condition: Yes or no

op2=>operation: defineComputed为vm上添加对key的代理, 设置get/set
op3=>operation: 为每一个key值初始化watcher实例,保存到vm._computedWatcher数组
op4=>operation: 当对key读取时，会触发getter, getter会从_computedWatcher上找到对应的watcher,然后通过evaluate触发get函数, pushTarget收集对应的watcher
op5=>operation: 触发_data中的get函数,
op6=>operation: dep.depend -> watcher.addDep(dep)
op7=>operation: dep.addSub(watcher)
e=>end
st->op1->op1-1->cond1
cond1(yes)->op2->op4->op5->op6->op7->e
cond1(no)->op3->op2->op4->op5->op6->op7->e
```

#### 简述vue响应式原理

1. 深度递归遍历增加数据劫持
2. 当对劫持数据进行访问的时会判断当前是否有watcher实例， 如果有会保存当前的watcher实例到dep中的subs(订阅者)
3. 当对劫持数据进行设置值时会触发dep中的notify， 遍历dep中存储的sub执行sub的update方法（发布）
4. 组件实例之后会调用render生成虚拟dom， 在render过程中对用到的数据会执行updatecomponted

<img align="center" src="../../static/vue响应式原理.png">
