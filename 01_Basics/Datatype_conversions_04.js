// In JavaScript, data type conversion (or coercion) happens automatically or manually.
// As developers, we often work on code written by others.
// We cannot always know which data type was used (number, string, boolean, etc.).
// To work with different types safely and predictably, type conversion is important.
// console.log("5" + 2);    // "52" (number 2 is converted to string)
// console.log("5" - 2);    // 3   (string "5" is converted to number)


// CONVERTING INTO NUMBER DATA TYPE
let name = "pavansimha";
let numberName = Number(name); // Nan (not a number )means the converted string is not a pure number may contains alphabet,specialcharacters.
console.log(numberName); 

let string2 = "";
console.log(Number(string2)); // returns 0 for empty string;


let above18 = true;
let numberBoolean = Number(above18);    // returns 1 for true
console.log(numberBoolean);

let bool = false;
let numberBool = Number(bool);
console.log(numberBool);       //returns 0 for false

console.log(Number(null));   // as null refers to empty so returns 0

// CONVERTING INTO BOOLEAN

 console.log(Boolean(21));  //true
 console.log(Boolean("pavan simha redy"));  //true
 console.log(Boolean(" "));  //true it is not empty contains one character (space)
 console.log(Boolean(""));   //false because it is empty string
 console.log(Boolean(null));  // false sa null is empty

// CONVERTING INTO STRING
// Everything, when converted to a string, becomes a readable text version of itself.
