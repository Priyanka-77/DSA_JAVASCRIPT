/*
Implementation of Linked List
*/

class Node {
  constructor(head, next = null) {
    this.data = head;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //linkedList is empty, if head is not present
    this.size = 0;
  }

  //Insert at first index
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
    //this.head as in argument if element is aready present at index 0, then it would push it to the next node else default it is null.
  }

  //Insert at last index
  insertLast(data) {
    let node = new Node(data);
    let current;

    //If linkedList empty, then make it head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Insert at any index
  insertAtIndex(data, index) {
    //index is out of range
    if (index < 0 || index > this.size) {
      return;
    }
    //If index is 0
    if (index === 0) {
      this.head = new Node(data);
      this.size++;
      return;
    }

    let node = new Node(data);
    let current, previous;

    //Initialize current to the head
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  //Get at any index
  getIndexData(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at any index
  removeAtIndex(index) {
    //index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    //Remove at 0 index
    if (index === 0) {
      this.head = current.next;
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
/*200 is first and 100 is pushed to next. Ex: LinkedList {
  head: Node { head: 200, next: Node { head: 100, next: null } },
  size: 0
}*/
// console.log(ll);
ll.insertFirst(300);
ll.insertLast(90);
// ll.insertAtIndex(5, 0); //at first index case
// ll.insertAtIndex(5, 10); //out of range index case
ll.insertAtIndex(5, 2); //at index case
ll.printListData();
// ll.getIndexData(3);
ll.removeAtIndex(2);
console.log("------");
ll.printListData();
ll.clearList();
ll.printListData();