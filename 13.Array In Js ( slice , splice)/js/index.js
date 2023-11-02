

//--------------Slice method---------------------------------------------------------------------------------
console.log("--------------Slice method---------------");
/*  
Slice method is used to copy the array elements from one array to another array.
We can slice the array from any index to any index.
it has two operational parameters.
1. start index
2. end index
but it's not compulsory to pass both the parameters.
last index is not included in the slice method.
*/

 let arr = [1,2,3,4,5,6,7,8,9,10];
 let arr2 = arr.slice(2); // it will copy the array from index 2 to end of the array.
 console.log(arr2); // [3,4,5,6,7,8,9,10]

    let arr3 = arr.slice(2,5); // it will copy the array from index 2 to index 5.
    console.log(arr3); // [3,4,5]

    //--------------Splice method---------------------------------------------------------------------------------
console.log("--------------Splice method---------------");
/*  
Splice is to remove the elements from the array.
it will change the original array.
it has three operational parameters.
1. start index
2. count of elements to be removed
3. elements to be added

we can save the removed elements in a variable array.

*/

//by slice we can remove the elements from the array.

let n1 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array before splice: "+n1);
let removed_elements = n1.splice(2); // it will remove the elements from index 2.
console.log("Original array after splice: "+n1);    // [1,2]
console.log("Removed elements: "+removed_elements); // [3,4,5,6,7,8,9,10]

//if we give start index and count of elements to be removed then it will remove
// the elements from the start index to the count of elements.
let n2 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array before splice: "+n2);
let removed_elements2 = n2.splice(2,5); // it will remove the elements from index 2 to 5.
console.log("Original array after splice: "+n2);    // [1,2,8,9,10]
console.log("Removed elements: "+removed_elements2); // [3,4,5,6,7]


//by slice we can remove the elements from the array and add the elements to the array.

let n3 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array before splice: "+n3);
let removed_elements3 = n3.splice(2 , 2 , 10 , 11);  // it will remove the elements from index 2 to 2 and add 10 and 11 to the array.
console.log("Original array after splice: "+n3); // [1,2,10,11,5,6,7,8,9,10]
console.log("Removed elements: "+removed_elements3); // [3,4]

// also when we add add array for removed part then it will add the array elements to the array.
//and it'll be seperated

let n4 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array before splice: "+n4);
let removed_elements4 = n4.splice(2 , 2 , [10 , 11]); // it will remove the elements from index 2 to 2 and add 10 and 11 to the array.
console.log(n4); // [1,2,[10,11],5,6,7,8,9,10]
console.log("Removed elements: "+removed_elements4); // [3,4]


//also we can add elements to the array without removing any elements from the array.
let n5 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array before splice: "+n5);
let removed_elements5 = n5.splice(2 , 0 , 10 , 11); // it will add 10 and 11 to the array.
console.log(n5); // [1,2,10,11,3,4,5,6,7,8,9,10]
console.log("Removed elements: "+removed_elements5); // []


