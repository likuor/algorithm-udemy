const same = (array1, array2) => {
  if (array1.length !== array1.length) return false;

  const squared = array1.map((val) => val ** 2).sort();
  const sortArray = array2.sort();
  if (JSON.stringify(squared) === JSON.stringify(sortArray)) return true;
  return false;
};

let t1 = performance.now();
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 5, 3, 2], [9, 1, 4, 4]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([1, 2, 3, 2], [9, 1, 4]));
console.log(same([1, 2, 3, 4, 5], [9, 1, 4, 4, 11]));
let t2 = performance.now();
console.log(`====== ${(t2 - t1) / 1000} seconds`);
