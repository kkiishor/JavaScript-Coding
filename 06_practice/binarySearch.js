
const array = [1,2,3,5,7,10]
const value = 5;
let start = array[0];
let end = array[array.length];

console.log(end);

// function binarySearch(array, value, start, end) {
//     const mid = (array[0]+array[array.length-1])/2
//     if(mid == value) return;
//     if(mid<value){
//         first = mid+1;
//         last = array.length-1;
//         return binarySearch(first , last)
//     }
//     if (mid>value){
//         first= array[0]
//         last= mid-1;
//         return binarySearch(first, last)
//     } 

// }
// console.log(binarySearch());