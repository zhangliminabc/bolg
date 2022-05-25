---
title: uni-app之分包
date: 2022-05-23 14:07:49
updated: 2022-05-23 14:07:49
tags: [小程序]
categories: [uni-app]
description: 小程序有体积和资源加载限制,各家小程序平台提供了分包方式，优化小程序的下载和启动速度， 目前微信支持每个包是2M; 在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，会把对应分包自动下载下来，下载完成后再进行展示。此时终端界面会有等待提示。
keywords: uni-app分包
---

##### 小程序分包背景

小程序有体积和资源加载限制,各家小程序平台提供了分包方式，优化小程序的下载和启动速度， 目前微信支持每个包是2M

在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，会把对应分包自动下载下来，下载完成后再进行展示。此时终端界面会有等待提示。

主包： 即放置默认启动页面 / TabBar 页面，以及一些分包都需要用到的公共资源或 JS脚本

而分包则是根据page.json的配置进行划分的

##### 如何分包？

```json
{
 "subPackages": [
  { 
   "root": "pages/signup", // 配置子包的根目录
   "pages": [ // 子包由哪些页面组成
        {
          "path": "index",
          "style": {
            "navigationBarTitleText": "",
            "enablePullDownRefresh": false
          }
        }
      ]
  }
 ] 
}
```

###### 分包预载配置

| 字段 | 类型 | 必填 | 默认值 |  说明 |
| :-----| ----: | :----: | :----: | :----: |
| packages | StringArray | 是 | 无 | 进入页面后预下载分包的 root 或 name。__APP__ 表示主包。|
| network | String | 否 | wifi | 在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载）

[最后附上 uni-app关于分包的官方文档](https://uniapp.dcloud.io/collocation/pages.html#subpackages)

