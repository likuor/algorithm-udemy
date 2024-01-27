// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

let res = [];
let count = 0;
function capitalizeFirst(strArr) {
  if (count === strArr.length) return res;
  res = [...res, strArr[count][0].toUpperCase() + strArr[count].slice(1)];
  return capitalizeFirst(strArr.slice(1));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
