// 13 Using Splice

// Complete a function that demonstrates how to use the splice method on an array. 
// usingSplice will take 4 parameters, an array, an integer start, an integer deleteCount, 
// and a String item. Your function should splice the input array: starting at the input start, 
// deleting deleteCount items, and inserting item into the array at start. 
// Your function need not return anything.

function usingSplice(array, start, deleteCount, item) {
  // your code here
  array.splice(start, deleteCount, item);
}