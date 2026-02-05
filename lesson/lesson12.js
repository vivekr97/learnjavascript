// "use strict"; it makes old javascript code to newer version of code
//alert(3+4); this we r usng in browser not in node js

// age=19
// console.log(typeof age);
// //to check datatype == how?
//  console.log(typeof "Vive") == String
//  console.log(typeof 18)== number
//  console.log(typeof null)== object *************
//  console.log(typeof undefined)== undefined
// Data type
//  1. string == "" or '' 
//  2. number== 1,2,3,..
//  3. boolean == true / false
//  4. null == if we assign null to any variable then it is null
//  5. undefined == if we declare variable but not assign any value then it is undefined
 

//Conversion of data types
let age= 'viv'
// console.log(typeof age);
// console.log(typeof (age));

// let newage=Number(age)
// console.log(typeof newage);
// console.log(newage);

// what we learn in conversion?
// 33 => o/p is 33 number
// 33abc => o/p is NaN    Not a number
// abc33 => o/p is NaN
// true => o/p is 1
// false => o/p is 0
// null => o/p is 0
// undefined => o/p is NaN

let isloggedin = ""
let booleanIsloggedin=Boolean(isloggedin)
console.log(booleanIsloggedin);
console.log(typeof booleanIsloggedin);

// what we learn in boolean conversion?
// 1=> o/p is true
// 0=> o/p is false
// "viv"=> o/p is true 
// ""=> o/p is false
// null=> o/p is false
// undefined=> o/p is false
// NaN=> o/p is false
console.log(typeof NaN);
locognsole.log("vivek is    greate")