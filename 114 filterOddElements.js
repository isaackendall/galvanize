function filterOddElements(array) {
    var oddNumbers = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
         // add to oddNumbers array
            oddNumbers.push(array[i]);
            
        }
        
    }
    // console.log(oddNumbers);
    return(oddNumbers);
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]