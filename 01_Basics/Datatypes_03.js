// data types are the type of data that we are storing in variables.

// CLASSIFIED INTO 2 TYPES PRIMITIVE(CALL BY VALUE) AND NON PRIMITIVE(CALL BY REFERENCE)

//(1)  CALL BY VALUE(PRIMITIVE) : A COPY IS TAKEN AND UPDATED , ORIGINAL REMAINS UNCHANGED 

      // let age = 18;
      // updatedAge(age); // function calling with paramter age
      // function updatedAge(x){
      // x= 21; // a copy(x) taken from the original variable(age) and changed inside the function only
      // console.log("inside function "+x); // prints 21 because this is copy.
      // }
      // console.log("Outside the function: "+age);// unchanged remains same as 18 

// Again in primitive there are 7 types(number,bigint,string,boolean,null,undefined,symbol)

      let userId = 1;       //  number : inclues both decimal and integers
      
      //  bigint : usally for the big numbers
      let big1 = 1234567890123456789012345678901234567890n;     // add 'n' at the end
      let big2 = BigInt("1234567890123456789012345678901234567890");  // using constructor
 
      let name = "pavan simha reddy"  //  string : charaters , words and lines comes in string under
      let userLoggedIn = true     //  boolean: just true or false
      let temperature= null   //   null : intentionally keeping and empty value in a variable  // type of null is object as per bitpattern(000) same for object and null
      let weight;     //    undefined : just creating a variable without assinging value comes under undefined
     //     symbol: for uniqueness even values  are same  in 2 variables shows not equal.
       let name1 = Symbol("pavan");
       let name2 = Symbol("pavan");
       console.log(name1==name2);  //false
       console.log(name1===name2);  //false



// (2) CALL BY REFERENE(NON-PRIMITIVE) : UPDATION WILL DIRECTLY CHANGED IN ORIGINAL ONE

//      let person = { age : 18}; // object created 
//      function updatedPerson(person){ //function body
//       person.age= 21;
//       console.log("inside function: "+person.age)  //21
//      }
//      updatedPerson(person); //calling functiont to update the age 
//      console.log("outside function: "+person.age); // 21

//   Types in call by reference (Array,Object, function)

// OBJECT 
//   let studentInfo = {
//       name:"pavan simha reddy",
//       age:21,
//       weigh:75.6,
//   }

//ARRAY 
// let heros = ["soldiers","doctors","farmers"];


// FUNCTION
// let num1 = 5;
// let num2 = 10;
//  function sumOfTwoNumbers (num1,num2){
//    console.log(num1+num2);
//  }



