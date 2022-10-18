---
title: ts 之exclude 操作符
date: 2022-07-07 16:54:58
updated: 2022-07-07 16:54:58
tags:
categories:
description:
keywords:
---

### exclude<UnionType, ExcludedMembers> : 从 UnionType 类型中排除 ExcludedMembers 的所有联合类型成员返回新的类型

```ts

type OmitType<T, K extends keyof T> =  {
	[P in Exclude<keyof T, K>]: T[P]
}
```
