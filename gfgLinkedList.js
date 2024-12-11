class Node {
  constructor(head, next = null) {
    this.data = head;
    this.next = next;
  }
}

let head = new Node(10);
head.next = new Node(10);
head.next.next = new Node(20);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(30);

// Function to print the linked list (Time Complexity: θ(n), Space Complexity: θ(1))
function printLinkedList(head) {
  let current = head;

  while (current !== null) {
    console.log(current?.data + " ");
    current = current.next;
  }
}
// printLinkedList(head);

// Function to print the linked list recursively (Time Complexity: θ(n), Space Complexity: θ(n))
function printLinkedListRecursive(head) {
  let current = head;

  if (current === null) {
    return;
  }
  console.log("recur", current?.data);
  printLinkedListRecursive(current.next);
}
// printLinkedListRecursive(head);

/*Count Linked List Nodes
Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.
*/
// Function to count nodes of a linked list.
function getCount(head) {
  let currentNode = head;
  // Code here
  let count = 0;
  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }
  return count;
}
// console.log(getCount(head));

//Insert at end in a linked list (Time Complexity: θ(n), Space Complexity: θ(1))
function insertAtEnd(head, x) {
  let ele = new Node(x); //create new node

  if (head === null) return ele;

  let current = head;
  //This loops hold the last node value
  while (current?.next !== null) {
    current = current?.next;
  }
  current.next = ele; //linking the last node and the new node.
  return head;
}
// console.log(insertAtEnd(head, 40));
// printLinkedList(head);

//Insert at begin in a linked list
function insertAtBegin(head, x) {
  let temp = new Node(x); //create new node
  temp.next = head;
  return temp;
}
// let newHead = null;
// newHead = insertAtBegin(newHead, 100);
// newHead = insertAtBegin(newHead, 200);
// printLinkedList(newHead);

//Delete at begin in a linked list (Time Complexity: O(1), Space Complexity: O(1))
function deleteFirst(head) {
  if (head === null) return head;
  return head.next;
}
// head = deleteFirst(head);
// printLinkedList(head);

//Insert at a given position in a linked list (Time Complexity: θ(n), Space Complexity: O(1))
function insertAtGivenPosition(head, pos, data) {
  let temp = new Node(data); //create new node
  if (pos === 1) {
    temp.next = head;
    return temp;
  }

  let curr = head;
  for (let i = 1; i <= pos - 2 && curr !== null; i++) {
    curr = curr.next;
  }
  if (curr === null) return head;
  temp.next = curr.next;
  curr.next = temp;
  return head;
}
// head = insertAtGivenPosition(head, 2, 15);
// printLinkedList(head);

//Search a given data in a linked list (Time Complexity: O(n), Space Complexity: O(1))
function searchLinkedList(head, x) {
  let i = 1;
  let curr = head;
  while (curr) {
    if (curr?.data === x) {
      return i;
    }
    i++;
    curr = curr.next;
  }
  return -1;
}
// console.log(searchLinkedList(head, 20));

//Search a given data in a linked list recursively (Time Complexity: O(n), Space Complexity: O(n))
function searchLinkedListRecursive(head, x) {
  if (head === null) {
    return -1;
  }
  if (head?.data === x) {
    return 1;
  }

  let pos = searchLinkedListRecursive(head.next, x);
  if (pos === -1) {
    return -1;
  }
  return pos + 1;
}
// console.log(searchLinkedListRecursive(head, 20));

//Insert in a sorted linked list (Time Complexity: O(n), Space Complexity: O(1))
function insertInSortedLinkedList(head, x) {
  let temp = new Node(x); //create new node
  if (x < head?.data) {
    temp.next = head;
    return temp;
  }

  let curr = head;
  while (curr?.next !== null && curr?.next?.data <= x) {
    curr = curr?.next;
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}
// head = insertInSortedLinkedList(head, 17);
// printLinkedList(head);

//Given a linked list, the task is to remove the last node of the linked list and update the head pointer of the linked list.(Time Complexity: O(n), Space Complexity: O(1))
function deleteLastNode(head) {
  if (head === null) return null;
  if (head.next === null) {
    head = null;
    return head;
  }
  let curr = head;
  while (curr.next.next !== null) {
    curr = curr.next;
  }
  curr.next = null;
  return head;
}
// printLinkedList(head);
// deleteLastNode(head);
// console.log("---------------------");
// printLinkedList(head);

//Middle of the linked list (Time Complexity: O(n), Space Complexity: O(1))
function findMid(head) {
  if (head === null) return;
  let count = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    count++;
  }

  let current = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    current = current?.next;
  }
  console.log(current.data);
}
findMid(head);

//Optimize: Middle of the linked list (Time Complexity: O(n), Space Complexity: O(1))
function optimizeFindMid(head) {
  if (head === null) return;

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.data);
}
optimizeFindMid(head);

//Given a Linked List and a number N, write a function that returns the value at the Nth node from the end of the Linked List.
// Time Complexity: O(M) where M is the length of the linked list.
// Auxiliary Space: O(1)
function printNthNode(head, n) {
  let len = 0;
  for (let curr = head; curr !== null; curr = curr.next) {
    len++;
  }

  if (len < n) return;

  let curr = head;
  for (let i = 1; i < len - n + 1; i++) {
    curr = curr.next;
  }
  console.log(curr.data);
}
printNthNode(head, 3);

function optimizePrintNthNode(head, n) {
  if (head === null) return;
  let first = head;
  for (let i = 0; i < n; i++) {
    if (first === null) return;
    first = first.next;
  }

  let second = head;
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  console.log(second.data);
}
optimizePrintNthNode(head, 3);

//Reverse a linked list (Time Complexity: θ(n), Space Complexity: θ(n))
function reverseList(head) {
  let arr = [];
  for (let curr = head; curr !== null; curr = curr.next) {
    arr.push(curr.data);
  }
  for (let curr = head; curr != null; curr = curr.next) {
    curr.data = arr.pop();
  }
  return head;
}
// printLinkedList(head);
// console.log("------------------------");
// head = reverseList(head);
// printLinkedList(head);

//Optimize Reverse a linked list (Time Complexity: θ(n), Space Complexity: θ(1))
function optimizeReverseList(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
head = optimizeReverseList(head);
// printLinkedList(head);

//Reverse a linked list recursively (Time Complexity: θ(n), Space Complexity: θ(n))
function reverseListRecur1(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let restHead = reverseListRecur1(head.next);
  let restTail = head.next;
  restTail.next = head;
  head.next = null;
  return restHead;
}
// head = reverseListRecur1(head);
// printLinkedList(head);

//Reverse a linked list recursively (Time Complexity: θ(n), Space Complexity: θ(n))
function reverseListRecur2(curr, prev = null) {
  if (curr === null) {
    return prev;
  }
  let next = curr.next;
  curr.next = prev;
  return reverseListRecur2(next, curr);
}
console.log("-----------------------");
head = reverseListRecur2(head, null);
printLinkedList(head);

//Remove duplicates from linked list (Time Complexity: θ(n), Space Complexity: θ(1))
function removeDuplicates(head) {
  let curr = head;
  while (curr !== null && curr.head !== null) {
    if (curr?.data === curr?.next?.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
console.log("-----------------------");
head = removeDuplicates(head);
printLinkedList(head);

/*
Delete without head pointer
You are given a node del_node of a Singly Linked List where you have to delete a value of the given node from the linked list but you are not given the head of the list.
Expected Time Complexity: O(1).
Expected Auxilliary Space: O(1).
*/
function deleteNode(node) {
  // your code here
  if (node === null) {
    return null;
  } else if (node.next === null) {
    return node;
  }

  node.data = node.next.data;
  node.next = node.next.next;
  return node;
}
head = deleteNode(head.next);
printLinkedList(head);

/*
Identical Linked Lists
Given the two singly Linked Lists respectively. The task is to check whether two linked lists are identical or not. 
Expected Time Complexity: O(n).
Expected Auxilliary Space: O(1).
*/
function areIdentical(head1, head2) {
  // your code here
  while (head1 !== null && head2 !== null) {
    if (head1?.data !== head2.data) {
      return false;
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  return true;
}
head = console.log(areIdentical(head, head));

/*
Find length of Loop
Given the head of a linked list, determine whether the list contains a loop. If a loop is present, return the number of nodes in the loop, otherwise return 0.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/
function countNodesinLoop(head) {
  // your code here
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return this.countInNodes(slow);
    }
  }
  return 0;
}
function countInNodes(node) {
  let count = 1;
  let current = node;
  while (current.next !== node) {
    count++;
    current = current.next;
  }
  return count;
}
