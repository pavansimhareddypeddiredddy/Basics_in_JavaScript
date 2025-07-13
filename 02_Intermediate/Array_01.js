// ✅ Array defined using square brackets (Array Literal)
let fruits = ["apple", "grapes", "watermelon", "orange", "banana"];

// ✅ Array created using Array constructor
let cities = new Array("hyderabad", "bangalore", "vijayawada", "chennai", "nandyal");

// ✅ Arrays in JS can hold mixed datatypes
let userInfo = ["pavan simha reddy", 12210501, 76.5];

// ✅ Printing all arrays
console.log("Arrays that are created...");
console.log("Fruits:", fruits);
console.log("Cities:", cities);
console.log("User Info:", userInfo);

// ✅ Accessing array elements using index
console.log(`fruits[0] = ${fruits[0]} (first element)`); // index starts from 0
// Last index = array.length - 1

// ✅ Adding elements using push (adds to end of array)
cities.push("kurnool");
fruits.push("dragonfruit");

console.log("After push() method:");
console.log("Fruits:", fruits);
console.log("Cities:", cities);

// ✅ Removing last element using pop()
cities.pop();
fruits.pop();
userInfo.pop(); // removes last element from mixed array

console.log("After pop() method:");
console.log("Fruits:", fruits);
console.log("Cities:", cities);
console.log("User Info:", userInfo);

// ✅ Adding at the beginning using unshift()
console.log(`Using unshift() to add at beginning and shift() to remove from beginning`);
cities.unshift("allagadda");
console.log("After unshift:", cities);

// ✅ Removing first element from index 0 using shift()
cities.shift();
console.log("After shift:", cities);

// ✅ includes() checks for the patricular element presence in the element (returns boolean)
console.log(`cities.includes("mumbai") = ${cities.includes("mumbai")}`); // false

// ✅ indexOf() returns index or -1 if not found
console.log(`cities.indexOf("hyderabad") = ${cities.indexOf("hyderabad")}`); // 0
console.log(`cities.indexOf("mumbai") = ${cities.indexOf("mumbai")}`); // -1

// ✅ join() converts array to string
console.log("join() is used to convert the array into the string with commas(default) separated");
const newArr = cities.join(" ");
console.log("Array joined as string:", newArr);

// ✅ slice() returns sub-array without changing original
console.log("Using slice(0, 3):", cities.slice(0, 3)); // only print the indexes of 0,1,2
console.log("Cities after slice:", cities); // unchanged

// ✅ splice() removes elements and changes original array  
// arrayname.splice(start index, no of elements should deleted,adding 1 new element,adding 2nd new element)
console.log(`using cities.splice(0,3,"allagadda","kadapa") we are removing 3 elements starting from the index 0 and adding 2 new elements into the array at starting ${cities.splice(0,3,"allagadda","kadapa")}`); // indexes that print are 0,1,2,(count is 3)
console.log("Cities after splice:", cities); // modified array with removal of spliced elements 

// 🧠 Summary:
// - slice() is like copy-paste (non-destructive) 
// - splice() is like cut-paste (destructive)
