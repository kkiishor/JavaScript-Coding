function user(username, mobile, address) {
    this.username = username
    this.mobile = mobile
    this.address = address

}

const users = new user("kishor", "9765058359", "pune")
const usertwo = new user("santosh", "6532653265", "pune")
console.log(users);
console.log(usertwo);
