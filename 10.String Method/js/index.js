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


console.log("------------Includes-------------------")
//---------------------Includes-----------------------------------------------------------------------------

// we can use include function for find whether a string is in the array or not.

const pets = ['cat' , 'dog' , 'cow'];

c = pets.includes('cat');
console.log(c); //true
c = pets.includes('bat');
console.log(c); //false;


console.log("------------Trim-------------------")
//---------------------Trim-----------------------------------------------------------------------------

// by this function we can clean the white spaces in the string
//So that it'll helpful when to verify username or password like that

a ="   Akar   ";
//now see the lengtg of the string
console.log(a.length); //10
a = a.trim();
console.log(a.length); //4


console.log("------------PadStart-------------------")
//---------------------PadStart-----------------------------------------------------------------------------

//By this function we can add any charecter to the start of the string
// we needs to define the starting letter and what charector we have to add in the starting


a = "5";

a = a.padStart(4,0); //in here we define that we it needs to add more 3 charactors which has to be 0
console.log(a); //0005

//or 
a = "H";
a = a.padStart(4 , 'A');
console.log(a);  //AAAH

console.log("------------PadEnd-------------------")
//---------------------PadEnd-----------------------------------------------------------------------------

// By this fuction we can add any extra values in last

a = "5";
a = a.padEnd(4 , 0);   // so that we define we needs to add 4 times '0' in last  
console.log(a); //5000

a = "H";
a = a.padEnd(4 , 'A');
console.log(a);



console.log("------------Long Literal String-------------------")
//---------------------Long Literal String-----------------------------------------------------------------------------

//we can Write long String like Concordination 
let lngString = "This is a very long string which needs " +
 "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
console.log(lngString);

// also we can add \n to break the line
lngString = "This is a very long string which needs \
 to wrap across multiple lines because \
  otherwise my code is unreadable.";
console.log(lngString);

//or we can use backtick
lngString = `This is a very long string which needs 
to wrap across multiple lines because 
 otherwise my code is unreadable.`;



 
console.log("------------ASCII to String-------------------")
//---------------------ASCII to String-----------------------------------------------------------------------------


// we can use String.fromCharCode() function to convert ASCII to String
c = String.fromCharCode(65 , 66 , 67);
console.log(c); //ABC


