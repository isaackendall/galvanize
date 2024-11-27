/*
Write a function called "isPersonOldEnoughToVote".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

Notes:

The legal voting age in the United States is 18.
var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true
*/

function isPersonOldEnoughToVote(person) {
    return person.age >= 18;
}       

console.log(isPersonOldEnoughToVote({ age: 19 })); // true
console.log(isPersonOldEnoughToVote({ age: 17 })); // false
console.log(isPersonOldEnoughToVote({ age: 21 })); // true
console.log(isPersonOldEnoughToVote({ age: 16 })); // false

