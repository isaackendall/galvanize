/*
Write a function called "addArrayProperty".

Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
*/

function addArrayProperty(obj, key, arr) {
    obj[key] = arr;
    return obj;
}   

console.log(addArrayProperty({}, 'myProperty', [1, 3])); // { myProperty: [1, 3] }
console.log(addArrayProperty({ name: 'John' }, 'skills', ['JavaScript', 'CSS', 'HTML'])); // { name: 'John', skills: ['JavaScript', 'CSS', 'HTML'] }
console.log(addArrayProperty({ age: 25 }, 'hobbies', ['reading', 'traveling', 'cooking'])); // { age: 25, hobbies: ['reading', 'traveling', 'cooking'] }

