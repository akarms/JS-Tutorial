console.log("hello world");
console.log(123456);
console.log(123.456);
console.log(true);
console.log([58,78,96,35]);
console.log({fname : 'Akar' , age : 25 });
console.table({fname : 'Akar' , age : 25 });
console.error("sample error");
console.warn("sample warning");
//console.clear(); it'll clear all the console before excecuterd this line
console.time("Timer");

for(i = 0 ; i < 10 ; i++){
    console.log(i);
}
console.timeEnd("Timer");
