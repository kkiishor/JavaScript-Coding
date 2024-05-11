// class user {
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }

//     get pass(){
//         return this._password.toUpperCase()
//     }

//     set pass(values){
//         this._password = values
//     }
// }

// const kishor = new user('kishor@gmail', "jfhkd")
// console.log(kishor);
// console.log(kishor.password);

function user(username, password){
    this._username= username;
    this._password= password

    Object.defineProperties(user, 'username', {
        get: username(){

        },

        set: username(value){
            this._username = values;
        }
    })
}