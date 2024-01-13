// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  // Time Complexity - O(n)
  // Space Complexity -  O(m)
  const arr1 = [...str1];
  const arr2 = [...str2];
  let arr = [];
  let count = 0;

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (arr1[count] === element) {
      arr = [...arr, element];
      count++;
    }
    if (JSON.stringify(arr) === JSON.stringify(arr1)) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
