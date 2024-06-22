/*Linear Search Algorithm is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.*/
function linearSearch(arr, target) {
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([9, 4, 22, 67, 11], 7)); //Time Complexity: O(n), Auxiliary Space: O(1)

/*Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
Pre-requisite: The array needs to be sorted*/
function binarySearch(arr, target) {
  let low = 0;
  let high = arr?.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([9, 12, 33, 46, 88], 90)); //Time Complexity: O(log n), Auxiliary Space: O(1)

//Recursive
function recursiveBinarySearch(arr, target, low, high) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    high = mid - 1;
    return recursiveBinarySearch(arr, target, low, high);
  } else {
    low = mid + 1;
    return recursiveBinarySearch(arr, target, low, high);
  }
}
console.log(recursiveBinarySearch([9, 12, 33, 46, 88], 33, 0, 4)); //Time Complexity: O(log n), Auxiliary Space: O(log n)

function searchFirstOccurence(arr, target) {
  let low = 0;
  let high = arr?.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      //check if the element is first or the previous element is not same as current element
      if (arr[mid - 1] !== target || mid === 0) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
// console.log(searchFirstOccurence([9, 12, 12, 12, 33, 46, 46, 88], 34)); //Time Complexity: O(log n), Auxiliary Space: O(1)

function searchLastOccurence(arr, target) {
  let n = arr?.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      if (arr[mid + 1] !== target || mid === n - 1) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
// console.log(searchLastOccurence([9, 12, 12, 12, 33, 46, 46, 88], 46)); //Time Complexity: O(log n), Auxiliary Space: O(1)

//COUNT OCCURRENCES IN SORTED ARRAY: NAIVE SOLUTION
//Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]
function naiveCountOcc(arr, target) {
  let count = 0;
  let n = arr?.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
// console.log(naiveCountOcc([10, 20, 20, 20, 35, 47, 89], 20));         //Time Complexity: O(n), Space Complexity: O(1)

function countOccurrences(arr, target) {
  const firstOcc = searchFirstOccurence(arr, target);
  if (firstOcc === -1) return 0;

  return searchLastOccurence(arr, target) + firstOcc - 1;
}
console.log(countOccurrences([10, 20, 20, 20, 35, 47, 89], 20)); //Time Complexity: O(log n), Space Complexity: O(1)
