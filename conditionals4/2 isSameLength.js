function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

console.log(isSameLength("hello", "world")); // true
console.log(isSameLength("hello", "worlds")); // false

