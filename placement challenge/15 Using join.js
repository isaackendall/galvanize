// 15 Using join

// Complete a function that takes in two parameters, 
// an array and a string. Your function should call join on 
// the input array with an argument of the input string, and 
// return the results.

function useJoin(array, string) {
  // your code here

  var newString = '';
  newString = array.join(string);
//   console.log(newString);
  return newString;
  
}

var output = useJoin([1,2,3,4,5], "-")
console.log(output); // should get 1-2-3-4-5



