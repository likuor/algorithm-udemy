// FIXME
// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, target) {
  //   let start = 0;
  //   let end = arr.length - 1;
  //   let half = Math.floor((start + end) / 2);
  //   if (arr[start] === target) return start;
  //   if (arr[end] === target) return end;
  //   if (arr[half] === target) return half;
  //   while (arr[half] !== target && start <= end) {
  //     if (arr[half] < target) start = half + 1;
  //     if (arr[half] > target) end = half - 1;
  //     half = Math.floor((start + end) / 2);
  //   }
  //   return arr[half] === target ? half : -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); //2

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
);

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
);

// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   95
// ); // 16
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   100
// ); // -1
