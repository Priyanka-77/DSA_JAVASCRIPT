/*
Implementation of the Queue: FIFO
*/
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(ele) {
    this.items.push(ele);
  }

  dequeue() {
    this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
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
const stack = new Queue();
stack.enqueue(10);
stack.enqueue(20);
stack.enqueue(30);
stack.enqueue(40);
stack.print();
stack.dequeue();
stack.print();
console.log(stack.isEmpty());
stack.front();
console.log(stack.size());
stack.clear();
stack.print();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLL {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueueLL(x) {
    let newNode = new Node(x);
    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeueLL() {
    if (this.front === null) return null;
    let res = this.front.data;
    this.front = this.front.next;
    this.size--;
    return res;
  }

  isEmptyLL() {
    return this.size === 0;
  }

  sizeLL() {
    return this.size;
  }
}
console.log(`----------Linked list implemenatation of Queue---------------`);
const stackLL = new QueueLL();
stackLL.enqueueLL(10);
stackLL.enqueueLL(20);
stackLL.enqueueLL(30);
stackLL.enqueueLL(40);
stackLL.dequeueLL();
console.log(stackLL.isEmptyLL());
console.log(stackLL.sizeLL());
stackLL.printLL();
