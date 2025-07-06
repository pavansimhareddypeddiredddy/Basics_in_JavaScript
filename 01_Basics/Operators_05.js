//opearators are the symbols that perform operations on values and variables.
let num1 = 10;
let num2 = 20;
console.log(num1+num2);  //30
console.log(num1-num2);   // -10
console.log(num1*num2);  //200
console.log(num1/num2);    //0.5  (gives you quotinent value when num1 value divided with num2)
console.log(num1%num2);    //10  (gives you remainter value when num1 value divided with num2)
console.log(-num1);       //-10
console.log(-(-num1));    //10
console.log(10+"20");   //1020
console.log("10"+20);    //1020
console.log("10"+"20");   //1020
console.log(10+20+"30");    //3030  (first it assume as a number and add upto 10+20 later  it is string so it will do concatination)
console.log("10"+20+30);     //102030  (even the first value is string so it starts and ends with concatination rather adding of non string values)
console.log(10+20 * 30 /5);    //130 (follows BODMAS rule)
console.log(num1++);   //10  (post increment will print the value that stores in that variable and increment for next  time you print or uses )
console.log(++num1);   //12 (pre increment will update the value and then prints  or uses the value);
console.log(true); //  true ( true is a boolean data type returns the same )
console.log(+true); // 1 (keeping +  infront of boolean values gives you its number data type );
console.log(+""); // 0(empty string converted into nunmber gives u 0);
console.log(+" "); //1 (non empty string contains space)
console.log(+"01"); // 1 ( as it converts into number 01 becoms 1);