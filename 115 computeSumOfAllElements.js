function computeSumOfAllElements(array) {
    
    // create variable to add to
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum = array[i] + sum;
        
    }
    console.log(sum);
}

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);