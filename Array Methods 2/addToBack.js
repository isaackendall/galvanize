function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

console.log(addToBack([1, 2], 3)); // [1, 2, 3]
console.log(addToBack([1, 2, 3], 0)); // [1, 2, 3, 0]
console.log(addToBack([], 1)); // [1]

