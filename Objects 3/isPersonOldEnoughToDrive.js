/* Write a function called "isPersonOldEnoughToDrive".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.

Notes:

The legal driving age in the United States is 16.
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
*/

function isPersonOldEnoughToDrive(person) {
    return person.age >= 16;
}

console.log(isPersonOldEnoughToDrive({ age: 16 })); // true
console.log(isPersonOldEnoughToDrive({ age: 15 })); // false
console.log(isPersonOldEnoughToDrive({ age: 21 })); // true
console.log(isPersonOldEnoughToDrive({ age: 14 })); // false
