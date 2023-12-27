/*there are some fuctions to use with arrays
1. map 
2. filter
3. reduce
4. find
5. includes


*/

const myarray = [1,2,3,4,5,6,7,8,9,10];

//--------------Map Function---------------------------------------------------------------------------------
console.log("--------------Map Function---------------");

/*map() is used to create a new array from an existing array
there are two parameters in map function
1. value  -- these pass the array of existing
2. index  -- these return the new elements of the array

map(value , index)
*/

const arr2 = myarray.map( elements => elements + 1);
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//--------------Filter Function---------------------------------------------------------------------------------
console.log("--------------Filter Function---------------");

/*filter() is used to create a new array from an existing array with some conditions
there are two parameters in filter function
1. value  -- these pass the array of existing
2. index  -- these return the new elements of the array

filter(value , index)
*/

const arr3 = myarray.filter( elements => elements > 5);
console.log(arr3); //[ 6, 7, 8, 9, 10 ]


//--------------Include Function---------------------------------------------------------------------------------
console.log("--------------Include Function---------------");

/*includes() is used to check whether the element is present in the array or not
there are one parameters in includes function
1. value  -- these pass the array of existing

and the fucntion will return true or false as boolean
includes(value , index)
*/

const arr4 = myarray.includes(5);
console.log(arr4); //true

const arr5 = myarray.includes(11);
console.log(arr5); //false


//we can use this function to check the position of an array

const arr6 = myarray.includes(5 , 4); //here the function is check the value 5 from the index 4  
console.log(arr6); //false

const arr7 = myarray.includes(5 , 5); //here the function is check the value 5 from the index 5
console.log(arr7); //true



//--------------Find Function---------------------------------------------------------------------------------
console.log("--------------Find Function---------------");

/*find() is used to find the element in the array
there are two parameters in find function
1. value  -- these pass the array of existing
2. index  -- these return the new elements of the array

find(value , index)
*/

const arr8 = myarray.find( elements => elements > 5); //it will return the first element which is greater than 5
console.log(arr8); //6

//we can use it also for object array

const users = [{id:1} , {id:2} , {id:3} , {id:4} , {id:5} , {id:6} , {id:7} , {id:8} , {id:9} , {id:10}];

const arr9 = users.find( elements => elements.id > 5); //it will return the first element which is greater than 5
console.log(arr9); //{ id: 6 }


//--------------Reduce Function---------------------------------------------------------------------------------
console.log("--------------Reduce Function---------------");

/*reduce() is used for two things
1. to endup with one value in the end
2 iteraing over an array

it also has two parameters
1. current value
2. accumulator

*/

const array = [1,2,3,4,5];

const nums = array.reduce((accumulator , currentvalue) => { //here the accumulator is the value which is returned from the function
    return accumulator + currentvalue;
});
console.log(nums); //15

/* actually what is happening here is for first itereation acc = 0 and cv = 1
so it'll return 0 + 1 = 1 and this 1 will be the acc for the next itereation
so for the next itereation acc = 1 and cv = 2
so it'll return 1 + 2 = 3 and this 3 will be the acc for the next itereation

that's how it'll work
*/

const nums1 = array.reduce((acc , cv) =>  acc + cv , 2);
console.log(nums1); //15
//the purpose of the 0 is to set the acc value to 0 for the first itereation
//if i set 2 instead of 0 then the first itereation will be 2 + 1 = 3 and the next itereation will be 3 + 2 = 5 and so on









 

