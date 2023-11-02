let a = [10 , 20 , 30 , 40];
console.log(a);
console.table(a);
console.log(a[1]);

let b = new Array(10 , 20 , 30 , 40 );
console.log(b);
console.table(b);

let c = new Array("Akar" , 30 , 30.32 , false ,
 {"name" : "akar" , "age" : 22
});

console.table(c);


//So in an array we can add any type of format
// methods for array

//1. forEach method
console.log("------------forEach method-----------------");

// by using forEach methord you can access value , index , array and it'll work in a loop
// in the foreach value , index , array  this is the order of the parameter

let numbers = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];

//This will print all the value
numbers.forEach((value)=> {  //the meaning of => is passing the value
    console.log(value);
})

//this will print all the value with index
numbers.forEach((value , index  ) => {
    console.log(index , value );
})


const users = [
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

users.forEach((value) =>
{
    console.log(value.name);
});

users.forEach((value , index) => {
    console.log(index , value.name , value.age , value.city);
});




//2. map method
console.log("------------map-----------------");

numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
/* 
This method also contains 3 perameter 
valus , index , array
index and arrays are optional

you can create a new array with any functional of an old 
Eg : if you wanna make an array with the squre root of all ablove numbers

*/

let sqrt = numbers.map((value) =>{
return(Math.sqrt(value));
});

console.table(sqrt); 
//So this is how you make a new square rooted array of something
//for complex array system

  let Student = [
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

//assume we are going to make the same array with eligible list(check whether they are adults or not)
// for complex System we use () before {}

let eligible_list = Student.map((user) => ({
     name : user.name,
    age : user.age,
    city : user.city,
    eligible : user.age >= 18 ? "Eligible" : "Non Eligible",
})
);

console.table(eligible_list);

//or else for return old perameters without any changes we can use 
//Spread operator (...)  , it'll return the same

eligible_list = users.map((user) => ({
    ...user,
    Eligible : user.age>= 18 ? "Eligible" : "Not eligible"

}));

console.table(eligible_list);

//see same table