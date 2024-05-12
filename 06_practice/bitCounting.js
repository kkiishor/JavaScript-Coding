function bitCounting (n) {
    const N = n.toString(2);
    const str = N.toString();
    let count = 0;
    for (const i of str) {
        if(i == 1)
           count++;
    }
    return count;
}

const counts = bitCounting(1234)
console.log(counts);