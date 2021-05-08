// function mockApply(thisObj, paramsList) {
//     const params = Array.isArray(paramsList) ? paramsList : Array.from(paramsList)
//     const currentThis = thisObj
//     currentThis.fn = this
//     const result = currentThis.fn(...params)
//     delete currentThis.fn
//     return result
// }

function mockApply() {
    let [currentThis, params] = Array.from(arguments)
    currentThis.fn = this
    const result = currentThis.fn(...params)
    delete currentThis.fn
    return result
}

Function.prototype.mockCall = mockApply

// 测试
var obj1 = {
    a: 1,
}

var f = function (param1, param2) {
    console.log(param1) // 测试1
    console.log(param2) // ceshi12
    console.log(this.a) // 1
    return param1
}
f.mockCall(obj1, ['测试1', 'ceshi12'])