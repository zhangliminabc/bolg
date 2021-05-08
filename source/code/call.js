/**
 * 模拟化call函数
 * @returns 函数执行的结果
 */
function mockCall() {
    const params = Array.from(arguments)
    const [ currentThis ]= params
    currentThis.fn = this
    const result = currentThis.fn(...params.slice(1))
    delete currentThis.fn
    return result
}

Function.prototype.mockCall = mockCall

//  测试
var getValue = function (paralist) {
    console.log(this.a) // 1
    console.log(paralist) // ['参数1', '参数2']
    return this.a
}

var obj = {
    a: 1,
    getValue: getValue
}

getValue.mockCall(obj, ['参数1', '参数2'])