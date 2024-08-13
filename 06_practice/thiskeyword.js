const obj1 = {
    username : "kishor",
    age : 23,
    print : function () {
        console.log(this.username);
        
    }
}

// obj1.print();
// obj1.username = "santosh";
// obj1.print();


const one = (num1, num2) =>  ({username: "kishor"});


 console.log(one(2, 2));
