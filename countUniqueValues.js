// TC O (n)
// SC O (n)

const countUniqueValues = (array) => {
  let newObj = {};

  if (array.length === 0) return 0;

  for (const iterator of array) {
    if (!newObj[iterator]) {
      newObj[iterator] = iterator;
    }
  }
  return Object.keys(newObj).length;
};

let t1 = performance.now();
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
let t2 = performance.now();
console.log(`====== ${(t2 - t1) / 1000} seconds`);
