function loopEveryOther(array) {
    // create a loop which iterates over every other element of the input array
      // log every other array element to the console

      for (var i = 0; i < array.length; i+= 2) {
          console.log(array[i]);
          
      }
  }

  loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5