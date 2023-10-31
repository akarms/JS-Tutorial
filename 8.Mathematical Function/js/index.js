let c;

c = Math.PI;
console.log(c); //3.141592653589793

// round will round the number to the nearest integer
c = Math.round(4.7);
console.log(c); //5

c = Math.round(4.4);
console.log(c); //4

// ceil will round the number up to the nearest integer
//in here even though 4.4 is closer to 4, it will round up to 5
c = Math.ceil(4.4);
console.log(c); //5

// floor will round the number down to the nearest integer
c = Math.floor(4.7);
console.log(c); //4

c = Math.sqrt(64);
console.log(c); //8

// abs will return the absolute (positive) value of the number
c = Math.abs(-4.7);
console.log(c); //4.7

//trunc will remove the decimal part of the number
c = Math.trunc(4.2333); //4
console.log(c);

//for the power of a number we use pow
c = Math.pow(2,4); //2 to the power of 4 = 16
console.log(c); //16

//minumum 
c = Math.min(0, 150, 30, 20, -8, -200); 
console.log(c); //-200

//maximum
c = Math.max(0, 150, 30, 20, -8, -200);
console.log(c); //150

c = Math.random(); //random number between 0 and 1
console.log(c); 
c = c * 10;
c = Math.trunc(c);
console.log(c); //0.123456789

//random number between 0 and 50

c = Math.random();
console.log(c); //0.123456789
c = Math.floor((Math.random() * 50) + 1);
console.log(c); 

//for knowing the sign of an number whether it is positive or negative

c = Math.sign(-4);
console.log(c); //-1
//if it is positive it will return 1
// else if it's negetive will return -1
// and if it's 0 it will return 0
c = Math.sign(4);
console.log(c); //1
c = Math.sign(0);
console.log(c); //0

// for knowing the log of a number
c = Math.log(10);
console.log(c); //2.302585092994046

// for knowing the log10 of a number
c = Math.log10(10);
console.log(c); //1

// for knowing the sin of a number
c = Math.sin(10);
console.log(c); //-0.5440211108893698

// for knowing the cos of a number
c = Math.cos(10);
console.log(c); //-0.8390715290764524