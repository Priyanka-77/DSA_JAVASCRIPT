// Given a number N, the task is to print the numbers from N to 1.
function recursiveFunc1(n) {
  if (n <= 0) return;
  console.log(n);
  recursiveFunc1(n - 1);
}
recursiveFunc1(5); //Time Complexity : O(n), Auxiliary Space : O(1)

// Given a number N, the task is to print the numbers from 1 to N.
function recursiveFunc2(n) {
  if (n <= 0) return;
  recursiveFunc2(n - 1);
  console.log(n);
}
recursiveFunc2(5); //Time Complexity : O(n), Auxiliary Space : O(1)

//Given a string, write a recursive function that checks if the given string is a palindrome, else, not a palindrome.
function checkPalindromeRecursive(str, start, end) {
  if (start >= end) return true;
  return (
    str[start] == str[end] && checkPalindromeRecursive(str, start + 1, end - 1)
  );
}
console.log(checkPalindromeRecursive("abba", 0, 3));

//Given a number, we need to find sum of its digits using recursion.
function sumOfDigRecursive(n) {
  if (n === 0) return 0;
  let ld = n % 10;
  n = Math.floor(n / 10);
  return sumOfDigRecursive(n) + ld;
}
console.log(sumOfDigRecursive(253)); // Output will be 10
//Time complexity: O(logn) where n is the given number, Auxiliary space: O(logn) due to recursive stack space.
