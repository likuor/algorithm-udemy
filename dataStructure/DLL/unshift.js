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
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.val = val;
    } else {
      this.val = val;
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      temp.prev = newNode;
    }
    this.length++;
    return this;
  }
}
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.unshift(10); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5

console.log('=========', doublyLinkedList);
