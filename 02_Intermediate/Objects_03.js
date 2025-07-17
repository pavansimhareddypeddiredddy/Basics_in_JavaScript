// // objects are stored in key value pairs
// // key : value (name : "pavan");

// // METHODS TO CREATE AND DECLARE AN OBJECT

//      //(1) literal method
//         const obj1 = {
//             "name" : "pavan simha ",
//             age : 21,
//         }
//         console.log(obj1); 
//         obj1.name = "reddy";  //updating the value 
//         console.log(obj1["name"]); //recommended to  use bracket notation to acces the elements from object

//     //(2)  new Object() method
//         const obj2 = new Object();  // created an empty object
//         obj2.name = "mahesh";   // adding data into empty object
//         obj2["age"] = 22;  // adding data in bracket notation(recommended).
//         console.log(obj2);


//     // (3)  using ES6 class 
//         class User{

//         constructor(name,age){
//             this.name = name;  
//             this.age= age;
//         }

//         greet(){
//             console.log(`hey this is ${this.name} and i am ${this.age} years old.`);
//         }

//         }
//         const obj3 = new User("virat",18); // passing the values into paticular keys using function constructor

//         obj3.age(36); // updating the values 
//         obj3.greet(); // method 


// // OBJECT PROPERTIES AND OBJECT METHODS

//     // object properties: the variables that are inside the object is called as object properties
//     // object method: the functions that are inside the object is called as object methods
//         const obj4 = {
//             name : "narasimha", // object property
//             greet(){ // object method
//                 console.log(`hello i am ${this.name}.`);
//             }
//         };



// // DOT NOTATION VS BRACKET NOTATION
  
//     // Recommended to use bracket notation 
//     // use dot notation if there is no dynamic values, special characters, and spacing between the keys
//         // (1) dot notation

//         const obj5 = {
//             studentId : 10,
//             studentname : "pavan",

//         }
//         console.log(obj5.studentId);//accessing object properties using dot notation
 
//         // (2) bracket Notation
//         const obj6 = {
//             "first name":"pavan simha reddy", // use bracket notation when spacing between the key 
//             "last-name":"peddi reddy",
//             "country" : "india",
//         }
//         const dynamicKey = "country";
//         console.log(obj6[dynamicKey]);//Output: india
//         console.log(obj6["first name"]); // accessing object properties using bracket notation

    
// // NESTED OBJECT
 
//     // can create N number of nested objects 
//     const nestedObject = {
//         name : "pavan simha reddy",
//         //nested object
//          address:  {  
//             village : "chinna kandukuru",
//             city : "allagadda",
//             pincode : 518543,
//         }
//     }
//     // to acces values in nested objects 
//     console.log(nestedObject.address.pincode); // Output:518543


// // DESTRUCTURING 
// // Destructuring is used to get the object/Array properties as the variables in javascript

//     //(1) Normal Destructuring 
    
// const obj7 = {
//     name: "pavan simha reddy",
//     age: 21,
//     address : {
//         city: "allagadda",
//         pincode: 518543,
//         state: "andhra Pradesh",
//     }
// };

// // To extract name and age using destructuring
// {
// const { name, age } = obj7;  // Syntax: const { property_names } = object_name;
// console.log(name); // Output: pavan simha reddy
// console.log(age);  // Output: 21
// }

// {
//     // (2) changing property names
//     // syntax = variable_Type {object_propery_name : updated_name} = object_name
//     const {name: newName , age : newAge} = obj7; 
//     // console.log(name); // gives you error because the name is changed to newName
//     console.log(newName);
//     console.log(newAge);
// }

// {
//     // (3) default value: if there is any missing key you can set it default also
//     const {  name,age,city="allagadda"} = obj7;
//     console.log(name);
//     console.log(age);
//     console.log(city);

// }

// {

//     //(4) nested destructuing
//     const { address : {city,pincode,state}} = obj7;
//     console.log(city); // allagadda
// }
