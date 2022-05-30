---
title: 常见tsconfig配置 
date: 2022-05-30 11:22:32
updated: 2022-05-30 11:22:32
tags: [TypeScript]
categories: [TypeScript]
description:
keywords:
---

### compilerOptions: 


- @types, typeRoots, types

types: string[] : 被列出来的包才会被包含进来
typeRoots: string[]: typeRoots 被列出来的包才会包含进来

- target
  target： string: 指定ECMAScript 目标版本

- experimentalDecorators: boolean
  是否开启装饰器

(tsconfig-compilerOption-参考文档)[https://www.tslang.cn/docs/handbook/compiler-options.htm]


### files: string[]:  指定一个包含相对或绝对文件路径的列表

### include: string[]: 包含文件

### exclude: string[]: 排除文件

```json
  "exclude": ["node_modules", "dist"]
```


