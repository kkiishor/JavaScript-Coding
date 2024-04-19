const name = "kishor"
//const name = new String('kishor'); another type to declare string
const repoCount = 50

//console.log(name + repoCount);

console.log(`My name is ${name} and my repo count is ${repoCount}`);
console.log(name[0]);

const gamename = new String('bumble-bee')

console.log(gamename.toUpperCase());
console.log(gamename.charAt(0));
console.log(gamename.indexOf('l'));

const subpart = gamename.substring(0, 4);
console.log(subpart);

console.log(gamename.slice(4, 8));
