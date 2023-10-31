let fname = "John";
let lname = "Doe";

//concordination

let fullname = fname + " " + lname;
console.log(fullname); //John Doe

//concat method
 fullname = fname.concat(" ", lname);
 console.log(fullname); //John Doe

 //append method
 fullname = fname ;
 fullname += " ";
 console.log(fullname); //John
 fullname += lname;
 console.log(fullname); //John Doe

 //escape character
// we can put \ before the character to escape it
let message = "It's alright";
console.log(message); //It's alright
// or we can use double quotes
message = 'It\'s alright';  //in here we are escaping the 
//single quote by putting \ before it
console.log(message); //It's alright

//length property
let c = fname.length;
console.log(c); //4

//change all charecters to uppercase
c = fname.toUpperCase();
console.log(c); //JOHN

//change all charecters to lowercase
c = fname.toLowerCase();
console.log(c); //john

//find the array number of a charecter
c = fname.indexOf("o");
console.log(c); //1

//find the last array number of a charecter
c = fname.lastIndexOf("o");
console.log(c); //2

//find the charector of an array number
c = fname.charAt(2);
console.log(c); //h

//find the ascii value of a charecter
c = fname.charCodeAt(2);
console.log(c); //104

console.log("------------SUBSTRING-------------------")
//---------------------SUBSTRING-----------------------------------------------------------------------------
//1.Seperate a string 
c = fname.substr(0,3);
console.log(c); //Joh

c = fname.substring(0,3);
console.log(c); //Joh

//2.using substring you can get the rest of the number by giving only one number
 let text = "0123456789";
 c = text.substring(5);
 console.log(c); //56789

//3.IN SUBSTRING IF YOU give the first number bigger than the second number it will swap the numbers
c = text.substring(5,2);
console.log(c); //234

//4.in substring if you give the limit bigger that that contain 
//it won't take anything
c = text.substring(16,20);
console.log(c);

console.log("------------SLICE-------------------")
//---------------------SLICE-----------------------------------------------------------------------------

text = "0123456789";
//1.slice is same as substring  
c = text.slice(5);
console.log(c); //56789

 // starting point and ending point
 //in here including starting point to before ending point
c = text.slice(2 ,4);
console.log(c); //23


//2.slice can't swap the numbers
c = text.slice(5,2);
console.log(c); //empty string

//3.slice can't take the limit bigger than that contain
c = text.slice(16,20);
console.log(c); //empty string

//4.slice can take negative numbers
//in here it'll print last four number
c = text.slice(-4);
console.log(c); //6789

//5.slice can take negative numbers
c = text.slice(-4,-2);
console.log(c); //67



console.log("------------Split-------------------")
//---------------------Split-----------------------------------------------------------------------------

//1.split a string into an array of substrings
// we can split the arrray by giving the charecter that we want to split
let a = "I am Batman da Venna Mavane";
 c = a.split(" ");  //here we are splitting the array by space
console.table(c); //["I", "am", "Batman", "da", "Venna", "Mavane"]

c = a.split("a");  //here we are splitting the array by a
console.table(c); //["I ", "m B", "tm", "n d", " Venn", " M", "v", "ne"]




console.log("------------Replace-------------------")
//---------------------Replace-----------------------------------------------------------------------------


a = "I am Batman da Venna Mavane";

//1.replace a string with another string

c = a.replace("Batman" , "Spiderman");
console.log(c); //I am Spiderman da Venna Mavane


console.log("------------Replace-------------------")
//---------------------Replace-----------------------------------------------------------------------------
