// console.log(typeof NaN);

// const num = "kishor"
// const num = 70
// console.log(isNaN(num));

// (function (){
//     console.log("Kishor");
// }) ()

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }

  allLetter("The quick brown fox jumps over the lazy dog" )