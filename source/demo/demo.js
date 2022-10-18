// 双向链表

// [{ val: '', pre: Node, nex: Node }]

// head: { Node -> nex -> node }

function CreateNode(value) {
    this.value = value || ''
    this.pre = null
    this.next = null
}


class Linked {

    head = null;
    tail = null;

    addNode(val) {
        const newNode = new CreateNode(val)
        if (this.tail) {
            newNode.pre = this.tail
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
    }

    deleteTail() {
        const { tail } = this
        if (!tail) return
        const preNode = tail.pre
        preNode.next = null
        this.tail = preNode
    }
    printNodeList() {
        const { head } = this
        if (!head) return ''
        let customHead = head.next
        let str = head.value
        while (customHead) {
            const nextValue = customHead.value
            str += `  ${nextValue}`
                // const { next } = customHead
            customHead = customHead.next
        }
        console.log(str)
        return str
    }
}


const linkedInstance = new Linked()
linkedInstance.deleteTail()
linkedInstance.deleteTail()
linkedInstance.printNodeList()
linkedInstance.addNode(0)
linkedInstance.addNode(1)
linkedInstance.addNode(2)
linkedInstance.addNode(3)
linkedInstance.addNode(4)
linkedInstance.addNode(5)
linkedInstance.addNode(6)
linkedInstance.printNodeList()
linkedInstance.deleteTail()
linkedInstance.printNodeList()