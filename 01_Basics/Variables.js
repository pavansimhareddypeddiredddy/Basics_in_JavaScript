/*
Variables are the containers that store the value while executing the program.
variables are declared using the let, const and var keywords.
let is used to declare the variables that can be changed later
const is used to decare tge vairables that cannot be changed later
var is used as same as let but it has a wider scope and can be accessed outside the block in which it is declared.
RECOMMENDED: Use let and const instead of var.
variables can be decared using camelCase eg: firstName etcc..

*/
var firstName = "pavan simha reddy";//not recommended of using var 
let lastName = "peddi reddy"; // recommended to use let insted of var
const bornYear = 2003; //recommended to use const for unchanged values
city = "allagadda"; //not recommended to create a variable without using let, const or var even it works in JS without any error
let weight; // variable declared but not initialized, it will be undefined

// printing the variables using console.log
console.log(firstName);
console.log(lastName);

// rather printing each variable separately use console.table([firstName, lastName, bornYear, city]);
console.table([firstName, lastName, bornYear, city]);

// to print the variables in a single line use template literals
console.log(`My name is ${firstName} ${lastName}, I was born in ${bornYear} and i live in ${city}.`);

// to print the type of the variable use typeof operator
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof bornYear); // number
console.log(typeof city); // string 

// to check if the variable is defined or not use typeof operator
console.log(typeof firstName !== 'undefined'); // true
console.log(typeof lastName !== 'undefined'); // true
console.log(typeof bornYear !== 'undefined'); // true
console.log(typeof city !== 'undefined'); // true                                                                                                           
console.log(typeof weight !== 'undefined'); // false, as weight is not initialized just declared


// to check if the variable is null or not use == operator
console.log(weight == null); // true, as weight is not initialized it is undefined which is equal to null in JS         