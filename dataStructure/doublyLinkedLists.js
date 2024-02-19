class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return poppedTail;
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

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
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
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // FIXME rebuild by yourself
  insert(index, val) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let gotNode = this.get(index - 1);
    let temp = gotNode.next;

    gotNode.next = newNode;
    newNode.prev = gotNode;
    newNode.next = temp;
    temp.prev = newNode;

    this.length++;
    return true;
  }

  // FIXME rebuild by yourself
  remove(index) {
    if (index < 0 || this.length <= index) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  // FIXME rebuild by yourself
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new DublyLinkedLists();
list.push('Hi');
list.push('test');
list.push('You');
// list.push('300');
// list.push('400');
// list.push('500');
// list.push('600');
// list.pop();
// list.get(2);
list.remove(1);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log('============', list.reverse());
console.log('============', list);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
