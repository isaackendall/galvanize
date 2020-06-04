// 16 Add a property to an object

// Complete a function that takes in three parameters, 
// an object, and a string (which will represent a key), 
// and a value. Your function should add a property to the inputted object. 
// The key of this property should be the inputted string parameter, 
// and the value of this property should be the inputted value. 
// Your function should then return the inputted object.

function addProperty(obj, key, value) {
  // your code here
  obj[key] = value;
  return obj;
}

var person = {
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
};

person.nationality = "English";
console.log(person);