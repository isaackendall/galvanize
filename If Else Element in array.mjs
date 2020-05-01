function findIngredient(ingredientList, ingredientToSearchFor) {
  // if ingredientToSearchFor is present within ingredientList
  if (ingredientList.indexOf(ingredientToSearchFor) > -1) {
    return ingredientToSearchFor + " is on the list"
  } else {
    return ingredientToSearchFor + " is not on the list"
  }
    // return '{ingredientToSearchFor} is on the list'
  // otherwise
    // return '{ingredientToSearchFor} is not on the list'
}

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);
