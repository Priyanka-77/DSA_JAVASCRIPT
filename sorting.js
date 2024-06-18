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
  return arr
}
console.log(insertionSort([20, 5, 40, 60, 10]))    //Time Complexity: Best Case(When array is sorted) -> θ(n), Worst Case -> θ(n^2)