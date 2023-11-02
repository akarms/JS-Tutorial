/* 
in here we will learn about coercion


*/

// if we add two different data type then only data concatination will happen

let a = 25 ;
let b = "25" ;
console.log(a+b); // 2525

// if we add two same data type then only data addition will happen

b = Number (b);
console.log(a+b); // 50;

