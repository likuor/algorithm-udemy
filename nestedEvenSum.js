// FIXME
// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

let res = 0;
function nestedEvenSum(obj) {
  // console.log(obj);
  const arr = Object.values(obj);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      res += arr[i];
    } else {
      nestedEvenSum(arr[i]);
    }
    // console.log('---------', arr[i]);
    // const tes = Object.values(arr[i]);
    // console.log('---------here', tes);
    //   if (Array.isArray(oldArr[i])) {

    // }

    // if (arr[i]) {
    //   console.log('-------', tes);
    // }
    // if (typeof arr[i] !== 'number') {
    //   console.log('---------------', arr[i]);
    //   nestedEvenSum(arr[i]);
    // } else {
    //   res += arr[i];
    // }
    // console.log(arr[i]);
  }
  console.log('========', res);

  return res;
}

console.log(nestedEvenSum(obj1)); // 6
// nestedEvenSum(obj2); // 10
