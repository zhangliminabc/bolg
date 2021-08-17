---
title: webrtc之录制
date: 2021-08-17 10:05:11
tags: [webrtc]
categories: [webrtc]
updated:
description:
keywords: webrtc, MediaRecorder
---


#### js存储二进制数据的类型

ArrayBuffer: 表示通用的、固定长度的二进制数据缓冲区(实例化之后才能存在内存中)

ArrayBufferView: 表示不同类型的Array的描述

blob: js的大型二进制对象类型

```javascript
 /**
  * array: ArrayBuffer、ArrayBufferView、Blob、DOMString
  *  options: 指定存储成的媒体类型
  */
 var ablob = new Blob(array, options);
```

##### 录制音视频流

```javascript

 class Recorder {
    constructor() {
        this.buffer = [];
    }

    handler(e) {
        if (e && e.data && e.data.size > 0) {
            this.buffer.push(e.data);
        }
    }

    // 开始录制
    startRecorder() {
        const option = {
            mimeType: 'video/webm;codecs=vp8',
        };
        let mediaRecorder = null;
        if (!MediaRecorder.isTypeSupported(option.mimeType)) {
            console.error(`${option.mimeType} is not supported!`);
            return;
        }
        try {
            //创建录制对象
            mediaRecorder = new MediaRecorder(window.stream, option);
        } catch (e) {
            console.error('Failed to create MediaRecorder:', e);
            return;
        }
        mediaRecorder.ondataavailable = this.handler;
    }

    /**
     * 创建录制的url
     * @returns
     */
    createUrl() {
        const { buffer } = this;
        const url = new Blob(buffer, { type: 'video/webm' });
        return url;
    }
}

```
