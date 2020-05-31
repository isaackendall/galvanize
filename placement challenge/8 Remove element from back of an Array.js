// 8 Remove element from back of an Array


// Complete a function called removeFromBack. Given an array, removeFromBack 
// returns the input array with its last element removed. You should be familiar 
// with the Array method pop.

function removeFromBack(arr) {
  // your code here
  var array = arr.pop();
  return arr;

}



var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]