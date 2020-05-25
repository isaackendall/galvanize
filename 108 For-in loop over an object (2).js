function loopOverValues(object) {
    // create a loop which iterates over the input object
      // log current value to the console

      for (var key in object) {
        console.log(object[key]);
      }
  }

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913