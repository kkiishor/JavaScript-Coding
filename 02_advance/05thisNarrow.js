const user = {
    username: "kishor",
    id: 123,
    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`)
    }

}

//user.welcomemsg()
//user.username = "patil"
//user.welcomemsg()

/*const add =function(num1, num2){

    console.log(num1 + num2)

}*/

//add(2, 2)

const addition = () => {
    console.log("kishor")
    console.log(this)

}

addition()


