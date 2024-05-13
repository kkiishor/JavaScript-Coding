function friend(friends) {
    this.myFriend = friends
    const arr =[]
    // console.log(this.myFriend)
    for (const name of this.myFriend) {
        // console.log(name)
        if(name.length === 4){
            arr.push(name);
        }
    }
    return arr;
}

    const arr = ["Ryan", "Kieran", "Jason", "Yous"]
    let sure = friend(arr)
    console.log(sure);