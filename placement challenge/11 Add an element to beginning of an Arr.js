// 11 Add an element to beginning of an Array

// Complete a function called addToFront. Given an array 
// and an element of any type, addToFront adds the input element 
// to the front of the input array, and returns the input array. 
// Your function should return the INPUT array, rather than create a new one. 
// You should be familiar with the unshift method.

function addToFront(arr, element) {
  // your code here
  arr.unshift(element);
  return arr;


}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]