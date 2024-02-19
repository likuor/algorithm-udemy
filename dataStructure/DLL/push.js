// DLL push - Exercise
// Implement the following on the DoublyLinkedList class

// push

// This function should accept a value add a node to the end of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
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
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.prev; // null
doublyLinkedList.push(10);
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val; // 10
// doublyLinkedList.push(15);
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 15
// doublyLinkedList.tail.prev.val; // 10
// doublyLinkedList.head.next.next.val; // 15

console.log('=========', doublyLinkedList);
