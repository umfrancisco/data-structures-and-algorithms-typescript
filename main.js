"use strict";
/**
 *
 * https://www.w3schools.com/dsa/dsa_data_arrays.php
*/
let arr = [15, 6, 20, 17, 5];
let copy1 = arr.slice();
let copy2 = arr.slice();
bubbleSort(copy1);
console.log("BUBBLE SORT: ", copy1);
selectionSort(copy2);
console.log("SELECTION SORT: ", copy2);
console.log("");
// bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        moveToStart(arr, i);
    }
}
function moveToStart(arr, start) {
    const min = findMin(arr, start);
    let temp = arr[start];
    arr[start] = min.value;
    arr[min.index] = temp;
}
function findMin(arr, start) {
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
