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

//Collision Handling: Chaining
class myHash {
  constructor(b) {
    this.bucket = b;
    this.table = [];
    for (let i = 0; i < this.bucket; i++) {
      this.table[i] = []; //[[], [], [], [], [], [], []]
    }
  }

  hashFunction(x) {
    return x % this.bucket;
  }

  insertItem(key) {
    let index = this.hashFunction(key);
    this.table[index].push(key);
  }

  searchItem(key) {
    let index = this.hashFunction(key);
    for (let i = 0; i < this.table[index]; i++) {
      if (this.table[index][i] === key) {
        return true;
      }
      return false;
    }
  }

  deleteItem(key) {
    let index = this.hashFunction(key);
    let i = this.table[index].indexOf(key);
    if (i !== -1) {
      this.table[index].splice(i, 1);
    }
  }

  displayHash() {
    for (let i = 0; i < this.bucket; i++) {
      console.log(i + " --> " + this.table[i].join(" --> "));
    }
  }
}
let h = new myHash(7);
h.insertItem(70);
h.insertItem(71);
h.insertItem(56); //[[70, 56], [71], [], [], [], [], []]
h.displayHash();
console.log(h.searchItem(71));
h.deleteItem(56);
h.displayHash();

/*
Separate chaining technique in hashing allows to us to use a linked list at each hash slot to handle the problem of collisions. That is, every slot of the hash table is a linked list, so whenever a collision occurs, the element can be appened as a node to the linked list at the slot.
In this question, we'll learn how to fill up the hash table using Separate chaining technique. Given an array (consisting of distinct integers)  and a hashtable size, you have to fill the elements of the array into a hash table of given size. 
Example:
Input: hashSize = 10 sizeOfArray = 6 arr[] = {92,4,14,24,44,91}
Output:
1->91
2->92
4->4->14->24->44
Explanation: 92%10=2 so 92 goes to slot 2. 4%10=4 so 4 goes to slot 4. 14%10=4. But 4 is already occupied so we make a linked list at this position and add 14 after 4 in slot 4 and so on.
*/
function separateChaining(hashSize, arr, sizeOfArray) {
  let table = [];
  //your code here
  for (let i = 0; i < hashSize; i++) {
    table[i] = []; //[[], [], [], [], [], [], []]
  }

  for (let i = 0; i < sizeOfArray; i++) {
    let index = Math.floor(arr[i] % hashSize); //hash function
    table[index].push(arr[i]);
  }
  // return table;
  for (let i = 0; i < table?.length; i++) {
    console.log(i + " --> " + table[i].join(" --> "));
  }
}
console.log("separate chaining");
separateChaining(10, [92, 4, 14, 24, 44, 91], 6);

/*
Quadratic probing is a collision handling technique in hashing. Quadratic probing says that whenever a collision occurs, search for i2 position.
Given an array of integers and a Hash table. Fill the elements of the array into the hash table by using Quadratic Probing in case of collisions.
*/
function QuadraticProbing(hash, hashSize, arr, N) {
  for (let i = 0; i < hashSize; i++) {
    hash[i] = -1;                   //all the values in arr as -1 
  }
  //iterate over the array
  for (let i = 0; i < N; i++) {
    //computing the hash value
    let hashValue = arr[i] % hashSize;

    //if no collision then insert the element of arr in hash table
    if (hash[hashValue] == -1) {
      hash[hashValue] = arr[i];
    } else {
      for (let j = 0; j <= hashSize; j++) {
        let nhv = (hashValue + j * j) % hashSize;     //computing the hash value again
        if (hash[nhv] == -1) {
          hash[nhv] = arr[i];
          break;
        }
      }
    }
  }
  return hash;
}
console.log(QuadraticProbing([], 11, [21, 10, 32, 43], 4));
