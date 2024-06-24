const myarr = [1,2,3,4,5,6,7,8] // syntax

console.log(myarr[2]); // access element in the array

myarr.push(9);  // add element with the help of push() methods

myarr.pop();    // delete element at the last pop() methods
console.log(myarr);  // both push&pop insert and delete element at th last-----


console.log(myarr.slice(1,3));  // slice methods not determine the last index value


console.log(myarr.splice(1,3)); // splice methods determine the last index value



// HOW TO ADD THE THE TWO ADD & MERGE ARRAY


const arr = [ 1, 2 , 3 ,4 ,5]
const nwarr = [ 6,7,8,9 ,10]

const mynwarr= arr.concat(nwarr); // concat methods--->ADD & MERGE TWO  ARRAY
 console.log(mynwarr);   




const arrw =[...arr,...nwarr] //seprade methods---> ADD & MERGE TWO  ARRAY
console.log(arrw);


const arrg = [1,1,23,2,3[2,323,[34,242,]]]
const anoarr = arrg.flat(Infinity)
console.log(anoarr);                     // multiple array covert into single array



console.log(Array.isArray("nikhil"));  //check isarray 

console.log(Array.from("nikhil"));  // covert into array

let a= 3;
let b = 4;
let c = 5;
console.log(Array.of(a,b,c));     //of & from ---->covert into array






