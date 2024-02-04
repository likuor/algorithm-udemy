// FIXME
// Time O(n log n)

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  console.log('left', left);
  console.log('right', right);
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
