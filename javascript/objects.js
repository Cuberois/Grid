 
//  const newob = {
//     name: "nikhil",
//     age : 22,
//     address :"CHD", //syntax
//     city : "hp",
//    email : "nikhilsharma@gamil.com"

// }
// console.log(newob.name);
// console.log(newob["address"]);  // access elements
// console.log(typeof newob.city); //check the typeof



// newob.age = "26"    // chnage any value in the object


// Object.freeze(newob);    // permanently store info

// newob.age = "23"
// console.log(newob);


// newob.greeting =function(){       // greeting use to access info same object reference

//     console.log(`hi i am ${ this.name}`);
// }
// console.log(newob.greeting());

// how to create an object

// const app = new Object // first to create an object
                     
// const nwapp = {}      // second way to create an object

// nwapp.id="name "
// nwapp.age="22"                             //insert elements
// nwapp.email="nikhilsharma787683@gamil"

// console.log(nwapp);



//object desturcturing

const ob = {
    name : "nikhil"
}

const{name : nikhilsharma} = ob
console.log(nikhilsharma)