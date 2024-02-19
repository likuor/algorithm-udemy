class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.val = newNode;
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      this.tail = newNode;
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    let removeNode = this.head;
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.head = removeNode.next;
      removeNode.next.prev = null;
      removeNode.next = null;
    }

    this.length--;
    return removeNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
}
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('HI'); // 15
doublyLinkedList.push('TETS'); // 15
doublyLinkedList.shift(); // 15
// doublyLinkedList.length; // 2
// doublyLinkedList.shift().val; // 10
// doublyLinkedList.length; // 1
// doublyLinkedList.shift().val; // 5
// doublyLinkedList.length; // 0
// doublyLinkedList.length; // 0

console.log('=========', doublyLinkedList);
