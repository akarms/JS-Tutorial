let a = 10;
let b = 20;
let c = "10";

console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a == b); // false
console.log(a != b); // true

// == vs ===
// == only check value
// === check value and type
console.log(a == c); // true
console.log(a === c); // false

/*

logical operator
&& and operator
|| or operator
! not operator

*/
let marks = 50;
let attendance = 80;

console.log(marks > 40 && attendance > 75); // true
console.log(marks > 40 || attendance > 75); // true
console.log(!(marks > 40)); // false


