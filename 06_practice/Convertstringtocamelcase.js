function toCamelCase(str){
    const arrofword = str.split(/[- , _]/)
    const final = []
    if(arrofword[0][0]=== arrofword[0][0].toLowerCase()){
        final.push(arrofword[0])
        for (let i = 1; i < arrofword.length; i++) {
                const upper = arrofword[i][0].toUpperCase() + arrofword[i].slice(1); 

                final.push(upper)     
        }
    }
    else{
        for (let i = 0; i < arrofword.length; i++) {
            const uppers = arrofword[i][0].toUpperCase()+ arrofword[i].slice(1);
            final.push(uppers)
            
        }
    }
    return final.join('')
    
    
}

const print = toCamelCase("the-stealth-warrior")
const print1 = toCamelCase("The_Stealth_Warrior")
const print2 = toCamelCase("The_Stealth-Warrior")
const print3 = toCamelCase("kishor-is_best")

console.log(print);
console.log(print1);
console.log(print2);
console.log(print3);