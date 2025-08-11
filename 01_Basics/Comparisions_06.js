// ==========================================
// Comparisons (>, <, <=, >=) vs Equality (==, ===)
// ==========================================

// COMPARISONS:
// - Usually convert both sides to numbers (unless both are strings)
// EQUALITY:
// - == does type conversion based on special rules
// - === checks type + value (no conversion)

// --------------------
// Equality with strings and numbers
console.log(2 == "2");   // true  ("2" -> 2, so 2 == 2)
console.log("2" == 2);   // true  ("2" -> 2)

// --------------------
// Comparisons between null and 0
console.log(null == 0);  // false  (null is only == to undefined)
console.log(null > 0);   // false  (null -> 0, so 0 > 0 is false)
console.log(null >= 0);  // true   (null -> 0, so 0 >= 0 is true)
console.log(null <= 0);  // true   (null -> 0, so 0 <= 0 is true)

// --------------------
// Comparisons between undefined and 0
console.log(undefined == 0);       // false (undefined only == to null)
console.log(undefined == null);    // true  (special == rule)
console.log(undefined === null);   // false (different types)
console.log(undefined > 0);        // false (undefined -> NaN, NaN > 0 is false)
console.log(undefined < 0);        // false (NaN < 0 is false)
console.log(undefined >= 0);       // false (NaN >= 0 is false)
console.log(undefined <= 0);       // false (NaN <= 0 is false)
