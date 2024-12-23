/*
Implementation of the stack: LIFO
*/
class Stack {
  constructor() {
    this.items = [];
  }

  pushElement(ele) {
    this.items.push(ele);
  }

  popElement() {
    this.items.pop();
  }

  peekElement() {
    return this.items[this.items?.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items.length = 0;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.pushElement(10);
stack.pushElement(20);
stack.pushElement(30);
stack.pushElement(40);
stack.print();
stack.popElement();
stack.print();
console.log(stack.isEmpty());
stack.peekElement();
stack.size();
stack.clear();
stack.print();

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  peek() {
    return this.head.data;
  }

  isEmpty() {
    return this._size === 0 ? true : false;
  }

  push(x) {
    const node = new Node(x);
    node.next = this.head;
    this.head = node;
    this._size++;
    return node;
  }

  pop() {
    if (this.head === null) return null;
    let res = this.head.data;
    this.head = this.head.next;
    this._size--;
    return res;
  }

  print() {
    let curr = this.head;
    if (!curr) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack elements:");
    while (curr !== null) {
      // Corrected loop condition
      console.log(curr.data + " ");
      curr = curr.next;
    }
  }
}

const stackLL = new StackLL();
console.log(stackLL.isEmpty());
stackLL.push(10);
stackLL.push(20);
stackLL.push(30);
console.log(stackLL.size());
stackLL.print();
console.log(stackLL.pop());
console.log(stackLL.peek());
