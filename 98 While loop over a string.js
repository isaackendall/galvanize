function loopAString(string) {
    // create an index variable
    var index = 0;

    // create a loop which iterates over the input string
    while (index < string.length) {
         // log current string character to the console
        console.log(string[index]);
         // increment value of index variable
         index++;
        
    }
     
      
  }

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d