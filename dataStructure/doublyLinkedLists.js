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
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || this.length < index) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let target = this.get(index - 1);
    let temp = target.next;

    target.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || this.length <= index) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;

    this.length--;
    return removed;
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
console.log(list.unshift('Me'));
// list.pop();
// list.get(2);
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
