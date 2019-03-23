// Rewrite the code below to use a `for` loop instead of a `while` loop.

var multiplesOfThreeCount = 0;

// loop through numbers 1-100, count multiples of 3
var number = 1;
while (number <= 100) {
  if (number % 3 === 0) {
    multiplesOfThreeCount++;
  }
  number++;
}

console.log('There are ' + multiplesOfThreeCount + ' multiples of 3 between 1 and 100.')

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

/* NOTE: For this challenge to pass all tests, you will have to replace
the entire `while` loop. Commenting out the `while` loop will not work. */