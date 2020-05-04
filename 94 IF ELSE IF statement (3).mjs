function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // if stock of tomatoes and stock of onions are both less than minimum
    // return 'We need more tomatoes and more onions.'
if (stockTomatoes < recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions ) {
    return 'We need more tomatoes and more onions.';
  // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
    // return 'We need more tomatoes, but have enough onions.'  
} else if (stockTomatoes < recipeMinimums.tomatoes && stockOnions >= recipeMinimums.onions ){
    return 'We need more tomatoes, but have enough onions.';
 // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'
} else if (stockTomatoes >= recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions ){
    return 'We have enough tomatoes, but need more onions.';
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'
} else if (stockTomatoes >= recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions ){
    return 'We have enough tomatoes, but need more onions.';
 // otherwise
    // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'
} else {
    return 'We have enough tomatoes and onions. There will be ' + (stockTomatoes - recipeMinimums.tomatoes) + " extra tomato, and " + (stockOnions - recipeMinimums.onions) + " extra onion.";
    
}


// console.log(recipeMinimums);
// console.log(recipeMinimums.tomatoes);
// console.log(recipeMinimums.onions);
// console.log(stockTomatoes);
// console.log(stockOnions);

 
}

var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We need more tomatoes, but have enough onions.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);