// apply(thisobj, [parma1, param2])

Function.prototype._apply = function() {
    const [thisOb, params] = Array.from(arguments)
    let context = thisOb || window
    const self = this
    if (typeof context !== 'object') {
        context = Object(context)
    }
    const key = Symbol('key')
    context[key] = self
    const result = context[key](...params)
    delete context[key]
    return result
}

function fn(a, b) {
    return this.a + this.b
}

const obj = {
    a: 1,
    b: 2
}

console.log(fn._apply(obj, [2, 3]))