// primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id == anotherid);


//Reference( non-primitive)
// Array, Objects, Funtions
const superheros = ["shaktiman", "Mass", "Doga"];
console.table(superheros);

let myobj = {
    name: "kishor",
    age: 22,
}
console.table(myobj);


const myFuntion = function(){
    console.log("kishor");
}

/*JavaScript is a dynamically typed language */

