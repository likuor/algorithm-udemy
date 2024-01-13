function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// calc Time Complexity
let t1 = performance.now();
console.log(addUpTo(3));
let t2 = performance.now();

console.log(`====== ${(t2 - t1) / 1000} seconds`);
