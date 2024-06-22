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
console.log(countDigits(909)); //Time Complexity : O(log10(n)) or θ(num digits), Auxiliary Space: O(1)

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
console.log(isPalindrome(899)); //Time Complexity : O(log(n)) or O(Number of digits in a given number), Auxiliary Space: O(1)

//factorial of a number
function factNum(n) {
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factNum(4)); //Time Complexity: O(n), Auxiliary Space: O(n)

//Recursion: factorial of a number
function recursiveFactNum(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactNum(n - 1); //fact formula: n * (n-1)
}
console.log(recursiveFactNum(4)); //Time Complexity: O(n), Auxiliary Space: O(1)

//Given an integer n, write a function that returns count of trailing zeroes in n!.
//Naive method
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

//Efficient method
function optimizeTrailingZeros(n) {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n / i); //251/5 = 50,......
  }
  return res;
}
console.log(optimizeTrailingZeros(251)); //Time Complexity: O(log5n) || θ(log n), Auxiliary Space: O(1)

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
console.log(greatestCD2(4, 8)); //Time Complexity: O(log(min(a,b))

//Recursive: Euclidean Theorem
function greatestCD3(a, b) {
  if (b === 0) return a;
  return greatestCD3(b, a % b);
}
console.log(greatestCD3(100, 200));

//Iterative implementation
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
console.log(checkPrimeNumber(11)); //Time-Complexity = O(n), Auxiliary space: O(1)

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

//Given a natural number n, print all distinct divisors of it.
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
console.log(allDivisor(16)); //Time Complexity : O(n), Auxiliary Space : O(1)

function computingPower(num, power) {
  let sum = 1;
  if (power === 0) return 1;

  for (let i = 0; i < power; i++) {
    sum = sum * num;
  }
  return sum;
}
console.log(computingPower(3, 4)); //Time Complexity:  O(n), Auxiliary Space : O(1)
