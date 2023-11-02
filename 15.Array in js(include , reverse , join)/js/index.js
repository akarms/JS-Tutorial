//--------------Include method---------------------------------------------------------------------------------
console.log("--------------include method---------------");

/*  
We have already learnt that includes() method is used to check whether 
a particular element is present in the array or not.

it also has three perameters
1. element
2. start index


*/
let products = ["Apple", "Mango", "Banana", "Orange", "Pineapple" , "Grapes"];

// if we want to check whether "Apple" is present in the array or not

let c = products.includes("Apple");
console.log(c); //true 

// if we want to check whether "Apple" is present in the array or not from index 2
c = products.includes("Apple", 2);
console.log(c); //false

// if we want to check whether "banana" is present in the array or not from index 2 
c = products.includes("Banana", 2);
console.log(c); //true


//--------------Join method---------------------------------------------------------------------------------
console.log("--------------join method---------------");

/*

in join method you can convert any array format to String Format
and it'll consider as One String Onlt 

It has One perameter that is Seperator
putting seperator is optional only

if we don't use any seperator then it'll consider as comma(,) as seperator
otherwise we can declare the seperator

*/

let arr = ["Apple", "Mango", "Banana", "Orange", "Pineapple" , "Grapes"];

let str = arr.join();
console.log(str); //Apple,Mango,Banana,Orange,Pineapple,Grapes

str = arr.join(" ");
console.log(str); //Apple Mango Banana Orange Pineapple Grapes

str = arr.join(" - ");
console.log(str); //Apple - Mango - Banana - Orange - Pineapple - Grapes


//--------------reverse method---------------------------------------------------------------------------------
console.log("--------------reverse method---------------");

const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.reverse();
console.log(nums); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Array element with Length property

const x = {0 : 10 , 1 : 20 , 2 : 30 , 3 : 40 , 4 : 50 , length : 5};
//these are the array element with length property
// these are a special type of array called Array like Object

console.log(x); //{0: 10, 1: 20, 2: 30, 3: 40, 4: 50, length: 5}

//there is a function called array.prototype.reverse.call(x)
//it'll reverse the array element with length property

Array.prototype.reverse.call(x);
console.log(x); //{0: 50, 1: 40, 2: 30, 3: 20, 4: 10, length: 5}

