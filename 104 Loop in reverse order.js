function loopInReverse(array) {
    for (var i = array.length - 1; i > -1; i--) {
        console.log(array[i]);
        console.log('test');
        
    }

    // create a loop which iterates from back to front of the input array
      // log current array element to the console
  }

  var numsArray = [1, 2, 3, 4, 5];

  for (var i = numsArray.length - 1; i > -1; i--) {
    console.log('current index:', i);
    console.log('current element:', numsArray[i]);
    console.log('=============='); //gives context for when each iteration of loop ends
  }

  loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1