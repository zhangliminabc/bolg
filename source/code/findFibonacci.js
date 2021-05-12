/**
 * 在一堆正整数中， 找到最长的一组斐波拉契烈段
 * @param {*} inputArr : Array
 */

function findFibonacci(inputArr) {
    inputArr.sort((a, b) => a - b)
    let startIndex = 0
    let item = []
    let current = 0
    let next = 0
    let result = []
    let lastValue = 0

    const endIndex = inputArr.length
    const numberMap = inputArr.reduce((pre, num, index) => {
        pre[num] = index
        return pre
    }, {})

    const isFibona = () => {
        const value = current + next
        if (typeof numberMap[value] !== 'undefined') {
            if (item.length < 2) {
                item.push(current)
            } 
            item.push(next)
            current = next
            next = value
            lastValue = value
            return numberMap[value]
        }
    }

    while(startIndex < endIndex) {
        current = inputArr[startIndex]
        next = 0
        if (item.length > 0) {
            result.push(item)
        }
        item = []
        let nextIndex = startIndex + 1
        for (let i = nextIndex; i <= endIndex - 1; i++) {
            next = inputArr[i]
            const index = isFibona()
            if (index) {
                i = index - 1
                continue;
            } else {
                break;
            }
        }
        item.push(lastValue)
        startIndex++
    }
    const data = result.sort((a, b) => a.length - b.length)
    return data[data.length -1]
}

const inputArr = [13, 9, 3, 8, 5, 25, 31, 11, 21];

console.log(findFibonacci(inputArr))