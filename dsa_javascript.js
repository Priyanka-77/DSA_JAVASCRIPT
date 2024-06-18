/*
//Given a number N, the task is to return the count of digits in this number.
function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // 909/10 = 90.9, math.floor = 90
    count++;
  }
  return count;
}
console.log(countDigits(909)); //Time Complexity : O(log10(n)) or θ(num digits)

//Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome.
function isPalindrome(n) {
  if (n < 0) return false;
  let rev = 0;
  let temp = n;

  while (temp !== 0) {
    let ld = temp % 10; //store last digit
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10); //remove last digit
  }
  return n === rev;
}
console.log(isPalindrome(899)); //Time Complexity : O(log(n)) or O(Number of digits in a given number)

//factorial of a number
function factNum(n) {
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factNum(4));

//recursion: factorial of a number
function recursiveFactNum(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactNum(n - 1); //fact formula: n * (n-1)
}
console.log(recursiveFactNum(4)); //Time Complexity: O(n)

//Given an integer n, write a function that returns count of trailing zeroes in n!.
function findTrailingZero(n) {
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }

  let res = 0;
  while (fact % 10 === 0) {
    //check if last digit is zero
    res++;
    fact = fact / 10; //remove last digit
  }
  return res;
}
console.log(findTrailingZero(10)); //Time Complexity: O(n)
//this is not the efficient solution: method can cause overflow for slightly bigger numbers as the factorial of a number is a big number

function optimizeTrailingZeros(n) {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n / i); //251/5 = 50,......
  }
  return res;
}
console.log(optimizeTrailingZeros(251)); //Time Complexity: O(log5n) || θ(log n)

//GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them.
function greatestCommonDiv(a, b) {
  let div = 2;
  let commonDiv = 1;

  while (a >= div && b >= div) {
    if (a % div === 0 && b % div === 0) {
      commonDiv = div;
    }
    div++;
  }
  return commonDiv;
}
console.log(greatestCommonDiv(100, 200));

function greatestCD2(a, b) {
  let res = Math.min(a, b); //the GCD will be <= a,b

  while (res > 0) {
    if (a % res === 0 && b % res === 0) {
      return res;
    }
    res--;
  }
  return res;
}
console.log(greatestCD2(4, 8));          //Time Complexity: O(log(min(a,b))|

//recursive implementtaion: Euclidean Theorem
function greatestCD3(a, b) {
  if (b === 0) return a;
  return greatestCD3(b, a % b);
}
console.log(greatestCD3(100, 200));

//iterative implementation
function greatestCD4(a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
}
console.log(greatestCD4(100, 200));


//LCM
function calculateLcm(a, b) {
  let res = Math.max(a, b);

  while (true) {
    if (res % a === 0 && res % b === 0) {
      return res;
    }
    res++;
  }
}
console.log(calculateLcm(15, 20));

//Prime Number
function checkPrimeNumber(n) {
  if (n < 2) return false;
  let div = 2;

  while (n > div) {
    if (n % div === 0) {
      return false;
    }
    div++;
  }
  return true;
}
console.log(checkPrimeNumber(11)); //Time-Complexity = O(n)

//Prime Factors
function primeFactors(n) {
  let factors = [];
  let div = 2;
  if (n < 2) return 1;
  while (n >= div) {
    if (n % div === 0) {
      factors.push(div);
      n = n / div;
    } else {
      div++;
    }
  }
  return factors;
}
console.log(primeFactors(69)); //Time Complexity: O(sqrt(n))

function primeFactors(n) {
  let factors = [];

  // Handle edge cases
  if (n < 2) return factors; // If n is less than 2, it has no prime factors

  // Divide by 2 until n is odd
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  // Now n must be odd, so we can skip even numbers and only check odd divisors
  for (let div = 3; div * div <= n; div += 2) {
    while (n % div === 0) {
      factors.push(div);
      n /= div;
    }
  }

  // If n is a prime greater than 2, add it to the factors list
  if (n > 2) factors.push(n);

  return factors;
}
console.log(primeFactors(69)); //Time Complexity: O(sqrt(n))

//All divisor of a number
function allDivisor(n) {
  let res = [];
  let div = 2;

  while (n >= div) {
    if (n % div === 0) {
      res.push(div);
    }
    div++;
  }
  return res;
}
console.log(allDivisor(16)); //Time Complexity : O(n)


function computingPower(num, power) {
  let sum = 1;
  if (power === 0) return 1;

  for (let i = 0; i < power; i++) {
    sum = sum * num;
  }
  return sum;
}
console.log(computingPower(3, 4)); //Time Complexity:  O(n)


function recursiveFunc1(n) {
  if (n <= 0) return;
  console.log(n);
  recursiveFunc1(n - 1);
}
recursiveFunc1(5);

function recursiveFunc2(n) {
  if (n <= 0) return;
  recursiveFunc2(n - 1);
  console.log(n);
}
recursiveFunc2(5);


function checkPalindromeRecursive(str, start, end) {
  if (start >= end) return true;

  return (
    str[start] == str[end] && checkPalindromeRecursive(str, start + 1, end - 1)
  );
}
console.log(checkPalindromeRecursive("abba", 0, 3));


// Recursive JavaScript program to find sum of digits of a number

function sumOfDigRecursive(n) {
  if (n === 0) return 0;
  let ld = n % 10;
  n = Math.floor(n / 10);
  return sumOfDigRecursive(n) + ld;
}
console.log(sumOfDigRecursive(253)); // Output will be 10

//naive method
function largestNumIndex(arr) {
  let flag = false;
  for (let i = 0; i < arr?.length; i++) {
    flag = true;
    for (let j = 0; j < arr?.length; j++) {
      if (arr[i] < arr[j]) {
        flag = false;
      }
    }

    if (flag === true) {
      return i;
    }
  }
}
console.log(largestNumIndex([90, 70, 66, 21])); //Time Complexity: O(n^2)

//Javascript Arrays
//efficient method
function largestNum(arr) {
  let res = 0;
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > arr[res]) {
      res = i;
    }
  }
  return res;
}
console.log(largestNum([90, 70, 66, 900])); //Time Complexity: O(n)

function secondLargest(arr) {
  let first = 0,
    second = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second === -1 || arr[second] < arr[i]) {
        second = i;
      }
    }
  }
  return second;
}

let arr = [10, 12, 20, 4];
let index = secondLargest(arr); //Time Complexity: O(n)
if (index === -1) {
  console.log("Second Largest didn't exist");
} else {
  console.log("Second largest : " + arr[index]);
}

//naive method
function checkSortedArr(arr) {
  for (let i = 0; i < arr?.length - 1; i++) {
    for (let j = i + 1; j < arr?.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(checkSortedArr([9, 89, 700, 9])); //Time Complexity: O(n^2)

//efficient method
function checkSortArr(arr) {
  for (let i = 1; i < arr?.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSortArr([9, 89, 700, 9])); //Time Complexity: O(n)


//naive method: reverse array
function reverseArr(arr) {
  let res = [];
  for (let i = arr?.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}
console.log(reverseArr([7, 21, 90, 34, 66]));     //Time Complexity: O(n) | Space Complexity: O(n)

//efficient method
function reverseArray(arr) {
  let low = 0;
  let high = arr?.length - 1;
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  return arr;
}
console.log(reverseArray([90, 56, 34, 23, 78]));     //Time Complexity: O(n) | Space Complexity: O(1)


//Left Rotate an Array by One
function leftRotateArray(arr) {
  let firstEle = arr[0];
  let res = [];
  for (let i = 1; i < arr?.length; i++) {
    res.push(arr[i]);
  }
  //  return res.concat(firstEle);
  res[arr?.length - 1] = firstEle;
  return res;
}
console.log(leftRotateArray([90, 5, 3, 8, 5, 1]));


//Move Zeros to End
//naive method
function moveZeroToEnd(arr) {
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
console.log(moveZeroToEnd([0, 9, 0, 5, 4, 3])); //Time Complexity: O(n^2)

//efficient solution
function moveZero(arr) {
  let count = 0;
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}
console.log(moveZero([0, 9, 0, 5, 4, 3]));


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
console.log(removeDuplicates([9, 4, 6, 9, 9, 5, 6]))

Ques: Given an array a[ ] of size N. The task is to find the median and mean of the array elements. Mean is average of the numbers and median is the element which is smaller than half of the elements and greater than remaining half.  If there are odd elements, the median is simply the middle element in the sorted array. If there are even elements, then the median is floor of average of two middle numbers in the sorted array. If mean is floating point number, then we need to print floor of it.
class Solution {
    //Function to find median of the array elements.
    median(A,N)
    {
       A.sort(function(a, b){return a - b});
       //Your code here
       //If median is fraction then convert it to integer and return
       if(N % 2 !== 0){
          const med = Math.floor(N/2)
          return A[med]
       } else{
           const med = Math.floor(N/2) - 1
           return A[med]
       }
    }
    //Function to find mean of the array elements.
    mean(A,N)
    {
        //your code here
        let sum = 0
        for(let i=0; i<N; i++){
            sum += A[i]
        }
        return Math.floor(sum/N)
    }
}

Ques: Given an array arr[] of size N of positive integers which may have duplicates. The task is to find the maximum and second maximum from the array, and both of them should be different from each other, so If no second max exists, then the second max will be -1.

class Solution {
  
    largestAndSecondLargest(sizeOfArray, arr)
    {
        let first = -1
        let second = -1
        // code here
        for(let i=0; i<sizeOfArray; i++){
            if(arr[i] > first){
                second = first
                first = arr[i]
            } else if(arr[i] > second && arr[i] != first){
                second = arr[i]
            }
        }
        
        return [first, second]
    }
}

//Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.
function reverseInGroups(arr, n, k){
        // code here
     for(let i = 0; i < n; i += k)
    {
        let left = i;
 
        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, n - 1);
        let temp;
         
        // Reverse the sub-array [left, right]
        while (left < right)
        {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return arr;
    }


//SEARCHING
function linearSearch(arr, target) {
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([9, 4, 22, 67, 11], 7)); //Time Complexity: O(n)


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
console.log(binarySearch([9, 12, 33, 46, 88], 90)); //Time Complexity: O(log n)

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
console.log(recursiveBinarySearch([9, 12, 33, 46, 88], 33, 0, 4));   //Time Complexity: O(log n)
*/

function searchFirstOccurence(arr, target) {
  let low = 0;
  let high = arr?.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
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
// console.log(searchFirstOccurence([9, 12, 12, 12, 33, 46, 46, 88], 34)); //Time Complexity: O(log n)

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
// console.log(searchLastOccurence([9, 12, 12, 12, 33, 46, 46, 88], 46)); //Time Complexity: O(log n)


//COUNT OCCURRENCES IN SORTED ARRAY 
//NAIVE SOLUTION
function countOcc(arr, target) {
  let count = 0;
  let n = arr?.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
// console.log(countOcc([10, 20, 20, 20, 35, 47, 89], 20));         //Time Complexity: O(n)
// */

function countOccurrences(arr, target){

  const firstOcc = searchFirstOccurence(arr, target)
console.log(firstOcc);
  if(firstOcc === -1) return 0;
  console.log(searchLastOccurence(arr, target));

  return (searchLastOccurence(arr, target) + firstOcc - 1)
}
console.log(countOccurrences([10, 20, 20, 20, 35, 47, 89], 20));         //Time Complexity: O(log n)