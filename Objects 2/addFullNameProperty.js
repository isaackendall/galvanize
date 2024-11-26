/*
Write a function called "addFullNameProperty".

Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" sets a "fullName" property on the input object, whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/

function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;  
}
var person = {
    firstName: 'Jade',
    lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

var person2 = {
    firstName: 'John',
    lastName: 'Doe'
};
addFullNameProperty(person2); 
console.log(person2.fullName); // --> 'John Doe'

var person3 = {
    firstName: 'Mary',
    lastName: 'Johnson'
};
addFullNameProperty(person3);
console.log(person3.fullName); // --> 'Mary Johnson'
