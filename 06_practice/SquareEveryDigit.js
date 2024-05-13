function squareDigits(num){
    const numbers = num.toString();
    let array = []
    for (let digit of numbers) {
        const num1 = parseInt(digit);
        array.push(Math.pow(num1, 2))
    }
    return array.join('');
  }

console.log(squareDigits(3212));