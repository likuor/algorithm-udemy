class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    const travase = (node) => {
      data.push(node.val);
      if (node.left) travase(node.left);
      if (node.right) travase(node.right);
    };
    travase(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    const travase = (node) => {
      if (node.left) travase(node.left);
      if (node.right) travase(node.right);
      data.push(node.val);
    };
    travase(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    const travase = (node) => {
      node.left && travase(node.left);
      data.push(node.val);
      node.right && travase(node.right);
    };
    travase(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);
// tree.insert(3);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());
// console.log('tree', tree.contains(10));
// console.log('tree', tree.contains(16));
// console.log(tree.root);
