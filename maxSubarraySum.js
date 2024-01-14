// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)
// Space Complexity - O(1)

const reducer = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

function maxSubarraySum(arr, range) {
  // Time Complexity - O(N)
  // Space Complexity - O(N)
  if (arr.length < range) return null;
  let count = 0;
  let firstArr = [];
  let secondArr = [];

  const max = arr.indexOf(Math.max(...arr));
  for (let i = 1 + max - range; count < range; i++) {
    const element = arr[i];
    firstArr = [...firstArr, element];
    count++;
  }

  count = 0;
  for (let i = max; count < range; i++) {
    const element = arr[i];
    if (element === undefined) break;
    secondArr = [...secondArr, element];
    count++;
  }

  const firstArrTotal = reducer(firstArr);

  const secondArrTotal = reducer(secondArr);

  if (firstArrTotal < secondArrTotal) {
    return secondArrTotal;
  } else {
    return firstArrTotal;
  }
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// console.log(maxSubarraySum([2, 3], 3));
