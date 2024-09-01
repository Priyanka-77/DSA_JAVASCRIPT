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

// let ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// /*200 is first and 100 is pushed to next. Ex: LinkedList {
//   head: Node { head: 200, next: Node { head: 100, next: null } },
//   size: 0
// }*/
// // console.log(ll);
// ll.insertFirst(300);
// ll.insertLast(90);
// // ll.insertAtIndex(5, 0); //at first index case
// // ll.insertAtIndex(5, 10); //out of range index case
// ll.insertAtIndex(5, 2); //at index case
// ll.printListData();
// // ll.getIndexData(3);
// ll.removeAtIndex(2);
// console.log("------");
// ll.printListData();
// ll.clearList();
// ll.printListData();

/*
Find middle node of a Linked List
Given the head node of the singly linked list, return a pointer pointing to the middle of the linked list.
If there are an odd number of elements, return the middle element if there are even elements return the one which is farther from the head node.
For example, let the linked list be 1->2->3->4->null
Since the number of elements in this linked list is 4 so we have 2 middle elements, i.e. 2 and 3, but we return 3 as it is farther from the head node, i.e. 1.
*/

class LinkedNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createLinkedList(arr) {
  let head = null;
  let tail = null;

  for (let val of arr) {
    const newNode = new LinkedNode(val);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode; //Connecting nodes: tail.next is used to link the current tail to the new node.
      tail = newNode; //Updating tail pointer: tail is updated to point to the new last node.
    }
  }
  return head;
}

function findMiddleNode(head) {
  // Initialize two pointers: slow and fast
  let slow = head;
  let fast = head;

  // Move fast pointer twice as fast as slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // When fast pointer reaches the end, slow pointer will be at the middle
  return slow;
}

// Example usage
// const arr = [1, 2, 3, 4, 5];
// const head = createLinkedList(arr);
// const middleNode = findMiddleNode(head);
// console.log(middleNode.val); // Output: 3

/*
Sort a Linked List
*/
class sortLinked {
  constructor(data, next = null) {
    this.data = data; // Data stored in the node
    this.next = next; // Pointer to the next node in the list
  }
}

// Function to sort a linked list using Brute Force approach
function sortLinkedList(head) {
  // Create an array to  store node values
  let arr = [];

  // Temporary pointer to traverse the linked list
  let current = head;

  while (current !== null) {
    // Traverse the linked list and store node values in the array
    arr.push(current.data);
    current = current.next;
  }

  arr.sort((a, b) => a - b); //// Sort the array containing node values

  // Reassign sorted values to the linked list nodes
  current = head;
  for (let i = 0; i < arr?.length; i++) {
    // Update the node's data with the sorted values
    current.data = arr[i];
    // Move to the next node
    current = current.next;
  }

  return head;
}

// Function to print the linked list
function printLinkedList() {
  let current = head;

  while (current) {
    // Print the data of the current node
    console.log(current.data + " ");
    // Move to the next node
    current = current.next;
  }
  console.log();
}
// Linked List: 3 2 5 4 1
// let head = new sortLinked(3);
// head.next = new sortLinked(2);
// head.next.next = new sortLinked(5);
// head.next.next.next = new sortLinked(4);
// head.next.next.next.next = new sortLinked(1);

// console.log("Original Linked List: ");
// printLinkedList(head);

// // Sort the linked list
// head = sortLinkedList(head);

// console.log("Sorted Linked List: ");
// printLinkedList(head);

/*
Reverse a linked list using recursion
Given pointer to the head node of a linked list, the task is to recursively reverse the linked list. We need to reverse the list by changing links between nodes. 
Input: Head: 1->2->3->4->NULL
Output: Reversed Linked list : 4->3->2->1->NULL
Input: Head: 1->2->3->4->5->NULL
Output: Reversed Linked list: 5->4->3->2->1->NULL
*/
class recursiveLinked {
  constructor(data, next = null) {
    this.data = data; // Data stored in the node
    this.next = next; // Pointer to the next node in the list
  }
}

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head; //Base case
  }

  const reversedTail = reverseLinkedList(head.next); // Recursively reverse the rest

  head.next.next = head; // Make the next node point back to the current head
  head.next = null;

  return reversedTail; // Return the reversed tail as the new head
}
// Create a sample linked list
const head = new recursiveLinked(1);
head.next = new recursiveLinked(2);
head.next.next = new recursiveLinked(3);
head.next.next.next = new recursiveLinked(4);
// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed list
let current = reversedHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
