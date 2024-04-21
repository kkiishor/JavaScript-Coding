
function addition(num1, num2, num3){
    return(num1 + num2 + num3)
}

//console.log(addition(5, 5, "5"));

function userState(userName = "patil"){
    if(userName === undefined){
        //console.log("Please enter name");
        return
    }
    return `${userName} just logged in` 
}

//console.log(userState("kishor"));


function someone(val1, ...num1){
    return num1
}

//console.log(someone(300, 200, 500));

function objecthandle(anyobject){
 return `name is ${anyobject.username} and id is ${anyobject.id}`
}

const user = {
    username: "lishor",
    id: 200
}

console.log(objecthandle({
    username: "Vaibhav",
    price: 600
}));