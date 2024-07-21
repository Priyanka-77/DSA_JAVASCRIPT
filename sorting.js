/*Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high. */
//Bubble Sort (Naive)
function naiveBubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(naiveBubbleSort([10, 8, 20, 5])); //Time Complexity: θ(n^2)

//Bubble Sort (Optimize)
function optimizeBubbleSort(arr) {
  let n = arr?.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  return arr;
}
console.log(optimizeBubbleSort([10, 20, 30, 40])); //Time Complexity(arr is not sorted): θ(n^2), Time Complexity(arr is sorted): θ(n)

/*Selection sort: 
The algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1.The subarray which is already sorted. 
2.Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
It does less memory write compare to other quick sort , merge sort, insertion sort, etc. But cycle sort is optimal in terms of memory writes
Basic idea of heap sort
Not stable & In-place*/
function selectionSort(arr) {
  let n = arr?.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j; //find the minimum number index
      }
    }
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
  return arr;
}
console.log(selectionSort([10, 8, 20, 5])); //Time Complexity: θ(n^2)

/*Insertion Sort
It is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
In-place & stable
Used in practice for the small 
It is most efficient algorithm for small size array
*/
function insertionSort(arr) {
  for (let i = 1; i < arr?.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([20, 5, 40, 60, 10])); //Time Complexity: Best Case(When array is sorted) -> θ(n), Worst Case -> θ(n^2)

/*Merge Sort is a Divide and Conquer algorithm. It divides the input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one in a sorted manner. */
//How to merge two sorted arrays: Naive method
function naiveMergeTwoSortArr(arr1, arr2) {
  let m = arr1?.length;
  let n = arr2?.length;
  let res = [];
  for (let i = 0; i < m; i++) {
    res[i] = arr1[i];
  }
  for (let j = 0; j < n; j++) {
    res[j + m] = arr2[j];
  }

  return res.sort(function (a, b) {
    return a - b;
  });
}
console.log(naiveMergeTwoSortArr([10, 15, 20, 40], [5, 6, 6, 10, 15])); //Time Complexity: θ(n^2)

//Efficient method: How to merge two sorted arrays
function mergeTwoSortedArr(arr1, arr2) {
  let m = arr1?.length;
  let n = arr2?.length;
  let res = [];
  let i = 0;
  j = 0;
  k = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    res[k] = arr1[i];
    i++;
    k++;
  }
  while (j < n) {
    res[k] = arr2[j];
    j++;
    k++;
  }
  return res;
}
console.log(mergeTwoSortedArr([10, 15, 20, 40], [5, 6, 6, 10, 15]));

//Efficient soltution for merge sort: Single array
function efficientMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = efficientMergeSort(arr.slice(0, mid));
  const right = efficientMergeSort(arr.slice(mid));

  return efficientMerge(left, right);
}
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = efficientMergeSort(unsortedArray);
console.log(sortedArray);

function efficientMerge(arr1, arr2) {
  let m = arr1?.length;
  let n = arr2?.length;
  let res = [];
  let i = 0;
  j = 0;
  k = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    res[k] = arr1[i];
    i++;
    k++;
  }
  while (j < n) {
    res[k] = arr2[j];
    j++;
    k++;
  }
  return res;
}

//Recursive solution for merge sort: Single array
function recursiveMergeSort(arr) {
  let len = arr?.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return recursiveMergeFunc(
    recursiveMergeSort(leftArr),
    recursiveMergeSort(rightArr)
  );
}

function recursiveMergeFunc(arr1, arr2) {
  const sortedArr = []; //initialize array to store sorted values
  while (arr1?.length && arr2?.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return [...sortedArr, ...arr1, ...arr2];
}
console.log(recursiveMergeSort([90, 56, 23, 89, 21, 98]));

/*Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is the maximum. 
Given an array a[]. The task is to find the inversion count of a[]. Where two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j. 
Naive solution : 
Time Complexity: O(N2), Two nested loops are needed to traverse the array from start to end.
Auxiliary Space: O(1), No extra space is required.*/
function naiveCountInversion(arr) {
  let res = 0;
  let len = arr?.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        res++;
      }
    }
  }
  return res;
}
console.log(naiveCountInversion([1, 20, 6, 4, 5]));

//Efficient solution
//Time Complexity: O(n * log n), The algorithm used is divide and conquer i.e. merge sort whose complexity is O(n log n).
// Auxiliary Space: O(n), Temporary array.
function countInvMerge(arr, l, m, r) {
  let left = [];
  let right = [];

  for (let i = l; i <= m; i++) {
    left.push(arr[i]);
  }
  for (let i = m + 1; i <= r; i++) {
    right.push(arr[i]);
  }
  let res = 0;
  i = 0;
  j = 0;
  k = l;
  while (i < left?.length && j < right?.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
      res = res + left.length - i; // Count split inversions
    }
  }
  while (i < left?.length) {
    arr[k] = left[i];
    k++;
    i++;
  }
  while (j < right?.length) {
    arr[k] = right[j];
    k++;
    j++;
  }
  return res; // Return the count of split inversions
}

function countInv(arr, l, r) {
  let res = 0;
  if (l < r) {
    let m = Math.floor((r + l) / 2);
    // Count inversions in left subarray
    res += countInv(arr, l, m);
    // Count inversions in right subarray
    res += countInv(arr, m + 1, r);
    // Count split inversions
    res += countInvMerge(arr, l, m, r);
  }
  return res;
}
console.log(countInv([1, 20, 6, 4, 5], 0, 4));

/*Given two unsorted arrays that represent two sets (elements in every array are distinct), find the union and intersection of two arrays.
Time Complexity: O(m * log(m) + n * log(n)), for using map data structure.
Auxiliary Space: O(m + n)*/
function countUnionArr(arr1, arr2) {
  let arr = new Set(arr1);
  for (let i = 0; i < arr2?.length; i++) {
    arr.add(arr2[i]);
  }
  return arr.size;
}
let a = [3, 8, 10];
let b = [2, 8, 9, 10, 15];
console.log(countUnionArr(a, b));

/*Quicksort is a Divide and Conquer Algorithm that is used for sorting the elements. In this algorithm, we choose a pivot and partitions the given array according to the pivot. Quicksort algorithm is a mostly used algorithm because this algorithm is cache-friendly and performs in-place sorting of the elements means no extra space requires for sorting the elements.
Three partitions are possible for the Quicksort algorithm:
Naive partition: In this partition helps to maintain the relative order of the elements but this partition takes O(n) extra space.
Lomuto partition: In this partition, The last element chooses as a pivot in this partition. The pivot acquires its required position after partition but more comparison takes place in this partition.
Hoare's partition: In this partition, The first element chooses as a pivot in this partition. The pivot displaces its required position after partition but less comparison takes place as compared to the Lomuto partition. */
function naivePartition(arr, index) {
  let len = arr?.length;
  [arr[index], arr[len - 1]] = [arr[len - 1], arr[index]]; //switch the pivot index element with the last element of the array
  let temp = [];

  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] < arr[len - 1]) {
      temp.push(arr[i]);
    }
  }
  temp.push(arr[len - 1]); //store the pivot element
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > arr[len - 1]) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(naivePartition([5, 13, 6, 9, 12, 8, 11], 5), "naive"); //Time Complexity: θ(n), Space Complexity: θ(n)

//Lomuto Partition
function lomutoPartition(arr, l, h) {
  let pivot = arr[h]; //pivot element of the last index
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];

  return i + 1;
}
console.log(lomutoPartition([10, 80, 30, 90, 70], 0, 4)); //Time Complexity: θ(n), Space Complexity: θ(1)

/*Intersection
Iterate in while loop till any of the one array is finished.
In each iteration we look for smaller of the two elements from    -- the array and increase its pointer because it will not be in other list, hence not part of intersection.
For intersection, if both the elements are equal we print it and increment both pointer only if it is not same as the last element printed in intersection.*/
function intersectionArray(arr1, arr2) {
  let a = arr1?.length;
  let b = arr2?.length;
  let i = 0,
    j = 0;
  while (i < a && j < b) {
    if (i > 0 && arr1[i] === arr1[i + 1]) {
      i++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      console.log(arr1[i]);
      i++;
      j++;
    }
  }
}
intersectionArray([10, 20, 20, 40, 60], [2, 20, 20]); //Time Complexity: O(m + n), Space Complexity: O(1)

/*Hoare's Partition
Hoare’s Partition Scheme works by initializing two indexes that start at two ends, the two indexes move toward each other until an inversion is (A smaller value on the left side and a greater value on the right side) found. When an inversion is found, two values are swapped and the process is repeated. */
function hoarsePartition(arr, l, h) {
  let pivot = arr[l]; //first element will be the pivot
  let j = h + 1;
  let i = l - 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
console.log(hoarsePartition([5, 3, 8, 4, 2, 7, 1, 8], 0, 7));

/*Key difference b/w merge sort and quick sort: merge sort -> merging function is complex
quick sort: partition function is complex 
Lomuto’s Partition Scheme:
This algorithm works by assuming the pivot element as the last element. If any other element is given as a pivot element then swap it first with the last element. Now initialize two variables i as low and j also low,  iterate over the array and increment i when arr[j] <= pivot and swap arr[i] with arr[j] otherwise increment only j. After coming out from the loop swap arr[i] with arr[hi]. This i stores the pivot element.*/

function quickSort(arr, l, h) {
  if (l < h) {
    let p = lomutoPartition(arr, l, h);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, h);
  }
  return arr;
}
console.log(quickSort([8, 4, 7, 9, 3, 10, 5], 0, 6));
