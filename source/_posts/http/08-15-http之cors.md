---
title: http-cors
date: 2021-08-15 18:15:36
tags: [http]
categories: [http]
updated:
description:
keywords: http, cors, 跨域
---


### 浏览器的简单请求和非简单请求

- 简单请求：
    1, 请求方法为HEAD、GET、OST
    2. HTTP头信息不超出以下几个字段
    Accept / Accept-Language / Content-Language / Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

针对简单请求浏览器的请求流程是：

```flow
st=>start: start
op=>operation: 简单请求
sub1=>subroutine: 浏览器为请求添加origin字段，origin字段代表本次请求来自那(协议 + 域名 + 端口)
cond=>condition: 是否在同一源内
sub2=>subroutine: 在同一源内, 服务器在响应头中添加 Access-Control-Allow-Origin/Access-Control-Expose-Headers/Access-Control-Allow-Credentials/Content-Type字段
sub3=>subroutine: 不在同一源内，报错
end=>end: 请求结束
e=>end
st->op->sub1->cond
cond(yes)->sub2->end
cond(no)->sub3->end
```

1. Access-Control-Allow-Origin： 它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求

2. Access-Control-Allow-Credentials: 它的值是一个布尔值，表示是否允许发送Cookie
  
3. Access-Control-Expose-Headers: 该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段

4. Content-Type: text/html; charset=utf-8

### 非简单请求

#### 预检请求

 <p style="color: red;"> 非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。</p>

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

```javascript
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();
```


OPTIONS: 用来作为预捡请求

Access-Control-Request-Method： 该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
Access-Control-Request-Headers： 该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。
Origin: 表示请求来自哪个源

#### 预检请求的回应

服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。



```json

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

```

上面的HTTP回应中，关键的是Access-Control-Allow-Origin字段，表示http://api.bob.com可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。


` Access-Control-Allow-Origin: * `


如果服务器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。控制台会打印出如下的报错信息。

```
XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.

```

服务器回应的其他CORS相关字段如下。

``` 

Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
```


1. Access-Control-Allow-Methods 

该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求


2. Access-Control-Allow-Headers

如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。

3. Access-Control-Allow-Credentials

该字段与简单请求时的含义相同。

4. Access-Control-Max-Age

该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。


#### 浏览器的正常请求和回应

一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。


[参考链接](http://www.ruanyifeng.com/blog/2016/04/cors.html)