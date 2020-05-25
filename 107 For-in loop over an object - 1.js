function loopOverKeys(object) {
    // create a loop which iterates over the input object
      // log current key to the console

    for (var key in object) {
        console.log(key);
            
        }
    }
        

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year