
function addition(num1, num2, num3){
    return(num1 + num2 + num3)
}

//console.log(addition(5, 5, "5"));

function userState(userName = "patil"){
    if(userName === undefined){
        console.log("Please enter name");
        return
    }
    return `${userName} just logged in` 
}

console.log(userState("kishor"));