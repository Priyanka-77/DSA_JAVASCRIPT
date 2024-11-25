class Node {
  constructor(head, next = null) {
    this.data = head;
    this.next = next;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

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
console.log(searchLinkedList(head, 20));

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
console.log(searchLinkedListRecursive(head, 20));

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
head = insertInSortedLinkedList(head, 17);
printLinkedList(head);
