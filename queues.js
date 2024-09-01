/*
Implementation of the Queue: FIFO
*/
class Queue {
  constructor() {
    this.items = [];
  }

  pushElement(ele) {
    this.items.push(ele);
  }

  popElement() {
    this.items.shift();
  }

  peekElement() {
    return this.items[0];
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
stack.pushElement(10);
stack.pushElement(20);
stack.pushElement(30);
stack.pushElement(40);
stack.print();
stack.popElement();
stack.print();
console.log(stack.isEmpty());
stack.peekElement();
console.log(stack.size());
stack.clear();
stack.print();
