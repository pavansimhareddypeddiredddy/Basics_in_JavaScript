// ===============================================NUMBER========================================================================

//  DECLARING A NUMBER AS AN OBJECT (wrapper object)
const score = new Number(100);
console.log("Number object:", score);  // Output: [Number: 100]

//  toFixed() - Formats the number with fixed decimal places
console.log("Fixed to 2 decimals:", score.toFixed(2));  // Output: "100.00"

//  toString() - Converts the number to a string
console.log("Converted to string:", typeof(score.toString())); // Output: "string"

//  toPrecision() - Formats number to a specified length (total digits)
const weight_1 = 76.5789;
const weight_2 = 1122.56;

console.log("weight_1 toPrecision(3):", weight_1.toPrecision(3)); // Output: "76.6"
console.log("weight_2 toPrecision(3):", weight_2.toPrecision(3)); // Output: "1.12e+3" → 1.12 × 10³ = 1120

//  toLocaleString() - Converts number into localized number format
const amount = 1000000;
console.log("US format:", amount.toLocaleString());            // Output: "1,000,000" (US format)
console.log("Indian format:", amount.toLocaleString('en-IN')); // Output: "10,00,000" (Indian format)

//  toExponential() - Converts number to exponential (scientific) notation
console.log(`Exponential form of 1000000: ${amount.toExponential()}`); // Output: "1e+6"

//  Useful Number properties
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("MIN_VALUE:", Number.MIN_VALUE);               // Smallest positive number > 0 → 5e-324
console.log("MAX_VALUE:", Number.MAX_VALUE);               // Largest number → 1.7976931348623157e+308

//  Number.isInteger() - Checks if a value is an integer
console.log("Is 10 an integer?", Number.isInteger(10));     // true
console.log("Is 10.5 an integer?", Number.isInteger(10.5)); // false

//  Number.isNaN() - Checks if a value is NaN
console.log(`is NaN actually Nan , to check use Number.isNaN(NaN) . ${Number.isNaN(NaN)}`);         // true
console.log("Is 'hello' NaN (with Number.isNaN)?", Number.isNaN("hello")); // false because only the NaN value gives u true until and unless typeconverting from string to number



//  Number.isFinite() - Checks if a value is a finite number
console.log("Is 100 finite?", Number.isFinite(100));           // true
console.log("Is Infinity finite?", Number.isFinite(Infinity)); // false

//  Number.parseInt() - Parses a string and returns an integer
console.log("Parsed int from '42':", Number.parseInt("42"));      // 42
console.log("Parsed int from '42px':", Number.parseInt("42px"));  // 42

//  Number.parseFloat() - Parses a string and returns a float
console.log("Parsed float from '3.14':", Number.parseFloat("3.14"));      // 3.14
console.log("Parsed float from '3.14em':", Number.parseFloat("3.14em"));  // 3.14

//==================================================================================================================================

//=========================================================MATHS====================================================================


// math-methods.js
// Demonstration of common Math methods in JavaScript

console.log("Math Methods Demo in JavaScript\n");

// 1. Math.abs() - Returns the absolute (positive) value
console.log("Math.abs(-10):", Math.abs(-10)); // 10
console.log("Math.abs(5):", Math.abs(5));     // 5

// 2. Math.round() - Rounds to the nearest integer
console.log("\nMath.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.4):", Math.round(4.4));   // 4

// 3. Math.floor() - Always rounds down
console.log("\nMath.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(-4.1):", Math.floor(-4.1)); // -5

// 4. Math.ceil() - Always rounds up
console.log("\nMath.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.ceil(-4.9):", Math.ceil(-4.9));   // -4

// 5. Math.sqrt() - Square root
console.log("\nMath.sqrt(25):", Math.sqrt(25));     // 5
console.log("Math.sqrt(2):", Math.sqrt(2));         // 1.414213...

// 6. Math.pow() - Raises base to exponent (base^exponent)
console.log("\nMath.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.pow(5, 2):", Math.pow(5, 2));     // 25

// 7. Math.min() - Finds the minimum number
console.log("\nMath.min(5, 10, -3, 0):", Math.min(5, 10, -3, 0)); // -3

// 8. Math.max() - Finds the maximum number
console.log("Math.max(5, 10, -3, 0):", Math.max(5, 10, -3, 0));   // 10

// 9. Math.PI - Value of Pi
console.log("\nMath.PI:", Math.PI); // 3.141592653589793

// 10. Math.random() - Generates a random number between 0 and 1
console.log("\nMath.random():", Math.random()); // Random decimal between 0 and 1

// Bonus: Generate random number between 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNum);
