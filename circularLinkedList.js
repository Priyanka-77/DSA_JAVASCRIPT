class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}
let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = head;

//Method 1: Print the circular linked list. (Time Complexity: O(n), Auxiliary Space: O(1))
function printCll(head) {
  if (head === null) return null;
  console.log(head.data);
  for (let curr = head.next; curr !== head; curr = curr.next) {
    console.log(curr.data);
  }
}

//Method 2: Print the circular linked list. (Time Complexity: O(n), Auxiliary Space: O(1))
function printCll2(head) {
  if (head === null) return null;
  let curr = head;
  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr !== head);
}
printCll2(head);
console.log("----------------");

//Method 1: Insert at begin. (Time Complexity: O(n), Auxiliary Space: O(1))
function insertAtBegin1(head, x) {
  let node = new Node(x);
  if (head === null) {
    node.next = node;
    return node;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = node;
  node.next = head;
  return node;
}
// let insert1 = insertAtBegin1(head, 100);
// printCll2(insert1);

//Method 2: Insert at begin. (Time Complexity: O(1), Auxiliary Space: O(1))
function insertAtBegin2(head, x) {
  let node = new Node(x);
  if (head === null) {
    node.next = node;
    return node;
  }
  node.next = head.next;
  head.next = node;
  [head.data, head.next.data] = [head.next.data, head.data]; //swap the data
  return head;
}
// let insert2 = insertAtBegin2(head, 200);
// printCll2(insert2);

//Method 1: Insert at tail. (Time Complexity: O(n), Auxiliary Space: O(1))
function insertInTail(head, data) {
  let node = new Node(data);
  if (head === null) {
    node.next = node;
    return node;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = node;
  node.next = head;
  return head;
}
// let insertAtEnd = insertInTail(head, 200);
// printCll2(insertAtEnd);

//Method 2: Insert at tail. (Time Complexity: O(1), Auxiliary Space: O(1))
function insertInTail2(head, data) {
  let node = new Node(data);
  if (head === null) {
    node.next = node;
    return node;
  }
  node.next = head.next;
  head.next = node;
  [head.data, head.next.data] = [head.next.data, head.data];
  return node;
}
// let insertAtEnd = insertInTail2(head, 200);
// printCll2(insertAtEnd);

//function to check whether the given linked list is circular or not. (Time Complexity: O(n), Auxiliary Space: O(1))
function isCircular(head) {
  if (head === null) return null;
  let curr = head;
  do {
    if (curr.next === null) return false;
    curr = curr.next;
  } while (curr !== head);
  return true;
}
// console.log(isCircular(head));

//Given a circular linked list of size n, you need to find the length of the list (total number of nodes). The tail of the linked list is connected to head. (Time Complexity: O(n), Auxiliary Space: O(1))
function getLength(head) {
  //code here
  if (head === null) return 0;
  let curr = head;
  let count = 0;
  do {
    curr = curr.next;
    count++;
  } while (curr !== head);
  return count;
}
// console.log(getLength(head));

//Delete Tail of Circular Linked List. Given a circular linked list of size n, you have to delete the tail (last element) in the linked list. (Time Complexity: O(n), Auxiliary Space: O(1))
function deleteTail(head) {
  let curr = head;
  while (curr.next.next !== head) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}
// let deleteLast = deleteTail(head);
// printCll2(deleteLast);

// Deleting head node from Singly Circular Linked List
function deleteHead(head) {
  if (head === null) return null;
  if (head.next === head) {
    delete head;
    return null;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = head.next;
  delete head;
  return curr.next;
}
// let deleteFirst = deleteHead(head);
// printCll2(deleteFirst);

// Deleting head node from Singly Circular Linked List
function deleteHead2(head) {
  if (head === null) return null;
  if (head.next === head) {
    delete head;
    return null;
  }
  head.data = head.next.data;
  let temp = head.next;
  head.next = head.next.next;
  delete temp;
  return head;
}

// Circular Linked List Delete at Position (Time Complexity: O(n), Auxiliary Space: O(1))
function deleteAtPosition(head, pos) {
  if (head === null) return null;
  if (pos === 1) return deleteHead2(head);
  let curr = head;
  for (let i = 0; i < pos - 2; i++) {
    curr = curr.next;
    if (curr.next === head) {
      return head;
    }
  }
  let temp = curr.next;
  curr.next = curr.next.next;
  return head;
}
// let delPos = deleteAtPosition(head, 1);
// printCll2(delPos);

//Circular Linked List Insertion At Position (Time Complexity: O(n), Auxiliary Space: O(1))
function insertAtPosition(head, pos, data) {
  let node = new Node(data);
  if (head === null) {
    if (pos !== 1) {
      return head;
    }
    head = node;
    head.next = node;
    return head;
  }

  let curr = head;
  for (let i = 0; i < pos - 1; i++) {
    curr = curr.next;
    if (curr === head) {
      return head;
    }
  }

  node.next = curr.next;
  curr.next = node;
  return head;
}
let insertPos = insertAtPosition(head, 4, 15);
printCll2(insertPos);
