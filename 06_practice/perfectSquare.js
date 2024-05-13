function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
        var root = Math.sqrt(sq);
        if (Number.isInteger(root)) {
            var nextSquare = Math.pow(root + 1, 2);
            return nextSquare;
        } else {
            return -1;
        }




    // const check = sq*sq
    // const lastdigit = check % 10
    // if(lastdigit === 0 || lastdigit === 1 || lastdigit === 4 || lastdigit === 5 || lastdigit === 6 || lastdigit === 9){
    //     return ((sq + 1) * (sq + 1))
    // }
    // return -1;
  }
console.log(findNextSquare(144));
  