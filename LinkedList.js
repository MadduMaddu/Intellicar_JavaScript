class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    insertAtPosition(value, position) {
        if (position === 0) {
            this.insertAtBeginning(value);
            return;
        }
        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < position - 1 && current != null; i++) {
            current = current.next;
        }
        if (!current) return;
        newNode.next = current.next;
        current.next = newNode;
    }
    deleteFromBeginning() {
        if (!this.head) return;
        this.head = this.head.next;
    }
    deleteFromEnd() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    deleteFromPosition(position) {
        if (position === 0) {
            this.deleteFromBeginning();
            return;
        }
        let current = this.head;
        for (let i = 0; i < position - 1 && current != null; i++) {
            current = current.next;
        }
        if (!current || !current.next) return;
        current.next = current.next.next;
    }
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const list = new SinglyLinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.traverse(); // Output: 1 2 3
list.deleteFromEnd();
list.traverse(); // Output: 1 2
