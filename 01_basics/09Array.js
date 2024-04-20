const heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//const mix = heros.concat(dc)
//console.log(mix);


//const allheros = [...heros, ...dc]
//console.log(allheros);


const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, ]]]
const realAnother = another.flat(Infinity)
console.log(realAnother);