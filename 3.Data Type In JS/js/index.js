/*
Java Script is an Dynamic Language 
So that we don't have to assign data type to variable

there are 2 types of data type in JS
1. Primitive Data Type
         eg : Number, String, Boolean, Null, Undefined, Symbol
2. Reference Data Type
            eg : Array, Object, Function, Date
*/

// by Typeof operator we can check the data type of variable
// eg :
let fname = "Rahul";
console.log( typeof fname);

var courses = ["HTML", "CSS", "JS"];
console.log(typeof courses);

var Student = ({
    "name" : "Rahul",
    "age" : 28
});
console.log(typeof Student);

var d = new Date();
console.log(d);
console.log(typeof d);