// FIXME
// productOfArray;
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// let total = 1;
function productOfArray(numsArr) {
  if (numsArr.length === 0) return 1;
  return numsArr[0] * productOfArray(numsArr.slice(1));

  // if (numsArr.length === 0) return total;
  // total *= numsArr[0];
  // numsArr.shift();
  // return productOfArray(numsArr);
}

console.log(productOfArray([1, 2, 3]));
// productOfArray([1, 2, 3]); // 6
// productOfArray([1,2,3,10]) // 60
