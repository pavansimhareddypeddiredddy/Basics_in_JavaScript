// There are 2 ways to declare a string in JavaScript:

// Type 1 - Using string literal
let name = "pavan simha reddy";

// Type 2 - Using String object (not commonly used)
let namee = new String("sai");

// ===============================
// Common String Methods in JavaScript
// ===============================

// (1) length - Returns the total number of characters in the string
console.log(name.length);  // Output: 18

// (2) charAt(index) - Returns the character at the specified index
console.log(name.charAt(0)); // Output: 'p'

// (3) toUpperCase() - Converts all characters to uppercase
console.log(name.toUpperCase()); // Output: 'PAVAN SIMHA REDDY'

// (4) toLowerCase() - Converts all characters to lowercase
console.log(name.toLowerCase()); // Output: 'pavan simha reddy'

// (5) trim() - Removes whitespace from both ends (not from the middle)
let name1 = "     pavan    simha    reddy    ";
console.log(name1.trim()); // Output: 'pavan    simha    reddy'

// (6) replace(old, new) - Replaces the first match of a substring with a new one
console.log(name.replace("simha reddy", "sai")); // Output: 'pavan sai'

// (7) replaceAll(old, new) - Replaces all matches of a substring
console.log(name.replaceAll("p", "s")); // Output: 'savan simha reddy'

// (8) split(separator) - Splits the string into an array by a given separator
console.log(name.split(" ")); // Output: ['pavan', 'simha', 'reddy']

// (9) concat(str1, str2) - Concatenates strings
console.log(name.concat(" ", namee)); // Output: 'pavan simha reddy sai'

// (10) indexOf(substring) - Returns the index of the first occurrence
console.log(name.indexOf("simha")); // Output: 6

// (11) lastIndexOf(substring) - Returns the index of the last occurrence
let lastChar = "a";
console.log(`The last index of '${lastChar}' in '${name}' is ${name.lastIndexOf(lastChar)}`);

// (12) slice(start, end) - Extracts a section of a string (supports negative indices)
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31));          // Output: 'the lazy dog.'
console.log(str.slice(4, 19));       // Output: 'quick brown fox'
console.log(str.slice(-4));          // Output: 'dog.'
console.log(str.slice(-9, -5));      // Output: 'lazy'
console.log(str.length);             // Output: 44

// (13) substring(start, end) - Similar to slice but doesn't support negative indices
console.log(str.substring(4));       // Output: 'quick brown fox jumps over the lazy dog.'
console.log(str.substring(4, 9));    // Output: 'quick'
