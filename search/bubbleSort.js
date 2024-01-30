// TODO was naive solution
// Time O(n^2)
const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

function bubbleSort(arr) {
  let isSwapped = true;
  for (let j = arr.length; j > 0; j--) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        console.log(arr, i, i + 1);
        swap(arr, i, i + 1);
        isSwapped = false;
      }
    }
    if (isSwapped) break;
  }

  // for (let j = 1; j < arr.length; j++) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       swap(arr, i, i + 1);
  //     }
  //   }
  // }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
// console.log(bubbleSort([37, 45, 29, 8]));
