class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode
        this.length++
    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

LinkedList.fromValues = function(...values) {
    const list = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        list.insertAtHead(values[i])
    }
    return list
}


module.exports = LinkedList;