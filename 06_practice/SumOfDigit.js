function digitalRoot(n) {
    if(n < 10){
        return n;
    }
    else{
        let sum = 0;
        let digits = n.toString();
        for (const ele of digits) {
            sum += parseInt(ele);
        }
        return digitalRoot(sum);
    }
}

  const digit = digitalRoot(493193)
  console.log(digit);