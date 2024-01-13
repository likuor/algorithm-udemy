const sum = (a, b) => {
  return a + b;
};

let t1 = performance.now();
console.log(sum(1, 2));
let t2 = performance.now();
console.log(`====== ${(t2 - t1) / 1000} seconds`);
