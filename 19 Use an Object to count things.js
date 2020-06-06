// 19 Use an Object to count things

// Complete a function called countAllCharacters. Given a string, your function 
// returns an object where each key is a character in the given string. 
// The value of each key should be how many times each character appeared in the given string.

// Notes:

// If given an empty string, countAllCharacters should return an empty object.


function countAllCharacters(str) {
  // your code here
  var letters = {};

  for (var i = 0; i < str.length; i++) {
      var char = str[i];
      letters[char] = (letters[char] + 1) || 1;
      
  }
  return letters; 
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}