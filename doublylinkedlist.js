class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}
let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);
head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

function printDll(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}
printDll(head);

/*
Insert at the begin.
Time Complexity: O(1)
Auxiliary Space: O(1)
*/
function insertAtBegin(head, x) {
  let node = new Node(x);
  if (head === null) {
    return node;
  }

  node.next = head;
  head.prev = node;
  return node;
}
// let insertAtFirst = insertAtBegin(head, 5);
// printDll(insertAtFirst);

/*
Insert at the last
Time Complexity: O(n)
Auxiliary Space: O(1)
*/
function insertAtEnd(head, x) {
  let node = new Node(x);
  if (head === null) {
    return node;
  }
  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = node;
  node.prev = curr;
  return head;
}
// let insertAtLast = insertAtEnd(head, 100);
// printDll(insertAtLast);

/*
Reverse the linked list.
Time Complexity: O(n)
Auxiliary Space: O(1)
*/
function reverseList(head) {
  if (head === null) return null;
  let curr = head;
  let prev = null;
  while (curr) {
    prev = curr;
    [curr.prev, curr.next] = [curr.next, curr.prev];
    curr = curr.prev;
  }
  return prev;
}
// let reverse = reverseList(head);
// printDll(reverse);

/*
Delete last node pf the linked list
Time Complexity: O(n)
Auxiliary Space: O(1)
*/
function deleteLastNode(head) {
  if (head === null || head.next) return null;

  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.prev.next = null;
  return head;
}
// let deleteLast = deleteLastNode(head);
// printDll(deleteLast);

/*
Delete first node of the linked list.
Time Complexity: O(1)
Auxiliary Space: O(1)
*/
function deleteFirstNode(head) {
  if (head === null) return null;
  if (head.next === null) {
    delete head;
    return null;
  }
  let temp = head;
  head = head.next;
  head.prev = null;
  delete temp;
  return head;
}
// let deleteFirst = deleteFirstNode(head);
// printDll(deleteFirst);

/* 
Insert node at given position.
Time Complexity: O(n)
Auxiliary Space: O(1)
*/
function insertNodeAtGivenPosition(head, p, x) {
  // your code here
  if (head === null) return null;
  let node = new Node(x);
  let count = 0;
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
    count++;
    if (count === p) {
      break;
    }
  }
  node.prev = curr;
  node.next = curr.next;
  curr.next = node;
  return head;
}
console.log("--------------------------------");
let insert = insertNodeAtGivenPosition(head, 2, 60);
printDll(insert);
