function isOdd(num) {
    return num % 2 !== 0;
}

function areBothOdd(num1, num2) {
    return isOdd(num1) && isOdd(num2);
}

console.log(areBothOdd(1, 3)); // true
console.log(areBothOdd(2, 4)); // false
console.log(areBothOdd(1, 2)); // false

