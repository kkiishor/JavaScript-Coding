// const promise =new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const demo = true
//         if(!demo){
//             resolve()
//            console.log("Task completed");
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
        
//     }, 1000)
// })

// promise.then(() => {
//     console.log("promise resolved");
    
// })
// .catch((e)=>{
//     console.log(e);
    
// })





new Promise((resolve, reject)=>{
    const xx = false;
    if (!xx) {
        resolve()
    }
    else{
        reject()
    }
})
.then(()=>{
    console.log("Promise resolves");
    
})
.catch(()=>{
    console.log("ERROR: went wrong");
    
})