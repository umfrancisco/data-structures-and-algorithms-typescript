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
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        moveToStart(arr, i);
    }
}
let test = [6, 5, 4, 3, 1, 2];
shiftLeft(test, 0);
console.log(test);
function shiftLeft(arr, start) {
    let min = findMin(arr, start);
    if (min.index === 0)
        return;
    let n = min.index - 1;
    while (min.value < arr[n]) {
        let temp = arr[n];
        arr[n] = min.value;
        arr[min.index] = temp;
        min.index = n;
        n--;
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
