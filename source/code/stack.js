class Stack {
    items = []

    // 入栈
    addItem(element) {
        this.items.push(element)
    }

    // 出栈
    popItem() {
        return this.items.pop()
    }

    // 清空栈
    clear() {
        this.items = []
    }

    // 栈的大小
    size() {
        return this.items.length
    }

    // 是否是空栈
    isEmpty() {
        return this.items.length === 0
    }

    // 查看栈顶元素
    peek() {
        const len = this.size
        return this.items[len - 1]
    }

    // 打印栈中的内容
    print() {
        console.log(this.items.toString())
    }
}