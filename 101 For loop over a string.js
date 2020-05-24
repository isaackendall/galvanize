function loopAStringAgain(string) {
    // create a loop which iterates over the input string
      // log current string character to the console
      for (var i = 0; i < string.length; i++) {
          console.log(string[i]);
          
      }
  }


  loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d