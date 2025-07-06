// comparsions(>,<,<=,>=) and equalitychecks(==,===) are different comparision will convert the either side values into number data type as equality check wont do that 

console.log(2=="2");  //true
console.log("2"==2);  // true

// comparisions between null and 0
console.log(null == 0);  // false (because null is undefined not equal to 0 when equality operators come into action)
console.log(null > 0);   // false( comparision operator will makes the null into Number type and becomes 0 so 0>0 is false)
console.log(null>=0);   // true ( as  null converts into number datatype so null becomes 0 and 0>=0 gives u true)
console.log(null<=0);  // true( guess why)



// comparisions between undefined and 0
console.log(undefined == 0);  //false ( undefined and null are same but not with 0 when equality check is there so false )
console.log(undefined == null); // true (as said undefined is equall to null when equality check is there so true)
console.log(undefined === null ) ; //false ( strict equality will compare data types of both , as we know data type of undefined is undefined and for null is object so returns false)
console.log(undefined >0);   // false  (undefined converted into Nan(not a number) when comparision operator arise . and everything that compared with Nan gives us false)
console.log(undefined <0);    // false
console.log(undefined >= 0 );  // false
console.log(undefined <=0);   // false
