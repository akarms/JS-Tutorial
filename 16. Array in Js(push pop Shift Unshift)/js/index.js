//--------------Push Function---------------------------------------------------------------------------------
console.log("--------------push Function---------------");

/*
push fuction can be used for adding more elements to the array
this's function will change the original array
while executing this function it'll return the length of the array

*/

let n = [1,2,3,4,5,6,7,8,9,10];
console.log(n); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(n.push(11));
console.log(n); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11]
// you can add multiple elements at once
n.push("hello" , "world" , 122 , 123.45);
console.log(n); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 'hello', 'world', 122, 123.45 ] 

//also this can be used for merging two arrays

let n1 = [1,2,3,4,5,6,7,8,9,10];
let n2 = [11,12,13,14,15,16,17,18,19,20];
n1.push(...n2);
console.log(n1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


//--------------Pop Function---------------------------------------------------------------------------------
console.log("--------------Pop Function---------------");

/*
pop function can be used for removing the last element from the array
while executing this function it'll return the element which is removed

*/

let fname = ["akar" , "akash" , "akshay" , "akshat" , "akshita"];
console.log(fname); // [ 'akar', 'akash', 'akshay', 'akshat', 'akshita' ]
console.log(fname.pop());
console.log(fname); // [ 'akar', 'akash', 'akshay', 'akshat' ]


//--------------Shift Function---------------------------------------------------------------------------------
console.log("--------------Shift Function---------------");

/*

shift function can be used for removing the first element from the array
while executing this function it'll return the element which is removed

*/

let lname = ["akar" , "akash" , "akshay" , "akshat" , "akshita"];
console.log(lname); // [ 'akar', 'akash', 'akshay', 'akshat', 'akshita' ]
console.log(lname.shift());
console.log(lname); // here akar has removed


//--------------Unshift Function---------------------------------------------------------------------------------
console.log("--------------Unshift Function---------------");

/*
 this is an opposite of push function
    while push added elements in last it can be used for adding elements at the beginning of the array
    while executing this function it'll return the length of the array
*/

let mname = ["akar" , "akash" , "akshay" , "akshat" , "akshita"];
console.log(mname); // [ 'akar', 'akash', 'akshay', 'akshat', 'akshita' ]
console.log(mname.unshift("hello"));
console.log(mname); // [ 'hello', 'akar', 'akash', 'akshay', 'akshat', 'akshita' ]

mname.unshift(...fname);
console.log(mname); // [ 'akar', 'akash', 'akshay', 'akshat', 'akshita', 'hello', 'akar', 'akash', 'akshay', 'akshat' ]