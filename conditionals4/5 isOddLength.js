//Write a function called "isOddLength".

//Given a word, "isOddLength" returns whether the length of the given word is odd.

//var output = isOddLength('special');
//console.log(output); // --> true

function isOddLength(word) {
    return word.length % 2 !== 0;
}

console.log(isOddLength('special')); // true
console.log(isOddLength('hello')); // true
console.log(isOddLength('worlds')); // false

function isEvenLength(word) {
    return word.length % 2 === 0;
}

console.log(isEvenLength('special')); // false
console.log(isEvenLength('hello')); // false
console.log(isEvenLength('worlds')); // true

function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}

console.log(isEvenAndGreaterThanTen(12)); // true
console.log(isEvenAndGreaterThanTen(11)); // false
console.log(isEvenAndGreaterThanTen(10)); // false
