/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
function twoSum(nums, target) {
  let newMap = new Map();
  for (let i = 0; i < nums?.length; i++) {
    let complement = target - nums[i];
    if (newMap.has(complement)) {
      return [newMap.get(complement), i];
    }
    newMap.set(nums[i], i);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
*/
function containsDuplicate(nums) {
  let newMap = new Map();

  for (let i = 0; i < nums?.length; i++) {
    let ele = nums[i];
    let count = (newMap.get(ele) || 0) + 1;
    newMap.set(ele, count);

    if (count === 2) {
      return true;
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 4]));

/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
Example 1:
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/
function getConcatenation(nums) {
  let ans = nums;
  const len = nums?.length;

  for (let i = 0; i < len; i++) {
    ans[i + len] = nums[i];
  }
  return ans;
}
console.log(getConcatenation([1, 2, 1]));

/*
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
Return the minimum number of operations to make all elements of nums divisible by 3.
Example 1:
Input: nums = [1,2,3,4]
Output: 3
Explanation: All array elements can be made divisible by 3 using 3 operations:
Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
*/
function minimumOperations(nums) {
  let operationCount = 0;
  for (let i = 0; i < nums?.length; i++) {
    if (nums[i] % 3 !== 0) {
      operationCount++;
    }
  }
  return operationCount;
};
console.log(minimumOperations([1, 2, 1]));
