/**
 *  实现一个函数，将数组转化为树状数据结构
 *  @param0: Array
 *  @return: Object
 */

function buildTreeByArray(arr1) {
    const map = arr1.reduce((pre, item) => {
        const { id } = item
        pre[id] = item
        return pre
    }, {})

    arr1.forEach(item => {
        const { parent_id } = item
        if (parent_id !== 0) {
            map[parent_id].children ? map[parent_id].children.push(item) : map[parent_id].children = [item]
        }
    })
    return arr1.filter(item => item.parent_id === 0)
}

const arr1 = [
   {
        id: 1,
        parent_id: 0,
        name: "四川省"
    },
    {
        id: 2,
        parent_id: 0,
        name: "广东省"
    },
    {
        id: 3,
        parent_id: 0,
        name: "江西省"
    },
    {
        id: 5,
        parent_id: 1,
        name: "成都市"
    },
    {
        id: 6,
        parent_id: 5,
        name: "锦江区"
    },
    {
        id: 7,
        parent_id: 6,
        name: "九眼桥"
    },
    {
        id: 8,
        parent_id: 6,
        name: "兰桂坊"
    },
    {
        id: 9,
        parent_id: 2,
        name: "东莞市"
    },
    {
        id: 10,
        parent_id: 9,
        name: "长安镇"
    },
    {
        id: 11,
        parent_id: 3,
        name: "南昌市"
    }
];

console.log(buildTreeByArray(arr1))