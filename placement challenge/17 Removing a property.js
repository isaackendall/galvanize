// 17 Removing a property

// Complete a function that takes in two parameters, 
// an object, and a string (which will represent a key). 
// Your function should remove (delete) the property located at the inputted key. 
// Your function should then return the inputted object.

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}