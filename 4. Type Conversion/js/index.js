/* 
In this Section we will learn about 
Type Conversion in JavaScript

*/


// 1. for String


let a;
a = 25;
console.log(a , typeof a);
a = String(a);
console.log(a , typeof a);

a = 25.22;
console.log(a , typeof a);
a = String(a);
console.log(a , typeof a);


// like wise we can convert any data type to string

console.log("---------------------------");
//  2 . For Number

let b;
b = "125";
console.log(b , typeof b);
b = Number(b);
console.log(b , typeof b);

b = false;
console.log(b , typeof b);
b = Number(b);
console.log(b , typeof b);

b = ['a','b','c'];
console.log(b , typeof b);
b = Number(b);
console.log(b , typeof b);

//like wise we cannot convert string and object to number
// if it has a number value beside it's array we can convert it to number

// for this operation we can also use parseInt() and parseFloat() function
// eg:

let c;
c = "125.22";
console.log(c , typeof c);
c = parseInt(c);
console.log(c , typeof c);

c = "125.22";
console.log(c , typeof c);
c = parseFloat(c);
console.log(c , typeof c);


