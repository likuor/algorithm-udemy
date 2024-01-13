const length = (string) => {
  let res = {};
  const splitString = string.replace(/[^0-9a-z]/gi, '').toLowerCase();

  for (const i of splitString) {
    res[i] = ++res[i] || 1;
  }

  return res;
};

let t1 = performance.now();
console.log(length('Your PIN number is 1234!'));
let t2 = performance.now();
console.log(`====== ${(t2 - t1) / 1000} seconds`);
