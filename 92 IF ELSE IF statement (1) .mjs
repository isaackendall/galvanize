

function player1Choice(choice) {
  // if player1 chose rock
    // return "Player 1 chose rock"
  // otherwise if player1 chose paper
    // return "Player 1 chose paper"
  // otherwise if player1 chose scissors
    // return "Player 1 chose scissors"
  // otherwise
    // return "Player 1 has chosen poorly!"

    if (choice === 'rock') {
        return "Player 1 chose rock";
        
    } else if (choice === "paper") {
        return "Player 1 chose paper";        
    
    } else if (choice === "scissors") {
        return "Player 1 chose scissors";

    } else {
        return "Player 1 has chosen poorly!";
    }
}

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);
