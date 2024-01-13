//// O(n)
const anagrams = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const lookup = {};

  for (const iterator1 of string1) {
    let letter = iterator1;
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (const iterator2 of string2) {
    let letter = iterator2;
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

//// O(n log n)
// const anagrams = (string1, string2) => {
//   let res = [];
//   let res2 = [];

//   if (string1.length !== string2.length) return false;

//   for (const iterator1 of string1) {
//     res = [...res, iterator1];
//   }

//   for (const iterator2 of string2) {
//     res2 = [...res2, iterator2];
//   }

//   if (JSON.stringify(res.sort()) === JSON.stringify(res2.sort())) return true;

//   return false;
// };

let t1 = performance.now();
console.log(anagrams('aaz', 'zaa'));
console.log(anagrams('anagram', 'nagaram'));
console.log(anagrams('anagrams', 'nagaramm'));
let t2 = performance.now();
console.log(`====== ${(t2 - t1) / 1000} seconds`);
