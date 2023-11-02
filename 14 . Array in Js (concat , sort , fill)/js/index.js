//--------------conat method---------------------------------------------------------------------------------
console.log("--------------concat method---------------");
/*  

The concat() method is used to merge two or more arrays.
 This method does not change the existing arrays, but instead returns a new array.

*/
 
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10 ]
//WE can also add extra element in concat method
arr3  = arr1.concat(arr2,11,12,13,14,15);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15 ]
//WE can also add extra arrays in concat method
arr3 = arr1.concat(arr2,[11,12,13,14,15]);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15 ]
arr3 = arr1.concat(arr2,['a' , 'b' , 'c']);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 'a', 'b', 'c' ]


//--------------sort method---------------------------------------------------------------------------------
console.log("--------------sort method---------------");
/*
The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon converting the elements into strings, 
eg :
*/

let string = ['e','d','c','b','a'];
string.sort();
console.log(string); // [ 'a', 'b', 'c', 'd', 'e' ]

//but this does not work for numbers
let number = [11,2,223,4,5 , 0];
number.sort();
console.log(number); // [ 0, 11, 2, 223, 4, 5 ]
/*
cz it converts the number into string and then sort it
like it get 1 as "one" and 2 as "two" and then compare them
*/


/*
Actually the sort function works by it get two values and compare them
if the first value is smaller then it return -1
if the first value is greater then it return 1
if the first value is equal then it return 0

as per that we can modify a little bit and use it for numbers

*/

number.sort((a,b) =>{
    return a - b ;
});

console.log(number); // [ 0, 2, 4, 5, 11, 223 ]

// if we put b -a then it will sort in descending order
number.sort((a,b) =>{
    return b - a ;
});

console.log(number); // [ 223, 11, 5, 4, 2, 0 ]


//    for complex objects

let users = [
    {
        name : "Akar",
        age : 22,
        city : "Bangalore"
     },
    {
        name : "Sihar",
        age : 23,
        city : "Singapore"
    },
    {
        name : "Shippu",
        age : 22,
        city : "Mannar"
    },
    {
        name : "Shadha",
        age : 13,
        city : "Puttalam,"
    },
    {
        name : "Leo",
        age : 45,
        city : "Bangalore"
    },
    {
        name : "Parthiban",
        age : 22,
        city : "Keshmir"
    },
    {
        name : "vikram",
        age : 50,
        city : "unKnwon"
    }
   
]


console.table(users);

//for sorting with age 
// in here a , b are objects and we are comparing the age of the object

users.sort((a , b) => {
    return a.age - b.age;
});

console.table(users); //it'll sort the users array with age

//for sorting with name
// in here a , b are objects and we are comparing the name of the object

users.sort((a , b) => {
    if( a.name > b.name) {return 1};
    if( a.name < b.name) {return -1};
    return 0;

} );

console.table(users);  //now it'll show as per the name ascending order




//--------------Fill method---------------------------------------------------------------------------------
console.log("--------------Fill method---------------");

/*

this fill() method used be like find and replace
it has three parameters
1. value
2. start index
3. end index

*/

//if we give only one parameter then it'll replace all the values with that value
let n1 = [1,2,3,4,5,6,7,8,9,10];
n1.fill(0);
console.log(n1); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

//if we give two parameters then it'll replace all the values from start index to end index with that value
//just like (valuse , start index )

n1 = [1,2,3,4,5,6,7,8,9,10];
n1.fill(0,2);  //start index is 2 and fill rest of the array with 0
console.log(n1); // [ 1, 2, 0, 0, 0, 0, 0, 0, 0, 0 ]

//if we give three parameters then it'll replace all the values from start index to end index with that value
//just like (valuse , start index , end index )

n1 = [1,2,3,4,5,6,7,8,9,10];
n1.fill(0,2,5);  //start index is 2 and end index is 5 and fill rest of the array with 0
console.log(n1); // [ 1, 2, 0, 0, 0, 6, 7, 8, 9, 10 ]
