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

```flow
st=>start: 设置值
op=>operation: dep.notify
op=>operation: watcher.update
op=>operation: 
```

1. 通过Object.defineProperty方法对对象的某个属性进行set、get实现一个数据更新值的拦截
2. 取值的时