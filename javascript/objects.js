 
 const newob = {
    name: "nikhil",
    age : 22,
    address :"CHD", //syntax
    city : "hp",
   email : "nikhilsharma@gamil.com"

}
// console.log(newob.name);
// console.log(newob["address"]);  // access elements
// console.log(typeof newob.city); //check the typeof



// newob.age = "26"    // chnage any value in the object


// Object.freeze(newob);    // permanently store info

// newob.age = "23"
// console.log(newob);


newob.greeting =function(){       // greeting use to access info same object reference

    console.log(`hi i am ${ this.name}`);
}
console.log(newob.greeting());