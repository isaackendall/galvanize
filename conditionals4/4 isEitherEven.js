//4 isEitherEven.js
// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

// var output = isEitherEven(1, 4);
// console.log(output); // --> true

function isEitherEven(num1, num2) {
    return num1 % 2 === 0 || num2 % 2 === 0;
    
} 

console.log(isEitherEven(1, 4)); // true
console.log(isEitherEven(2, 3)); // true
console.log(isEitherEven(3, 5)); // false

