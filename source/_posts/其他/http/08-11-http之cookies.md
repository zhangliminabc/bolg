---
title: http-cookies
date: 2021-08-11 16:16:44
tags: [http, javascript, cookies]
categories: [http]
updated:
description:
keywords: cookies
---


### 什么是cookies

<p style="color: red;">服务器发送到用户浏览器并保存在本地的一小块数据, 他会在浏览器下次向同一服务器发起请求时被携带并发送到服务器上</p>

### 作用

1. 会话状态管理
2. 个性化设置
3. 浏览器行为跟踪

### 创建 cookies

- 服务端:
    <p style="color:red;">服务器使用 set-Cookie发送Cookie信息</p>

    ` set-Cookie: <cookie名>=<cookie值> `

- 客户端：

    `document.cookie = 'name=Jonh; ";`

### cookie的运行机制

```flow
st=>start: start
op=>operation: 下一次发起http请求，浏览器会检查是否有cookie
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

### cookie的格式

1. document.cookie: 获取cookie

2. cookie的属性： 
    a. expires: 设置cookie的有效时间
    b. domain: 域名
    c. path: 路径, domain + path决定哪些域名下的请求会被加上cookie
    d. httpOnly: 设置cookie是否能通过js去访问
    e. secure: 设置cookie在确保安全的请求中才会发送,当请求时https或者其他安全协议时，包含secure选项的cookie才能被发送到服务器

