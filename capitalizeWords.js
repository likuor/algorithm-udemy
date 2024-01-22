// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

let index = 0;
let res = [];
function capitalizeWords(strArr) {
  if (strArr.length === index) return res;
  res = [...res, strArr[index++].toUpperCase()];
  return capitalizeWords(strArr.slice(0));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
