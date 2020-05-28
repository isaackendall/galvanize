function computeAverageOfNumbers(array) {
    
    // create variable to add to
    var sum = 0;
    var average = 0;
    
    for (var i = 0; i < array.length; i++) {
        sum = array[i] + sum;
        average = sum / array.length;
    }
    // console.log("average" + average);
    return average;
    
}

var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);