---
title: webpack深入之基础配置
date: 2021-09-02 08:31:34
updated: 2021-09-02 08:31:34
tags: [前端基础, webpack]
categories: [webpack]
description:
keywords: webpack
---

#### 入口配置

###### 单入口文件

```javascript

 module.export = {
  entry: string | [string]
 }

```

###### 对象语法

dependOn: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。
filename: 指定要输出的文件名称。
import: 启动时需加载的模块。
library: 指定 library 选项，为当前 entry 构建一个 library。
runtime: 运行时 chunk 的名字。如果设置了，就会创建一个新的运行时 chunk。在 webpack 5.43.0 之后可将其设为 false 以避免一个新的运行时 chunk。

```javascript
 module.export = {
  entry: {
   app: './app.js',
   verdor: {
    dependOn: 'app',
    import: 'src/app.js'
   }
  }
 }
```

###### 分离文件

```javascript
 module.export = {
  entry: {
   app: './app.js',
   verdor: './verdor.js'
  }
 }

```

#### 输入(output): 设置为对象输入

```javascript
 module.export = { 
  output: {
   filename:  'bundle.js',
  }
 }
```

多文件配置,使用占位符

```javascript
 module.export = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
 }
```

#### loader: 对源代码进行转换

```javascript
 module.export = {
  module: {
   rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  }
 }
```

#### plugin插件

常见的plugin插件有哪些？

ProgressPlugin: 自定义编译过程中的进度条
HtmlWebpackPlugin: 生成html文件
DllPlugin: 可以将特定的类库提前打包然后引入
webpack-parallel-uglify-plugin: 压缩代码
UglifyJS： 单线程压缩代码
Tree Shaking： 删除项目中未被引用的代码


#### webpack 优化：
1. resolve.extensions：用来表明文件后缀列表，默认查找顺序是 ['.js', '.json']，如果你的导入文件没有添加后缀就会按照这个顺序查找文件。我们应该
2. 可能减少后缀列表长度，然后将出现频率高的后缀排在前面
3. resolve.alias：可以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径
4. module.noParse：如果你确定一个文件下没有其他依赖，就可以使用该属性让 Webpack 不扫描该文件，这种方式对于大型的类库很有帮助


1. loader优化， 指定包含的路径 include: [resolve('src)]; 指定不包含的路径exclude: /node_modules/
2. loader缓存 loader: 'babel-loader?cacheDirectory=true'
3. HappyPack： 将loader的同步执行转换为并行

```javascript
module: {
  loaders: [
    {
      test: /\.js$/,
      include: [resolve('src')],
      exclude: /node_modules/,
      // id 后面的内容对应下面
      loader: 'happypack/loader?id=happybabel'
    }
  ]
},
plugins: [
  new HappyPack({
    id: 'happybabel',
    loaders: ['babel-loader?cacheDirectory'],
    // 开启 4 个线程
    threads: 4
  })
]
```

4. DllPlugin
5. Tree Shaking 可以实现删除项目中未被引用的代码
6. webpack-parallel-uglify-plugin || UglifyJS: 代码压缩

a -> bc ->d -> e

浅比对， 深比对

打包 -> 

css -> 

加载： 
鋆： 避讳， css，performance
