function loopASequence(start, end) {
  // create a loop which runs if start is less than or equal to end
    // log current value of start to console
    // increment value of start
    while (start <= end) {
        console.log(start);
        start++
        
    }
}

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7
