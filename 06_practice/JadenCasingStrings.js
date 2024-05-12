String.prototype.toJadenCase = function () {
    return this.split()
     .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
     })
     .join(" ")
    
}

const str = "kishor is best"
console.log(str.toJadenCase());




// function line(string) {
//     const str = string
//     console.log(str);
// }

// line(" withouth second thought")