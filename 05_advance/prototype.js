// let myname = "kishor     "
// console.log(myname.trim().length);


let myheros = ["thor", "spiderman", "superman"]

let heropower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function () {
       // console.log('spidy power is ${this.spiderman}');
    }
}
// myheros.hitesh()



const teacher = {
    makeVideo: true
}
const supportMan = {
    isAvailable: false
}
const TAsupport={
    makeAssi: "js assi",
    fulltime: true,
    // __proto__: supportMan
}

TAsupport.__proto__ = supportMan
console.log(TAsupport);

