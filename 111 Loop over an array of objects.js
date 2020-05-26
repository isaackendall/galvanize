function loopAnArrayOfObjects(arrayOfObjects) {
    // create a loop which iterates over the input array
      // create an inner loop which iterates over current inner object
        // log current value to the console

        for (var i = 0; i < arrayOfObjects.length; i++) {
            for (var key in arrayOfObjects[i]) {
                console.log(arrayOfObjects[i][key]);
                    
                }
            }            
            
        }
  

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e