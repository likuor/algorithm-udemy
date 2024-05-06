// const hash = (key, arrayLen) => {
//   let total = 0;
//   for (const char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// };

const hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

console.log(hash('hello', 13));
console.log(hash('goodbye', 13));
console.log(hash('hi', 13));
console.log(hash('cyan', 13));
// console.log(hash('orangered', 10));
// console.log(hash('orange', 10));
// console.log(hash('cyan', 10));
