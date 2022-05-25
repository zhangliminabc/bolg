/**
 * 模拟化call函数
 * @returns 函数执行的结果
 */
Function.prototype.mockCall = function() {
    const self = this
    const args = Array.from(arguments)

    const [curThis] = args
    curThis.fn = self

    const result = curThis.fn(...args.slice(1))
    delete curThis.fn
    return result
}

//  测试
var getValue = function(paralist, params) {
    console.log(this.a) // 1
    console.log(paralist) // ['参数1', '参数2']
    console.log(params) // 这是第二个参数
    return this.a
}

var obj = {
    a: 1,
}

getValue.mockCall(obj, ['参数1', '参数2'], '这是是第二个参数')