// 7 Split a String

// Complete the function splitString. This function will take in one parameter, 
// a string to be split, and should return an array that is the result of calling the split 
// method on the input string. You should call split with an argument of an empty string. 
// You will want to use the split method for Strings.

function splitAString(str) {
  // your code here
  var array = [];
  var letters = str.split('');
  return letters;
  

}



var output = splitAString("queue");
console.log(output); // ["q", "u", "e", "u", "e"]