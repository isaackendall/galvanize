function getElementsAbove40(numbers) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
      
      if (numbers[i] > 40) {
        count++;
      }
    }
  
    return count;
  }

var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);