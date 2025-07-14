let fruits = ["apple", "banana", "cherry", "dragonfruit"];
let dryFruits = ["almond", "cashew", "raisins", "walnut"];
let vegies = ["carrot", "beetroot", "potato"];

// Different Methods to concatenate the arrays

// (1) push: array.push(arrayToAdd)
// ❌ NOT recommended — pushes the entire second array as a single nested element
fruits.push(dryFruits);
console.log("Merged using pushMethod:", fruits); // ["apple", ..., ["almond", ...]]
console.log("Accessing 'cashew' from nested array:", fruits[4][1]); // "cashew"

// (2) concat: array.concat(array2)
// ✅ Returns a new merged array
const concatMethod = fruits.concat(dryFruits);
console.log("Merged using concat method:", concatMethod);

// Merging more than 2 arrays
const mergedMultiple = fruits.concat(dryFruits, vegies);
console.log("Merging more than 2 arrays using concat:", mergedMultiple);

// (3) spread: [...array1, ...array2, ...array3]
// ✅ Recommended — clean, modern, and readable
const spreadMethod = [...fruits, ...dryFruits, ...vegies];
console.log("Merged using spread method:", spreadMethod);



// WHY SPREAD? WHY NOT CONCAT?

// (1) Better readability and cleanness in code
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result1 = array1.concat(array2); // Works fine
let result2 = [...array1, ...array2]; // Preferred for modern code
console.log("Merged using concat:", result1);
console.log("Merged using spread method:", result2);


// (2) Objects can be merged using spread, but not with concat
let obj1 = { name: "pavan", age: 21 };
let obj2 = { name: "simha", weight: 76.5 };

// ✅ Spread merges objects (keys with same names will be overwritten by the latter)
let mergedObj = { ...obj1, ...obj2 };
console.log("Merged object using spread:", mergedObj); // { name: "simha", age: 21, weight: 76.5 }

// ❌ concat() doesn't work on objects (throws error if used like obj1.concat(obj2))


// (3) Spread converts string into array, concat does not
let name = "pavan simha reddy";
let stringToArray = [...name];
console.log("String converted to array using spread:", stringToArray); 
// ['p', 'a', 'v', 'a', 'n', ' ', 's', 'i', 'm', 'h', 'a', ' ', 'r', 'e', 'd', 'd', 'y']



// FINAL CONCLUSION
// ✅ Use spread for clean merging of arrays, objects, and even strings.
// ❌ Avoid push for merging — it nests entire arrays as elements.
// 🔄 concat is okay, but spread is more modern, flexible, and preferred.



// FLAT: flat(depth) method flattens nested arrays into a single-level array

let nestedArray = [1, 2, 3, [4, 5, 6], 7, [8, [8.1, 8.2, 8.3]]]; // depth = 2
console.log("Before flat():", nestedArray);
console.log("After flat(Infinity):", nestedArray.flat(Infinity));
// flat(Infinity) flattens all levels regardless of depth

// STATIC METHODS (Array.isArray(), Array.from(), Array.of())
// Static methods are used directly on the Array class — no need for an array instance

// (1) Array.isArray(value): Checks whether the value is an array — returns a boolean
let arrayOrNot_1 = Array.isArray(123); // ❌ Not an array → false
let arrayOrNot_2 = Array.isArray([1, 2, 3]); // ✅ Is an array → true
console.log(arrayOrNot_1); 
console.log(arrayOrNot_2);

// (2) Array.from(iterable[, mapFn]) — Converts iterables (strings, sets, etc.) into arrays

let string2Array = Array.from("pavansimhareddy");
console.log(`Converting String to Array using Array.from(): ${string2Array}`);

let mapToArray = Array.from([1, 2, 3], x => x * 2);
console.log(`Using Array.from() with mapping function: ${mapToArray}`);

let mySet = new Set([1, 2, 3]);
let setToArray = Array.from(mySet);
console.log(`Converting Set to Array using Array.from(): ${setToArray}`);


// (3) Array.of(...values): Converts any values into an array (no matter the data type or count)
let argumentsToArray1 = Array.of(); // []
let argumentsToArray2 = Array.of(3); // [3]
let argumentsToArray3 = Array.of(1, "pavan", 12210501); // [1, 'pavan', 12210501]
let argumentsToArray4 = Array.of([1, 2], [3, 4]); // [ [1,2], [3,4] ] — nested arrays

console.log("Converting arguments into array using Array.of():");
console.log(argumentsToArray1);
console.log(argumentsToArray2);
console.log(argumentsToArray3);
console.log(argumentsToArray4);


// Difference between Array constructor and Array.of()
let arrayConstructor = Array(3); // [ <3 empty items> ] — creates empty slots
let arrayOf = Array.of(3);       // [3] — treats 3 as a value
console.log("Array() constructor:", arrayConstructor);
console.log("Array.of():", arrayOf);
