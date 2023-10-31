/* 
in here are going to learn about 

var  - - first first introduced ( old  )
let 
and const

*/

var a = 25 ;
var b = 35 ;
console.log(a + b);
console.log("-----Scope------");

//------------------------------------------------------------------------------------------------------------------------
/* 
           1.Scope 

           var - it will act as globla variable always 
           let , const - it will act as  only local variable

*/

if(true)
{
    var msg = "Hello";
    let msg2 = "Hello2";
    const msg3 = "Hello3";
}

console.log(msg);
            //See in here even though after the if condition's {} it's working
  //console.log(msg2); 
              //in here it'll give error because Let won't alloa to act as global variable
  //console.log(msg3);
                // So const will also not allow to act as global variable
  

console.log("-----Redeclaration------");
//------------------------------------------------------------------------------------------------------------------------
 /*
 2. Redeclaration
    var - it will allow to redeclare the variable
    let , const  - it will not allow to redeclare the variable
 */  

//we have already declared the variable a and b in the above 
var a = 25 ;
console.log(a);
a = 35;
console.log(a);
//See in here it's working

/*
let b = 25 ;
  See in here it'll give error because Let won't allow to redeclare the variable
*/
  
/*
const a = 25 ; 
 See in here also  it'll give error because const won't allow to redeclare the variable
*/

console.log("-----Reassignment------");
//------------------------------------------------------------------------------------------------------------------------
/*
3. Reassignment
    var , let - it will allow to reassign the variable
    const - it will not allow to reassign the variable
*/

var c = 25 ;
console.log(c);
c = 35;
console.log(c);
//See in here it's working

let d = 25 ;
console.log(d);
d = 35;
console.log(d);
//See in here it's working

const e = 25 ;
console.log(e);
//e = 35;
//so const can't be chaneged in variable 

//But Const can when it's an object

const obj = ({name : "Akar" , age : 25});
console.table(obj);
obj.age = 23 ;
console.table(obj);