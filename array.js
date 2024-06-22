//Given an array arr of size N, the task is to find the largest element in the given array.
function largestNum(arr) {
  let max = 0; //Initialize max with the first element
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > arr[max]) {
      max = i; //If the current element is greater than max, then replace the value of max with the current element.
    }
  }
  return max;
}
console.log(largestNum([90, 70, 66, 900])); //Time Complexity: O(n)

//Given an array of integers, our task is to write a program that efficiently finds the second largest element present in the array.
function secondLargestNum(arr) {
  let first = 0,
    second = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second === -1 || arr[second] < arr[i]) {
        second = i; //update second to store the value of current variable
      }
    }
  }
  return second;
}

let arr = [10, 12, 20, 4];
let index = secondLargestNum(arr); //Time Complexity: O(n), Auxiliary space: O(1)
if (index === -1) {
  console.log("Second Largest didn't exist");
} else {
  console.log("Second largest : " + arr[index]);
}

/*Given an array of size n, write a program to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted. 
Naive method*/
function naiveCheckSortedArr(arr) {
  for (let i = 0; i < arr?.length - 1; i++) {
    for (let j = i + 1; j < arr?.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(naiveCheckSortedArr([9, 89, 700, 9])); //Time Complexity: O(n^2)

//Efficient method
function checkSortedArr(arr) {
  for (let i = 1; i < arr?.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSortedArr([9, 89, 700, 9])); //Time Complexity: O(n), Auxiliary Space: O(1)

/*Given an array (or string), the task is to reverse the array/string.
Naive method */
function naiveReverseArr(arr) {
  let res = [];
  for (let i = arr?.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}
console.log(naiveReverseArr([7, 21, 90, 34, 66])); //Time Complexity: O(n) | Space Complexity: O(n)

//Efficient method
function reverseArr(arr) {
  let low = 0;
  let high = arr?.length - 1;
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  return arr;
}
console.log(reverseArr([90, 56, 34, 23, 78])); //Time Complexity: O(n) | Space Complexity: O(1)

//Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by one position.
function leftRotateArray(arr) {
  let len = arr?.length;
  let firstEle = arr[0];
  let res = [];
  for (let i = 1; i < len; i++) {
    arr[i - 1] = arr[i];
  }
  res[len - 1] = firstEle;
  return res;
}
console.log(leftRotateArray([90, 5, 3, 8, 5, 1]));

/*Given an array of n numbers. The problem is to move all the 0’s to the end of the array while maintaining the order of the other elements. Only single traversal of the array is required.
Naive method*/
function naiveMoveZeroToEnd(arr) {
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr?.length; j++) {
        if (arr[j] !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
  return arr;
}
console.log(naiveMoveZeroToEnd([0, 9, 0, 5, 4, 3])); //Time Complexity: O(n^2)

//Efficient solution
function moveZeroToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}
console.log(moveZeroToEnd([0, 9, 0, 5, 4, 3])); //Time Complexity: O(n), Auxiliary Space: O(1)

//Remove duplicates from an array
function removeDuplicates(arr) {
  let temp = [];
  let obj = {};

  for (let i = 0; i < arr?.length; i++) {
    let ele = arr[i];
    if (!obj[ele]) {
      temp.push(ele);
      obj[ele] = true;
    }
  }
  return temp;
}
console.log(removeDuplicates([9, 4, 6, 9, 9, 5, 6])); //Time Complexity : O(n), Auxiliary Space : O(1)

/*Ques: Given an array a[ ] of size N. The task is to find the median and mean of the array elements. Mean is average of the numbers and median is the element which is smaller than half of the elements and greater than remaining half.  If there are odd elements, the median is simply the middle element in the sorted array. If there are even elements, then the median is floor of average of two middle numbers in the sorted array. If mean is floating point number, then we need to print floor of it.*/
class Solution {
  median(A, N) {
    A.sort(function (a, b) {
      return a - b;
    });
    //If median is fraction then convert it to integer and return
    if (N % 2 !== 0) {
      const med = Math.floor(N / 2);
      return A[med];
    } else {
      const med = Math.floor(N / 2) - 1;
      return A[med];
    }
  }
  //Function to find mean of the array elements.
  mean(A, N) {
    //your code here
    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += A[i];
    }
    return Math.floor(sum / N);
  }
}

/*Ques: Given an array arr[] of size N of positive integers which may have duplicates. The task is to find the maximum and second maximum from the array, and both of them should be different from each other, so If no second max exists, then the second max will be -1.*/
class Solution {
  largestAndSecondLargest(sizeOfArray, arr) {
    let first = -1;
    let second = -1;
    for (let i = 0; i < sizeOfArray; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] != first) {
        second = arr[i];
      }
    }
    return [first, second];
  }
}

//Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.
function reverseInGroups(arr, n, k) {
  for (let i = 0; i < n; i += k) {
    let left = i;

    // To handle case when k is not
    // multiple of n
    let right = Math.min(i + k - 1, n - 1);
    let temp;

    // Reverse the sub-array [left, right]
    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  return arr;
}
