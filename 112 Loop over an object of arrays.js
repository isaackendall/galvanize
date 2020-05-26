function loopAnObjectOfArrays(objectOfArrays) {
    // create a loop which iterates over the input object
      // create an inner loop which iterates over current inner array
        // log current value to the console
        for (var key in objectOfArrays) {
            for (var innerKey in objectOfArrays[key]) {
                console.log(objectOfArrays[key][innerKey]);

                    
                }
            }

                
            }
        

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z