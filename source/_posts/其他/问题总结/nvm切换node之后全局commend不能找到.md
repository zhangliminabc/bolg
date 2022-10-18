---
title: nvm 切换之后全局commend不能被找到
date: 2022-06-17 10:04:14
updated: 2022-06-17 10:04:14
tags: [问题总结]
categories: [问题总结]
description:
keywords: nvm, nodejs
---

### nvm管理node，切换之后不能使用全局命令的问题

```shell

	npm config get prefix

	npm config set prefix <npm config get prefix>

	npm i yarn -g
	
	yarn -v

```