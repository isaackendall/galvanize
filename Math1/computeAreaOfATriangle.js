/*
Write a function called "computeAreaOfATriangle".

Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
*/

function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
}

console.log(computeAreaOfATriangle(4, 6)); // 12