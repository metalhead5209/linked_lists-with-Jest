const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const list = new LinkedList()
        list.insertAtHead(10)
        const oldHead = list.head
        list.insertAtHead(20)

        expect(list.head.value).toBe(20)
        expect(list.head.next).toBe(oldHead)
        expect(list.length).toBe(2)
    })
})