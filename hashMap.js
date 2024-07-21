/* Check Equal Arrays
Question: Given two arrays arr1 and arr2 of equal size, the task is to find whether the given arrays are equal. Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.
Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.
 */
function check(arr1, arr2) {
  arr1.sort(function (a, b) {
    return a - b;
  });
  arr2.sort(function (a, b) {
    return a - b;
  });

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] !== arr2[j]) {
      return false;
    }
    i++;
    j++;
  }
  return true;
}
console.log(check([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));


/* Print Non-Repeated Elements
Hashing is very useful to keep track of the frequency of the elements in a list.
Question: You are given an array of integers. You need to print the non-repeated elements as they appear in the array. 
*/
function printNonRepeated(arr, n) {
  let uniqueElements = new Set();
  let obj = {};
  for (let i = 0; i < n; i++) {
    let ele = arr[i];
    if (!obj[ele]) {
      obj[ele] = 1;
      uniqueElements.add(ele);
    } else {
      obj[ele] = obj[ele] + 1;
      uniqueElements.delete(ele);
    }
  }
  return Array.from(uniqueElements);
}
console.log(printNonRepeated([1, 1, 2, 2, 3, 3, 4, 5, 6, 7], 10));