class Deque {
  constructor() {
    this.deque = [];
  }

  addFront(x) {
    this.deque.unshift(x);
  }

  addRear(x) {
    this.deque.push(x);
  }
  removeFront() {
    if (!this.isEmpty()) {
      return this.deque.shift();
    }
    return null;
  }
  removeRear() {
    if (!this.isEmpty()) {
      return this.deque.pop();
    }
    return null;
  }

  isEmpty() {
    return this.deque.length === 0;
  }

  size() {
    return this.deque.length;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.deque[0];
    }
    return null;
  }

  getRear() {
    if (!this.isEmpty()) {
      return this.deque[this.deque.length - 1];
    }
    return null;
  }

  print() {
    console.log(this.deque.join(",").toString());
  }
}
let deque = new Deque();
console.log(deque.isEmpty());
deque.addFront(10);
deque.addFront(20);
deque.addRear(30);
deque.addRear(40);
deque.print();
console.log(deque.size());
console.log(deque.isEmpty());
console.log(deque.getRear(), "getRear");
console.log(deque.getFront(), "getFront");
console.log(deque.removeFront(), "removeFront");
console.log(deque.removeRear(), "removeRear");
console.log(deque.size());
