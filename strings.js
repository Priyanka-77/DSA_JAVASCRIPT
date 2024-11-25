/*
Check Palindrome
*/
function checkPalindrome(str) {
  const len = str?.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("toyota"));

/*
Find out the length of largest left and right substrings in a number whose sum is equal
*/
function findLargestEqualSumSubstrings(numStr) {
  let maxLength = 0;
  const n = numStr.length;

  // Traverse through all possible lengths of substrings
  for (let len = 1; len <= n / 2; len++) {
    let leftSum = 0;
    let rightSum = 0;

    // Calculate sum of the first 'len' digits (left substring)
    for (let i = 0; i < len; i++) {
      leftSum += parseInt(numStr[i]);
    }

    // Calculate sum of the last 'len' digits (right substring)
    for (let i = n - len; i < n; i++) {
      rightSum += parseInt(numStr[i]);
    }

    // Compare sums of left and right substrings
    if (leftSum === rightSum) {
      maxLength = len;
    }
  }

  return maxLength;
}

// Example Usage
const number = "1231234";
const maxLength = findLargestEqualSumSubstrings(number);
console.log(`The length of the largest equal sum substrings is: ${maxLength}`); // Output: 3
