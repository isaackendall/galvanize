function useContinue(array, index) {
    // create a loop which iterates over the input array
      // if current index is equal to input index
        // use described statement to skip to next iteration of loop (must include semi-colon!)
      // log current array element to the console

      for (var i = 0; i < array.length; i++) {
          if (i === index) {
            // console.log("skipped value at " + index);  
            continue;
          }
          console.log(array[i]);
      }
  }

  useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4