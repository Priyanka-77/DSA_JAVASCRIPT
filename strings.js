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

