/**
 * 
 * https://www.w3schools.com/dsa/dsa_data_arrays.php
*/

let arr: number[] = [15, 6, 20, 17, 5];
let copy1 = arr.slice();
let copy2 = arr.slice();
let copy3 = arr.slice();
let copy4 = arr.slice();
let copy5 = arr.slice();

bubbleSort(copy1);
console.log("BUBBLE SORT: ", copy1);

selectionSort(copy2);
console.log("SELECTION SORT: ", copy2);

insertionSort(copy3);
console.log("INSERTION SORT: ", copy3);

quickSort(copy4);
console.log("QUICK SORT: ", copy4);

let sorted = mergeSort(copy5);
console.log("MERGE SORT: ", sorted);

function bubbleSort(arr: number[]) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j]  > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// sorting functions

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    moveToStart(arr, i);
  }
}

function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    shiftLeft(arr, i);
  }
}

function quickSort(arr: number[], low: number = 0, high?: number) {
  if (high === undefined) {
    high = arr.length - 1;
  }

  if (low < high) {
    let pivot_index = partition(arr, low, high);
    quickSort(arr, low, pivot_index - 1);
    quickSort(arr, pivot_index + 1, high);
  }
}

function mergeSort(arr: number[]) {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }

  let mid = n / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft: number[] = mergeSort(left);
  let sortedRight: number[] = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// helper functions

function merge(left: number[], right: number[]) {
  let res: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  res.push(...left.slice(i));
  res.push(...right.slice(j));
  return res;
}

function partition(arr: number[], low: number, high: number) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[high];
  arr[high] = arr[i + 1];
  arr[i + 1] = temp;
  return i + 1;
}

function shiftLeft(arr: number[], start: number) {
  let min = findMin(arr, start);
  if (min.index === 0) return;
  let n = min.index - 1;
  while (min.value < arr[n]) {
    let temp = arr[n];
    arr[n] = min.value;
    arr[min.index] = temp;
    min.index = n;
    n--;
  }
}

function moveToStart(arr: number[], start: number) {
  const min = findMin(arr, start);
  let temp = arr[start];
  arr[start] = min.value;
  arr[min.index] = temp;
}

function findMin(arr: number[], start: number) {
  let n = arr.length;
  let min = { index: start, value: arr[start] };
  for (let i = start; i < n; i++) {
    if (arr[i] < min.value) {
      min.index = i;
      min.value = arr[i];
    }
  }
  return min;
}
