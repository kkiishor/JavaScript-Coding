const user = {
    username: "kishor",
    password: "123abc"
}

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, 'username'));

Object.defineProperty(user, 'username', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, 'username'));