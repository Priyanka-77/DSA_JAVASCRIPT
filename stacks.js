/*
Implementation of the stack: LIFO
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

  clear() {
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

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  peek() {
    return this.head.data;
  }

  isEmpty() {
    return this._size === 0 ? true : false;
  }

  push(x) {
    const node = new Node(x);
    node.next = this.head;
    this.head = node;
    this._size++;
    return node;
  }

  pop() {
    if (this.head === null) return null;
    let res = this.head.data;
    this.head = this.head.next;
    this._size--;
    return res;
  }

  print() {
    let curr = this.head;
    if (!curr) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack elements:");
    while (curr !== null) {
      // Corrected loop condition
      console.log(curr.data + " ");
      curr = curr.next;
    }
  }
}

const stackLL = new StackLL();
console.log(stackLL.isEmpty());
stackLL.push(10);
stackLL.push(20);
stackLL.push(30);
console.log(stackLL.size());
stackLL.print();
console.log(stackLL.pop());
console.log(stackLL.peek());

function isMatching(a, b) {
  return (
    (a === "[" && b === "]") ||
    (a === "(" && b === ")") ||
    (a === "{" && b === "}")
  );
}
/*Parenthesis Checker
Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression. Time Complexity: O(N), Iteration over the string of size N one time, Auxiliary Space: O(N) for stack. 
*/

function isBalanced(str) {
  let st = []; //stack
  for (let i = 0; i < str?.length; i++) {
    let x = str[i];
    if (["(", "[", "{"].includes(x)) {
      st.push(x);
    } else {
      if (st.length === 0) {
        return false;
      } else if (!isMatching(st[st.length - 1], x)) {
        return false;
      } else {
        st.pop();
      }
    }
  }
  return st.length === 0;
}
console.log(isBalanced("(()))"), "isBalanced");

/*
Delete Mid of a Stack
Given a stack s, delete the middle element of the stack without using any additional data structure.
Middle element:- floor((size_of_stack+1)/2) (1-based indexing) from the bottom of the stack.
Time Complexity: O(N), For the while loop, Auxiliary Space: O(N), for temp stack space.
*/
function deleteMid(s) {
  let temp = [];
  const mid = s.length / 2 - 1;
  let count = 0;
  while (count < mid) {
    const x = s[0];
    s.shift();
    temp.unshift(x);
    count++;
  }
  s.shift();
  while (temp?.length !== 0) {
    s.unshift(temp[0]);
    temp.shift();
  }
  return s;
}
console.log(deleteMid([10, 20, 30, 40, 50]));

/*
Removing consecutive duplicates
You are given string s. You need to remove the consecutive duplicates from the given string using a Stack.  
Time Complexity: O(N), Auxiliary Space: O(N) for stack. 
*/
function removeConsecutiveDuplicates(s) {
  let st = [];
  for (let i = 0; i < s?.length; i++) {
    const x = s[i];
    if (st[st.length - 1] !== x) {
      st.push(x);
    }
  }
  return st.join("");
}
console.log(removeConsecutiveDuplicates("aaaaaabaabccccccc"));

/*
Removing consecutive duplicates - 2
You are given string s. You need to remove the pair of duplicates.
Note: The pair should be of adjacent elements and after removing a pair the remaining string is joined together. 
Input: s = "aaabbaaccd"
Output: ad
Explanation: 
Remove (aa)abbaaccd =>abbaaccd
Remove a(bb)aaccd => aaaccd
Remove (aa)accd => accd
Remove a(cc)d => ad
Time Complexity: O(N), Auxiliary Space: O(N) for stack. 
*/
function removePair(s) {
  let st = [];
  for (let i = 0; i < s?.length; i++) {
    const x = s[i];
    if (st?.length > 0 && st[st.length - 1] === x) {
      st.pop();
    } else {
      st.push(x);
    }
  }
  return st.join("");
}
console.log(removePair("aaabbaaccd"));
