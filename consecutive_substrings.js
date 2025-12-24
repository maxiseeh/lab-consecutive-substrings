function consecutiveSubstrings(string) {
  // make empty array to store results
  var results = [];
  
  // loop through each character as starting point
  for (var i = 0; i < string.length; i++) {
    // loop from starting point to end of string
    for (var j = i; j < string.length; j++) {
      // get substring and add to results
      results.push(string.slice(i, j + 1));
    }
  }
  
  return results;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


