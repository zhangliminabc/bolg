/**
 *  找出arr中重复出现过的元素
 * @input [1, 2, 4, 4, 3, 3, 1, 5, 3]
 * @output: [1,3,4]
 */
function duplicates(arrs) {
    if (!Array.isArray(arr) || arr.length <= 0) return []

    const len = arr.length - 1
    let startIndex = 0
    let endIndex = len
    const result = []
    while (endIndex - startIndex >= 0) {

        if (endIndex == startIndex) {
            startIndex = startIndex + 1
            endIndex = len
        }

        if (startIndex == len) {
            break;
        }

        const startValue = arr[startIndex]
        const endValue = arr[endIndex]

        if (startValue == endValue) {
            result.push(startValue)
            startIndex = startIndex + 1
            endIndex = len

            while (arr[startIndex] == startValue) {
                startIndex = startIndex + 1
            }

        } else {
            endIndex = endIndex - 1
        }
    }
    return result
}

const result = duplicates([1, 2, 4, 4, 3, 3, 3, 1, 5, 3])
console.log(result)