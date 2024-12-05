/*
Write a function called "addToFront".

Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.

Notes:

It should be the SAME array, not a new array.
In order to do this you should be familiar with the 'unshift' method.
var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
*/

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

console.log(addToFront([1, 2], 3)); // [3, 1, 2]
console.log(addToFront([1, 2, 3], 0)); // [0, 1, 2, 3]
console.log(addToFront([], 1)); // [1]

