---
title: 'webrtc基础概念介绍'
date: 2021-06-07 19:55:07
tags: [webrtc]
categories: [webrtc]
updated:
description: 
keywords: webrtc, mediaDevices
---

#### webrtc 是一个支持实时语音、视频和数据传输的开源系统

#### 实现流程

<img src="../../static/webrtc.webp">

  1. webrtc的终端设备，负责音视频采集、编解码、NAT 穿越、音视频数据传输
  2. Signal 服务器，负责信令处理，如加入房间、离开房间、媒体协商消息的传递等
  3. STUN/TURN 服务器，负责获取 WebRTC 终端在公网的 IP 地址，以及 NAT 穿越失败后的数据中转。

#### 音视频采集的基本概念

- 摄像头： 用于采集图像和视频
- 帧率： 摄像头一秒钟采集图像的次数
- 分辨率: 屏幕分辨率
- 宽高比： 分辨率的宽高比
- 麦克风: 用于采集音频
- 轨：借鉴火车的轨道概念， 在多媒体中表示每条轨数据都是独立的
- 流： 分为媒体流和数据流（媒体流中可存放多个音频轨和视频轨； 数据流中可以存放多个数据流）
