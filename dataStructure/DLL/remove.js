// DLL- remove Exercise
// Implement the following on the DoublyLinkedList class

// remove

// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

// reverse

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it)

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

  remove(index) {
    let foundNode = this.get(index);
    if (index > this.length) return undefined;
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;
    prevNode.next = foundNode.next;
    nextNode.prev = foundNode.prev;

    this.length--;
    return foundNode;
  }
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
// doublyLinkedList.remove(2); // 15
doublyLinkedList.remove(100); // undefined
// doublyLinkedList.length // 3
// doublyLinkedList.head.val // 5
// doublyLinkedList.head.next.val // 10
// doublyLinkedList.head.next.next.val // 20

console.log('=========', doublyLinkedList);
