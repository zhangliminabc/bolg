// 函数的作用域
function foo(a) {
  var b = a * 10
  function bar(c) {
    console.log(a, b, c)
  }
  bar(b * 10)
}

/**
 * 函数的作用域
 * 1, 全局window下foo
 * 2, foo下有a, b, bar
 * 3, bar下有c, 当需要查找b，a的值时在当前对象下不能找到会向上级foo下的作用域寻找
 */
foo(10)


// 模拟js的块级函数
function mockBlaockScope() {
  ;
  (function () {
    var a = 100
    console.log(a) // 100
  })()
  // console.log(a) // a is not defined
}
mockBlaockScope()

// 作用域问题
scopeFun()

// function scopeFun() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i) // 5次输入都是5, 同时是异步输入
//     }, 1000);
//   }
// }

function scopeFun() {
  for (var i = 0; i < 5; i++) {
    ;
    (function (a) {
      setTimeout(() => {
        console.log(a)
      }, 100);
    })(i)
  }
}