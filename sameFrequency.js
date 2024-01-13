// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // Time O(n)
  // Space O(1)
  const arr1 = [...num1.toString()];
  const arr2 = [...num2.toString()];

  let res = {};

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    res[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];

    if (res[arr2[i]]) {
      res[arr2[i]] += 1;
    } else {
      return false;
    }

    return true;
  }

  // O (n log n)
  // const arr1 = [...num1.toString()].sort();
  // const arr2 = [...num2.toString()].sort();

  // if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;

  // return false;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
