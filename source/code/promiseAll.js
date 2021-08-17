// 自定义实现promise.all的源码
Promise.customAll = function(plist) {
    return new Promise((resolve, reject) => {
        const result = []
        let remaining = plist.length
        const response = (index, p) => {
            try {
                const isObj = typeof p === 'object' || typeof p === 'function'
                if (p && isObj) {
                    const then = p.then
                    if (typeof then === 'function') {
                        then(function(val) {
                            response(index, val)
                        }, reject)
                        return
                    }
                }
                result[index] = p
                if (--remaining === 0) {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }
        for (let i = 0; i <= plist.length - 1; i++) {
            response(i, plist[i])
        }
    })

}