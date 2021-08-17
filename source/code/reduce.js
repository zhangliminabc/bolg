// 自定义reduce函数

// Array.prototype.cutomReduce = function(fn, initVal) {
//     const list = this
//     let result = initVal

//     for (let i = 0; i < list.length; i++) {
//         const data = fn(result, list[i], i)
//         result = data
//     }

//     return result
// }

// console.log([1, 2, 3].cutomReduce((pre, a) => pre + a, 1))

Array.prototype.cutomReduce = function(fn, initVal) {
    const list = this
    let result = initVal
    const index = list.length - 1
    let cur = 0
    while (cur <= index) {
        const data = fn(result, list[cur], index)
        result = data
        cur++
    }
    return result
}

console.log([1, 2, 3].cutomReduce((pre, item) => pre + item, 1))