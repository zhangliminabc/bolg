/**
 *  实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key - value 形式的 object
 *  @param0 : string ("http://sample.com/?a=1&b=2&c=xx&d#hash")
 *  @return : Object({ key: vaue})
 */

function querySearch(url) {
    if (!url) return {}
    // const queryParams = url.split('?')[1] 
    const reg = /(?<=\?).*(?=#)/gmi
    const queryParamsStr = reg.exec(url)[0]
    if (!queryParamsStr) return {}
    return queryParamsStr.split('&').reduce((pre, str) => {
        let [key, value = ''] = str.split('=')
        key = key.trim()
        value = value.trim()
        pre[key] = value
        return pre
    }, {})
}

console.log(querySearch('http://sample.com/?a=1&b=2&c=xx&d#hash')) // { a: '1', b: '2', c: 'xx', d: '' }
