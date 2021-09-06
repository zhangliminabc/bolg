---
title: 浏览器深入之web-worker
date: 2021-08-31 10:50:19
updated: 2021-08-31 10:50:19
tags: [前端基础, 浏览器]
categories: [浏览器]
description:
keywords: JavaScript, 浏览器
---


#### web Worker为web内容在后台线程中运行脚本提供了一种简单的方法，线程可以执行任务而不干扰用户界面

#### 使用方式

``` javascript
 // 生成一个专用worker
 export function initWorker(url) {
  if (!window.Worker)  return null
  return new Worker(url)
 }

 // 发消息

 // 主线程
 const myWorker = initWorker()
 first.onchange = function() {
   myWorker.postMessage(['first', 'value', 'seound'])
   console.log('Message posted to worker')
 }

 secound.onchange = function() {
  myWorker.postMessage(['secound'])
  console.log('Message posted to Worker')
 }

 // worker线程
 onmessage = function(e) {
  console.log('message received from main script')
  const workerResult = 'result:' + e.data
  console.log('Posting message back to main script');
  postMessage(workerResult);
 }

 // 收消息

 // 主线程
 myWorker.onMessage = function(e) {
  console.log('Message received from worker', e);
 }

```

#### workers和主线程之间的数据传递通过 postMessage 传递消息； 使用 onmessage 事件处理函数来响应消息(消息被包含在Message事件的data属性中), 这个过程中数据并不是被共享而是被复制

#### worker Api

- terminate(): 从主线程中立刻终止一个运行中的worker

- close(): 在workers线程中调用自己的close方法进行关闭

- onError(): worker执行错误时发生
