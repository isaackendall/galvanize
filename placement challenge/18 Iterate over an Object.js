// 18 Iterate over an Object

// Complete a function that takes in one parameter, an object. 
// Your function should iterate over the object, and log the values 
// to the console. Your function need not return anything.

// NOTE: DO NOT USE Object.keys, or Object.values in your solution.

function iterateOverObject(obj) {
  // your code here
  for (var key in obj) {
    console.log('current key:', key);
    console.log('current value:', obj[key]);
    //gives context for when each iteration of loop ends
    // console.log('=============='); 
      }
  }
  var output = iterateOverObject(object)
  const object = { a: 1, b: 2, c: 3 };