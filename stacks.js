/*
Implementation of the stack
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

  clear(){
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
