function useBreak(array, index) {
    // create a loop which iterates over the input array
      // if current index is greater than input index
        // use described statement to stop the loop completely (must include semi-colon!)
      // log current array element to the console
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (i >= index) {
            // console.log("break the loop!")
            // console.log(array[i]);
            break;
            
        };
        
    }

  }

  useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4