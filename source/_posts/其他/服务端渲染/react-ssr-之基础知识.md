---
title: React-SSR 之基础知识
date: 2022-05-23 14:59:09
updated: 2022-05-23 14:59:09
tags:
categories:
description:
keywords:
---

CSR VS SSR 的比较：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a8041b9-5aee-49b9-a519-c83d7f8d50de/Untitled.png)

完美解决方式： React SSR( SSR + SPA)

### React SSR vs SSR vs CSR 的 区别？

###### SSR

SSR(SSR是 Server Side Rendering， 对应的中文名是服务端渲染也就是将渲染的工作放在服务端进行); 浏览器得到完整的结构后就可直接进行 DOM 的解析、构建、加载资源及后续的渲染。

优点： 首屏展示快， 搜索引擎比较友好有利于SEO
缺点： 页面加载需要向服务端请求完整页面内容和资源，访问量大时会对服务器造成一定压力
工作原理：

```flow
st=>start: Server 端返回html页面
end=>end: render
st->end
```

CSR(CSR是Client Side Rendering， 对应的中文名是客服端渲染）→ 常见的SPA(单页面应用）
优点：局部刷新提升用户体验， 只需要加载一次js和css，页面路由维护在客户端页面间组件跳转很快
缺点：SEO不够友好， 增加页面的白屏展示时间
工作原理：

```flow
st=>start: Server 端返回初始Html
op=>operation: 然后再由JS去异步加载数据完成页面的渲染
e=>end: render
st->op->e
```

### React SSR 的根本原理？

React SSR  = SSR + CSR



### 实现最基本的 React SSR?

### 何为同构？
