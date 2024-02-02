// FIXME
// Time best O(n), worst O(n^2)

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
// console.log(insertionSort([0, 2, 34, 22, 10, 19, 17]));
