// DLL set - Exercise
// Implement the following on the DoublyLinkedList.prototype

// set

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it.)

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

  get(index) {
    if (index < 0 || this.length <= index) return null;
    let count, current;

    if (this.length / 2 >= index) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    console.log('------foundNode-------', foundNode);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5);
doublyLinkedList.push(10);
doublyLinkedList.push(15);
doublyLinkedList.push(20);
doublyLinkedList.set(0, 10); // true
// doublyLinkedList.length; // 4
// doublyLinkedList.head.val // 10

// doublyLinkedList.set(10,10) // false

// doublyLinkedList.set(2,100) // true
// doublyLinkedList.head.next.next.val; // 100

console.log('=========', doublyLinkedList);
