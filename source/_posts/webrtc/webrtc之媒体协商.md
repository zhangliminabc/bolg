---
title: webrtc之媒体协商
date: 2021-08-17 11:06:05
tags: [webrtc]
categories: [webrtc]
updated:
description:
keywords: webrtc
---

#### 媒体协商是让双方找到共同支持的媒体能力

###### 媒体协商的过程

在通讯双方都创建好 RTCPeerConnection 对象后，它们就可以开始进行媒体协商了。
不过在进行媒体协商之前，有两个重要的概念，即 Offer 与 Answer ，你必须要弄清楚。Offer 与 Answer 是什么呢？对于 1 对 1 通信的双方来说，我们称首先发送媒体协商消息的一方为呼叫方，而另一方则为被呼叫方。

Offer，在双方通讯时，呼叫方发送的 SDP 消息称为 Offer。
Answer，在双方通讯时，被呼叫方发送的 SDP 消息称为 Answer

```javascript
 class RTC {
    construct() {
        this.rtc = null;
    }

    /**
     * 初始化
     */
    initRtcPer() {
        this.rtc = new RTCPeerConnection();
    }

    createOffer() {
        const { rtc } = this;
        rtc.createOffer(
            (sessionDescription) => {
                rtc.setLocalDescription(sessionDescription);
            },
            (err) => {},
        );
    }
}
```
