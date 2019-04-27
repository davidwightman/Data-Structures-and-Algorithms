class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode
        newNode.next = holdingPointerthis.length++
        return this.printList()

    }
    traverseToIndex (index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    remove (index){
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this.printList()
    }
    printList() {
        const arrray = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currrentNode = currentNode.next;
        }
        return array
    }
}

const myLinkList = new LinkedList(10)